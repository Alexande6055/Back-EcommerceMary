import { CreateUsuarioDto } from './create-usuario.dto';
declare const UpdateUsuarioDto_base: import("@nestjs/mapped-types").MappedType<Partial<Omit<CreateUsuarioDto, "email">>>;
export declare class UpdateUsuarioDto extends UpdateUsuarioDto_base {
}
export {};
