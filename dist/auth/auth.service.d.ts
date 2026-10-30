import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
export declare class AuthService {
    private usersRepository;
    private jwtService;
    constructor(usersRepository: Repository<User>, jwtService: JwtService);
    register(email: string, password: string): Promise<User>;
    login(email: string, password: string): Promise<{
        accessToken: string;
    }>;
}
