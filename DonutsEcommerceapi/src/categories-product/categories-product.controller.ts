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
import { CategoriesProductService } from './categories-product.service';
import { CreateCategoriesProductDto } from './dto/create-categories-product.dto';
import { UpdateCategoriesProductDto } from './dto/update-categories-product.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.gaurd';

/**
 * Controller responsible for handling product category relationships
 * Provides REST API endpoints for managing associations between products and categories
 * All endpoints are protected with JWT authentication
 */
@UseGuards(JwtAuthGuard)
@Controller('categories-product')
export class CategoriesProductController {
  /**
   * Constructor for CategoriesProductController
   * @param categoriesProductService - Service for handling product-category relationship operations
   */
  constructor(
    private readonly categoriesProductService: CategoriesProductService,
  ) {}

  /**
   * Creates a new product-category association
   * @param createCategoriesProductDto - DTO containing product-category relationship data
   * @returns Newly created CategoriesProduct entity
   */
  @Post()
  create(@Body() createCategoriesProductDto: CreateCategoriesProductDto) {
    return this.categoriesProductService.create(createCategoriesProductDto);
  }

  /**
   * Retrieves all product-category associations
   * @returns Array of all CategoriesProduct entities
   */
  @Get()
  findAll() {
    return this.categoriesProductService.findAll();
  }

  /**
   * Retrieves a single product-category association by ID
   * @param id - The ID of the association to find
   * @returns The found CategoriesProduct entity
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriesProductService.findOne(+id);
  }

  /**
   * Updates an existing product-category association
   * @param id - The ID of the association to update
   * @param updateCategoriesProductDto - DTO containing updated relationship data
   * @returns The updated CategoriesProduct entity
   */
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoriesProductDto: UpdateCategoriesProductDto,
  ) {
    return this.categoriesProductService.update(
      +id,
      updateCategoriesProductDto,
    );
  }

  /**
   * Removes a product-category association by ID
   * @param id - The ID of the association to remove
   * @returns Success message after deletion
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriesProductService.remove(+id);
  }
}
