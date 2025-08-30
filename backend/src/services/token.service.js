import jwt from "jsonwebtoken";
import { promisify } from "util";

// Promisify jwt.sign for easier async/await usage
const signAsync = promisify(jwt.sign);

// Generate an Access Token
export const generateAccessToken = async (user) => {
  return await signAsync(
    {
      id: user.id,
      email: user.email,
      username: user.username,
      role: user.role,
      profile: user.profile, // Include profile in token for quick access in frontend
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "15m" } // Token expires in 15 minutes
  );
};

// Generate a Refresh Token
export const generateRefreshToken = async (user) => {
  return await signAsync(
    { id: user.id }, // Only need user ID for refresh token
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" } // Token expires in 7 days
  );
};

// Verify a Refresh Token
export function verifyRefreshToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
      if (err) return reject(err);
      resolve(decoded);
    });
  });
}

// Verify an Access Token
export function verifyAccessToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) return reject(err);
      resolve(decoded);
    });
  });
}