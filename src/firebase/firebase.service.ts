import { Injectable } from "@nestjs/common";
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseService {
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
}