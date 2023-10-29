import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaService } from '../database/prismaService';
import { ProductsRepository } from './products.Repository';

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [ProductsService, PrismaService, ProductsRepository],
  exports: [ProductsRepository],
})
export class ProductsModule {}
