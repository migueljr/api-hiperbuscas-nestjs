import { Model } from 'mongoose';
import { HttpException, HttpStatus } from '@nestjs/common';
import { Injectable, Inject } from '@nestjs/common';
import { User } from 'src/users/interfaces/users.interface';
import { AuthLoginDto } from './dto/auth.login.dto';
//import { UserCreateDto } from './dto/user.create.dto';

@Injectable()
export class AuthService {

  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {}

  async login(data: AuthLoginDto): Promise<any> {
    return this.userModel.find(data)
      .then(r=>{
        if(r.length){
          return {message:'authenticate success'}
        }else{
          throw new HttpException('email or password is invalid.', HttpStatus.FORBIDDEN)
        }
      })
  }

}