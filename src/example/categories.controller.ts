import { Controller, Get } from '@nestjs/common';
import { Categories } from './interfaces/categories.interface';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) {}

    @Get()
    async findAll(): Promise<Categories[]> {
        return this.categoriesService.findAll();
    }

 }
