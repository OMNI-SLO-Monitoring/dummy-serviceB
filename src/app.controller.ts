import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

/*
The controller receives the get requests from the communicating microservice and handles it accordingly.
*/
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  /*
  With the app service, get requests are handled and a response is sent back.
   */
  @Get()
  async respondToReq() {
    return this.appService.getMsg();
  }
}
