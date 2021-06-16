import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module'
import { LocalStrategy } from './local.strategy'
import { JwtStrategy } from './ jwt.strategy';

import { jwtConstants } from './constants';
import { TokenModule } from 'src/token/token.module';

@Module({
  imports: [
    forwardRef(()=>TokenModule) ,
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy
  ],
  exports:[AuthService]
})
export class AuthModule { }
