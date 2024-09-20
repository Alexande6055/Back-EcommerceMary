import { CreatePersonaDto } from './create-persona.dto';
declare const UpdatePersonaDto_base: import("@nestjs/mapped-types").MappedType<Partial<Omit<CreatePersonaDto, "nombre" | "id_usuario">>>;
export declare class UpdatePersonaDto extends UpdatePersonaDto_base {
}
export {};
