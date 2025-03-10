import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.gaurd';

/**
 * Controller responsible for handling category-related endpoints
 * Provides REST API endpoints for CRUD operations on categories
 * Create, Update, and Delete operations are protected with JWT authentication
 */
@Controller('category')
export class CategoryController {
  /**
   * Constructor for CategoryController
   * @param categoryService - Service for handling category operations
   */
  constructor(private readonly categoryService: CategoryService) {}

  /**
   * Creates a new category
   * @param createCategoryDto - DTO containing category data
   * @returns Newly created Category entity
   */
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  /**
   * Retrieves all categories
   * @returns Array of all Category entities
   */
  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  /**
   * Retrieves a single category by ID
   * @param id - The ID of the category to find
   * @returns The found Category entity
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(+id);
  }

  /**
   * Updates an existing category
   * @param id - The ID of the category to update
   * @param updateCategoryDto - DTO containing updated category data
   * @returns The updated Category entity
   */
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoryService.update(+id, updateCategoryDto);
  }

  /**
   * Removes a category by ID
   * @param id - The ID of the category to remove
   * @returns Success message after deletion
   */
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(+id);
  }
}
