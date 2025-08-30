import bcrypt from 'bcrypt';
import prisma from '../models/prisma.js';
import { ApiError } from '../utils/apiError.js';
import { ApiResponse } from '../utils/apiResponse.js';
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from '../services/token.service.js';
import { uploadOnCloudinary } from '../services/cloudinary.service.js';
import { generateOTP } from '../services/otp.service.js';
import { sendEmail } from '../services/email.service.js';
import userSchema from '../schema/userSchema.js'; // Zod schema for validation

// In-memory store for OTPs (for production, use Redis or a database)
const otpStore = new Map();

// Enum for user roles
const UserRole = {
  CLIENT: "CLIENT",
  LAWYER: "LAWYER"
};

// Controller for user registration
export const registerUser = async (req, res, next) => {
  const { email, username, password, confirmpassword, role, latitude, longitude, specialization, experience, fees } = req.body;
  const profileFile = req.files?.profile?.[0]?.path; 

  if (!profileFile) {
    return next(new ApiError(400, 'Profile picture is required.'));
  }
  if (password !== confirmpassword) {
    return next(new ApiError(400, 'Passwords do not match.'));
  }

  try {
    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: { OR: [{ email }, { username }] },
    });
    if (existingUser) {
      return next(new ApiError(409, 'Email or username already exists.'));
    }

    // Upload profile picture to Cloudinary
    const uploadResult = await uploadOnCloudinary(profileFile);
    if (!uploadResult || !uploadResult.secure_url) {
      return next(new ApiError(500, 'Failed to upload profile picture to Cloudinary.'));
    }
    const profileUrl = uploadResult.secure_url;

    // Validate input data using Zod schema
    userSchema.parse({ email, username, password, confirmpassword, profile: profileUrl });

    // Generate OTP and set expiry
    const otp = generateOTP();
    const expiresAt = Date.now() + 10 * 60 * 1000; // OTP valid for 10 minutes

    // Store OTP and user data temporarily
    otpStore.set(email, {
      otp,
      expiresAt,
      userData: { email, username, password, profile: profileUrl, role, latitude, longitude, specialization, experience, fees },
    });

    // Send OTP email
    await sendEmail(email, 'Verify your email - OTP', `Your OTP is: ${otp}. It expires in 10 minutes.`);

    return res.status(200).json(new ApiResponse(200, {}, 'OTP sent to your email. Please verify to complete registration.'));

  } catch (error) {
    // Handle Zod validation errors specifically
    if (error.name === 'ZodError') {
      return next(new ApiError(400, 'Validation Error', error.errors.map(e => ({ field: e.path.join('.'), message: e.message }))));
    }
    // Handle other errors (e.g., Cloudinary upload, database)
    console.error("Registration error:", error);
    return next(new ApiError(500, 'Registration failed. Please try again later.'));
  }
};

// Controller to verify OTP and complete user creation
export const verifyOTP = async (req, res, next) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return next(new ApiError(400, 'Email and OTP are required.'));
  }

  const otpRecord = otpStore.get(email);

  if (!otpRecord) {
    return next(new ApiError(400, 'No OTP request found for this email. Please register again.'));
  }

  if (Date.now() > otpRecord.expiresAt) {
    otpStore.delete(email); // Remove expired OTP
    return next(new ApiError(400, 'OTP has expired. Please register again.'));
  }

  if (otpRecord.otp !== otp) {
    return next(new ApiError(400, 'Invalid OTP.'));
  }

  // OTP is valid, proceed with user creation
  const { userData } = otpRecord;
  try {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const userRole = userData.role?.toUpperCase() === UserRole.LAWYER ? UserRole.LAWYER : UserRole.CLIENT;

    // Create the new user record
    const newUser = await prisma.user.create({
      data: {
        email: userData.email,
        username: userData.username,
        password: hashedPassword,
        profile: userData.profile,
        role: userRole,
        latitude: userData.latitude ? parseFloat(userData.latitude) : null,
        longitude: userData.longitude ? parseFloat(userData.longitude) : null,
        isEmailVerified: true, // Email is verified via OTP
      },
    });

    // If the user is a lawyer, create their lawyer details
    if (userRole === UserRole.LAWYER) {
      await prisma.lawyerDetails.create({
        data: {
          userId: newUser.id,
          specialization: userData.specialization || 'General',
          experience: parseInt(userData.experience || 0),
          fees: parseFloat(userData.fees || 0),
          availability: true, // Default availability to true for new lawyers
        },
      });
    }

    // Generate tokens for the newly created user
    const accessToken = await generateAccessToken(newUser);
    const refreshToken = await generateRefreshToken(newUser);

    // Store the refresh token in the database
    await prisma.user.update({
      where: { id: newUser.id },
      data: { refreshtoken: refreshToken },
    });

    // Set cookies for tokens
    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
    };
    res.cookie('accessToken', accessToken, { ...cookieOptions, maxAge: 15 * 60 * 1000 }); // 15 minutes
    res.cookie('refreshToken', refreshToken, { ...cookieOptions, maxAge: 7 * 24 * 60 * 60 * 1000 }); // 7 days

    // Clear the OTP from the store
    otpStore.delete(email);

    // Respond with success and user data (excluding sensitive fields)
    const { password: _, refreshtoken: __, ...safeUser } = newUser;
    return res.status(201).json(new ApiResponse(201, { user: safeUser }, 'User registered and verified successfully.'));

  } catch (error) {
    console.error("OTP Verification and User Creation error:", error);
    return next(new ApiError(500, 'Failed to complete registration. Please try again.'));
  }
};

// Controller for user login
export const loginUser = async (req, res, next) => {
  const { usernameOrEmail, password } = req.body; 

  if (!usernameOrEmail || !password) {
    return next(new ApiError(400, 'Email/Username and password are required.'));
  }

  try {
    // Find user by email or username
    const user = await prisma.user.findFirst({
      where: { OR: [{ email: usernameOrEmail }, { username: usernameOrEmail }] },
      include: { lawyerDetails: true }, 
    });

    if (!user) {
      return next(new ApiError(404, 'User not found.'));
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return next(new ApiError(401, 'Invalid credentials.'));
    }

    // Generate tokens
    const accessToken = await generateAccessToken(user);
    const refreshToken = await generateRefreshToken(user);

    // Update user's refresh token in the database
    await prisma.user.update({
      where: { id: user.id },
      data: { refreshtoken: refreshToken },
    });

    // If the user is a lawyer, set their availability to true on login
    if (user.role === UserRole.LAWYER && user.lawyerDetails) {
      await prisma.lawyerDetails.update({
        where: { userId: user.id },
        data: { availability: true },
      });
    }

    // Set tokens as cookies
    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
    };
    res.cookie('accessToken', accessToken, { ...cookieOptions, maxAge: 15 * 60 * 1000 }); // 15 minutes
    res.cookie('refreshToken', refreshToken, { ...cookieOptions, maxAge: 7 * 24 * 60 * 60 * 1000 }); // 7 days

    // Respond with success and user data (excluding sensitive fields)
    const { password: _, refreshtoken: __, ...safeUser } = user;
    return res.status(200).json(new ApiResponse(200, { user: safeUser, accessToken, refreshToken }, 'Login successful.'));

  } catch (error) {
    console.error("Login error:", error);
    return next(new ApiError(500, 'Login failed. Please try again.'));
  }
};

// Controller for user logout
export const logoutUser = async (req, res, next) => {
  const userId = req.user?.id; // Get userId from authenticated request

  if (!userId) {
    return next(new ApiError(401, 'User not authenticated.'));
  }

  try {
    // Clear the refresh token from the database
    await prisma.user.update({
      where: { id: userId },
      data: { refreshtoken: "" }, // Clear the token
    });

    const user = await prisma.user.findUnique({ where: { id: userId }, include: { lawyerDetails: true } });

    // If user is a lawyer, set availability to false on logout
    if (user?.role === UserRole.LAWYER && user.lawyerDetails) {
      await prisma.lawyerDetails.update({
        where: { userId },
        data: { availability: false },
      });
    }

    // Clear the tokens from cookies
    const cookieOptions = { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: "Strict" };
    res.clearCookie("accessToken", cookieOptions);
    res.clearCookie("refreshToken", cookieOptions);

    return res.status(200).json(new ApiResponse(200, {}, 'Logout successful.'));

  } catch (error) {
    console.error("Logout error:", error);
    return next(new ApiError(500, 'Logout failed. Please try again.'));
  }
};

// Controller to refresh access token using refresh token
export const refreshToken = async (req, res, next) => {
  const refreshToken = req.cookies.refreshToken; // Get refresh token from cookies

  if (!refreshToken) {
    return next(new ApiError(401, 'Refresh token not provided.'));
  }

  try {
    // Verify the refresh token
    const payload = await verifyRefreshToken(refreshToken);
    const user = await prisma.user.findUnique({ where: { id: payload.id } });

    // Check if the user exists and if the refresh token matches the one stored
    if (!user || user.refreshtoken !== refreshToken) {
      return next(new ApiError(403, 'Invalid refresh token or token mismatch.'));
    }

    // Generate a new access token
    const newAccessToken = await generateAccessToken(user);

    // Set the new access token as a cookie
    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: "Strict",
    };
    res.cookie("accessToken", newAccessToken, { ...cookieOptions, maxAge: 15 * 60 * 1000 }); // 15 minutes

    return res.status(200).json(new ApiResponse(200, { accessToken: newAccessToken }, 'Access token refreshed successfully.'));

  } catch (error) {
    console.error("Refresh token error:", error);
    // If verification fails, clear potentially invalid refresh token and cookies
    if (error.name === 'TokenExpiredError' || error.name === 'JsonWebTokenError') {
        res.clearCookie('refreshToken');
        res.clearCookie('accessToken');
        // Optionally clear user from localStorage on frontend if this happens
    }
    return next(new ApiError(401, 'Invalid or expired refresh token.'));
  }
};

// Controller to get current user's profile (protected)
