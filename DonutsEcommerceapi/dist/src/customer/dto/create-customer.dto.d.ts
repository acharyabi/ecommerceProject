declare class OrderDetails {
    productId: number;
    quantity: number;
}
declare class CreatePaymentDetails {
    card_number: string;
    card_name: string;
    expiry_date: string;
    cvc: number;
    amount_paid: number;
}
export declare class CreateCustomerDto {
    order_date: string;
    deliveyOption: string;
    first_name: string;
    email: string;
    last_name: string;
    company?: string;
    address: string;
    appartment?: string;
    city: string;
    postalcode: string;
    paymentDetails: CreatePaymentDetails;
    orderDetails: OrderDetails[];
}
export {};
