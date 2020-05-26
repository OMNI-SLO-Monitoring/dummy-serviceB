import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class ServiceBService {
  private cpuLoad: number = 70;
  private success: boolean = false;

  getMsg(): String {
    if (this.success) {
      return "I'm alright.";
    } else {
      throw new HttpException(
        {
          status: 500,
          error: "I'm not alright.",
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  getCpuLoad(): number {
    return this.cpuLoad;
  }
}
