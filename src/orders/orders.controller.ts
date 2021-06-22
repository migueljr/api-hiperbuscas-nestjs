import { Controller, Get } from '@nestjs/common';
import { Order } from './interfaces/orders.interface';
import { OrderService } from './orders.service';

@Controller('orders')
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    @Get()
    async findAll(): Promise<Order[]> {
        return this.orderService.findAll();
    }

 }
