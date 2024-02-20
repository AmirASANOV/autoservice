import { User } from 'src/auth/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.orders)
  @JoinColumn()
  user: User;

  @Column()
  visitDate: Date;

  @Column()
  nameCar: string;
  @Column()
  repairType: string;

  @CreateDateColumn()
  created: Date;
}
