import { Controller, Get } from '@nestjs/common';
import { TokenService } from './token.service';

@Controller('token')
export class TokenController {
    constructor(private tokenService: TokenService){}
    @Get()
    testes(){
        return this.tokenService.testes()
    }
}
