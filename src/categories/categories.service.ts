import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Categories } from './interfaces/categories.interface';

@Injectable()
export class CategoriesService {
    constructor(
        @Inject('CATEGORIES_MODEL')
        private categoriesModel: Model<Categories>,
    ) {}

    async findAll(): Promise<Categories[]> {
        return this.categoriesModel.find().exec();
    }
}
