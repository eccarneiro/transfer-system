import { IsNotEmpty, IsString, Length } from '@nestjs/class-validator';

export class LoginUserDto {
    @IsNotEmpty()
    @IsString()
    readonly username: string;

    @Length(6)
    readonly password: string;
}