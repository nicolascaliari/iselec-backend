import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/dto/user/create-user.dto';
import { user } from 'src/schemas/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(user.name) private userModel: Model<user>) { }


    async findAll() {
        return await this.userModel.find();
    }


    async create(body: CreateUserDto): Promise<CreateUserDto> {
        return await this.userModel.create(body);
    }
}
