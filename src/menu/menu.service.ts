import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { MenuRepository } from './menu.repository';

@Injectable()
export class MenuService {
  constructor(private repository: MenuRepository) {}
  async create(menu: CreateMenuDto) {
    const findName = await this.repository.findName(menu.name);
    if (findName) throw new BadRequestException('name already in use');

    const idMenu = await this.repository.create(menu);
    return idMenu;
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

  async update(id: string, menu: UpdateMenuDto) {
    const findById = await this.repository.update(id, menu);
    if (!findById) throw new BadRequestException('id not found');
    return findById;
  }

  async remove(id: string) {
    const findById = await this.repository.findOne(id);
    if (!findById) throw new BadRequestException('id not found');

    await this.repository.remove(id);
  }
}
