import { PrismaClient } from '../../prisma/generated/prisma/index.js';

// This is a best practice for using Prisma with modern server frameworks.
// It prevents creating a new PrismaClient instance on every hot reload in development.

const globalForPrisma = globalThis;

// Initialize PrismaClient if it doesn't already exist in the global scope
const prisma = globalForPrisma.prisma ?? new PrismaClient();

// In development, attach the PrismaClient to the global object
// so that subsequent reloads can reuse the same connection.
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

// This is the crucial line that fixes your error.
// It makes the 'prisma' instance the default export of this module.
export default prisma;