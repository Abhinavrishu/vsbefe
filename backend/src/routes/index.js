import express from 'express';
import authRoutes from './auth.routes.js';
import userRoutes from './user.routes.js';


const router = express.Router();

// Mount API routes under /api/
router.use('/api', authRoutes);
router.use('/api', userRoutes);


// Health check route
router.get('/', (req, res) => {
  res.send('VakeelSetu Backend API is running!');
});

export default router;