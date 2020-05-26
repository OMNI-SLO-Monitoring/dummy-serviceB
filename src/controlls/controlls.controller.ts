import { Controller, Get, Render, Post, Req, Query, Body, Redirect } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { Request } from 'express';

@Controller('controlls')
export class ControllsController {

  constructor(private appService: AppService) {}

  @Get()
  @Render('index')
  root() {
    return {
      success: this.appService.success,
      delay: this.appService.delay
    }
  }

  @Post()
  @Redirect('/controlls')
  updateParams(@Body() body) {
    if (body.delay) {
        this.appService.delay = body.delay;
    }
    if (body.success) {
        this.appService.success = body.success;
    } else {
        // Hack: Uncheck Checkboxes are not included in HTML Form Data
        this.appService.success = false;
    }
    return "ok";
  }
  
}
