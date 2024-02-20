import { Order } from 'src/orders/entities/order.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @OneToMany(() => Order, (order) => order.user)
  @JoinColumn()
  orders: Order[];

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phoneNumber: string;
}
