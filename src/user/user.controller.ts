import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';

@Controller('user')
export class UserController {
    constructor(private readonly usersService: UserService) { }
    @Get()
    async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<User> {
        return this.usersService.findOne(id);
    }
    @Post()
    @UsePipes(new ValidationPipe())
    async create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.usersService.create(createUserDto);
    }
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<User> {
        return this.usersService.delete(id);
    }

}
