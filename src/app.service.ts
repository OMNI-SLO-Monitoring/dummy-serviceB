import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

/*
The app service is responsible for sending reponses with adjustable response time.
*/
@Injectable()
export class AppService {
  //determines success of response
  success: boolean = false;
  //default delay
  delay = 5000;

  /*
  Method responding in form of returning a promise containing either a string denoting the 
  success of the response, or a simple reject after a certain delay.
  */
  async getMsg() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (this.success) {
          res("I'm alright.");
        } else {
          rej();
        }
      }, this.delay);
    });
  }
}
