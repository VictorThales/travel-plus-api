import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  testController(): string {
    return 'PUCRS TCC!';
  }
}
