export declare class CreateOrderDto {
    order_date: string;
    status: 'pending' | 'completed' | 'cancelled' | 'shipped';
    total_amount: number;
    user_id: number;
    products: Array<{
        product_id: number;
        quantity: number;
    }>;
}
