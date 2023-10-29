import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
  id?: string;
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsArray()
  @IsString({ each: true })
  menusId: string[];
}
