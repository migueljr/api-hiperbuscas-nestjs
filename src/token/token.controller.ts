import { Body, Controller, Get, Put } from '@nestjs/common';
import { TokenService } from './token.service';

@Controller('token')
export class TokenController {
    constructor(private tokenService: TokenService){}
    @Put('/refresh')
    refreshToken(@Body() data){
        return this.tokenService.refresh(data.hash)
    }
}
