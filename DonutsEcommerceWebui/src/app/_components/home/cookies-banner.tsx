import { constants } from "@/app/_constants/constants";
import { CookieePost } from "@/app/_types/post_card";
import { useFetchData } from "../hooks/useFetchData";
import { COOKIES_POST_DATA } from "@/app/_components/constraints/cookies-data";
export default function CookiesBanner() {
  return (
    <div className="my-16  md:my-24 ">
      <section className="flex flex-col items-center gap-10 justify-center">
        <p className="text-1xl sm:text-3xl text-primary font-Fredoka ">
          WE DESIGN DELICIOUS
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-16 sm:gap-24">
          {COOKIES_POST_DATA?.map((post: CookieePost) => (
            <div
              key={post.id}
              className="flex flex-col items-center justify-center"
            >
              <img
                src={post.image}
                alt={post.title}
                className="transition-transform duration-300 hover:scale-110 hover:cursor-pointer"
              />
              <p className="text-center font-Fredoka">{post.title}</p>
              <p className="text-center font-sans">{post.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
