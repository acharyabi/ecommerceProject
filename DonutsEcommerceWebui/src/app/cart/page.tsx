"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState, useContext } from "react";
import { MdLockOutline } from "react-icons/md";
import { DonutsPackCard } from "../_types/post_card";
import { CartContext, OrderDetails } from "./cart-context";
export default function CartPage() {
  const [cartProducts, setCartProduct] = useState<DonutsPackCard[]>([]);
  const router = useRouter();
  const { orderDetails, setOrderDetails } = useContext(CartContext);
  useEffect(() => {
    const storedCartString = localStorage.getItem("cart");
    if (storedCartString) {
      const storedCartArray = JSON.parse(storedCartString);
      setCartProduct(storedCartArray);
      let orderData: OrderDetails[] = [];
      storedCartArray.map((value: DonutsPackCard) => {
        orderData?.push({
          productId: value.id,
          quantity: value.itemsNumber as number,
        });
      });
      setOrderDetails(orderData as never);
    }
  }, [localStorage.getItem("cart")]);
  console.log("testing", orderDetails);
  const totalPrice = cartProducts.reduce(
    (accumulator, currentvalue) =>
      accumulator +
      (currentvalue?.itemsNumber as number) * parseFloat(currentvalue?.price),
    0
  );
  console.log("cartitam", cartProducts);
  const deleteProductHandler = (idTodelete: number) => {
    setCartProduct((prev) =>
      cartProducts?.filter((data) => data.id !== idTodelete)
    );
    const updatedCart = cartProducts?.filter((data) => data.id !== idTodelete);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const heading = ["PRICE", "QTY", "SUB TOTAL"];
  return (
    <div className="my-12 ">
      <h1 className=" text-center  text-3xl font-Fredoka text-primary">
        SHOPPING CART
      </h1>
      <div className=" flex justify-between my-4">
        <p
          className="font-Fredoka text-primary underline cursor-pointer"
          onClick={() => router.push("/")}
        >
          CONTINUE SHOPPING
        </p>
        <div className="flex flex-col gap-2">
          <div onClick={() => router.push("/cart/delivery")}>
            <button className=" px-2 py-1 sm:px-10 sm:py-3 font-Fredoka  bg-primary rounded-full text-white">
              PROCEED TO NEXT STEP
            </button>
          </div>
          <div className="flex items-center justify-center">
            <MdLockOutline className="h-6 w-6 text-primary" />
            <p className="font-bold">SAFE AND SECURE SHOOPING</p>
          </div>
        </div>
      </div>
      <section className=" hidden md:grid grid-cols-5 font-Fredoka mb-10 mt-20 text-primary">
        <h1 className="col-span-2">PRODUCT</h1>
        {heading.map((data: string) => (
          <h1 key={data}>{data}</h1>
        ))}
      </section>
      <hr />
      <section>
        {cartProducts.map((product) => (
          <div key={product.id}>
            <div className="grid grid-cols-2 gap-y-6 md:grid-cols-5 my-8 ">
              <p className=" items-center  md:col-span-2 ">
                <img
                  src={product.image}
                  alt=""
                  className="md:h-40 md:w-40 h-16 w-16"
                />
                <div className="text-primary font-Fredoka">{product.name}</div>
              </p>
              <p className="flex items-center place-self-center md:place-self-auto font-semibold">
                ${product.price}
              </p>
              <p className="flex items-center  place-self-center md:place-self-auto font-semibold ">
                {product.itemsNumber}
              </p>
              <p className="flex items-center font-semibold place-self-center md:place-self-auto">
                <span className="block md:hidden">SubTotal:</span>$
                {parseFloat(product?.price) * (product?.itemsNumber as number)}
              </p>
            </div>
            <p
              className="pb-4 underline text-red-700 cursor-pointer"
              onClick={() => deleteProductHandler(product.id)}
            >
              Delete
            </p>
            <hr />
          </div>
        ))}
      </section>
      <hr />
      <p className=" mt-6 text-primary py-10 border-2 border-primary text-center text-xl font-Fredoka">
        Total Price : ${Math.floor(totalPrice)}
      </p>
    </div>
  );
}
