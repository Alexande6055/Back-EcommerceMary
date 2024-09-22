import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Repository } from 'typeorm';
export declare class FireBaseService {
    private userRepository;
    constructor(userRepository: Repository<Usuario>);
    onModuleInit(): void;
    verifyIdToken(idToken: string): Promise<import("firebase-admin/lib/auth/token-verifier").DecodedIdToken>;
    validateUser(token: string): Promise<Usuario>;
}
