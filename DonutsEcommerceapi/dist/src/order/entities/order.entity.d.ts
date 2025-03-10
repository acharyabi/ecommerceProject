import { Model } from 'sequelize-typescript';
import { Customer } from 'src/customer/entities/customer.entity';
import { Payment } from 'src/payments/entities/payment.entity';
import { Product } from 'src/products/entities/product.entity';
import { User } from '../../users/entities/user.entity';
export declare class Order extends Model<Order> {
    id: number;
    status: 'pending' | 'completed' | 'cancelled' | 'shipped';
    order_date: string;
    total_amount: number;
    user_id: number;
    user: User;
    customer_id: number;
    customer: Customer;
    product: Product[];
    payment: Payment;
}
