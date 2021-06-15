import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Cat } from 'src/cats/interfaces/cat.interface';
//import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  constructor(
    @Inject('CAT_MODEL')
    private catModel: Model<Cat>,
  ) {}
/*
  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }
*/
  execCat(): String {
    return 'Miau..'
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }
}