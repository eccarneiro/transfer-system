import { IsEmail, IsNotEmpty, IsString, Length } from '@nestjs/class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    readonly username: string;

    @IsEmail()
    readonly email: string;

    @Length(6)
    readonly password: string;

    @IsNotEmpty()
    @IsString()
    readonly document: string;
}