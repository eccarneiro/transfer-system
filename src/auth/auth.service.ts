import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { LoginUserDto } from './auth-dto/create-login.dto';
import { User } from 'src/user/interfaces/user.interface';
import { AuthResponse } from './auth-interface/auth.interface';
import { UserService } from 'src/user/user.service';



@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) { }
    async authenticate(loginUserDto: LoginUserDto): Promise<AuthResponse> {
        try {
            const user = await this.userService.findByUserName(loginUserDto.username);
            if (!user) {
                throw new BadRequestException('Invalid credentials');
            }
            if (user.password !== loginUserDto.password) {
                throw new BadRequestException('Invalid credentials');
            }
            return { token: 'token' };
        } catch (error) {
            console.log(error);
        }
    }
}
