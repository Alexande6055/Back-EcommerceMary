import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as admin from 'firebase-admin';
import { Repository } from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { StatusUser } from '../../usuario/status-User.enum';

@Injectable()
export class FireBaseService {
    
    constructor(
        @InjectRepository(Usuario)
        private userRepository:Repository<Usuario>,
      ) {}
    
    onModuleInit() {
        if (!admin.apps.length) {
          admin.initializeApp({
            credential: admin.credential.applicationDefault(),
          });
        }
      }

    async verifyIdToken(idToken :string){
        return await admin.auth().verifyIdToken(idToken);
    }



      async validateUser(token: string) {
        const decodeToken = await this.verifyIdToken(token);
        console.log("este es el token desifrado"+decodeToken)
        let user=await this.userRepository.findOne({
          where:{uid:decodeToken.uid}      
        });
        console.log("este es el email del usuario "+user.email)
        if(!user){
          console.log("El usuario no se encontrop se procede a crear")
          user=this.userRepository.create({
            uid:decodeToken.uid,
            email:decodeToken.email,
            password:"123",
            isDelet:false,
            statusUser:StatusUser.avtive,
          });
        await this.userRepository.save(user);
        }
        return user;
      }
      
}
