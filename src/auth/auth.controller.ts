import { Controller } from '@nestjs/common';
import { Post, Body } from '@nestjs/common';
import { LoginUserDto } from './auth-dto/create-login.dto';
import { AuthService } from './auth.service';
import { AuthResponse } from './auth-interface/auth.interface';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @Post('login')
    async login(@Body() loginUserDto: LoginUserDto): Promise<AuthResponse> {
        return this.authService.authenticate(loginUserDto);
    }
}
