import jwt from "jsonwebtoken";
import { ApiError } from "../utils/apiError.js";

// Middleware to protect routes by verifying the access token
const authMiddleware = (req, res, next) => {
  const token = req.cookies.accessToken;

  if (!token) {
    // If no token is found, return an unauthorized error
    return next(new ApiError(401, "No access token found. Please log in."));
  }

  try {
    // Verify the token
    const userPayload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = userPayload; // Attach the decoded user payload to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    console.error("JWT Verification Error:", err.message); // Log the error for debugging
    // If token is invalid or expired, return an unauthorized error
    return next(new ApiError(401, "Invalid or expired token. Please log in again."));
  }
};

export default authMiddleware;