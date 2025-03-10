import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { Product } from 'src/products/entities/product.entity';
import { OrderProduct } from 'src/order-product/entities/order-product.entity';
export declare class OrderService {
    private readonly orderModel;
    private readonly productModel;
    private readonly orderProductModel;
    constructor(orderModel: typeof Order, productModel: typeof Product, orderProductModel: typeof OrderProduct);
    create(createOrderDto: CreateOrderDto): Promise<Order>;
    findAll(): Promise<Order[]>;
    findOne(id: number): Promise<Order>;
    update(id: number, updateOrderDto: UpdateOrderDto): Promise<Order>;
    remove(id: number): Promise<string>;
}
