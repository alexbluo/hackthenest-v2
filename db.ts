import { PrismaClient } from '@prisma/client'

const globalForPrisma = global as unknown as { 
  prisma: PrismaClient | undefined 
}

// eslint-disable-next-line import/prefer-default-export
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma