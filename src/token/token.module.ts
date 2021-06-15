import { TokenService } from './token.service';
import { TokenController } from './token.controller';
import { Module } from '@nestjs/common';
import { CatsModule } from 'src/cats/cats.module';

@Module({
    imports: [CatsModule],
    controllers: [
        TokenController,],
    providers: [
        TokenService,],
})
export class TokenModule { }
