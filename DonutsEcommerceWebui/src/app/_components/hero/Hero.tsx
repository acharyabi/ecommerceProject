export default function Hero() {
  return (
    <div className="py-16 grid grid-row-2 gap-6 sm:gap-0 sm:grid sm:grid-cols-2 sm:h-[400px]  ">
      <section className="  flex flex-col gap-4  ">
        <p className=" text-3xl lg:text-7xl font-Fredoka text-primary">
          Sweet Donuts
        </p>
        <p className="flex items-center">
          <span className="text-primary font-Fredoka  text-xl lg:text-4xl">
            Take a bite
          </span>
        </p>
        <p className="font-sans font-semibold max-w-96">
          It’s as easy as 1, 2, FREE! Join Ever Donut Rewards to unlock
          exclusive benefits, starting with a FREE daily medium drink with
          purchase your first two weeks as a member!
        </p>
        <p className="py-2  text-3xl lg:text-5xl   text-primary  font-Fredoka rounded-full">
          789-321
        </p>
      </section>
      <section className="place-self-center">
        <img
          src="donuts.png"
          alt="img"
          className=" h-[200px] sm:h-[400px] object-contain"
        />
      </section>
    </div>
  );
}
