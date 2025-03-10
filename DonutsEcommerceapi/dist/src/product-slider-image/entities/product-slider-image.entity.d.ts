import { Model } from 'sequelize-typescript';
import { Product } from 'src/products/entities/product.entity';
export declare class ProductSliderImage extends Model<ProductSliderImage> {
    id: number;
    image: string;
    altText: string;
    product_id: number;
    product: Product;
}
