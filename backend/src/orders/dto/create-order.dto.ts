import { IsString } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  visitDate: Date;
  @IsString()
  nameCar: string;
  @IsString()
  repairType: string;
}
