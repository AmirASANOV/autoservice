import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { OrdersModule } from './orders/orders.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';

config();

@Module({
  imports: [
    AuthModule,
    OrdersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST,
      port: Number(process.env.PORT_DB),
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
})
export class AppModule {}
