import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

/*
This service imitates the cpu utilization with a defined integer value.
*/
@Injectable()
export class CpuUtilizationService {
  private cpuLoad: number = 70;

  /*
  This method returns the defined cpu utilization value.
  */
  getCpuLoad(): number {
    return this.cpuLoad;
  }
}
