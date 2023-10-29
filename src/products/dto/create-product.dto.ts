/* eslint-disable prettier/prettier */
import { IsArray, IsEmpty, IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {

  @IsEmpty()
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

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsString()
  @IsNotEmpty()
  shift: string;

  @IsString({ each: true })
  @IsArray()
  @IsNotEmpty()
  categoriesId: string[];

  @IsString({ each: true })
  @IsArray()
  @IsNotEmpty()
  menusId: string[];
}
