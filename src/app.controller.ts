import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {

  private success: boolean = false;

  constructor(private readonly appService: AppService) {}

  @Get()
  async respondToReq(): Promise<any> {
    return this.appService.getMsg();
  }
}
