import { Inject, Injectable, UnauthorizedException, forwardRef } from '@nestjs/common';
import { CatsService } from 'src/cats/cats.service';
import { Token } from 'src/token/interfaces/token.interface';
import { Model } from 'mongoose'
import { AuthService } from 'src/auth/auth.service'
import { UsersService } from 'src/users/users.service'

@Injectable()
export class TokenService {
    constructor(
        @Inject('TOKEN_MODEL')
        private tokenModel: Model<Token>,
        private usersService: UsersService,
        @Inject(forwardRef(()=>AuthService))
        private authService: AuthService
    ){

    }

    async getByEmail(email: string){
        return await this.tokenModel.findOne({email}).exec()
    }

    update(data){
        return this.tokenModel.updateOne({email:data.email}, {hash:data.token}).exec()
    }

    save(data){
        const newToken = new this.tokenModel(data)
        return newToken.save()
    } 

    async refresh(token){
        const tokenHash =  await this.tokenModel.findOne({hash:token}).exec()
        if(tokenHash){
            const user = await this.usersService.getByEmail(tokenHash.email)
            
            return this.authService.login(user)
        }else{
            throw new UnauthorizedException()
        }
    }
}
