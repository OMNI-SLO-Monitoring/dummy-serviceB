import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class AppService {

  success: boolean = false;
  delay = 5000;

  async getMsg(): Promise<String> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (this.success) {
          res("I'm alright.");
        } else {
          rej();
        }
      }, this.delay)
    })
  }
}
