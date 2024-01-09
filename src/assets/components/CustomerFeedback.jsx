
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider_bg from "../img/slider2_img_bg.png"
import Slider from 'react-slick';
import JaylonVaccaro from "../img/JaylonVaccaro.png"
import { Star } from '../svgfolder/Svg';


const NextArrow = ({ onClick }) => {
    return (
        <button className="w-[50px] group h-[50px] left-[38%] bg-indigo-600 bg-opacity-10 transition-all right-[40%] flex items-center justify-center bottom-[-30%] absolute  hover:bg-indigo-600 rounded-full hover:shadow-[4px_10px_30px_1px_#313EF7]" onClick={onClick}>
            <svg className=' stroke-black rotate-180 group-hover:stroke-white' xmlns="http://www.w3.org/2000/svg" width="13" height="22" viewBox="0 0 13 22" fill="none">
                <path d="M0.916748 21L10.9167 11L0.91675 0.999999" strokeWidth="2" />
            </svg>
        </button>
    );
};

const PrevArrow = ({ onClick }) => {
    return (
        <button className="w-[50px] group h-[50px] bg-indigo-600 bg-opacity-10 transition-all right-[37%] flex items-center justify-center bottom-[-30%] absolute  hover:bg-indigo-600 rounded-full hover:shadow-[4px_10px_35px_1px_#313EF7]" onClick={onClick}>
            <svg className=' stroke-black group-hover:stroke-white' xmlns="http://www.w3.org/2000/svg" width="13" height="22" viewBox="0 0 13 22" fill="none">
                <path d="M0.916748 21L10.9167 11L0.91675 0.999999" strokeWidth="2" />
            </svg>
        </button>
    );
};
const CustomerFeedback = () => {
    var settings = {
        prevArrow: <NextArrow />,
        nextArrow: <PrevArrow />,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
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
                    autoPlay:true,
                    autoPlaySpees:500,
                },
            },
        ],

    };
    return (
        <div>
            <div className='max-w-[1200px] px-3 mx-auto my-3 overflow-hidden'>
                <p className='max-w-[524px] mx-auto text-center text-indigo-600 mb-2 text-xl font-semibold font-["Montserrat"] leading-normal'>What’s our customer saying</p>
                <p className="max-w-[534px] mx-auto mb-[60px] text-center text-slate-900 text-[40px] font-bold font-ff-mont capitalize leading-[60px] tracking-wide">Our Customer Feedback</p>
                <div data-aos="fade-down" className=' grid grid-cols-1 lg:grid-cols-5  mx-[-12px] gap-[18px]  '>
                    <div className=' col-span-1 lg:col-span-3 px-3 py-9'>
                        <img src={Slider_bg} alt="Slider_bg" />
                    </div>
                    <div data-aos="fade-up" className=' col-span-1 lg:col-span-2 px-3 relative bg-transparent '>
                        <Slider {...settings}>
                            <div
                                className=" lg:max-w-[500px] px-[21px] py-[30px] bg-white rounded-[20px] cstomshadow flex-col justify-start items-start gap-2.5 inline-flex"
                            >
                                <div className='flex items-center gap-2 my'>
                                    <img src={JaylonVaccaro} alt="JaylonVaccaro" />
                                    <div className="flex flex-col mb-4">
                                        <p className="max-w-[382px] opacity-90 text-slate-900 text-xl font-semibold font-ff-mont leading-normal">Jaylon Vaccaro</p>
                                        <span className="flex gap-1"> <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                        </span>
                                    </div>
                                </div>
                                <p className="max-w-[458px] text-zinc-900 text-lg font-medium font-ff-mont leading-[34px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don</p>
                            </div>
                            <div
                                className="lg:max-w-[500px] px-[21px] py-[30px] bg-white rounded-[20px] cstomshadow flex-col justify-start items-start gap-2.5 inline-flex"
                            >
                                <div className='flex items-center gap-2'>
                                    <img src={JaylonVaccaro} alt="JaylonVaccaro" />
                                    <div className="flex flex-col mb-4">
                                        <p className="max-w-[382px] opacity-90 text-slate-900 text-xl font-semibold font-ff-mont leading-normal">Jaylon Vaccaro</p>
                                        <span className="flex gap-1"> <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                        </span>
                                    </div>
                                </div>
                                <p className="max-w-[458px] text-zinc-900 text-lg font-medium font-ff-mont leading-[34px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don</p>
                            </div>
                            <div
                                className="lg:max-w-[500px] px-[21px] py-[30px] bg-white rounded-[20px] cstomshadow flex-col justify-start items-start gap-2.5 inline-flex"
                            >
                                <div className='flex items-center gap-2'>
                                    <img src={JaylonVaccaro} alt="JaylonVaccaro" />
                                    <div className="flex flex-col mb-4">
                                        <p className="max-w-[382px] opacity-90 text-slate-900 text-xl font-semibold font-ff-mont leading-normal">Jaylon Vaccaro</p>
                                        <span className="flex gap-1"> <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                        </span>
                                    </div>
                                </div>
                                <p className="max-w-[458px] text-zinc-900 text-lg font-medium font-ff-mont leading-[34px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don</p>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CustomerFeedback;