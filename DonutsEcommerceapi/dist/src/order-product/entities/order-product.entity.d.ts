import { Model } from 'sequelize-typescript';
export declare class OrderProduct extends Model<OrderProduct> {
    order_id: number;
    product_id: number;
    quantity: number;
}
