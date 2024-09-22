import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    verifyToken(token: string): Promise<import("../usuario/entities/usuario.entity").Usuario>;
}
