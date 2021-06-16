import { SettingsModule } from './settings/settings.module';
import { TokenModule } from './token/token.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from 'src/cats/cats.module'
import { UsersModule } from 'src/users/users.module'
import { AuthModule } from 'src/auth/auth.module'

@Module({
  imports: [
    SettingsModule,
    TokenModule,
    CatsModule,
    UsersModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
