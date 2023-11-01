import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prismaService';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Injectable()
export class MenuRepository {
  constructor(private prisma: PrismaService) {}

  async create(menu: CreateMenuDto) {
    const idMenu = await this.prisma.menus.create({
      data: menu,
    });
    return idMenu;
  }

  async findAll() {
    return await this.prisma.menus.findMany();
  }

  async findName(name: string) {
    const findname = await this.prisma.menus.findUnique({
      where: {
        name,
      },
    });
    return findname;
  }

  async findOne(id: string) {
    return await this.prisma.menus.findUnique({
      where: { id },
    });
  }

  async update(id: string, menu: UpdateMenuDto) {
    return await this.prisma.menus.update({
      where: {
        id,
      },
      data: menu,
    });
  }

  async remove(id: string) {
    await this.prisma.menus.delete({
      where: {
        id,
      },
    });
  }
}
