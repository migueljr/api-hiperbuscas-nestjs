import { TokenService } from './token.service';
import { TokenController } from './token.controller';
import { forwardRef, Module } from '@nestjs/common';
import { CatsModule } from 'src/cats/cats.module';
import { tokenProviders } from 'src/token/token.providers'
import { DatabaseModule } from 'src/database/database.module';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';

@Module({
    imports: [DatabaseModule, forwardRef(()=>AuthModule), UsersModule],
    controllers: [
        TokenController,],
    providers: [
        TokenService,
        ...tokenProviders],
    exports:[TokenService]
})
export class TokenModule { }
