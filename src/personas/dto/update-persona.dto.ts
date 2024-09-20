import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreatePersonaDto } from './create-persona.dto';

export class UpdatePersonaDto extends PartialType(
  OmitType(CreatePersonaDto, ['nombre', 'id_usuario'] as const),
) {}
