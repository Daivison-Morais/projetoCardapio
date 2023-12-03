import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { MenuRepository } from './menu.repository';

@Injectable()
export class MenuService {
  constructor(private repository: MenuRepository) {}
  async create(menu: CreateMenuDto) {
    if (!menu.name) {
      throw new BadRequestException('name is missing');
    }

    const nameMenu = menu.name.charAt(0).toUpperCase() + menu.name.slice(1);
    if (nameMenu != 'Diurnal' && nameMenu != 'Nocturnal') {
      throw new BadRequestException('name must be Diurnal ou Nocturnal');
    }

    const findName = await this.repository.findName(nameMenu);
    if (findName) throw new BadRequestException('name already in use');

    const idMenu = await this.repository.create({ name: nameMenu });
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

  async findByShift(hours: string) {
    function checkDayOrNight(hours: string) {
      const limitDay = 18;
      const limitNight = 6;

      if (Number(hours) >= limitDay || Number(hours) < limitNight) {
        return 'Nocturnal';
      } else {
        return 'Diurnal';
      }
    }

    const nameMenu = checkDayOrNight(hours);

    const findByNameMenu = await this.repository.findByShift(nameMenu);
    if (!findByNameMenu) throw new NotFoundException('not found');
    return findByNameMenu;
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
