import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Order } from './interfaces/orders.interface';

@Injectable()
export class OrderService {
    constructor(
        @Inject('ORDER_MODEL')
        private orderModel: Model<Order>,
    ) {}

    async findAll(): Promise<Order[]> {
        return this.orderModel.find().exec();
    }
}
