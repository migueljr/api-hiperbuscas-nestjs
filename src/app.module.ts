import { AnnoucementModule } from './annoucement/annoucement.module'
import { OrderModule } from './orders/orders.module'
import { CategoriesModule } from './categories/categories.module'
import { EvoucherModule } from './evoucher/evoucher.module';
import { PaymentMethodsModule } from './payment-methods/payment-methods.module';
import { SettingsModule } from './settings/settings.module';
import { TokenModule } from './token/token.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from 'src/users/users.module'
import { AuthModule } from 'src/auth/auth.module'

@Module({
  imports: [
    CategoriesModule,
    OrderModule,
    AnnoucementModule,
    EvoucherModule,
    PaymentMethodsModule,
    SettingsModule,
    TokenModule,
    UsersModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
