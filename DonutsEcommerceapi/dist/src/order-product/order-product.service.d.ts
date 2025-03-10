import { CreateOrderProductDto } from './dto/create-order-product.dto';
import { UpdateOrderProductDto } from './dto/update-order-product.dto';
export declare class OrderProductService {
    create(createOrderProductDto: CreateOrderProductDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateOrderProductDto: UpdateOrderProductDto): string;
    remove(id: number): string;
}
