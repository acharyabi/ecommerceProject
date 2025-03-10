import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Order } from 'src/order/entities/order.entity';
import { Payment } from 'src/payments/entities/payment.entity';
import { Sequelize } from 'sequelize-typescript';
import { Customer } from './entities/customer.entity';
import { Product } from 'src/products/entities/product.entity';
import { OrderProduct } from 'src/order-product/entities/order-product.entity';
import { User } from 'src/users/entities/user.entity';
export declare class CustomerService {
    private readonly customerModel;
    private readonly userModel;
    private readonly orderModel;
    private readonly paymentModel;
    private readonly productModel;
    private readonly orderProductModel;
    private sequelize;
    constructor(customerModel: typeof Customer, userModel: typeof User, orderModel: typeof Order, paymentModel: typeof Payment, productModel: typeof Product, orderProductModel: typeof OrderProduct, sequelize: Sequelize);
    create(createCustomerDto: CreateCustomerDto): Promise<Customer>;
    findAll(): Promise<Customer[]>;
    findOne(id: number): string;
    update(id: number, updateCustomerDto: UpdateCustomerDto): string;
    remove(id: number): Promise<string>;
}
