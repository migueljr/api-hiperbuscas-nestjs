import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { Module } from '@nestjs/common';
import { categoriesProviders } from './categories.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [
        CategoriesController,],
    providers: [
        CategoriesService,
        ...categoriesProviders],
})
export class CategoriesModule { }
