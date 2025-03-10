import { CreateCategoriesProductDto } from './dto/create-categories-product.dto';
import { UpdateCategoriesProductDto } from './dto/update-categories-product.dto';
export declare class CategoriesProductService {
    create(createCategoriesProductDto: CreateCategoriesProductDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCategoriesProductDto: UpdateCategoriesProductDto): string;
    remove(id: number): string;
}
