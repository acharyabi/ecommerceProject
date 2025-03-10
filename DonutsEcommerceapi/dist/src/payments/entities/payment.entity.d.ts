import { Model } from 'sequelize-typescript';
import { Order } from 'src/order/entities/order.entity';
export declare class Payment extends Model<Payment> {
    id: number;
    payment_method: string;
    status: 'pending' | 'cancelled' | 'completed' | 'shipped';
    amount_paid: number;
    card_number: string;
    card_name: string;
    expiry_date: string;
    cvc: number;
    order_id: number;
    order: Order;
}
