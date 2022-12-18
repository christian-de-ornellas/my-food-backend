import { Injectable } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UserService {
  findAll(): User[] {
    return [
      {
        id: 1,
        name: 'John Doe',
        age: 30,
      },
    ];
  }
}
