import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';
import { LoginUserDto } from './dto/create-login.dto';

@Injectable()
export class UserService {
    constructor(@Inject('USER_MODEL') private userModel: Model<User>) {
    }
    async create(createUserDto: CreateUserDto): Promise<User> {
        try {
            const createdUser = new this.userModel(createUserDto);
            return createdUser.save();
        } catch (error) {
            console.log(error);
        }
    }
    async findAll(): Promise<User[]> {
        try {
            return this.userModel.find().exec();
        } catch (error) {
            console.log(error);

        }
    }
    async findOne(id: string): Promise<User> {
        try {
            return this.userModel.findById(id);
        } catch (error) {
            console.log(error);
        }
    }
    async delete(id: string): Promise<User> {
        try {
            return this.userModel.findByIdAndDelete(id);
        } catch (error) {
            console.log(error);
        }
    }
    async userLogin(LoginUserDto: LoginUserDto): Promise<User> {
        try {
            const user = await this.userModel.findOne({ username: LoginUserDto.username });
            if (!user) {
                throw new BadRequestException('Invalid credentials');
            }
            if (user.password !== LoginUserDto.password) {
                throw new BadRequestException('Invalid credentials');
            }
            return user;
        } catch (error) {
            console.log(error);
        }
    }
}
