import { Controller, Get, Render } from '@nestjs/common';

@Controller('controlls')
export class ControllsController {

  @Get()
  @Render('index')
  root() {}
  
}
