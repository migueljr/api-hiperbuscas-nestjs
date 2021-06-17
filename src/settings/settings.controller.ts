import { Controller, Get } from '@nestjs/common';

@Controller('settings')
export class SettingsController {
    @Get()
    init(){
        return {
            site:'hiperbuscas.com',
            version: '1.1.3'
        }
    }
}
