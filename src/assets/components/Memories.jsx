import React from "react";
import Memo_1 from '../img/Memo_img1.png'
import Memo_2 from '../img/Memo_img2.png'
import Memo_3 from '../img/Memo_img3.png'
import Memo_4 from '../img/Memo_img4.png'

const mycardinfo = [
    {
        "padding": "customAni2",
        image: Memo_1
    },
    {
        "padding": "customAni",
        image: Memo_2,

    },

    {
        "padding": "customAni2",
        image: Memo_3,
    },
    {
        "padding": "customAni",
        image: Memo_4,

    },
];

export const Memories = () => {
    const mycard = mycardinfo.map((mycard) => (
        <div className="flex justify-center items-center  ">
            <div className={`${mycard.padding}  after:border-[#ffffff4d]  relative inline-block after:h-full after:border-[20px] after:border-solid after:absolute after:top-0 after:left-0 after:w-full after:rounded-[200px]`}>
                <img className={` rounded-[200px]`} src={mycard.image} alt="loading" />
            </div>
        </div>
    ));

    return (
        <>
            <div className=" bg-[#FFFFF]">
                <div className={`  max-w-[1200px] mx-auto px-3 py-[90px]`}>
                    <h2 className=" text-center text-slate-900 text-[40px] font-bold font-ff-mont capitalize leading-[60px] tracking-wide pb-[40px]">
                        Make memories with us
                    </h2>
                    <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-[50px]">
                        {mycard}
                    </div>
                </div>
            </div>
        </>
    );
};



export default Memories;