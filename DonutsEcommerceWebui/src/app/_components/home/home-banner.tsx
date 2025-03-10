import PrimaryButton from "../ui/button";
export default function HomeBanner() {
  return (
    <div className=" my-16  md:my-24">
      <section className="grid grid-rows  sm:grid-cols-2 gap-10 ">
        <img
          src="Mealdeal_home_desktop.svg"
          alt="homebanner"
          className=" h-[350px] sm:h-[400px] object-contain"
        />
        <div className=" flex flex-col items-center gap-3">
          <div className="flex items-center font-Fredoka gap-3">
            <p className=" text-7xl lg:text-9xl text-primary ">$10</p>
            <p className="text-5xl lg:text-7xl w-[150px] lg:w-[300px] leading-[50px] lg:leading-[80px] text-[#FF9E62]">
              MEAL DEAL
            </p>
          </div>
          <div className="flex items-center justify-center ">
            <PrimaryButton lable="View Menu" />
          </div>
          <p className="font-sans text-center ">
            Excludes espresso and cold brew beverages, seasoned bacon, and
            loaded hash browns. Offer valid on Bacon, Egg & Cheese breakfast
            sandwiches only. Participation may vary. Limited time offer. Cannot
            be combined with other offers. Terms apply.
          </p>
        </div>
      </section>
    </div>
  );
}
