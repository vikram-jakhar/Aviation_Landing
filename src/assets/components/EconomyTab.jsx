import React, { useState } from 'react'
import { CheckIn, CheckOut, Location, Travelers } from '../svgfolder/Svg';


export const EconomyTabs = () => {
    // modals
    const [showModal, setShowModal] = useState(false);

    // tabs
    const [data, setdata] = useState("tab1")
    function tabs(tab) {
        setdata(tab);
    }
    return (
        <div className='max-w-[1200px] mx-auto relative mt-[-79px] px-3'>
            <div className='absolute flex top-[-59px] ml-3 left-[0] z-10 snap-proximity snap-x'>
                <button onClick={() => tabs('tab1')} className={`${data === "tab3" ? "tab1" : ""}transition w-[100px] md:w-[173.33px] h-[60px] px-5 py-4 bg-white  border-b rounded-tl-[30px]  justify-center items-center gap-2.5 inline-flex text-center text-slate-950 text-[14px] sm:text-lg font-semibold font-ff-mont leading-7 hover:bg-indigo-600 hover:text-white`}>Economy</button>
                <button onClick={() => tabs('tab2')} className={`${data === "tab2" ? "tab3" : ""}transition w-[110px] md:w-[173.33px] h-[60px] px-5 py-4 bg-white border-b justify-center items-center border-r gap-2.5 inline-flex text-center text-slate-950 text-[14px] sm:text-lg font-semibold font-ff-mont leading-7 hover:bg-indigo-600 hover:text-white`}>Business</ button>
                <button onClick={() => tabs('tab3')} className={`${data === "tab1" ? "tab2" : ""}transition w-[90px] md:w-[173.33px] h-[60px] px-5 py-4 bg-white border-b rounded-tr-[30px]  justify-center items-center gap-2.5 inline-flex text-center text-slate-950 text-[14px] sm:text-lg font-semibold font-ff-mont leading-7 hover:bg-indigo-600 hover:text-white`}>data</button>
            </div >
            {data === "tab1" && <div className='w-full min-h-[216px] bg-white rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] cstomshadow flex-col justify-center items-center gap-2.5 inline-flex p-10'>
                <div className='w-full flex justify-between gap-6 flex-wrap mb-6'>
                    <div className=" justify-start items-start gap-2 inline-flex">
                        <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[50px] bg-[#F5F5FF] '>
                            <Location />
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <p className="text-slate-950 text-lg font-semibold font-ff-mont leading-[27px]">Location</p>
                            <p className="text-gray-400 text-base font-normal font-ff-mont leading-7">Where are you going?</p>
                        </div>
                    </div>
                    <div className=" justify-start items-start gap-2 inline-flex">
                        <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[50px] bg-[#F5F5FF] '>
                            <Travelers />
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <p className="text-slate-950 text-lg font-semibold font-ff-mont leading-[27px]">Travelers</p>
                            <p className="text-gray-400 text-base font-normal font-ff-mont leading-7">Add guest</p>
                        </div>
                    </div>
                    <div className=" justify-start items-start gap-2 inline-flex">
                        <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[50px] bg-[#F5F5FF] '>
                            <CheckIn />
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <p className="text-slate-950 text-lg font-semibold font-ff-mont leading-[27px]">Check-in</p>
                            <p className="text-gray-400 text-base font-normal font-ff-mont leading-7">Add date</p>
                        </div>
                    </div>
                    <div className=" justify-start items-start gap-2 inline-flex">
                        <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[50px] bg-[#F5F5FF] '>
                            <CheckOut />
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <p className="text-slate-950 text-lg font-semibold font-ff-mont leading-[27px]">Check-out</p>
                            <p className="text-gray-400 text-base font-normal font-ff-mont leading-7">Add date</p>
                        </div>
                    </div>
                </div>
                <button  className="mx-auto shadow-[0px_10px_14px_0px_rgba(49,62,247,0.25);]  px-[45px] py-3.5 bg-indigo-600 rounded-[56px] justify-start items-start gap-2.5 inline-flex
                    grow shrink basis-0 text-center text-white text-base font-semibold font-ff-mont leading-7">Book Now</button>
                
            </div >}
            {data === "tab2" && <div className='w-full min-h-[216px] bg-white rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] shadow-[0px_100px_200px_0px_rgba(1,23,54,0.10);] flex-col justify-center items-center gap-2.5 inline-flex p-10'>
                <div className='w-full flex flex-wrap gap-6 justify-between mb-6'>
                    <div className=" justify-start items-start gap-2 inline-flex">
                        <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[50px] bg-[#F5F5FF] '>
                            <Location />
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <p className="text-slate-950 text-lg font-semibold font-ff-mont leading-[27px]"> 1st class</p>
                            <p className="text-gray-400 text-base font-normal font-ff-mont leading-7">What are you doing</p>
                        </div>
                    </div>
                    <div className=" justify-start items-start gap-2 inline-flex">
                        <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[50px] bg-[#F5F5FF] '>
                            <Travelers />
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <p className="text-slate-950 text-lg font-semibold font-ff-mont leading-[27px]">Business</p>
                            <p className="text-gray-400 text-base font-normal font-ff-mont leading-7">Add guest</p>
                        </div>
                    </div>
                    <div className=" justify-start items-start gap-2 inline-flex">
                        <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[50px] bg-[#F5F5FF] '>
                            <CheckIn />
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <p className="text-slate-950 text-lg font-semibold font-ff-mont leading-[27px]">Check-Out</p>
                            <p className="text-gray-400 text-base font-normal font-ff-mont leading-7">Add date</p>
                        </div>
                    </div>
                    <div className=" justify-start items-start gap-2 inline-flex">
                        <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[50px] bg-[#F5F5FF] '>
                            <CheckIn />
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <p className="text-slate-950 text-lg font-semibold font-ff-mont leading-[27px]">Check-In</p>
                            <p className="text-gray-400 text-base font-normal font-ff-mont leading-7">Add date</p>
                        </div>
                    </div>
                </div>
                <button  className="mx-auto shadow-[0px_10px_14px_0px_rgba(49,62,247,0.25);]  px-[45px] py-3.5 bg-indigo-600 rounded-[56px] justify-start items-start gap-2.5 inline-flex
                    grow shrink basis-0 text-center text-white text-base font-semibold font-ff-mont leading-7">Book Now</button>
                
            </div >}
            {data === "tab3" && <div className='w-full min-h-[216px] bg-white rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] shadow-[0px_100px_200px_0px_rgba(1,23,54,0.10);] flex-col justify-center items-center gap-2.5 inline-flex p-10'>
                <div className='w-full flex flex-wrap gap-6 justify-between mb-6'>
                    <div className=" justify-start items-start gap-2 inline-flex">
                        <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[50px] bg-[#F5F5FF] '>
                            <Location />
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <p className="text-slate-950 text-lg font-semibold font-ff-mont leading-[27px]">Booking</p>
                            <p className="text-gray-400 text-base font-normal font-ff-mont leading-7">Where you go</p>
                        </div>
                    </div>
                    <div className=" justify-start items-start gap-2 inline-flex">
                        <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[50px] bg-[#F5F5FF] '>
                            <Travelers />
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <p className="text-slate-950 text-lg font-semibold font-ff-mont leading-[27px]">Check-Out</p>
                            <p className="text-gray-400 text-base font-normal font-ff-mont leading-7">Add guest</p>
                        </div>
                    </div>
                    <div className=" justify-start items-start gap-2 inline-flex">
                        <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[50px] bg-[#F5F5FF] '>
                            <CheckIn />
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <p className="text-slate-950 text-lg font-semibold font-ff-mont leading-[27px]">Check-in</p>
                            <p className="text-gray-400 text-base font-normal font-ff-mont leading-7">Add date</p>
                        </div>
                    </div>
                    <div className=" justify-start items-start gap-2 inline-flex">
                        <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[50px] bg-[#F5F5FF] '>
                            <CheckIn />
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <p className="text-slate-950 text-lg font-semibold font-ff-mont leading-[27px]">Group</p>
                            <p className="text-gray-400 text-base font-normal font-ff-mont leading-7">Add date</p>
                        </div>
                    </div>
                </div>
                <button className="mx-auto shadow-[0px_10px_14px_0px_rgba(49,62,247,0.25);]  px-[45px] py-3.5 bg-indigo-600 rounded-[56px] justify-start items-start gap-2.5 inline-flex
                    grow shrink basis-0 text-center text-white text-base font-semibold font-ff-mont leading-7">Book Now</button>
                
            </div >}
        </div>
    )
}
export default EconomyTabs;