import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order) private ordersRepository: Repository<Order>,
  ) {}

  async create(createOrderDto: CreateOrderDto, user) {
    const order = await this.ordersRepository.save({
      ...createOrderDto,
      user: {
        id: user.userId,
      },
    });
    return order;
  }

  async getAllOrders(user) {
    const orders = await this.ordersRepository.find({
      where: { user: { id: user.userId } },
    });
    return orders;
  }
}
