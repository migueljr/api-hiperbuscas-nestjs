import { AuthService } from './auth.service';
import { LocalAuthGuard } from './ local-auth.guard';
import { Controller, UseGuards, Request, Post, HttpCode } from '@nestjs/common';

@Controller()
export class AuthController {

  constructor(
    private authService: AuthService,
  ) { }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  @HttpCode(200)
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }
}
