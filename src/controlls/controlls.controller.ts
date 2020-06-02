import {
  Controller,
  Get,
  Render,
  Post,
  Req,
  Query,
  Body,
  Redirect,
} from '@nestjs/common';
import { AppService } from 'src/app.service';
import { CpuUtilizationService } from 'src/cpu-utilization/cpu-utilization.service';

/*
This controller renders the UI and updates the it based on the input values of the user.
*/
@Controller('controls')
export class ControllsController {
  constructor(
    private appService: AppService,
    private cpuUtilizationService: CpuUtilizationService,
  ) {}

  @Get()
  @Render('index')
  root() {
    return {
      success: this.appService.success,
      delay: this.appService.delay,
      cpuload: this.cpuUtilizationService.cpuload,
    };
  }

  /*
  After confirming the desired input values, the post request containing the input values
  will be handled in this method which updates the UI and its display accordingly.
  */
  @Post()
  @Redirect('/controls')
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
    if (body.cpuload) {
      this.cpuUtilizationService.cpuload = body.cpuload;
    }
    return 'ok';
  }
}
