import { createContext, useState } from "react";
export interface PaymentDetails {
  card_number: string;
  card_name: string;
  expiry_date: string;
  cvc: string;
  amount_paid: number;
}
export interface OrderDetails {
  productId: number;
  quantity: number;
}
export interface CustomerDetails {
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
}
export interface CartContextData {
  paymentDetails: PaymentDetails | undefined;
  orderDetails: OrderDetails[] | undefined;
  customerDetails: CustomerDetails | undefined;
  setPaymentDetails: (details: PaymentDetails) => void;
  setOrderDetails: (details: OrderDetails[]) => void;
  setCustomerDetails: (details: CustomerDetails) => void;
}
export const CartContext = createContext<CartContextData>(
  {} as CartContextData
);
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails>();
  const [orderDetails, setOrderDetails] = useState<OrderDetails[]>();
  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>();

  return (
    <CartContext.Provider
      value={{
        paymentDetails,
        setPaymentDetails,
        orderDetails,
        setOrderDetails,
        customerDetails,
        setCustomerDetails,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
