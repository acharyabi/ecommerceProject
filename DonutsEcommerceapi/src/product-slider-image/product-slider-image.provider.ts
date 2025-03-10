import { PRODUCT_IMAGE_SLIDER } from '../../utils/constants';
import { ProductSliderImage } from './entities/product-slider-image.entity';

/**
 * Provider configuration for ProductSliderImage entity
 * Makes the ProductSliderImage model available for dependency injection
 * throughout the application using the PRODUCT_IMAGE_SLIDER token
 */
export const productSliderImageProvider = [
  /**
   * Provider definition that maps the PRODUCT_IMAGE_SLIDER token
   * to the ProductSliderImage model class
   */
  {
    provide: PRODUCT_IMAGE_SLIDER,
    useValue: ProductSliderImage,
  },
];
