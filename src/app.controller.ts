import { Body, Controller, Get, Post, Render, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateChildDto } from './dto/create-child.dto';
import { PrismaService } from './prisma.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private db: PrismaService) {}

  @Get()
  @Render('index')
  getHello() {
    return {
      message: this.appService.getHello()
    };
  }

  @Get('hello')
  hello() {
    return {
      user: [
        'user1',
        'gyerek1',
        'Mikulas'
      ],
      uzenet: "Üdv",
      db: 3454
    }
  }

  @Post('gyerek')
  ujGyerek(@Body(new ValidationPipe()) gyerekAdat: CreateChildDto) {
    return this.db.gyerek.create({
      data: gyerekAdat,
    });
  }
}
