"use client";
import { MenuCardPost } from "@/app/_types/post_card";
import { useFetchData } from "../hooks/useFetchData";
import { constants } from "@/app/_constants/constants";
import { FaGreaterThan } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { MENU_CARD_DATA } from "@/app/_components/constraints/menu-navigate-data";
export default function MenuNavigateCard() {
  const route = useRouter();

  return (
    <div className="grid grid-cols-1 my-16 md:my-24  sm:grid-cols-2 lg:grid-cols-3  gap-16">
      {MENU_CARD_DATA.map((cardData: MenuCardPost) => (
        <section
          key={cardData.id}
          className=" rounded-3xl cursor-pointer"
          style={{ background: cardData.bgcolor }}
          onClick={() => route.push(cardData.url)}
        >
          <p className=" flex items-center justify-center h-[100px] font-Fredoka text-white text-2xl">
            {cardData.title}
          </p>
          <img
            src={cardData.image}
            alt={cardData.title}
            className=" w-full object-contain"
          />
          <div className="flex items-center h-[100px] justify-center ">
            <button className="px-9 py-2 font-Fredoka   bg-white text-black rounded-full hover:bg-[#B02A31] hover:text-white  hover:border-green-800 hover:border-2 relative ">
              {cardData.buttonTitle}
              <FaGreaterThan className="absolute right-3 top-3 text-[#E2AF2D] " />
            </button>
          </div>
        </section>
      ))}
    </div>
  );
}
