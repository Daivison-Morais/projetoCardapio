import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { MenuModule } from './menu/menu.module';

@Module({
  imports: [ProductsModule, CategoriesModule, MenuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
