import { Body, Controller, Get, Param, Query } from '@nestjs/common';
import { Annoucement } from './interfaces/annoucement.interface';
import { AnnoucementService } from './annoucement.service';

@Controller('annoucement')
export class AnnoucementController {
    constructor(private readonly annoucementService: AnnoucementService) {}

    @Get()
    async findAll(@Query() query): Promise<Annoucement[]> {
        const paginator = {skip:0, limit:20}
        if(query.page){
            paginator.skip = query.page=='1'? 0 :(parseInt(query.page) - 1) * parseInt(query.page_size)
            delete query.page
        } 
        if(query.page_size){
            paginator.limit = parseInt(query.page_size)
            delete query.page_size
        }
        return this.annoucementService.findAll(query, paginator);
    }

    @Get("/:id")
    async findById(@Param() params): Promise<Annoucement> {3
        return this.annoucementService.findById(params.id);
    }


 }
