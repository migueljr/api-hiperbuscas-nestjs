import { Body, Controller, Get, HttpCode, Param, Post, UseGuards } from '@nestjs/common';
import { Evoucher } from './interfaces/evoucher.interface';
import { EvoucherService } from './evoucher.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('evoucher')
export class EvoucherController {
    constructor(private readonly evoucherService: EvoucherService) {}

    @UseGuards(JwtAuthGuard)
    @Post('/validate')
    @HttpCode(200)
    async findOne(@Body('hash') hash: String): Promise<Evoucher> {
        return this.evoucherService.findOne(hash);
    }

 }
