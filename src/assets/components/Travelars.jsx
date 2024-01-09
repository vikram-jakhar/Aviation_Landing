import React from "react";
import img_1 from '../img/img_1.png'
import img_2 from '../img/img_2.png'
import img_3 from '../img/img_3.png'
import img_4 from '../img/img_4.png'
import Raju_img from '../img/raju_img.png'
import Zaire_img from '../img/Zaire_img.png'
import Marcus_img from '../img/Marcus_img.png'
import Davis_img from '../img/Davis_img.png'

const mycard = [
    {
        "padding": "customAni2",
        mapimage: img_1,
        circleimage: Raju_img,
        names: "Raju Mullah",
        mail: "@rajumulllah",
       
    },
    {
        "padding": "customAni",
        mapimage: img_2,
        circleimage: Zaire_img,
        names: "Zaire Vetrovs",
        mail: "@zairevetrovs",
       
    },
    {
        "padding": "customAni2",
        mapimage: img_3,
        circleimage: Marcus_img,
        names: "Marcus Dias",
        mail: "@marcusdias",
      
    },
    {
        "padding": "customAni",
        mapimage: img_4,
        circleimage: Davis_img,
        names: "Davis Schleifer",
        mail: "@davisschleifer",
        
    },
];
const Travellers = () => {
    const cardarray = mycard.map((mycard) => (
        <div key={mycard.mail} className="flex justify-center items-center">
            <div className={` max-w-[282px]  min-h-[420px] rounded-[213px] bg-white  shadow-[0_100px_200px_0_rgba(1,23,54,0.05)] overflow-hidden group `}>
                <img className="" src={mycard.mapimage} alt="half" />
                <div className="flex justify-center">
                    <img className=" translate-y-[-21%]" src={mycard.circleimage} alt="small" />
                </div>
                <p className=" text-2xl font-semibold leading-[150%] font-ff-mont text-center text-[#011736]">
                    {mycard.names}
                </p>
                <p className=" text-base  font-ff-mont font-medium leading-[150%] text-[#979797] text-center">
                    {mycard.mail}
                </p>
            </div>
        </div>
    ));
    return (
        <div className=" max-w-[1200px] mx-auto px-3 py-[30px]">
            <h2 className="text-[40px] font-bold leading-[150%] text-center text-[#011736] font-ff-mont">
                Best travelars of this month
            </h2>
            <div className={` grid lg:grid-cols-4 md:grid-cols-2  justify-center gap-9 items-center pt-[40px]`}>
                {cardarray}
            </div>
        </div>
    );
};

export default Travellers;