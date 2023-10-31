import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prismaService';
//import { CreateProductDto } from './dto/create-product.dto';
//import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsRepository {
  constructor(private prisma: PrismaService) {}
  async create(product: any) {
    const products = await this.prisma.products.create({
      data: product,
    });
    return products;
  }
  async creates(product: any) {
    const products = await this.prisma.products.createMany({
      data: product,
    });
    return products;
  }

  async findAll() {
    return await this.prisma.products.findMany();
  }
  async findName(name: string) {
    const findname = await this.prisma.products.findUnique({
      where: {
        name,
      },
    });
    return findname;
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

  async findByIdCategories(id: string) {
    return await this.prisma.categories.findUnique({
      where: {
        id,
      },
    });
  }
  async findOne(id: string) {
    return await this.prisma.products.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateProductDto: any) {
    return await this.prisma.products.update({
      where: {
        id,
      },
      data: updateProductDto,
    });
  }

  async remove(id: string) {
    await this.prisma.products.delete({
      where: {
        id,
      },
    });
  }
}
