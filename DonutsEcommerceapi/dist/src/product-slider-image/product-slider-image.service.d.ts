import { CreateProductSliderImageDto } from './dto/create-product-slider-image.dto';
import { UpdateProductSliderImageDto } from './dto/update-product-slider-image.dto';
import { ProductSliderImage } from './entities/product-slider-image.entity';
export declare class ProductSliderImageService {
    private readonly sliderModel;
    constructor(sliderModel: typeof ProductSliderImage);
    create(createProductSliderImageDto: CreateProductSliderImageDto, dataBuffer: Buffer, imagename: string): Promise<ProductSliderImage>;
    findAll(): Promise<ProductSliderImage[]>;
    findOne(id: number): Promise<ProductSliderImage>;
    update(id: number, updateProductSliderImageDto: UpdateProductSliderImageDto): Promise<ProductSliderImage>;
    remove(id: number): Promise<string>;
}
