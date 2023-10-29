/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMenuDto {
  id?: string;
  
  @IsNotEmpty()
  @IsString()
  name: string;
}
