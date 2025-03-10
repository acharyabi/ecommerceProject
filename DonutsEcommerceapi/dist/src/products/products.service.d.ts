import { Category } from 'src/category/entities/category.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
export declare class ProductsService {
    private readonly productModel;
    private readonly categoryModel;
    constructor(productModel: typeof Product, categoryModel: typeof Category);
    create(createProductDto: CreateProductDto, dataBuffer: Buffer, imagename: string): Promise<Product>;
    findAll(categoryIdsArray: number[]): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    update(id: number, updateProductDto: UpdateProductDto, dataBuffer: Buffer, imagename: any): Promise<Product>;
    remove(id: number): Promise<string>;
}
