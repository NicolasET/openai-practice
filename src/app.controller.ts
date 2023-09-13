import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(@Body() helloDto: { prompt: string }): string {
    return this.appService.getHello(helloDto);
  }
}
