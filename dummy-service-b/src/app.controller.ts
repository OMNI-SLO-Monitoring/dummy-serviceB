import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { ServiceBService } from './service-b/service-b.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private _serviceB: ServiceBService,
  ) {}

  @Get()
  @Render('index')
  root() {}
}
