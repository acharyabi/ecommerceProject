import { Model } from 'sequelize-typescript';
import { Category } from 'src/category/entities/category.entity';
import { Order } from 'src/order/entities/order.entity';
import { ProductSliderImage } from 'src/product-slider-image/entities/product-slider-image.entity';
export declare class Product extends Model<Product> {
    id: number;
    name: string;
    image: string;
    price: number;
    description: string;
    rating: number;
    categories: Category[];
    sliderImage: ProductSliderImage[];
    order: Order[];
}
