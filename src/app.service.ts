import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class AppService {
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
}
