import express from 'express';
import { registerUser, verifyOTP, loginUser, logoutUser, refreshToken } from '../controllers/auth.controller.js';
import { upload } from '../middleware/multer.middleware.js'; // Multer middleware for file uploads
import authMiddleware from '../middleware/auth.middleware.js'; // Authentication middleware

const router = express.Router();

// Public routes
router.post('/register', upload.fields([{ name: 'profile', maxCount: 1 }]), registerUser); // Handles profile picture upload
router.post('/verify-otp', verifyOTP);
router.post('/login', loginUser);
router.post('/refresh-token', refreshToken); 

// Protected routes (require authentication)
router.get('/logout', authMiddleware, logoutUser);

export default router;