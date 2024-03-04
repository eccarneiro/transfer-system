import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
    constructor(@Inject('USER_MODEL') private userModel: Model<User>) {
    }
    async create(createUserDto: CreateUserDto): Promise<User> {
        try {
            let createdUser = new this.userModel(createUserDto, {});
            const agencyNumber = Math.floor(Math.random() * 1000);
            const accountNumber = Math.floor(Math.random() * 10000);
            let balance = 0;
            createdUser.agency = agencyNumber;
            createdUser.account = accountNumber;
            createdUser.balance = balance;
            return createdUser.save();
        } catch (error) {
            console.log(error);
        }
    }
    async findByUserName(username: string): Promise<User> {
        try {
            return this.userModel.findOne({ username: username });
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

}
