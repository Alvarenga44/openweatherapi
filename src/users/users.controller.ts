import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersServices: UsersService) {}

  @Get('list')
  findAll() {
    return this.usersServices.findAll();
  }

  @Post()
  create(@Body() user: CreateUserDTO) {
    return this.usersServices.create(user);
  }
}
