import { Controller, Get, Post, Body } from '@nestjs/common';
import { User } from 'src/users/interfaces/users.interface'
import { UsersService } from './users.service';
import { UserCreateDto } from 'src/users/dto/user.create.dto'

@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post()
  add(@Body() data: UserCreateDto): any{
    return this.usersService.save(data);
  }

}
