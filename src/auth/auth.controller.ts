import { Controller, Get, Post, Body, HttpCode } from '@nestjs/common';
import { User } from 'src/users/interfaces/users.interface'
import { AuthService } from './auth.service';
//import { UserCreateDto } from 'src/users/dto/user.create.dto'

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(200)
  @Post()
  add(@Body() data): any{
    return this.authService.login(data)
  }

}
