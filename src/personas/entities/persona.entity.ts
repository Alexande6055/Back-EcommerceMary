import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Usuario } from 'src/usuario/entities/usuario.entity';
@Entity('Personas')
export class Persona {
  @PrimaryGeneratedColumn()
  id_persona: number;
  @Column()
  cedula: string;
  @Column()
  nombre: string;
  @Column()
  direccion: string;
  @Column()
  foto: string;
  @Column()
  celular: string;
  @Column()
  fecha_nacimiento: Date;
  @Column({ default: false })
  isDebtor: boolean;
  @OneToOne(() => Usuario)
  @JoinColumn({ name: 'id_usuario' })
  id_usuario: number;
}
