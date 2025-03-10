import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.gaurd';
import { FileInterceptor } from '@nestjs/platform-express';

/**
 * Controller responsible for handling product-related endpoints
 * Provides REST API endpoints for CRUD operations on products
 * Create, Update, and Delete operations are protected with JWT authentication
 * Supports image upload for product creation and updates
 */
@Controller('products')
export class ProductsController {
  /**
   * Constructor for ProductsController
   * @param productsService - Service for handling product operations
   */
  constructor(private readonly productsService: ProductsService) {}

  /**
   * Creates a new product with an image
   * @param createProductDto - DTO containing product data
   * @param image - Uploaded product image file
   * @returns Newly created Product entity
   */
  @UseGuards(JwtAuthGuard)
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(
    @Body() createProductDto: CreateProductDto,
    @UploadedFile() image: Express.Multer.File,
  ) {
    return this.productsService.create(
      createProductDto,
      image.buffer,
      image.originalname,
    );
  }

  /**
   * Retrieves all products, optionally filtered by category IDs
   * @param categoryIds - Comma-separated list of category IDs to filter by
   * @returns Array of Product entities matching the filter criteria
   */
  @Get()
  findAll(@Query('categoryIds') categoryIds: string) {
    let categoryIdsArray: number[] = [];

    if (categoryIds) {
      categoryIdsArray = categoryIds
        .split(',')
        .filter((id) => id !== '')
        .map(Number);
    }

    return this.productsService.findAll(categoryIdsArray);
  }

  /**
   * Retrieves a single product by ID
   * @param id - The ID of the product to find
   * @returns The found Product entity
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  /**
   * Updates an existing product and its image
   * @param id - The ID of the product to update
   * @param updateUserDto - DTO containing updated product data
   * @param image - Updated product image file
   * @returns The updated Product entity
   */
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @UseInterceptors(FileInterceptor('image'))
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateProductDto,
    @UploadedFile() image: Express.Multer.File,
  ) {
    return this.productsService.update(
      +id,
      updateUserDto,
      image.buffer,
      image.originalname,
    );
  }

  /**
   * Removes a product by ID
   * @param id - The ID of the product to remove
   * @returns Success message after deletion
   */
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
