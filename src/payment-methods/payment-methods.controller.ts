import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { PaymentMethod } from './interfaces/payment-methods.interface';
import { PaymentMethodsService } from './payment-methods.service';

@Controller('payment-methods')
export class PaymentMethodsController {
    constructor(private readonly paymentMethodsService: PaymentMethodsService) {}
    
    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll(): Promise<PaymentMethod[]> {
        return this.paymentMethodsService.findAll();
    }

 }
