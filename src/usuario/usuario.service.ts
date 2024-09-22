import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {

  constructor(
    @InjectRepository(Usuario)
    private usuariRepository: Repository<Usuario>,
  ) {}
  create(createUsuarioDto: CreateUsuarioDto) {
    return this.usuariRepository.save(createUsuarioDto);
  }
  findAll() {
    return this.usuariRepository.find();
  }

  async findOne(id_usuario: number): Promise<Usuario | null> {
    return await this.usuariRepository.findOneBy({ id_usuario });
  }

  async update(id_usuario: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariRepository.update( id_usuario , updateUsuarioDto); // Actualiza por id_usuario
  }

  async remove(id_usuario: number) {
    const user = await this.findOne(id_usuario);
    if (!user) {
      throw new Error('User not found ERROR(U-S_33)');
    }
    user.isDelet = true;
    return this.update(id_usuario, user);
  }
}
