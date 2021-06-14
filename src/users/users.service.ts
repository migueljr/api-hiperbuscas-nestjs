import { Model } from 'mongoose';
import { HttpException, HttpStatus } from '@nestjs/common';
import { Injectable, Inject } from '@nestjs/common';
import { User } from 'src/users/interfaces/users.interface';
import { UserCreateDto } from './dto/user.create.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async save(data: UserCreateDto): Promise<any>{
    const userNew = new this.userModel(data)
    return userNew.save()
    .then(r=>{
      return r
    })
    .catch(error=>{
       if(error.name == "ValidationError"){
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
       }else{
        throw new HttpException(error.message, HttpStatus.BAD_GATEWAY);
       }
    })
  }
}