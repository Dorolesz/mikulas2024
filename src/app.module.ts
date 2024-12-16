import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { ChildrenModule } from './children/children.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ChildrenModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
