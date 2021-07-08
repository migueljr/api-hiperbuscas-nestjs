import { HttpStatus } from '@nestjs/common';
import { HttpException, Inject, Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { Annoucement } from './interfaces/annoucement.interface';

type pagination = {active}

@Injectable()
export class AnnoucementService {
    constructor(
        @Inject('ANNOUCEMENT_MODEL')
        private annoucementModel: Model<Annoucement>,
    ) {}

    async findAll(query: any, paginator: Object): Promise<Annoucement[]> {
        const pagination: Object = paginator

        return this.annoucementModel.find({...query}, null, pagination).exec();
    }

    async findById(id): Promise<Annoucement> {
        if(!Types.ObjectId.isValid(id)){
          throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
        }
        return this.annoucementModel.findById(id);
    }
}
