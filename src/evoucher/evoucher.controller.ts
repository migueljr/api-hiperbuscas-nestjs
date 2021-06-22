import { Controller, Get } from '@nestjs/common';
import { Evoucher } from './interfaces/evoucher.interface';
import { EvoucherService } from './evoucher.service';

@Controller('evoucher')
export class EvoucherController {
    constructor(private readonly evoucherService: EvoucherService) {}

    @Get()
    async findAll(): Promise<Evoucher[]> {
        return this.evoucherService.findAll();
    }

 }
