import { PaymentMethodsService } from './payment-methods.service';
import { PaymentMethodsController } from './payment-methods.controller';
import { Module } from '@nestjs/common';
import { paymentMethodsProviders } from './payment-methods.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [
        PaymentMethodsController,],
    providers: [
        PaymentMethodsService,
        ...paymentMethodsProviders],
})
export class PaymentMethodsModule { }
