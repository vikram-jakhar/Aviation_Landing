import React, { useState } from "react";
import logo from '../svg/logo.svg'
import Aviation_img from '../img/Aviation_text.png'
import Big_Airplan from '../img/Big_Airplan.png'

const Herosection = () => {
    const [first, setfirst] = useState(false);
    function MobView() {
        setfirst(!first);
        if (first === false) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }
   
    return (
        <>
            <div className="bg-img min-h-[600px] sm:min-h-[810px]">
                <div className="max-w-[1200px] m-auto relative px-3">
                    <nav className="pt-4 flex justify-between items-center">
                        <div className="flex gap-5 items-center">
                            <img src={logo} alt="logo" />
                            <p className='text-[22px] text-white font-extrabold leading-7 md:tracking-[1.1px] font-ff-mont'>FT PLANE</p>
                        </div>
                        <div className="flex gap-8 items-center">
                          
                            <ul className={` ${first ? "left-0" : "left-[-100%]"
                                }  flex gap-6 items-center mobileview duration-300  `}>
                                <li><a className='text-white cursor-pointer transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0 py-2.5 after:h-[2px] after:rounded-full after:bg-indigo-600 hover:text-indigo-600 text-base font-semibold font-ff-mont leading-7' href="#">All Flight</a></li>
                                <li><a className='text-white cursor-pointer transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0 py-2.5 after:h-[2px] after:rounded-full after:bg-indigo-600 hover:text-indigo-600 text-base font-semibold font-ff-mont leading-7' href="#">Schedule</a></li>
                                <li><a className='text-white cursor-pointer transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0 py-2.5 after:h-[2px] after:rounded-full after:bg-indigo-600 hover:text-indigo-600 text-base font-semibold font-ff-mont leading-7' href="#">Passengers</a></li>
                                <li><a className='text-white cursor-pointer transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0 py-2.5 after:h-[2px] after:rounded-full after:bg-indigo-600 hover:text-indigo-600 text-base font-semibold font-ff-mont leading-7' href="#">Your Orders</a></li>
                                <li><a className="sm:hidden text-white text-[34px] lg:text-[16px] font-semibold leading-7 font-ff-mont border border-solid border-white rounded-[59px] px-4 py-1 " href="">Let’s Fly</a></li>
                            </ul>
                            <button className=" hidden sm:block text-white text-[16px] font-semibold leading-7 font-ff-mont border border-solid border-white rounded-[59px] px-4 py-1 ">Let’s Fly</button>
                            <label className=" lg:hidden" onClick={MobView}>
                                {first ? (
                                    <div className="z-20 relative cursor-pointer">
                                        <span className="flex bg-white absolute -left-7 duration-300 top-1 rotate-45 h-[2px] w-6"></span>
                                        <span className="flex bg-white absolute -left-7 duration-300 -rotate-45 h-[2px] w-6 mt-1"></span>
                                    </div>
                                ) : (
                                    <div className="z-20 relative cursor-pointer">
                                        <span className="flex bg-white h-[2px] duration-300 w-6"></span>
                                        <span className="flex bg-white h-[2px] duration-300 w-6 mt-1"></span>
                                        <span className="flex bg-white h-[2px] duration-300 w-6 mt-1"></span>
                                    </div>
                                )}
                            </label>
                        </div>
                    </nav>
                    <div className="pt-[65px]"> 
                        <img src={Aviation_img} alt="Aviation_img" className="w-full" />
                    </div>
                    <div className=" md:absolute left-0 top-[41%] ">
                        <img src={Big_Airplan} alt="Big_Airplan" className="px-9 plane" />
                    </div>
                </div>
                <div>
                    <h2 className="font-ff-mont text-[20px] sm:text-[48px] text-white font-bold capitalize text-center pt-[60px] md:pt-[20%]">Travel around the world</h2>
                    <p className="font-['Inter'] text-[12px] font-normal text-[#B8B8C5] text-center">One of the advantages of being disorganized is that one is always having surprising discoveries</p>
                </div>
            </div>
        </>
    );
};

export default Herosection;
// pt-12 text-[117.637px] font-black font-ff-mont  leading-[150%] tracking-[70.542px] uppercase text-[#FFFFFF14] text-center
