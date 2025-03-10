"use client";

/**
 * Payment Form Component
 * Handles customer payment information and order processing
 */
import PrimaryButton from "@/app/_components/ui/button";
import { DonutsPackCard } from "@/app/_types/post_card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { FaCcMastercard } from "react-icons/fa";
import { LiaCcVisa } from "react-icons/lia";
import { PaymentSchema, paymentSchema } from "./schema/payment-schema";
import { CartContext, OrderDetails } from "../cart-context";
import { CustomerOrder } from "./types/customer";
import axios from "axios";
import useSWRMutation from "swr/mutation";
import { constants } from "@/app/_constants/constants";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";

/**
 * Helper function to handle customer order submission
 * @param url - API endpoint for order submission
 * @param data - Customer order data
 * @returns Promise with the API response
 */
const postData = async (url: string, data: CustomerOrder) => {
  const response = await axios.post(url, data);
  return response.data;
};

export default function PaymentForm() {
  const router = useRouter();

  // Access cart context for order details
  const {
    customerDetails,
    orderDetails,
    paymentDetails,
    setCustomerDetails,
    setOrderDetails,
    setPaymentDetails,
  } = useContext(CartContext);

  // Mutation hook for customer order submission
  const { trigger: mutateCustomerOrder, isMutating } = useSWRMutation(
    constants.customer,
    (url: string, { arg }: { arg: CustomerOrder }) => postData(url, arg),
    {
      onSuccess: (data) => {
        router.push("/cart/sucess");
      },
      onError: (err) => {
        console.error("Login error:", err);
      },
    }
  );

  // Form handling with zod validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentSchema>({
    resolver: zodResolver(paymentSchema),
  });

  // State for cart products
  const [cartProducts, setCartProduct] = useState<DonutsPackCard[]>([]);

  // Load cart products from localStorage
  useEffect(() => {
    const storedCartString = localStorage.getItem("cart");
    if (storedCartString) {
      const storedCartArray = JSON.parse(storedCartString);
      setCartProduct(storedCartArray);
    }
  }, []);

  // Calculate total price of cart items
  const totalPrice = cartProducts.reduce(
    (accumulator, currentvalue) =>
      accumulator +
      (currentvalue?.itemsNumber as number) * parseFloat(currentvalue?.price),
    0
  );

  /**
   * Handles form submission and order processing
   * @param value - Form values containing payment and shipping information
   */
  const submitHandler = (value: PaymentSchema) => {
    const customerData: CustomerOrder = {
      address: value.address,
      appartment: value.appartment as string,
      city: value.city,
      company: value.company as string,
      email: value.email,
      first_name: value.firstName,
      last_name: value.lastName,
      postalcode: value.postalCode,
      order_date: `${dayjs().format("YYYY-MM-DD HH:mm:ss")}`,
      deliveyOption: customerDetails?.deliveyOption as string,
      orderDetails: orderDetails as OrderDetails[],
      paymentDetails: {
        card_name: value.nameOnCard,
        card_number: value.cardNumber,
        cvc: value.securityCode,
        expiry_date: value.expiryDate,
        amount_paid: value.amountPaid,
      },
    };

    mutateCustomerOrder(customerData);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="grid grid-cols-1 md:grid-cols-2 gap-16 "
      >
        {/* Contact Information Section */}
        <section>
          <div>
            <h1 className="my-4 font-bold text-primary">Contact Information</h1>
            <input
              type="email"
              className="w-full border-2 p-2 rounded-lg"
              {...register("email")}
              placeholder="Email"
            />
            <p className="text-red-500">{errors.email?.message}</p>
          </div>

          {/* Shipping Address Section */}
          <div>
            <h1 className="my-4 font-bold text-primary">Shipping Address</h1>
            <div className=" grid grid-cols-2 gap-3 gap-y-8">
              <div>
                <input
                  type="text"
                  className="w-full border-2 p-2 rounded-lg"
                  {...register("firstName")}
                  placeholder="First name"
                />
                <p className="text-red-500">{errors.firstName?.message}</p>
              </div>
              <div>
                <input
                  type="text"
                  className="w-full border-2 p-2 rounded-lg"
                  {...register("lastName")}
                  placeholder="Last name"
                />
                <p className="text-red-500">{errors.lastName?.message}</p>
              </div>
              <div>
                <input
                  type="text"
                  className="w-full border-2 p-2 rounded-lg"
                  {...register("company")}
                  placeholder="Company(optional)"
                />
                <p className="text-red-500">{errors.company?.message}</p>
              </div>
              <div>
                <input
                  type="text"
                  className="w-full border-2 p-2 rounded-lg"
                  {...register("address")}
                  placeholder="Address"
                />
                <p className="text-red-500">{errors.address?.message}</p>
              </div>
              <div>
                <input
                  type="text"
                  className="w-full border-2 p-2 rounded-lg"
                  {...register("appartment")}
                  placeholder="Appartment (optional)"
                />
                <p className="text-red-500">{errors.appartment?.message}</p>
              </div>
              <div>
                <input
                  type="text"
                  className="w-full border-2 p-2 rounded-lg"
                  {...register("city")}
                  placeholder="City"
                />
                <p className="text-red-500">{errors.city?.message}</p>
              </div>
              <div>
                <input
                  type="text"
                  className="w-full border-2 p-2 rounded-lg"
                  {...register("postalCode")}
                  placeholder="Postal code"
                />
                <p className="text-red-500">{errors.postalCode?.message}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Method Section */}
        <section>
          <h1 className="my-4 font-bold text-primary">Payment Method</h1>
          <div className="border-2 px-3 ">
            <div className=" py-3 flex justify-between ">
              <h1 className="font-semibold">Credit card</h1>
              <div className="flex gap-2">
                <LiaCcVisa className="h-8 w-8" />
                <FaCcMastercard className="h-8 w-8" />
              </div>
            </div>
            <div className=" grid grid-cols-1 gap-y-8 mb-4">
              <div>
                <input
                  type="text"
                  className="w-full border-2 p-2 rounded-lg"
                  {...register("cardNumber")}
                  placeholder="Card number"
                />
                <p className="text-red-500">{errors.cardNumber?.message}</p>
              </div>

              <div>
                <input
                  type="text"
                  className="w-full border-2 p-2 rounded-lg"
                  {...register("nameOnCard")}
                  placeholder="Name on card"
                />
                <p className="text-red-500">{errors.nameOnCard?.message}</p>
              </div>
              <div>
                <input
                  type="date"
                  className="w-full border-2 p-2 rounded-lg"
                  {...register("expiryDate")}
                  placeholder="Expiration date(MM/YYYY)"
                />
                <p className="text-red-500">{errors.expiryDate?.message}</p>
              </div>
              <div>
                <input
                  type="text"
                  className="w-full border-2 p-2 rounded-lg"
                  {...register("securityCode")}
                  placeholder="Security code"
                />
                <p className="text-red-500">{errors.securityCode?.message}</p>
              </div>
              <div>
                <input
                  type="text"
                  className="w-full border-2 p-2 rounded-lg"
                  {...register("amountPaid")}
                  placeholder="Billing Amount"
                />
                <p className="text-red-500">{errors.amountPaid?.message}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Order Summary Section */}
        <section>
          <h1 className="my-4 font-bold text-primary">Order Summary</h1>
          <div className="border-2 py-4 rounded-lg  text-sm  px-2 md:px-3 max-w-[500px]">
            {cartProducts.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between mb-10 "
              >
                <div className="flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-8 w-8"
                  />
                  <p className="relative">
                    {product.name}
                    <span className="absolute -top-3">
                      ({product.itemsNumber})
                    </span>
                  </p>
                </div>
                <p>${product.price}</p>
              </div>
            ))}
            <div className="my-10 flex justify-between">
              <p>TOTAL PRICE</p>
              <p>USD ${Math.floor(totalPrice)}</p>
            </div>
          </div>
          <div className="my-10">
            <PrimaryButton lable="Check Out" />
          </div>
        </section>
      </form>
    </div>
  );
}
