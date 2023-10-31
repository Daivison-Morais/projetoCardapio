/* eslint-disable prettier/prettier */
import { IsArray, IsBoolean, IsInt, IsNotEmpty, IsNumber, IsString, Length, MaxLength } from 'class-validator';

export class CreateProductDto {
  id?: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  @IsNotEmpty()
  image: string;

  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  price: number;

  @MaxLength(80)
  description: string;

  @IsNotEmpty()
  @IsBoolean()
  promotion: boolean;

  @IsString()
  @IsNotEmpty()
  shift: string;

  @IsString()
  @IsNotEmpty()
  @Length(24, 24)
  categoryId: string;

  @IsString({ each: true })
  @IsArray()
  @IsNotEmpty()
  menusId: string[];
}
