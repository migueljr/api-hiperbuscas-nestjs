import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getObj(): any {
    const obj = {name:'ana'}
    return obj
  }
}
