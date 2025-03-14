import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { categoryProvider } from './category.provider';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from './entities/category.entity';
@Module({
  imports: [SequelizeModule.forFeature([Category])],
  controllers: [CategoryController],
  providers: [CategoryService, ...categoryProvider],
})
export class CategoryModule {}
