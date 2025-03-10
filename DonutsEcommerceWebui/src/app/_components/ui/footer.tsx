import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="  grid sm:grid-cols-2 md:grid-cols-3 max-w-[1380px] mx-auto sm:px-14 px-3 gap-10 py-3 md:py-20">
      <section className="flex flex-col gap-2  max-w-[300px]">
        <p className="text-[#FF89D2] text-4xl font-Fredoka">
          EVER <span className="text-[#FFA46B]">DONUTS</span>
        </p>
        <p className="text-xs font-light font-sans leading-loose">
          A modern donut shop showcasing various flavors, interactive ordering,
          location details, and vibrant images to entice customers.
        </p>
        <p className="flex items-center gap-1">
          Follow us on :
          <FaFacebook className="h-6 w-6 cursor-pointer" />
          <FaInstagramSquare className="h-6 w-6 cursor-pointer" />
          <FaTwitterSquare className="h-6 w-6 cursor-pointer" />
        </p>
      </section>
      <section className="flex flex-col gap-1     ">
        <p className="text-2xl font-Fredoka ">In store Product</p>
        <p className="font-sans font-normal underline cursor-pointer">Donuts</p>
        <p className="font-sans font-normal underline cursor-pointer">Coffee</p>
        <p className="font-sans font-normal underline cursor-pointer">Cakes</p>
        <p className="font-sans font-normal underline cursor-pointer">
          Crossiants
        </p>
      </section>
      <section className="flex flex-col gap-1  max-w-[300px] ">
        <p className="text-2xl font-Fredoka">Join the club </p>
        <div>
          <input type="email" placeholder="Email Address" className="p-2" />
          <button className="bg-primary p-2 text-white">JOIN</button>
        </div>
        <p className="font-sans text-sm font-light">
          Sign me up to receive emails on new product arrivals special offers.
        </p>
        <p>
          Contact us: <span>0123456789</span>
        </p>
      </section>
    </div>
  );
}
