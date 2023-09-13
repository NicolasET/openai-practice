import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(helloDto: { prompt: string }): string {
    return helloDto.prompt;
  }
}
