import multer from "multer";
import fs from "fs";
import path from "path";
import { ApiError } from "../utils/apiError.js"; // Import ApiError for custom error handling

// Define the temporary directory for uploads
const tempFolder = "./public/temp";

// Ensure the temp folder exists before Multer uses it
if (!fs.existsSync(tempFolder)) {
  fs.mkdirSync(tempFolder, { recursive: true });
}

// Configure Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Set the destination directory for uploaded files
    cb(null, tempFolder);
  },
  filename: function (req, file, cb) {
    // Create a unique filename to prevent collisions
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const ext = file.originalname.split('.').pop(); // Get file extension
    cb(null, `${file.fieldname}-${uniqueSuffix}.${ext}`); // e.g., profile-1678886400000-123456789.jpg
  },
});

// Multer upload configuration
export const upload = multer({
  storage: storage,
  // Optional: Add file filter to only accept certain file types
  fileFilter: (req, file, cb) => {
    // Allow only images for profile pictures
    if (file.fieldname === 'profile' && file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else if (file.fieldname === 'profile') { // If it's profile field but not image
      cb(new ApiError(400, 'Only image files are allowed for profile picture!'), false);
    }
     else { // For other fields (like chat files), you might have different filters or allow all
      cb(null, true); // Allow other types for now
    }
  },
  // Optional: Add limits (e.g., file size)
  limits: { fileSize: 1024 * 1024 * 10 } // 10MB limit for files
});