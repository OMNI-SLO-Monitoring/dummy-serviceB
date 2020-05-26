import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class CpuUtilizationService {
  private cpuLoad: number = 70;

  getCpuLoad(): number {
    return this.cpuLoad;
  }
}
