import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mainRouter from './routes/index.js';
import errorHandler from './middleware/errorHandler.middleware.js';

const app = express();

app.use(cors({
  origin: 'https://vsbefe-zcna.vercel.app/',
  methods: ['GET','POST','PUT','DELETE'],
  credentials: true
}));

// Handle preflight requests
const API_ROUTE_REGEX = /^\/api\/.*/;

// CORS Preflight only for routes matching /api/*
app.options(API_ROUTE_REGEX, (req, res) => {
  res.header("Access-Control-Allow-Origin", FRONTEND_URL);
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  res.sendStatus(204);
});

// Debug request origins only for /api/* routes
app.use(API_ROUTE_REGEX, (req, res, next) => {
  console.log("🌐 API Request Origin:", req.headers.origin);
  next();
});



app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));
app.use(cookieParser());

app.use(mainRouter);
app.use(errorHandler);

export { app };
