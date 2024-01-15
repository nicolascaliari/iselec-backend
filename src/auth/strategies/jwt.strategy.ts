import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from "src/types/user";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: async (_, done) => {
                const secret = this.configService.get<string>('JWT_SECRET');
                done(null, secret);
            }
        });
    }

    async validate(payload: User) {
        return { userId: payload.id, username: payload.username, password: payload.password }
    }
}
