import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { PrismaService } from 'src/database/prismaService';
import { CategoriesRepository } from './categories.repository';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [ProductsModule],
  controllers: [CategoriesController],
  providers: [CategoriesService, PrismaService, CategoriesRepository],
})
export class CategoriesModule {}
