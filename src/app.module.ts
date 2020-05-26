import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServiceBModule } from './service-b/service-b.module';
import { ServiceBService } from './service-b/service-b.service';

@Module({
  imports: [ServiceBModule],
  controllers: [AppController],
  providers: [AppService, ServiceBService],
})
export class AppModule {}
