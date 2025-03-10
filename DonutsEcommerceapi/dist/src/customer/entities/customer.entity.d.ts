import { Model } from 'sequelize-typescript';
import { Order } from 'src/order/entities/order.entity';
export declare class Customer extends Model<Customer> {
    id: number;
    first_name: string;
    last_name: string;
    company: string;
    email: string;
    postal_code: string;
    city: string;
    address: string;
    appartment: string;
    order: Order[];
}
