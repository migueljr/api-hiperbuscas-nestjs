import { OrderService } from './orders.service';
import { OrderController } from './orders.controller';
import { Module } from '@nestjs/common';
import { orderProviders } from './orders.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [
        OrderController,],
    providers: [
        OrderService,
        ...orderProviders],
})
export class OrderModule { }
