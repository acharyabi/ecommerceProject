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
} from '@nestjs/common';
import { ProductSliderImageService } from './product-slider-image.service';
import { CreateProductSliderImageDto } from './dto/create-product-slider-image.dto';
import { UpdateProductSliderImageDto } from './dto/update-product-slider-image.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.gaurd';
import { FileInterceptor } from '@nestjs/platform-express';

/**
 * Controller responsible for handling product slider image endpoints
 * Provides REST API endpoints for CRUD operations on slider images
 * All endpoints are protected with JWT authentication
 */
@UseGuards(JwtAuthGuard)
@Controller('product-slider-image')
export class ProductSliderImageController {
  /**
   * Constructor for ProductSliderImageController
   * @param productSliderImageService - Service for handling product slider image operations
   */
  constructor(
    private readonly productSliderImageService: ProductSliderImageService,
  ) {}

  /**
   * Creates a new product slider image
   * @param createProductSliderImageDto - DTO containing slider image data
   * @param image - Uploaded image file
   * @returns Newly created ProductSliderImage entity
   */
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(
    @Body() createProductSliderImageDto: CreateProductSliderImageDto,
    @UploadedFile() image: Express.Multer.File,
  ) {
    return this.productSliderImageService.create(
      createProductSliderImageDto,
      image.buffer,
      image.originalname,
    );
  }

  /**
   * Retrieves all product slider images
   * @returns Array of all ProductSliderImage entities
   */
  @Get()
  findAll() {
    return this.productSliderImageService.findAll();
  }

  /**
   * Retrieves a single product slider image by ID
   * @param id - The ID of the slider image to find
   * @returns The found ProductSliderImage entity
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productSliderImageService.findOne(+id);
  }

  /**
   * Updates an existing product slider image
   * @param id - The ID of the slider image to update
   * @param updateProductSliderImageDto - DTO containing updated slider image data
   * @returns The updated ProductSliderImage entity
   */
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductSliderImageDto: UpdateProductSliderImageDto,
  ) {
    return this.productSliderImageService.update(
      +id,
      updateProductSliderImageDto,
    );
  }

  /**
   * Removes a product slider image by ID
   * @param id - The ID of the slider image to remove
   * @returns Success message after deletion
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productSliderImageService.remove(+id);
  }
}
