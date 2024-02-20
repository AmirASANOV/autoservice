import { Controller, Post, Body, UseGuards, Req, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { TokenGuard } from 'src/auth/token.guard';
import { Request } from 'express';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @UseGuards(TokenGuard)
  @Post()
  async create(@Body() createOrderDto: CreateOrderDto, @Req() req: Request) {
    return this.ordersService.create(createOrderDto, req['user']);
  }

  //getAll

  @UseGuards(TokenGuard)
  @Get()
  async getAllOrders(@Req() req: Request) {
    return this.ordersService.getAllOrders(req['user']);
  }
}
