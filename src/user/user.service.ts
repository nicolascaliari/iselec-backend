import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { user } from 'src/user/schemas/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(user.name) private userModel: Model<user>) { }


    async findAll() {
        return await this.userModel.find();
    }


    async create(body: CreateUserDto): Promise<CreateUserDto> {
        return await this.userModel.create(body);
    }


    async findByEmail(email : string) {
        return await this.userModel.findOne({ email : email});
    }


    async login(userData): Promise<{ success: boolean; message?: string }> {

      console.log(userData.username)
      console.log(userData.password)

        if (userData.user === 'Iselec.tec' && userData.password === 'Araoz450') {
          return { success: true };
        } else {
          console.log("error")
          return { success: false, message: 'Credenciales incorrectas' };
        }
      }
}
