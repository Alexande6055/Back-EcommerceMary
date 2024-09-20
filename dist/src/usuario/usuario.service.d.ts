import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
export declare class UsuarioService {
    private usuariRepository;
    constructor(usuariRepository: Repository<Usuario>);
    create(createUsuarioDto: CreateUsuarioDto): Promise<CreateUsuarioDto & Usuario>;
    findAll(): Promise<Usuario[]>;
    findOne(id_usuario: number): Promise<Usuario | null>;
    update(id_usuario: number, updateUsuarioDto: UpdateUsuarioDto): Promise<import("typeorm").UpdateResult>;
    remove(id_usuario: number): Promise<import("typeorm").UpdateResult>;
}
