"use client";
import { useFetchData } from "../_components/hooks/useFetchData";
import { constants } from "@/app/_constants/constants";
import { CheckBoxData, DonutsPackCard } from "../_types/post_card";
import { StarRating } from "../_components/ui/rating";
import { useRouter } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useEffect, useState } from "react";
export default function DonutsPack() {
  const [categoryIds, setCategoryIds] = useState<number[]>([]);
  const productUrl =
    categoryIds && categoryIds?.length !== 0
      ? `${constants.products}?categoryIds=${categoryIds}`
      : `${constants.products}`;
  const { data: responseData } = useFetchData<DonutsPackCard[]>(productUrl);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [fillingDrawerOpen, setFillingDrawerOpen] = useState(false);
  const router = useRouter();
  const { data: categoryData } = useFetchData<CheckBoxData[]>(
    constants.category
  );
  console.log("categoryid", categoryIds);

  const handleDonutTypeCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setCategoryIds((prev) => [...prev, id]);
    } else {
      setCategoryIds((prev) => prev.filter((categoryId) => categoryId !== id));
    }
  };

  return (
    <div className="mb-16">
      <section className="flex gap-16  ">
        <div className="  w-[280px] flex flex-col gap-4 pt-32">
          <h1 className=" font-Fredoka  text-lg sm:text-2xl text-[#A2A8AC]  ">
            REFINE BY
          </h1>
          <hr />
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setDrawerOpen(!drawerOpen)}
          >
            <h1 className=" font-Fredoka   text-1xl text-[#A2A8AC]  ">
              DONUTS TYPE
            </h1>
            {drawerOpen ? (
              <IoIosArrowUp className="h-6 w-6 text-[#A2A8AC] " />
            ) : (
              <IoIosArrowDown className="h-6 w-6 text-[#A2A8AC] " />
            )}
          </div>
          {drawerOpen ? (
            <div className="flex flex-col gap-4">
              {categoryData?.map((item: CheckBoxData) => (
                <div className="" key={item.id}>
                  <label className="flex gap-4  ">
                    <input
                      type="checkbox"
                      name={item.category_name}
                      className="h-7 w-7"
                      onChange={(e) =>
                        handleDonutTypeCheckboxChange(e, item.id)
                      }
                    />
                    {item.category_name}
                  </label>
                </div>
              ))}
            </div>
          ) : null}
          <hr />
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setFillingDrawerOpen(!fillingDrawerOpen)}
          >
            <h1 className=" font-Fredoka   text-1xl text-[#A2A8AC]  ">
              DONUTS Filling
            </h1>
            {fillingDrawerOpen ? (
              <IoIosArrowUp className="h-6 w-6 text-[#A2A8AC] " />
            ) : (
              <IoIosArrowDown className="h-6 w-6 text-[#A2A8AC] " />
            )}
          </div>
          <hr />
        </div>
        <div>
          <div>
            <p className="flex items-center justify-center text-primary text-2xl sm:text-5xl font-Fredoka py-10">
              DONUTS PACKS
            </p>
          </div>
          {responseData ? (
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6  ">
              {responseData?.map((donutsPackData: DonutsPackCard) => (
                <section
                  key={donutsPackData.id}
                  className="shadow-alldirection   flex flex-col gap-3 text-center  cursor-pointer"
                  onClick={() =>
                    router.push(`/donuts-pack/${donutsPackData.id}`)
                  }
                >
                  <img
                    src={donutsPackData.image}
                    className="object-contain h-60 w-60"
                  />
                  <div className="flex flex-col items-center justify-center gap-2 pb-4">
                    <StarRating star={donutsPackData.rating} />
                    <p className="font-Fredoka">{donutsPackData.name}</p>
                    <p className="font-Fredoka ">${donutsPackData.price}</p>
                  </div>
                </section>
              ))}
            </div>
          ) : (
            <p className="flex items-center justify-center text-red-600 text-2xl sm:text-5xl font-Fredoka py-10">
              NO PRODUCTS WITH CURRENT FILTER
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
