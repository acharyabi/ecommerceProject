"use client";
import Hero from "@/app/_components/hero/Hero";
import { useFetchData } from "./_components/hooks/useFetchData";
import { constants } from "@/app/_constants/constants";
import { RewardPost } from "@/app/_types/post_card";
import HomeBanner from "@/app/_components/home/home-banner";
import PrimaryButton from "@/app/_components/ui/button";
import CookiesBanner from "./_components/home/cookies-banner";
import MenuNavigateCard from "./_components/home/menu-navigate-card";
import { REWARD_POST } from "@/app/_components/constraints/reward-post-data";
export default function Home() {
  return (
    <div>
      <section>
        <Hero />

        <section className="flex flex-col sm:flex-row justify-center gap-8   sm:items-center mb-10 mt-10 md:mt-32  ">
          {REWARD_POST.map((postData: RewardPost) => (
            <div
              key={postData.id}
              className="flex flex-row   sm:flex-col sm:h-[350px] items-center sm:w-[300px] gap-3 "
            >
              <img
                src={postData.img}
                alt={postData.title}
                className=" h-24 w-24 md:h-52 md:w-52 rounded-full object-contain cursor-pointer md:transition-transform md:duration-300 md:hover:scale-110"
              />

              <div className="text-center">
                <p className="font-Fredoka">{postData.title}</p>
                <p className="font-sans ">{postData.description}</p>
              </div>
            </div>
          ))}
        </section>

        <div className="flex justify-center items-center mb-12">
          <PrimaryButton lable="Learn More" />
        </div>
        <hr />
        <MenuNavigateCard />
        <hr />
        <HomeBanner />
        <hr />
        <CookiesBanner />
      </section>
    </div>
  );
}
