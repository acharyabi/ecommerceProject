import { ProductSliderImageService } from './product-slider-image.service';
import { CreateProductSliderImageDto } from './dto/create-product-slider-image.dto';
import { UpdateProductSliderImageDto } from './dto/update-product-slider-image.dto';
export declare class ProductSliderImageController {
    private readonly productSliderImageService;
    constructor(productSliderImageService: ProductSliderImageService);
    create(createProductSliderImageDto: CreateProductSliderImageDto, image: Express.Multer.File): Promise<import("./entities/product-slider-image.entity").ProductSliderImage>;
    findAll(): Promise<import("./entities/product-slider-image.entity").ProductSliderImage[]>;
    findOne(id: string): Promise<import("./entities/product-slider-image.entity").ProductSliderImage>;
    update(id: string, updateProductSliderImageDto: UpdateProductSliderImageDto): Promise<import("./entities/product-slider-image.entity").ProductSliderImage>;
    remove(id: string): Promise<string>;
}
