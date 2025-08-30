import express from 'express';
import {
  getUserProfile,
  updatePassword,
  updateProfileImage,
  getAllAvailableLawyers,
  getLawyerDetails,
  updateLawyerFees,
  updateLawyerSpecialization,
  updateLawyerExperience,
  updateLawyerAvailability
} from '../controllers/user.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';
import { upload } from '../middleware/multer.middleware.js';

const router = express.Router();

// Public routes
router.get('/lawyers', getAllAvailableLawyers);
router.get('/lawyers/:id', getLawyerDetails);

// Protected routes (require a valid token)
router.use(authMiddleware);

router.get('/me', getUserProfile);
router.put('/password', updatePassword);
router.put('/profile-image', upload.single('profile'), updateProfileImage);

// Lawyer-specific update routes
router.put('/lawyer/fees', updateLawyerFees);
router.put('/lawyer/specialization', updateLawyerSpecialization);
router.put('/lawyer/experience', updateLawyerExperience);
router.put('/lawyer/availability', updateLawyerAvailability);

export default router;