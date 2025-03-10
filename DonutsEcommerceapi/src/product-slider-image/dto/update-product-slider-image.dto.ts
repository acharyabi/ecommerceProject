import { PartialType } from '@nestjs/mapped-types';
import { CreateProductSliderImageDto } from './create-product-slider-image.dto';

/**
 * Data Transfer Object for updating an existing product slider image
 * Extends CreateProductSliderImageDto as a partial type, making all properties optional
 * This allows for partial updates where only changed fields need to be provided
 */
export class UpdateProductSliderImageDto extends PartialType(CreateProductSliderImageDto) {}
