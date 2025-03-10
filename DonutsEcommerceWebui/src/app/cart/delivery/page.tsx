"use client";
import PrimaryButton from "@/app/_components/ui/button";
import { useState, useContext, useEffect } from "react";
import { FaRegCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { CartContext } from "../cart-context";
type Selection = "delivery" | "click and collect" | "";
export default function DeliveryOption() {
  const router = useRouter();
  const { orderDetails, setCustomerDetails, customerDetails } =
    useContext(CartContext);
  const storeLocation = [
    {
      value: 1,
      lable: "First Street ",
    },
    {
      value: 2,
      lable: "Second Street ",
    },
    {
      value: 3,
      lable: "Third Street ",
    },
    {
      value: 4,
      lable: "Fourth Street ",
    },
  ];

  const [selection, setSelection] = useState<Selection>("");

  useEffect(() => {
    setCustomerDetails({ deliveyOption: selection } as never);
  }, [selection]);
  return (
    <div className="my-12 ">
      <p className=" text-center  text-3xl font-Fredoka mb-4 text-primary">
        {" "}
        Delivery Option
      </p>
      <p className="font-Fredoka text-primary mb-8">
        SELECT DELIVERY OR CLICK & CORRECT
      </p>
      <section>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-8 mb-10">
          <div
            className="  flex justify-center border-2 rounded-xl text-primary p-1 md:p-8  cursor-pointer items-center gap-3 "
            onClick={() => setSelection("delivery")}
          >
            {selection === "delivery" ? (
              <FaCircleCheck className=" w-6 h-6 sm:h-10 sm:w-10 " />
            ) : (
              <FaRegCircle className="w-6 h-6 sm:h-10 sm:w-10 " />
            )}

            <p className="  text-lg  font-bold ">DELIVERY</p>
          </div>

          <div
            className="flex border-2 p-1 rounded-xl md:p-8 justify-center text-primary cursor-pointer items-center gap-3"
            onClick={() => setSelection("click and collect")}
          >
            {selection === "click and collect" ? (
              <FaCircleCheck className="w-6 h-6 sm:h-10 sm:w-10" />
            ) : (
              <FaRegCircle className="w-6 h-6 sm:h-10 sm:w-10" />
            )}
            <p className="  text-lg font-bold text-primary">
              CLICK AND COLLECT
            </p>
          </div>
        </div>

        {selection === "delivery" ? (
          <div>
            <section className="p-8  h-52 border-2 rounded-xl ">
              <p className="text-center font-bold text-primary">
                Enter delivery postal code
              </p>
              <p className="text-center text-base">
                Enter the postal code where you want to deliver
              </p>
              <div className="flex  justify-center gap-6 pt-8">
                <input
                  type="text"
                  className="p-4 w-[300px] focus:no-underline border-2 rounded-full"
                  placeholder="postal code"
                />
              </div>
            </section>
          </div>
        ) : null}
        {selection === "click and collect" ? (
          <div>
            <section className="p-8  h-52 border-2  rounded-xl ">
              <p className="text-center font-bold text-primary">
                Select the Ever Donuts Store
              </p>
              <p className="text-center text-base">
                Select the store where you want to pick the product
              </p>
              <div className="flex gap-6 justify-center pt-8">
                <select className="p-4 cursor-pointer w-[300px] border-2 rounded-full">
                  <option value="">Select the near Store</option>
                  {storeLocation.map((data) => (
                    <option value={data.value}>{data.lable}</option>
                  ))}
                </select>
              </div>
            </section>
          </div>
        ) : null}
        <div className="my-10" onClick={() => router.push("/cart/payment")}>
          <PrimaryButton lable="Proceed to payment" />
        </div>
      </section>
    </div>
  );
}
