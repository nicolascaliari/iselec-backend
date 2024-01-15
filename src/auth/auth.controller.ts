import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { RegisterAuthDto } from "./dto/register-auth.dto";
import { LoginAuthDto } from "./dto/login-auth.dto";



@Controller()
export class AuthController {
    constructor(private authService: AuthService) { }


    @Post('auth/login')
    async login(@Body() body: LoginAuthDto) {
        return this.authService.login(body);
    }


    @Post('auth/register')
    async register(@Body() body: RegisterAuthDto) {
        return this.authService.register(body);
    }
}