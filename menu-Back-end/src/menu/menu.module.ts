import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { PrismaService } from 'src/database/prismaService';
import { MenuRepository } from './menu.repository';

@Module({
  imports: [],
  controllers: [MenuController],
  providers: [MenuService, PrismaService, MenuRepository],
})
export class MenuModule {}
