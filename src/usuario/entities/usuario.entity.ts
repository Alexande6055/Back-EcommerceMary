import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { StatusUser } from '../status-User.enum';

@Entity('Usuarios')
export class Usuario {
  @PrimaryGeneratedColumn() 
  id_usuario: number;
  @Column()
  uid: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column({ default: true })
  isDelet: boolean;
  @Column({ default: StatusUser.avtive })
  statusUser: string;
}
