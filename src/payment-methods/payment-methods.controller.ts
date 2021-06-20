import { Controller, Get } from '@nestjs/common';
import { PaymentMethod } from './interfaces/payment-methods.interface';
import { PaymentMethodsService } from './payment-methods.service';

@Controller('payment-methods')
export class PaymentMethodsController {
    constructor(private readonly paymentMethodsService: PaymentMethodsService) {}

    @Get()
    async findAll(): Promise<PaymentMethod[]> {
        return this.paymentMethodsService.findAll();
    }

 }
