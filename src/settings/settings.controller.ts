import { Controller, Get } from '@nestjs/common';

@Controller('settings')
export class SettingsController {
    @Get()
    init(){
        return {
            site:'hiperbuscas.com.br',
            version: '1.1.3'
        }
    }
}
