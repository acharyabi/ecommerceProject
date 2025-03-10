import {
  IsEmpty,
  IsNotEmpty,
  isNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';

/**
 * Data Transfer Object for creating a new product slider image
 * Contains validation rules for required fields
 */
export class CreateProductSliderImageDto {
  /**
   * ID of the product this slider image belongs to
   * Must be a valid number and cannot be empty
   * Automatically converted to Number type
   */
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  product_id: number;

  /**
   * Alternative text for the image for accessibility purposes
   * Must be a string and cannot be empty
   */
  @IsString()
  @IsNotEmpty()
  altText: string;
}
