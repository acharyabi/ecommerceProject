"use client";
import PrimaryButton from "@/app/_components/ui/button";
import { useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import PaymentForm from "../_component/payment-form";
export default function Payment() {
  type Selection = "cash on delivery" | "online payment" | "";
  const [selection, setSelection] = useState<Selection>("");
  return (
    <div className="my-12">
      <p className=" text-center  text-3xl font-Fredoka mb-4 text-primary">
        Payment
      </p>
      <p className="font-Fredoka text-primary mb-8">
        SELECT CASH ON DELIVERY OR ONLINE PAYMENT
      </p>
      <section>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-8 mb-10">
          <div
            className="flex justify-center border-2 rounded-xl text-primary p-1 md:p-8  cursor-pointer items-center gap-3 "
            onClick={() => setSelection("cash on delivery")}
          >
            {selection === "cash on delivery" ? (
              <FaCircleCheck className="w-6 h-6 sm:h-10 sm:w-10" />
            ) : (
              <FaRegCircle className="w-6 h-6 sm:h-10 sm:w-10" />
            )}

            <p className="text-lg  font-bold">CASH ON DELIVERY</p>
          </div>

          <div
            className="flex border-2 p-1 rounded-xl md:p-8 justify-center text-primary cursor-pointer items-center gap-3"
            onClick={() => setSelection("online payment")}
          >
            {selection === "online payment" ? (
              <FaCircleCheck className="w-6 h-6 sm:h-10 sm:w-10" />
            ) : (
              <FaRegCircle className="w-6 h-6 sm:h-10 sm:w-10" />
            )}
            <p className=" text-lg font-bold text-primary">ONLINE PAYMENT</p>
          </div>
        </div>

        {selection === "cash on delivery" ? (
          <div>
            <section className="p-8  h-52 border-2 rounded-xl ">
              <p className="text-center text-base">
                You will pay when your product is delivered.
              </p>
            </section>
          </div>
        ) : null}
        {selection === "online payment" ? (
          <div>
            <section className="p-8  border-2  rounded-xl ">
              <p className="text-center font-bold text-primary">
                Select the Payment method
              </p>
              <PaymentForm />
            </section>
          </div>
        ) : null}
      </section>
    </div>
  );
}
