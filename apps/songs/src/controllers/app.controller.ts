import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller('songs')
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	async getSongs() {
		return this.appService.getSongs();
	}
}
