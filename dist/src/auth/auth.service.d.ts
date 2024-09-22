import { FirebaseService } from "../firebase/Firebase.service";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Repository } from "typeorm";
export declare class AuthService {
    private readonly firebaseService;
    private userRepository;
    constructor(firebaseService: FirebaseService, userRepository: Repository<Usuario>);
    validateUser(token: string): Promise<Usuario>;
}
