export declare class CreatePaymentDto {
    payment_method: string;
    status: 'pending' | 'cancelled' | 'completed' | 'shipped';
    order_id: number;
    cardNumber: string;
    card_name: string;
    expiryDate: string;
    cvc: number;
}
