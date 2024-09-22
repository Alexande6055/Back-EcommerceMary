import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { Persona } from './entities/persona.entity';
import { Repository } from 'typeorm';
export declare class PersonasService {
    private personaRepository;
    constructor(personaRepository: Repository<Persona>);
    create(createPersonaDto: CreatePersonaDto): Promise<CreatePersonaDto & Persona>;
    findAllDebtor(): Promise<Persona[]>;
    findOne(id_persona: number): Promise<Persona>;
    update(id_persona: number, updatePersonaDto: UpdatePersonaDto): Promise<import("typeorm").UpdateResult>;
}
