import { FireBaseService } from '../service/fire-base.service';
export declare class FireBaseController {
    private readonly firebaseService;
    constructor(firebaseService: FireBaseService);
    verifyToken(token: string): Promise<import("../../usuario/entities/usuario.entity").Usuario>;
}
