import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getViewName(): any {
    throw new Error('Method not implemented.');
  }
  getHello(): string {
    return 'Hello World!';
  }
}
