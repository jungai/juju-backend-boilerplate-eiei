import type { PrismaClient } from "@prisma/client";

export async function seedSongs(prisma: PrismaClient) {
	await prisma.song.upsert({
		where: { id: 1 },
		update: {
			name: "BbiBbi",
		},
		create: {
			name: "BbiBbi",
		},
	});
	await prisma.song.upsert({
		where: { id: 2 },
		update: {
			name: "Dreams Come Truw",
		},
		create: {
			name: "Dreams Come Truw",
		},
	});
	await prisma.song.upsert({
		where: { id: 3 },
		update: {
			name: "Melting",
		},
		create: {
			name: "Melting",
		},
	});
}
