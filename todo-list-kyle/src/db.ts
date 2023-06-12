import { PrismaClient } from '@prisma/client'

// This makes sure the prisma client instance isn't created again and again while hot reload

const globalForPrisma = global as unknown as {
	prisma: PrismaClient | undefined
}

export const prisma =
	globalForPrisma.prisma ??
	new PrismaClient({
		log: ['query'],
	})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
