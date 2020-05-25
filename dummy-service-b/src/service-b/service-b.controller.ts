import { Controller, Get } from '@nestjs/common';
import { ServiceBService } from './service-b.service';

@Controller('serviceb')
export class ServiceBController {
  constructor(private _serviceB: ServiceBService) {}

  @Get('status')
  async respondToReq(): Promise<any> {
    return this._serviceB.getMsg();
  }

  @Get('cpuload')
  async getCPULoad(): Promise<any> {
    return this._serviceB.getCpuLoad();
  }
}
