export interface CustomerOrder {
  order_date: string;
  deliveyOption: string;
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  address: string;
  appartment: string;
  city: string;
  postalcode: string;
  paymentDetails: {
    card_number: string;
    card_name: string;
    expiry_date: string;
    cvc: string;
    amount_paid: string;
  };
  orderDetails: {
    productId: number;
    quantity: number;
  }[];
}
