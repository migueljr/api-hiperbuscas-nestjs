import { AnnoucementService } from './annoucement.service';
import { AnnoucementController } from './annoucement.controller';
import { Module } from '@nestjs/common';
import { annoucementProviders } from './annoucement.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [
        AnnoucementController,],
    providers: [
        AnnoucementService,
        ...annoucementProviders],
})
export class AnnoucementModule { }
