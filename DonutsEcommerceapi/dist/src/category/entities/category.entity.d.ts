import { Model } from 'sequelize-typescript';
import { Product } from 'src/products/entities/product.entity';
export declare class Category extends Model<Category> {
    id: number;
    category_name: string;
    product: Product[];
}
