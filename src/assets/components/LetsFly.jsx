

import React from "react";
import NewYork from "../img/NewYork_img.png";
import lineimg from "../img/dot_line2.png";
import dots from "../img/dots.png";
const LetsFly = () => {
    return (
        <>
            <div className="max-w-[1200px] mx-auto px-3 py-12 grid grid-cols-1 lg:grid-cols-2 gap-9 relative z-[1]">
                <div className="span-cols-2 w-full px-3 flex justify-center  ">
                    <img src={NewYork} alt="NewYork" className=" w-[95%] sm:w-[80%] lg:w-full" />
                </div>
                <div className="span-cols-2 w-full mt-[40px] lg:mt-0 px-3 ">
                    <p className=" font-ff-mont text-[20px] text-[#313EF7] font-black  leading-6">
                        Let’s Fly
                    </p>
                    <h3 className="font-ff-mont pt-5   text-[24px] md:text-[32px] text-[#030303] font-bold  leading-10  ">
                        {" "}
                        It’s one of the leading online flight booking platforms in the world
                    </h3>
                    <div className=" flex pt-8  relative">
                            <img className=" absolute mt-[20px] h-[56%] left-[3.6px] sm:left-[0.7%] -z-10 " src={lineimg} alt="lineimg" />
                        <div className=" flex  flex-col">
                            <div className=" flex items-baseline gap-[10px]">
                                <img src={dots} alt="dots" className="w-[10px] h-[10px]" />
                                <p className="text-black max-w-[568px] text-base font-medium font-ff-mont leading-7 ">
                                    Contrary to popular belief, Lorem Ipsum is not simply random
                                    text
                                </p>
                            </div>
                            <div className=" flex  items-baseline gap-[10px] pt-[10px]">
                                <img src={dots} alt="dots" className="w-[10px] h-[10px]" />
                                <p className="text-black max-w-[568px] text-base font-medium font-ff-mont leading-7 ">
                                    If you are going to use a passage of Lorem Ipsum
                                </p>
                            </div>

                            <div className=" flex  items-baseline gap-[10px] pt-[10px]">
                                <img src={dots} alt="dots" className="w-[10px] h-[10px]" />
                                <p className="text-black max-w-[568px] text-base font-medium font-ff-mont leading-7 ">
                                    Lorem Ipsum is therefore always free from repetition, injected
                                    humour, or non-characteristic words etc.
                                </p>
                            </div>
                            <div className=" flex  items-baseline gap-[10px] pt-[10px]">
                                <img src={dots} alt="dots" className="w-[10px] h-[10px]" />
                                <p className="text-black max-w-[568px] text-base font-medium font-ff-mont leading-7  ">
                                    It is a long established fact that a reader will be distracted
                                    by the readable content of a page when looking at its layout.
                                </p>
                            </div>
                        </div>
                    </div>
                    <button className=" px-[45px] py-3.5 mt-[40px] bg-indigo-600 rounded-[56px] shadow border justify-start items-start gap-2.5 inline-flex  basis-0 text-center text-white text-base  font-semibold font-ff-mont leading-7 hover:bg-white hover:border hover:border-indigo-600 hover:text-black duration-300">
                        Book Now
                    </button>
                </div>
            </div>
        </>
    );
};

export default LetsFly;