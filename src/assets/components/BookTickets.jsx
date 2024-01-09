import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img_s from "../img/sliderimg.webp";
import Earth from "../img/Air_Delivery.webp";
import { LeftArrow, RightArrow } from "../svgfolder/Svg";
import { useRef } from "react";
const BookTickets = () => {
  const first = useRef(null);
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: false,
        },
      },
    ],
  };
  return (
    <div className="bg-[#010223] overflow-hidden">
      <div className=" max-w-[1040px] mx-auto px-3 pt-[50px] pb-[100px]">
        <div className="  grid grid-cols-1 lg:grid-cols-5 -mx-3">
          <div className="col-span-1 lg:col-span-3  px-3">
            <h2 className=" text-white sm:text-[40px] text-2xl font-bold sm:leading-[60px] leading-[30px] tracking-[0.6px]  uppercase lg:max-w-[496px]">
              Book Popular Flight Tickets
            </h2>
            <p className="text-[#A6A7B2]  text-base font-normal leading-[24px] lg:max-w-[496px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
            <img
              src={Earth}
              alt="Earth"
              className=" flex justify-center  w-full max-w-[315px] h-[315px]"
            />
          </div>
          <div className="col-span-1 lg:col-span-2    px-3 relative ">
            <Slider {...settings} ref={first}>
              <div className="flex justify-center items-center w-full">
                <img
                  src={img_s}
                  alt="Sliderimg"
                  className="xl:w-full lg:w-[82%] max-w-[300px]  object-fill   sm:max-w-[390px] "
                />
              </div>

              <div className=" flex justify-center items-center w-full">
                <img
                  src={img_s}
                  alt="Sliderimg"
                  className="xl:w-full lg:w-[82%] max-w-[300px]  object-fill   sm:max-w-[390px]"
                />
              </div>

              <div className=" flex justify-center items-center w-full">
                <img
                  src={img_s}
                  alt="Sliderimg"
                  className="xl:w-full lg:w-[82%] max-w-[300px]  object-fill   sm:max-w-[390px]"
                />
              </div>
              <div className=" flex justify-center items-center w-full">
                <img
                  src={img_s}
                  alt="Sliderimg"
                  className="xl:w-full lg:w-[82%] max-w-[300px]  object-fill   sm:max-w-[390px]"
                />
              </div>
              <div className=" flex justify-center items-center w-full">
                <img
                  src={img_s}
                  alt="Sliderimg"
                  className="xl:w-full lg:w-[60%] max-w-[300px]  object-fill   sm:max-w-[390px]"
                />
              </div>

            </Slider>
            <div className=" flight flex gap-[11px] absolute xl:right-[-12%] right-[3%] bottom-[-11.5%] sm:bottom-[0%] align-items-center flex-row sm:flex-col text-end justify-content-end">
              <button
                className="  block bg-[#1A1B39] hover:bg-[#313EF7] duration-300 hover:shadow-[0_10px_14px_0px_#0B0F50;]  py-[12px] px-[16px] rounded-full"
                onClick={() => first?.current?.slickPrev()}
              >
                <RightArrow />
              </button>
              <button
                className=" block bg-[#1A1B39] hover:bg-[#313EF7] duration-300 hover:shadow-[0_10px_14px_0px_#0B0F50;]  py-[12px] px-[16px] rounded-full "
                onClick={() => first?.current?.slickNext()}
              >
                <LeftArrow />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTickets;