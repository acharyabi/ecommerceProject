import { CategoriesProductService } from './categories-product.service';
import { CreateCategoriesProductDto } from './dto/create-categories-product.dto';
import { UpdateCategoriesProductDto } from './dto/update-categories-product.dto';
export declare class CategoriesProductController {
    private readonly categoriesProductService;
    constructor(categoriesProductService: CategoriesProductService);
    create(createCategoriesProductDto: CreateCategoriesProductDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCategoriesProductDto: UpdateCategoriesProductDto): string;
    remove(id: string): string;
}
