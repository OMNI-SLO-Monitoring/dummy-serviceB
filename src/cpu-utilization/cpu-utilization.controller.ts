import { Controller, Get } from '@nestjs/common';
import { CpuUtilizationService } from './cpu-utilization.service';

@Controller('cpu')
export class CpuUtilizationController {

  constructor(private cpuUtilizationService: CpuUtilizationService) {}

  @Get()
  async getCPULoad(): Promise<any> {
    return this.cpuUtilizationService.getCpuLoad();
  }
}
