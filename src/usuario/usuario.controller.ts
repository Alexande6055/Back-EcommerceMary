import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }
  
  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get('get-user-:id')
  findOne(@Param('id') id_user: number) {
    return this.usuarioService.findOne(id_user);
  }

  @Patch('update-user-:id')
  update(
    @Param('id') id_user: number,
    @Body() updateUsuarioDto: UpdateUsuarioDto,
  ) {
    return this.usuarioService.update(id_user, updateUsuarioDto);
  }

  @Delete('delete-user-:id')
  remove(@Param('id') id: number) {
    return this.usuarioService.remove(id);
  }
}
