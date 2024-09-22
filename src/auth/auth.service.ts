import { Injectable } from "@nestjs/common";
import { FirebaseService } from "../firebase/firebase.service";
import { InjectRepository } from "@nestjs/typeorm";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Repository } from "typeorm";
import { StatusUser } from "src/usuario/status-User.enum";

@Injectable()
export class AuthService {
  constructor(private readonly firebaseService: FirebaseService,
    @InjectRepository(Usuario)
    private userRepository:Repository<Usuario>,
  ) {}

  async validateUser(token: string) {
    const decodeToken = await this.firebaseService.verifyIdToken(token);
    let user=await this.userRepository.findOne({
      where:{uid:decodeToken.uid}      
    });
    if(!user){
      user=this.userRepository.create({
        uid:decodeToken.uid,
        email:decodeToken.email,
        password:"",
        isDelet:false,
        statusUser:StatusUser.avtive,
      });
    await this.userRepository.save(user);
    }
    return user;
  }
  

  
}
