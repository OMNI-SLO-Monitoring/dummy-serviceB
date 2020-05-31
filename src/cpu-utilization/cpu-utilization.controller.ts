import { Controller, Get } from '@nestjs/common';
import { CpuUtilizationService } from './cpu-utilization.service';

/*
  This controller is responsible for the accomodating the cpu utilization of the given microservice.
*/
@Controller('cpu')
export class CpuUtilizationController {
  constructor(private cpuUtilizationService: CpuUtilizationService) {}

  /*
  Get requests to the endpoint /cpu will be handled here whereupon the cpu utilization
  value is fetched with the cpu utilization service.
  */
  @Get()
  async getCPULoad(): Promise<any> {
    return this.cpuUtilizationService.getCpuLoad();
  }
}
