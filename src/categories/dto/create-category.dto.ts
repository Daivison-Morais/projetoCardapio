import { IsArray, IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateCategoryDto {
  id?: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsUrl()
  image: string;

  @IsArray()
  @IsString({ each: true })
  menusId: string[];
}
