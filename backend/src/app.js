// src/app.js
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mainRouter from "./routes/index.js";
import errorHandler from "./middleware/errorHandler.middleware.js";

const app = express();

// Middleware
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// CORS (handles preflight automatically)
app.use(
  cors({
    origin: "https://vsbefe-zcna-git-main-abhinavs-projects-5c325c75.vercel.app",//"https://vsbefe-zcna-git-main-abhinavs-projects-5c325c75.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Debug request origins only for /api/* routes
const API_ROUTE_REGEX = /^\/api\/.*/;
app.use(API_ROUTE_REGEX,(req, res, next) => {
  console.log(`📡 ${req.method} ${req.originalUrl} from ${req.headers.origin}`);
  next();
});


// Routes
app.use(mainRouter);

// Error handler
app.use(errorHandler);

export { app };
