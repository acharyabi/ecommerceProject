"use client";
import { useFetchData } from "@/app/_components/hooks/useFetchData";
import PrimaryButton from "@/app/_components/ui/button";
import { StarRating } from "@/app/_components/ui/rating";
import { constants } from "@/app/_constants/constants";
import { DonutsPackCard, SliderImage } from "@/app/_types/post_card";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCircleMinus } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";
import ImageSlider from "@/app/_components/ui/image-slider";
import { useRouter } from "next/navigation";
export default function DescriptionPage() {
  const { id } = useParams();
  const getByIdUrl = `${constants.products}/${id}`;
  const [itemsNumber, setItemsNumber] = useState(1);
  const [hoverColor, setHoverColor] = useState(false);
  const router = useRouter();
  const [cartProduct, setCartProduct] = useState<DonutsPackCard[]>([]);
  const onMinusClick = () => {
    if (itemsNumber > 1) {
      setItemsNumber(itemsNumber - 1);
    }
  };
  const {
    isError,
    isLoading,
    data: responseData,
  } = useFetchData<DonutsPackCard>(getByIdUrl);
  if (isLoading) {
    <div>loading...</div>;
  }
  useEffect(() => {
    const storedCartString = localStorage.getItem("cart");
    if (storedCartString) {
      const storedCartArray = JSON.parse(storedCartString);
      setCartProduct(storedCartArray);
    }
  }, []);

  const addToCartHandler = () => {
    setCartProduct((prevProducts) => {
      const updateProductIndex = prevProducts.findIndex(
        (product) => product.id === responseData?.id
      );
      if (updateProductIndex !== -1) {
        const updatedCart = [...prevProducts];
        updatedCart[updateProductIndex].itemsNumber = itemsNumber;
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      } else {
        const newProducts = { ...responseData, itemsNumber };
        const updatedCart = [...prevProducts, newProducts];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      }
    });
    router.push("/cart");
  };
  console.log(cartProduct);
  return (
    <div className="my-16 ">
      <section className="flex flex-col items-center justify-center pb-10  font-Fredoka">
        <p>{responseData?.name}</p>
        <StarRating star={responseData?.rating as number} />
        <p>${responseData?.price}</p>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10  ">
        <div>
          <ImageSlider
            slidingImage={responseData?.sliderImage as SliderImage[]}
          />
        </div>
        <div className="flex flex-col gap-6">
          <p className="max-w-[550px]">{responseData?.description}</p>
          <div className=" flex flex-col gap-6 shadow-alldirection p-4">
            <div className="border-2 border-bordercolor p-6 rounded-3xl flex flex-col sm:flex-row items-center justify-center gap-4">
              <p className="font-Fredoka">Select a Uniquie Quantity </p>
              <div className="border-2 flex  items-center justify-center gap-4 rounded-full border-bordercolor px-4 py-2 ">
                <FaCircleMinus
                  className="w-6 h-6 cursor-pointer"
                  onClick={onMinusClick}
                  style={{ color: itemsNumber < 2 ? "gray" : "black" }}
                />
                <p className="font-bold">
                  <span>{itemsNumber}</span>
                  <span>pack</span>
                </p>
                <FaCirclePlus
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => setItemsNumber(itemsNumber + 1)}
                />
              </div>
            </div>
            <div>
              <button
                className=" flex gap-3 items-center justify-center relative w-full bg-primary border-2 border-primary py-5 rounded-full font-Fredoka text-white hover:bg-white hover:text-primary"
                onMouseEnter={() => setHoverColor(true)}
                onMouseLeave={() => setHoverColor(false)}
                onClick={() => addToCartHandler()}
              >
                <IoCartOutline
                  className=" w-6 h-6"
                  style={{ color: hoverColor ? "#F453AD" : "#F5F5F5" }}
                />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
