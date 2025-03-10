import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { PRODUCT_IMAGE_SLIDER } from 'utils/constants';
import { CreateProductSliderImageDto } from './dto/create-product-slider-image.dto';
import { UpdateProductSliderImageDto } from './dto/update-product-slider-image.dto';
import { ProductSliderImage } from './entities/product-slider-image.entity';

/**
 * Service responsible for managing product slider images
 * Handles CRUD operations for slider images including file uploads
 */
@Injectable()
export class ProductSliderImageService {
  /**
   * Constructor for ProductSliderImageService
   * @param sliderModel - Injected repository for ProductSliderImage entity
   */
  constructor(
    @Inject(PRODUCT_IMAGE_SLIDER)
    private readonly sliderModel: typeof ProductSliderImage,
  ) {}
  /**
   * Creates a new product slider image
   * @param createProductSliderImageDto - DTO containing slider image data
   * @param dataBuffer - Buffer containing the image file data
   * @param imagename - Original name of the uploaded image file
   * @returns Newly created ProductSliderImage entity
   */
  async create(
    createProductSliderImageDto: CreateProductSliderImageDto,
    dataBuffer: Buffer,
    imagename: string,
  ) {
    const timeStamp = Date.now();
    const directoryName = path.join(
      __dirname,
      '..',
      '..',
      '..',
      'imageUploads',
    );
    
    // Ensure directory exists
    if (!fs.existsSync(directoryName)) {
      fs.mkdirSync(directoryName, { recursive: true });
    }
    
    const imageFileName = `${timeStamp}-${imagename}`;
    const imagePath = path.join(directoryName, imageFileName);
    fs.writeFileSync(imagePath, dataBuffer);
    
    const apiUrl = process.env.API_URL || 'http://localhost:3001';
    // Fix: Use only the filename in the URL, not the full path
    const imageUrl = `${apiUrl}/${imageFileName}`;
    
    const sliderData = {
      ...createProductSliderImageDto,
      image: imageUrl,
    };
    const sliderImage = await this.sliderModel.create(sliderData);
    return sliderImage;
  }

  /**
   * Retrieves all product slider images
   * @returns Array of all ProductSliderImage entities
   */
  async findAll() {
    const allImage = await this.sliderModel.findAll();
    return allImage;
  }

  /**
   * Retrieves a single product slider image by ID
   * @param id - The ID of the slider image to find
   * @returns The found ProductSliderImage entity
   * @throws BadRequestException if image with given ID doesn't exist
   */
  async findOne(id: number) {
    const singleImage = await this.sliderModel.findOne({ where: { id } });
    if (!singleImage) {
      throw new BadRequestException(`image with id${id} don't exists`);
    }
    return singleImage;
  }

  /**
   * Updates an existing product slider image
   * @param id - The ID of the slider image to update
   * @param updateProductSliderImageDto - DTO containing updated slider image data
   * @returns The updated ProductSliderImage entity
   * @throws BadRequestException if image with given ID doesn't exist
   */
  async update(
    id: number,
    updateProductSliderImageDto: UpdateProductSliderImageDto,
  ) {
    const singleImage = await this.sliderModel.findOne({ where: { id } });
    if (!singleImage) {
      throw new BadRequestException(
        `image with id${id} don't exists so can't be updated`,
      );
    }
    await this.sliderModel.update(updateProductSliderImageDto, {
      where: { id },
    });
    return this.sliderModel.findOne({ where: { id } });
  }

  /**
   * Removes a product slider image by ID
   * @param id - The ID of the slider image to remove
   * @returns Success message after deletion
   * @throws BadRequestException if image with given ID doesn't exist
   */
  async remove(id: number) {
    const singleImage = await this.sliderModel.findOne({ where: { id } });
    if (!singleImage) {
      throw new BadRequestException(
        `image with id${id} don't exists so can't be deleted`,
      );
    }

    await this.sliderModel.destroy({ where: { id } });
    return `Image deleted successfully`;
  }
}
