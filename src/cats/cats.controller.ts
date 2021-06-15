import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Cat } from 'src/cats/interfaces/cat.interface'
import { CatsService } from './cats.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'

@Controller('/cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

}
