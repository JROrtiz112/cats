import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
import { Cat } from './cat.entity';
import { CatService } from './cat.service';

@Controller('cat')
export class CatController {
  constructor(private catService: CatService) {}

  @Get()
  findAll() {
    return this.catService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id) {
    return this.catService.findOne(id);
  }

  @Post() create(@Body() cat: Cat) {
    this.catService.create(cat);
    return {
      status: 200,
      response: 'Created',
    };
  }

  @Patch(':id')
  async editNote(@Body() cat: Cat, @Param('id') id: number): Promise<Cat> {
    const catEdited = await this.catService.edit(id, cat);
    return catEdited;
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id) {
    return this.catService.remove(id);
  }
}
