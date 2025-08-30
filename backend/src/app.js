import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mainRouter from './routes/index.js';
import errorHandler from './middleware/errorHandler.middleware.js';

const app = express();

// ✅ Single CORS setup (handles preflight automatically)
app.use(cors({
  origin: 'https://vsbefe-zcna.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'] // explicit if needed
}));

// 🌐 Debug incoming API request origins
app.use(/^\/api\/.*/, (req, res, next) => {
  console.log("🌐 API Request Origin:", req.headers.origin);
  next();
});

app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));
app.use(cookieParser());

// Routes & error handler
app.use(mainRouter);
app.use(errorHandler);

export { app };
