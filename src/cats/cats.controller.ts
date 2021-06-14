import { Controller, Get, Post } from '@nestjs/common';
import { Cat } from 'src/cats/interfaces/cat.interface'
import { CatsService } from './cats.service';

@Controller('/cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

}
