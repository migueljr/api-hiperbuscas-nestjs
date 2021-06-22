import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Evoucher } from './interfaces/evoucher.interface';

@Injectable()
export class EvoucherService {
    constructor(
        @Inject('EVOUCHER_MODEL')
        private evoucherModel: Model<Evoucher>,
    ) {}

    async findOne(hash: String): Promise<Evoucher> {
        const result = await this.evoucherModel.findOne({hash});
        if(!result){
            throw new HttpException('Evoucher não encontrado', HttpStatus.NOT_FOUND)
        }

        return result
    }
}
