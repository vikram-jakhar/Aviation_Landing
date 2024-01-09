
import React from 'react'
import footerlogo from '../svg/logo.svg'
import { Copyright, Facebook, IN, Twitter } from '../svgfolder/Svg'

const Footer = () => {
    return (
        <div>

            <footer className="footer-bg min-h-[454px] ">
                <div className="max-w-[1200px] m-auto px-3  pt-[100px] ">
                    <div className='grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-5  justify-center pb-10'>
                        <div className="col-spn-1 lg:col-span-2 flex flex-col ">
                            <div className='flex gap-6'>
                                <img src={footerlogo} alt="footerlogo" />
                                <h4 className='text-white font-ff-mont text-[22px] font-extrabold leading-[28px] tracking-[1.1px]'> FT PLANE</h4>
                            </div>
                            <p className=' pt-6 max-w-[300px] text-[16px] text-[#A7A7A7] font-ff-mont font-normal leading-[150%]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-6 pt-6'>
                                <div className='w-[42px] cursor-pointer h-[42px] rounded-[50px] border-none bg-white flex justify-center items-center'>
                                    <Facebook />
                                </div>
                                <div className='w-[42px] cursor-pointer h-[42px] rounded-[50px] border-none bg-white flex justify-center items-center'>
                                    <IN />
                                </div>
                                <div className='w-[42px] cursor-pointer h-[42px] rounded-[50px] border-none bg-white flex justify-center items-center'>
                                    <Twitter />
                                </div>
                            </div>
                        </div>

                        <div className='col-span-1 ju'>
                            <div className='flex lg:justify-center flex-col :lgitems-center'>
                                <h4 className='text-white w-[103px] font-ff-mont text-[24px] font-bold  leading-[150%] capitalize'>Address</h4>
                                <ul>
                                    <li className=' pt-4'><a className='text-[16px] pt-4 text-start w-[103px] text-[#A7A7A7] font-ff-mont font-normal leading-[150%]' href="#">Integrations</a></li>
                                    <li className=' pt-4'><a className='text-[16px] pt-4 text-start w-[103px] text-[#A7A7A7] font-ff-mont font-normal leading-[150%]' href="#">Hello</a></li>
                                    <li className=' pt-4'><a className='text-[16px] pt-4 text-start w-[103px] text-[#A7A7A7] font-ff-mont font-normal leading-[150%]' href="">Intercom</a></li>
                                    <li className=' pt-4'><a className='text-[16px] text-start w-[103px] text-[#A7A7A7] font-ff-mont font-normal leading-[150%]' href="#">Customer</a></li>
                                </ul>
                            </div>

                        </div>
                        <div className='col-span-1'>
                            <div className='flex lg:justify-center flex-col lg:items-center'>
                                <h4 className='text-white w-[98px] font-ff-mont text-[24px] font-bold  leading-[150%] capitalize'>About</h4>
                                <ul>
                                    <li className=' pt-4'><a className='text-[16px] pt-4 text-start w-[103px] text-[#A7A7A7] font-ff-mont font-normal leading-[150%]' href="#">Our Blog</a></li>
                                    <li className=' pt-4'><a className='text-[16px] pt-4 text-start w-[103px] text-[#A7A7A7] font-ff-mont font-normal leading-[150%]' href="#">Customers</a></li>
                                    <li className=' pt-4'><a className='text-[16px] pt-4 text-start w-[103px] text-[#A7A7A7] font-ff-mont font-normal leading-[150%]' href="#">Our Team</a></li>
                                    <li className=' pt-4'><a className='text-[16px] pt-4 text-start w-[103px] text-[#A7A7A7] font-ff-mont font-normal leading-[150%]' href="#">Careers</a></li>
                                    <li className=' pt-4'><a className='text-[16px] pt-4 text-start w-[103px] text-[#A7A7A7] font-ff-mont font-normal leading-[150%]' href="#">Integrations</a></li>
                                </ul>
                            </div>

                        </div>
                        <div className='col-span-1 flex lg:itmes-end lg:justify-end'>
                            <div className='flex justify-start flex-col items-start max-w-[124px]'>
                                <h4 className='text-white w-[102px] font-ff-mont text-[24px] font-bold  leading-[150%] capitalize'>Support</h4>
                                <ul>
                                    <li className=' pt-4'><a className='text-[16px] pt-4 text-start w-[103px] text-[#A7A7A7] font-ff-mont font-normal leading-[150%]' href="#">Test Zoom</a></li>
                                    <li className=' pt-4'><a className='text-[16px] pt-4 text-start w-[103px] text-[#A7A7A7] font-ff-mont font-normal leading-[150%]' href="#">Account</a></li>
                                    <li className=' pt-4'><a className='text-[16px] pt-4 text-start w-[103px] text-[#A7A7A7] font-ff-mont font-normal leading-[150%]' href="#">Support Center</a></li>
                                    <li className=' pt-4'><a className='text-[16px] pt-4 text-start w-[103px] text-[#A7A7A7] font-ff-mont font-normal leading-[150%]' href="#"> Live Training</a></li>
                                    <li className=' pt-4'><a className='text-[16px] pt-4 text-start w-[103px] text-[#A7A7A7] font-ff-mont font-normal leading-[150%]' href="#">Accessibility</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className='flex flex-row items-center justify-center gap-1  max-w-[1200px] border-t-[3px] rounded border-[#1A223F] pb-8'>
                        <p className='flex items-center gap-1 pt-10 cursor-pointer'>
                            <span className='text-white text-[14px] font-normal tracking-[-0.28px] '>Copyright</span>
                            <span>{<Copyright />}</span>
                            <span className='text-white text-[14px] font-normal tracking-[-0.28px]'>FT PLANE {(new Date().getFullYear())} All right reserved</span>
                        </p>

                    </div>
                </div>

            </footer>

        </div>
    )
}

export default Footer
