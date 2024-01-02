import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dtos/create-user.dto';

global.users = [];

@Injectable()
export class UsersService {
  findAll(): any {
    return global.users;
  }

  create(user: CreateUserDTO) {
    global.users.push(user);
  }
}
