import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prismaService';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoriesRepository {
  constructor(private prisma: PrismaService) {}

  async create(menu: CreateCategoryDto) {
    const idMenu = await this.prisma.categories.create({
      data: menu,
    });
    return idMenu;
  }

  async findAll() {
    return await this.prisma.categories.findMany();
  }
  async countIdsMenus(idsMenus: string[]) {
    return await this.prisma.menus.count({
      where: {
        id: {
          in: idsMenus,
        },
      },
    });
  }

  async findName(name: string) {
    const findname = await this.prisma.categories.findUnique({
      where: {
        name,
      },
    });
    return findname;
  }

  async findOne(id: string) {
    return await this.prisma.categories.findUnique({
      where: { id },
    });
  }

  async update(id: string, menu: UpdateCategoryDto) {
    return await this.prisma.categories.update({
      where: {
        id,
      },
      data: menu,
    });
  }

  async remove(id: string) {
    return await this.prisma.categories.delete({
      where: {
        id,
      },
    });
  }
}
