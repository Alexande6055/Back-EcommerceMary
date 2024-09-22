import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as admin from 'firebase-admin';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { StatusUser } from 'src/usuario/status-User.enum';
import { Repository } from 'typeorm';

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
