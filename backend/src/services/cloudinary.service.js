import dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path'; // Import path module

// Load environment variables from the .env file in the project root
// Adjust the path if your structure is different (e.g., ../../.env)
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Function to upload a file to Cloudinary
const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      console.warn("No local file path provided for Cloudinary upload.");
      return null;
    }
    // Upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto", // Automatically detect resource type (image, video, etc.)
    });
    // File has been uploaded successfully
    // console.log("File uploaded to Cloudinary:", response.secure_url);

    // Remove the locally saved temporary file after successful upload
    fs.unlinkSync(localFilePath);
    return response; // Return the Cloudinary response object
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    // Remove the locally saved temporary file even if upload fails
    fs.unlinkSync(localFilePath);
    return null; // Return null to indicate failure
  }
};

export { uploadOnCloudinary };