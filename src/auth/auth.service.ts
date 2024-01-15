import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import { LoginAuthDto } from "./dto/login-auth.dto";
import { JwtService } from "@nestjs/jwt";
import { compare, hash } from "bcrypt";
import { RegisterAuthDto } from "./dto/register-auth.dto";

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UserService,
        private readonly jwtService: JwtService

    ) { }


    async validateUser(email: string, password: string) {
        try {
            const user = await this.usersService.findByEmail(email);

            if (!user) {
                throw new UnauthorizedException('User not found');
            }

            const checkPassword = await compare(password.trim(), user.password.trim())

            if (!checkPassword) {
                throw new UnauthorizedException('Incorrect password');
            }

            return user;


        } catch (err) {
            console.error(err);
        }
    }

    async login(user: LoginAuthDto) {
        const { email, password } = user;
        const findUser = await this.usersService.findByEmail(email);
    
        if (!findUser) {
          throw new UnauthorizedException('User not found');
        }
    
        const checkPassword = await compare(password, findUser.password);
        if (!checkPassword) {
          throw new UnauthorizedException('Incorrect password');
        }
    
        const payload = { id: findUser._id, name: findUser.username, email: findUser.email, role: findUser.role }
        const token = this.jwtService.sign(payload)
    
        const data = {
          user: findUser,
          token
        };
    
        return data;
    }



    async register(user: RegisterAuthDto) {

        const { password } = user;

        const hashedPassword = await hash(password.trim(), 10);
        const newUser = { ...user, password: hashedPassword };

        return this.usersService.create(newUser);
    }
}