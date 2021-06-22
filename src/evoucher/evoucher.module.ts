import { EvoucherService } from './evoucher.service';
import { EvoucherController } from './evoucher.controller';
import { Module } from '@nestjs/common';
import { evoucherProviders } from './evoucher.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [
        EvoucherController,],
    providers: [
        EvoucherService,
        ...evoucherProviders],
})
export class EvoucherModule { }
