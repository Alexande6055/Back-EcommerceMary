"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const Firebase_service_1 = require("../firebase/Firebase.service");
const typeorm_1 = require("@nestjs/typeorm");
const usuario_entity_1 = require("../usuario/entities/usuario.entity");
const typeorm_2 = require("typeorm");
const status_User_enum_1 = require("../usuario/status-User.enum");
let AuthService = class AuthService {
    constructor(firebaseService, userRepository) {
        this.firebaseService = firebaseService;
        this.userRepository = userRepository;
    }
    async validateUser(token) {
        const decodeToken = await this.firebaseService.verifyIdToken(token);
        let user = await this.userRepository.findOne({
            where: { uid: decodeToken.uid }
        });
        if (!user) {
            user = this.userRepository.create({
                uid: decodeToken.uid,
                email: decodeToken.email,
                password: "",
                isDelet: false,
                statusUser: status_User_enum_1.StatusUser.avtive,
            });
            await this.userRepository.save(user);
        }
        return user;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(usuario_entity_1.Usuario)),
    __metadata("design:paramtypes", [Firebase_service_1.FirebaseService,
        typeorm_2.Repository])
], AuthService);
//# sourceMappingURL=auth.service.js.map