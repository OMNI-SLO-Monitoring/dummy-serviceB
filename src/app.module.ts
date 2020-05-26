import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CpuUtilizationService } from './cpu-utilization/cpu-utilization.service';
import { CpuUtlizationModule } from './cpu-utilization/cpu-utilization.module';
import { ControllsController } from './controlls/controlls.controller';

@Module({
  imports: [CpuUtlizationModule],
  controllers: [
    AppController,
    ControllsController
  ],
  providers: [AppService, CpuUtilizationService],
})
export class AppModule {}
