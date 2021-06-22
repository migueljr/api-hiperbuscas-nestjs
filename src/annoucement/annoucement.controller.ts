import { Controller, Get } from '@nestjs/common';
import { Annoucement } from './interfaces/annoucement.interface';
import { AnnoucementService } from './annoucement.service';

@Controller('annoucement')
export class AnnoucementController {
    constructor(private readonly annoucementService: AnnoucementService) {}

    @Get()
    async findAll(): Promise<Annoucement[]> {
        return this.annoucementService.findAll();
    }

 }
