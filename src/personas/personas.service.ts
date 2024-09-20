import { Inject, Injectable } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Persona } from './entities/persona.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonasService {
  constructor(
    @InjectRepository(Persona)
    private personaRepository: Repository<Persona>,
  ) {}
  create(createPersonaDto: CreatePersonaDto) {
    return this.personaRepository.save(createPersonaDto);
  }
  /*
  findAll() {
    return `This action returns all personas`;
  }
*/

  findAllDebtor() {
    return this.personaRepository.find({
      where: { isDebtor: true },
      select: ['foto', 'celular', 'nombre', 'direccion'],
    });
  }

  findOne(id_persona: number) {
    return this.personaRepository.findOneBy({ id_persona });
  }

  update(id_persona: number, updatePersonaDto: UpdatePersonaDto) {
    return this.personaRepository.update(id_persona, updatePersonaDto);
  }
}
