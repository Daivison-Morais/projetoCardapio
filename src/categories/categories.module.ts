import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { PrismaService } from 'src/database/prismaService';
import { CategoriesRepository } from './categories.repository';

@Module({
  imports: [],
  controllers: [CategoriesController],
  providers: [CategoriesService, PrismaService, CategoriesRepository],
  exports: [CategoriesRepository],
})
export class CategoriesModule {}
