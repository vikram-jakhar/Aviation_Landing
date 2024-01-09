import React from 'react'
import { useState } from 'react';

const Newsletter = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div className='bg-[#F5F5FF]'>
                <div className='py-[100px] flex flex-col justify-center items-center'>
                    <h3 className='text-center font-ff-mont text-[34px] lg:text-[40px] font-bold leading-[150%] tracking-[0.6px] capitalize max-w-[534px] m-auto '>Subscribe Newsletter &  get letest news</h3>
                    <div class="me-4 sm:me-0 max-w-[600px] rounded-[50px] justify-between flex bg-white m-auto items-center gap-10 ms-4 sm:mx-0 p-3 mt-10 ">
                        <input type="text" placeholder="Enter your email address" class="border-0  rounded-[50px] p-3 outline-0 w-full" />
                        <div className="text-center">
                            <button onClick={() => setShowModal(true)}
                                className="me-2 hidden sm:block bg-[#313EF7] rounded-[56px]  py-3 px-7 text-white text-[16px] font-ff-mont font-semibold border leading-7 hover:bg-white hover:border hover:border-indigo-600 hover:text-black duration-300 ">Subscribe</button>
                            {showModal ? (
                                <>
                                    <div
                                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                    >
                                        <div className="relative w-auto my-6 mx-auto text-center max-w-[450px] md:max-w-4xl">
                                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                <div className="flex items-start mx-auto font-ff-mont max-w-[500px] p-5 border-b border-solid border-blueGray-200 rounded-t">
                                                    <h3 className=" text-[50px] sm:text-[100px] font-bold">
                                                        Thanks!
                                                    </h3>
                                                    <button
                                                        className="p-1 ml-auto bg-transparent border-0 font-ff-mont text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                        onClick={() => setShowModal(false)}
                                                    >
                                                    </button>
                                                </div>
                                                <div className="relative p-6 flex-auto">
                                                    <p className="my-4 text-blueGray-500 text-[20px] md:text-[40px] font-bold font-ff-mont leading-relaxed">
                                                        Thanks For Vist Site!
                                                    </p>
                                                </div>
                                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                    <button
                                                        className="bg-indigo-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button"
                                                        onClick={() => setShowModal(false)}
                                                    >
                                                        DONE
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                </>
                            ) : null}
                        </div>
                    </div>
                    <div className="text-center ">
                            <button onClick={() => setShowModal(true)}
                                className="me-2 mt-6 w-full sm:hidden block bg-[#313EF7] rounded-[56px] border py-3 px-7 text-white text-[16px] font-ff-mont font-semibold leading-7 hover:bg-white hover:border hover:border-indigo-600 hover:text-black duration-300">Subscribe</button>
                            {showModal ? (
                                <>
                                    <div
                                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                    >
                                        <div className="relative  my-6 mx-auto text-center max-w-4xl">
                                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                <div className="flex items-start mx-auto font-ff-mont max-w-[500px] p-5 border-b border-solid border-blueGray-200 rounded-t">
                                                    <h3 className=" text-[50px] sm:text-[100px] font-bold">
                                                        Thanks!
                                                    </h3>
                                                    <button
                                                        className="p-1 ml-auto bg-transparent border-0 font-ff-mont text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                        onClick={() => setShowModal(false)}
                                                    >
                                                    </button>
                                                </div>
                                                <div className="relative p-6 flex-auto">
                                                    <p className="my-4 text-blueGray-500 text-[20px] md:text-[40px] font-bold font-ff-mont leading-relaxed">
                                                        Thanks For Vist Site!
                                                    </p>
                                                </div>
                                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                    <button
                                                        className="bg-indigo-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button"
                                                        onClick={() => setShowModal(false)}
                                                    >
                                                        DONE
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                </>
                            ) : null}
                        </div>
                </div>
            </div>
        </>
    )
}

export default Newsletter