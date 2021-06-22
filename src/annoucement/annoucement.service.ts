import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Annoucement } from './interfaces/annoucement.interface';

@Injectable()
export class AnnoucementService {
    constructor(
        @Inject('ANNOUCEMENT_MODEL')
        private annoucementModel: Model<Annoucement>,
    ) {}

    async findAll(): Promise<Annoucement[]> {
        return this.annoucementModel.find().exec();
    }
}
