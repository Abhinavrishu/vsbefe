import bcrypt from 'bcrypt';
import prisma from '../models/prisma.js';
import { ApiError } from '../utils/apiError.js';
import { ApiResponse } from '../utils/apiResponse.js';
import { uploadOnCloudinary } from '../services/cloudinary.service.js';

const UserRole = { CLIENT: "CLIENT", LAWYER: "LAWYER" };

export const getUserProfile = async (req, res, next) => {
  const userId = req.user?.id;
  if (!userId) {
    return next(new ApiError(401, 'User not authenticated.'));
  }
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { lawyerDetails: true },
    });
    if (!user) {
      return next(new ApiError(404, 'User not found.'));
    }
    const { password, refreshtoken, ...safeUser } = user;
    return res.status(200).json(new ApiResponse(200, safeUser, 'User profile fetched successfully.'));
  } catch (error) {
    return next(new ApiError(500, 'Failed to fetch user profile.'));
  }
};

export const updatePassword = async (req, res, next) => {
  const { currentPassword, newPassword } = req.body;
  if (!currentPassword || !newPassword) {
    return next(new ApiError(400, 'Current and new passwords are required.'));
  }
  try {
    const user = await prisma.user.findUnique({ where: { id: req.user.id } });
    if (!user) {
      return next(new ApiError(404, 'User not found.'));
    }
    const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
    if (!isPasswordValid) {
      return next(new ApiError(401, 'Incorrect current password.'));
    }
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    await prisma.user.update({
      where: { id: req.user.id },
      data: { password: hashedNewPassword },
    });
    return res.status(200).json(new ApiResponse(200, {}, 'Password updated successfully.'));
  } catch (error) {
    return next(new ApiError(500, 'Failed to update password.'));
  }
};

export const updateProfileImage = async (req, res, next) => {
  const profileFile = req.file?.path;
  if (!profileFile) {
    return next(new ApiError(400, 'No image file provided.'));
  }
  try {
    const uploadResult = await uploadOnCloudinary(profileFile);
    if (!uploadResult?.secure_url) {
      return next(new ApiError(500, 'Failed to upload new profile image.'));
    }
    const updatedUser = await prisma.user.update({
      where: { id: req.user.id },
      data: { profile: uploadResult.secure_url },
    });
    return res.status(200).json(new ApiResponse(200, { profile: updatedUser.profile }, 'Profile image updated successfully.'));
  } catch (error) {
    return next(new ApiError(500, 'Failed to update profile image.'));
  }
};

export const getAllAvailableLawyers = async (req, res, next) => {
  try {
    const lawyers = await prisma.user.findMany({
      where: {
        role: UserRole.LAWYER,
        lawyerDetails: { is: { availability: true } },
      },
      include: { lawyerDetails: true },
    });
    return res.status(200).json(new ApiResponse(200, lawyers, 'Available lawyers fetched successfully.'));
  } catch (error) {
    return next(new ApiError(500, 'Failed to fetch available lawyers.'));
  }
};

export const getLawyerDetails = async (req, res, next) => {
  const lawyerId = parseInt(req.params.id);
  if (isNaN(lawyerId)) {
    return next(new ApiError(400, 'Invalid lawyer ID provided.'));
  }
  try {
    const lawyer = await prisma.user.findFirst({
      where: { id: lawyerId, role: UserRole.LAWYER },
      include: { lawyerDetails: true },
    });
    if (!lawyer) {
      return next(new ApiError(404, 'Lawyer not found.'));
    }
    const { password, refreshtoken, ...safeLawyer } = lawyer;
    return res.status(200).json(new ApiResponse(200, safeLawyer, "Lawyer details fetched successfully."));
  } catch (error) {
    return next(new ApiError(500, 'Failed to fetch lawyer details.'));
  }
};

const ensureIsLawyer = async (userId) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (user?.role !== UserRole.LAWYER) {
    throw new ApiError(403, 'This action is restricted to lawyers only.');
  }
};

export const updateLawyerFees = async (req, res, next) => {
  const { fees } = req.body;
  const userId = req.user.id;
  try {
    await ensureIsLawyer(userId);
    const updatedDetails = await prisma.lawyerDetails.update({
      where: { userId },
      data: { fees: parseFloat(fees) },
    });
    return res.status(200).json(new ApiResponse(200, updatedDetails, 'Fees updated successfully.'));
  } catch (error) {
    return next(error);
  }
};

export const updateLawyerSpecialization = async (req, res, next) => {
  const { specialization } = req.body;
  const userId = req.user.id;
  try {
    await ensureIsLawyer(userId);
    const updatedDetails = await prisma.lawyerDetails.update({
      where: { userId },
      data: { specialization },
    });
    return res.status(200).json(new ApiResponse(200, updatedDetails, 'Specialization updated successfully.'));
  } catch (error) {
    return next(error);
  }
};

export const updateLawyerExperience = async (req, res, next) => {
  const { experience } = req.body;
  const userId = req.user.id;
  try {
    await ensureIsLawyer(userId);
    const updatedDetails = await prisma.lawyerDetails.update({
      where: { userId },
      data: { experience: parseInt(experience) },
    });
    return res.status(200).json(new ApiResponse(200, updatedDetails, 'Experience updated successfully.'));
  } catch (error) {
    return next(error);
  }
};

export const updateLawyerAvailability = async (req, res, next) => {
  const { availability } = req.body;
  if (typeof availability !== 'boolean') {
    return next(new ApiError(400, 'Availability must be a boolean value.'));
  }
  const userId = req.user.id;
  try {
    await ensureIsLawyer(userId);
    const updatedDetails = await prisma.lawyerDetails.update({
      where: { userId },
      data: { availability },
    });
    return res.status(200).json(new ApiResponse(200, updatedDetails, 'Availability updated successfully.'));
  } catch (error) {
    return next(error);
  }
};
export const getLawyerDistance = async (req, res, next) => {
  const userId = req.user.id;
  const userRole = req.user.role;
  const { latitude, longitude } = req.body;

  if (userRole !== "LAWYER") {
    return res.status(403).json({ success: false, message: "Only lawyers can update location" });
  }

  try {
    const updatedLawyer = await prisma.user.update({
      where: { id: userId },
      data: {
        latitude,
        longitude,
      },
    });

    return res.status(200).json({
      success: true,
      data: updatedLawyer,
      message: "Location updated successfully",
    });
  } catch (error) {
    return next(new ApiError(500, "Failed to update location"));
  }
};