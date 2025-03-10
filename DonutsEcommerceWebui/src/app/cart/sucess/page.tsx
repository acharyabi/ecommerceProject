"use client";
import Image from "next/image";
import { DonutsPackCard } from "@/app/_types/post_card";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function SucessPage() {
  const [cartProducts, setCartProduct] = useState<DonutsPackCard[]>([]);
  const totalPrice = cartProducts.reduce(
    (accumulator, currentvalue) =>
      accumulator +
      (currentvalue?.itemsNumber as number) * parseFloat(currentvalue?.price),
    0
  );
  const router = useRouter();
  useEffect(() => {
    const storedCartString = localStorage.getItem("cart");
    if (storedCartString) {
      const storedCartArray = JSON.parse(storedCartString);
      setCartProduct(storedCartArray);
    }
    localStorage.removeItem("cart");
  }, []);
  return (
    <div>
      <h1 className="text-primary font-bold text-xl text-center m-12">
        Order placed sucessfully
      </h1>
      <section>
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
        <button
          className="px-10 mt-8 py-3 font-Fredoka  bg-primary rounded-full text-white"
          onClick={() => {
            router.push("/");
          }}
        >
          Go to Home Page
        </button>
      </section>
    </div>
  );
}
