import { UsersService } from 'src/users/users.service';
import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TokenService } from 'src/token/token.service'

@Injectable()
export class AuthService {

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    @Inject(forwardRef(()=>TokenService))
    private tokenService: TokenService
  ) { }

  async validateUser(userEmail: string, userPassword: string) {
    const user = await this.usersService.getByEmail(userEmail);
    if (user && user.password === userPassword) {
      const { _id, name, email, level } = user;
      return user;
    }

    return null;
  }

  async login(user: any) {

    const payload = { email: user.email, sub: user._id };
    const token = this.jwtService.sign(payload)
    
    const verifyTokenExist = await this.tokenService.getByEmail(user.email)

    if(!verifyTokenExist){
      this.tokenService.save({email:user.email, hash: token})
    }else{
      this.tokenService.update({email:user.email, token: token})
    }
    return {
      id: user._id,
      access_token: token,
      name: user.name,
      email: user.email,
      level: user._doc.level
    };
  }
}
