import { ApiError } from "../utils/apiError.js";

// Global error handling middleware for Express
const errorHandler = (err, req, res, next) => {
  // Default error structure
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";
  let success = false;
  let errors = err.errors || [];

  // Handle specific error types for better feedback
  if (err.name === 'ZodError') { // Validation errors from Zod
    statusCode = 400; // Bad Request
    message = "Validation Error";
    // Extract specific validation messages
    errors = err.errors.map(e => ({ field: e.path.join('.'), message: e.message }));
  } else if (err.code === 'P2002') { // Prisma unique constraint violation
    statusCode = 409; // Conflict
    message = `Duplicate entry for field: ${err.meta.target.join(', ')}.`;
    errors = [{ field: err.meta.target.join(', '), message: 'already exists' }];
  } else if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') { // JWT errors
    statusCode = 401; // Unauthorized
    message = "Invalid or expired token. Please log in again.";
  } else if (err instanceof ApiError) {
    // If it's an ApiError instance, use its properties
    statusCode = err.statusCode;
    message = err.message;
    errors = err.errors;
    success = err.success;
  }
  // Add more specific error checks as needed (e.g., for file uploads)

  console.error(`[ERROR] ${err.message}`); // Log the error to the console

  // Send the error response
  res.status(statusCode).json({
    success: success,
    message: message,
    errors: errors,
   
  });
};

export default errorHandler;