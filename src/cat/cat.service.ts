import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from './cat.entity';

@Injectable()
export class CatService {
  constructor(@InjectRepository(Cat) private catRepository: Repository<Cat>) {}
  async findAll(): Promise<Cat[]> {
    return await this.catRepository.find();
  }

  async findOne(id: string): Promise<Cat> {
    try {
      await this.catRepository.findOneOrFail({
        where: { id: id },
      });
      return this.catRepository.findOne(id);
    } catch (error) {
      throw new BadRequestException('Not found');
    }
  }

  async create(cat: Cat) {
    this.catRepository.save(cat);
  }

  async remove(id: string): Promise<any> {
    try {
      await this.catRepository.findOneOrFail({
        where: { id: id },
      });

      await this.catRepository.delete(id);

      return {
        status: 201,
        response: 'Deleted',
      };
    } catch (error) {
      throw new BadRequestException('Not found');
    }
  }

  async edit(id: number, cat: Cat): Promise<Cat> {
    try {
      await this.catRepository.findOneOrFail({
        where: { id: id },
      });

      const editedCat = await this.catRepository.findOne(id);
      if (!editedCat) {
        throw new NotFoundException('Note is not found');
      }
      editedCat.name = cat.name;
      editedCat.breed = cat.breed;
      editedCat.description = cat.description;
      editedCat.gender = cat.gender;
      editedCat.location = cat.location;
      await editedCat.save();
      return editedCat;
    } catch (error) {
      throw new BadRequestException('Not found');
    }
  }
}
