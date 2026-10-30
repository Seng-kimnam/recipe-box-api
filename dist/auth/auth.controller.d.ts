import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(dto: RegisterDto): Promise<import("../users/entities/user.entity").User>;
    login(dto: LoginDto): Promise<{
        accessToken: string;
    }>;
    me(user: {
        sub: number;
        email: string;
    }): {
        sub: number;
        email: string;
    };
}
