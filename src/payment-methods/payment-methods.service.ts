import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { PaymentMethod } from './interfaces/payment-methods.interface';

@Injectable()
export class PaymentMethodsService {
    constructor(
        @Inject('PAYMENT_METHODS_MODEL')
        private paymentMethodsModel: Model<PaymentMethod>,
    ) {}

    async findAll(): Promise<PaymentMethod[]> {
        return this.paymentMethodsModel.find({active:true}).exec();
    }
}
