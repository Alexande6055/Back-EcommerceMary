import { PersonasService } from './personas.service';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
export declare class PersonasController {
    private readonly personasService;
    constructor(personasService: PersonasService);
    create(createPersonaDto: CreatePersonaDto): Promise<CreatePersonaDto & import("./entities/persona.entity").Persona>;
    findOne(id: number): Promise<import("./entities/persona.entity").Persona>;
    filterPeopleDebtor(): Promise<import("./entities/persona.entity").Persona[]>;
    update(id: number, updatePersonaDto: UpdatePersonaDto): Promise<import("typeorm").UpdateResult>;
}
