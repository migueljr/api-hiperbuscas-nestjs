import { Injectable } from '@nestjs/common';
import { CatsService } from 'src/cats/cats.service';

@Injectable()
export class TokenService {
    constructor(private catService: CatsService){

    }
    testes(){
        return this.catService.execCat()
    }
}
