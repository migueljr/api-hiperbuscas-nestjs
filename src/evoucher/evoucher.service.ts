import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Evoucher } from './interfaces/evoucher.interface';

@Injectable()
export class EvoucherService {
    constructor(
        @Inject('EVOUCHER_MODEL')
        private evoucherModel: Model<Evoucher>,
    ) {}

    async findAll(): Promise<Evoucher[]> {
        return this.evoucherModel.find().exec();
    }
}
