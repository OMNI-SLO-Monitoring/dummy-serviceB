import { Module } from '@nestjs/common';
import { CpuUtilizationController } from './cpu-utilization.controller';
import { CpuUtilizationService } from './cpu-utilization.service';

@Module({
  controllers: [CpuUtilizationController],
  providers: [CpuUtilizationService],
})
export class CpuUtlizationModule {}
