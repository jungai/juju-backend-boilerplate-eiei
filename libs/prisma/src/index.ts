import { PrismaClient } from "@prisma/client";
import { seedSongs } from "./seed/songs";

const prisma = new PrismaClient();

async function main() {
	await seedSongs(prisma);
}

main()
	.catch((e) => {
		throw e;
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
