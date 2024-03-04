import { BadRequestException, Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { LoginUserDto } from './auth-dto/create-login.dto';
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

            const token = sign({ user }, "secret", { expiresIn: '1h' })
            return { token };
        } catch (error) {
            console.log(error);
        }
    }
}
