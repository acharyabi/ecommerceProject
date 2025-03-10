import { Model } from 'sequelize-typescript';
import { Order } from 'src/order/entities/order.entity';
export declare class User extends Model<User> {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    password: string;
    email: string;
    postal_code: string;
    city: string;
    address: string;
    appartment: string;
    order: Order[];
}
