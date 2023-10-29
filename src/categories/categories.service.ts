import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoriesRepository } from './categories.repository';

@Injectable()
export class CategoriesService {
  constructor(private repository: CategoriesRepository) {}
  async create(category: CreateCategoryDto) {
    category.menusId.map((menu) => {
      if (menu.length != 24) throw new BadRequestException('Invalid menu id');
    });

    const countIdsMenus = await this.repository.countIdsMenus(category.menusId);
    if (countIdsMenus != category.menusId.length) {
      throw new BadRequestException(
        'At least one of the MenusId ids is not found',
      );
    }

    const findName = await this.repository.findName(category.name);
    if (findName) throw new BadRequestException('name already in use');

    return await this.repository.create(category);
  }

  async findAll() {
    const listAll = await this.repository.findAll();
    if (listAll.length === 0) {
      return { message: 'Empty list' };
    }
    return listAll;
  }

  async findOne(id: string) {
    const findById = await this.repository.findOne(id);
    if (!findById) throw new BadRequestException('id not found');
    return findById;
  }

  async update(id: string, category: UpdateCategoryDto) {
    const findById = await this.repository.update(id, category);
    if (!findById) throw new BadRequestException('id not found');
    return findById;
  }

  async remove(id: string) {
    const findById = await this.repository.findOne(id);
    if (!findById) throw new BadRequestException('id not found');

    return await this.repository.remove(id);
  }
}
