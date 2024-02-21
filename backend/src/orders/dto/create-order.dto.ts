import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty({ example: '2000-11-22T00:00:00.000Z', description: 'Date' })
  @IsString()
  visitDate: Date;

  @ApiProperty({ example: 'BMW', description: 'Model car' })
  @IsString()
  nameCar: string;

  @ApiProperty({
    example: 'total',
    description: 'type of repair',
  })
  @IsString()
  repairType: string;
}
