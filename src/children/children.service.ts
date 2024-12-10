import { Injectable } from '@nestjs/common';
import { CreateChildDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ChildrenService {
  private db: PrismaService;
  constructor(db: PrismaService) {
    this.db = db;
  }

  create(createChildDto: CreateChildDto) {
    return this.db.gyerek.create({
      data: createChildDto
    })
  }

  findAll() {
    return this.db.gyerek.findMany();
  }

  async findOne(id: number) {
    return await this.db.gyerek.findUnique({
      where: {
        id: id
      }
    })
  }

  async update(id: number, updateChildDto: UpdateChildDto) {
    return await this.db.gyerek.update({
      where: {
        id: id,
      },
      data: updateChildDto
    })
  }

  remove(id: number) {
    return this.db.gyerek.delete({
      where: {
        id: id
      }
    });
  }
}