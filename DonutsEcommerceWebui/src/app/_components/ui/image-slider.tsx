import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderImage } from "@/app/_types/post_card";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
interface ArrowProps {
  onClick?: () => void;
  style?: React.CSSProperties;
}
function SampleNextArrow({ onClick, style }: ArrowProps) {
  return (
    <IoIosArrowDroprightCircle
      style={{ ...style }}
      className="h-12 w-12 text-primary cursor-pointer absolute -right-12 top-2 sm:-right-16 sm:top-10 "
      onClick={onClick}
    />
  );
}

function SamplePrevArrow({ onClick, style }: ArrowProps) {
  return (
    <IoIosArrowDropleftCircle
      style={{ ...style }}
      onClick={onClick}
      className=" h-12 w-12 text-primary cursor-pointer absolute -left-12 top-2 sm:-left-16 sm:top-10   "
    />
  );
}

export default function ImageSlider({
  slidingImage,
}: {
  slidingImage: SliderImage[];
}) {
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);
  let sliderRef1 = useRef<Slider | null>(null);
  let sliderRef2 = useRef<Slider | null>(null);

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: nav2,
  };

  const settingsNav = {
    asNavFor: nav1,
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  return (
    <div className="ml-10 sm:ml-20  ">
      <Slider {...settingsMain} ref={(slider) => (sliderRef1 = slider)}>
        {slidingImage?.map((data) => (
          <div key={data.altText}>
            <img
              src={data.image}
              alt={data.altText}
              className="h-[400px] object-contain "
              key={data.altText}
            />
          </div>
        ))}
      </Slider>

      <div className=" max-w-[200px] sm:max-w-[400px] ">
        <Slider {...settingsNav} ref={(slider) => (sliderRef2 = slider)}>
          {slidingImage?.map((data) => (
            <img src={data.image} alt={data.altText} key={data.altText} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
