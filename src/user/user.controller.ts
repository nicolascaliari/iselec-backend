import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Controller()
export class UserController {
    constructor(private userService: UserService) { }

    @Get()
    async findAll() {
        return await this.userService.findAll();
    }


    // @Post()
    // async create(@Body() body: CreateUserDto): Promise<CreateUserDto> {
    //     return await this.userService.create(body);
    // }

    @Post('/login')
    async login(@Body() userData): Promise<{ success: boolean; message?: string }> {
        console.log(userData);
        console.log("Estoy axa");
      return this.userService.login(userData);
    }
}
