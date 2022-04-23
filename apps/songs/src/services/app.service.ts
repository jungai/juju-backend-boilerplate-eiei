import { Injectable } from '@nestjs/common';
import { PrismaService } from '@ju/prisma';

@Injectable()
export class AppService {
	constructor(private prisma: PrismaService) {}

	async getSongs() {
		return await this.prisma.song.findMany();
	}
}
