"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePersonaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_persona_dto_1 = require("./create-persona.dto");
class UpdatePersonaDto extends (0, mapped_types_1.PartialType)((0, mapped_types_1.OmitType)(create_persona_dto_1.CreatePersonaDto, ['nombre', 'id_usuario'])) {
}
exports.UpdatePersonaDto = UpdatePersonaDto;
//# sourceMappingURL=update-persona.dto.js.map