import { Airplane, Discount, Headphone, Private } from '../svgfolder/Svg'
import { Arrow } from '../svgfolder/Svg'
const Features = () => {
    const carditems = [
        {
            svgicon: (<Airplane />),
            arrowIcon: (<Arrow />),
            hTag: "Best Guide",
            pTag: "Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna.",
            padding:"mt-[50px]"
        },
        {
            svgicon: (<Discount />),
            arrowIcon: (<Arrow />),
            hTag: "More Discount",
            pTag: "Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna."
        },
        {
            svgicon: (<Headphone />),
            arrowIcon: (<Arrow />),
            hTag: "Private",
            pTag: "Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna.",
            padding:"mt-[50px]"
        },
        {
            svgicon: (<Private />),
            arrowIcon: (<Arrow />),
            hTag: "Online Support",
            pTag: "Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna."
        },
    ];

    const Card = carditems.map((items) => (
        <div key={items.arrowIcon} className='flex items-center justify-center' >
            <div className={`${items.padding} max-w-[282px] group px-5 py-10 rounded-[185px] bg-white flex flex-col justify-center items-center cstomshadow`} >
                <div className='w-[70px] h-[70px] rounded-[50px] bg-[#F5F5FF]  flex justify-center items-center'>
                    {items.svgicon}
                </div>
                <h2 className='text-[#030522] text-center font-ff-mont text-2xl font-extrabold leading-[150%] pt-4  '>{items.hTag}</h2>
                <p className='text-[#030522A6] self-stretch pt-3 text-center font-ff-mont text-[16px] font-normal leading-[150%] max-w-[239px]'>{items.pTag}</p>
                <div className='w-[50px] h-[50px] rounded-[50%] mt-8 bg-[#030522] flex justify-center items-center cursor-pointer group-hover:bg-white group-hover:border group-hover:stroke-black group-hover:border-[black] duration-300 group-hover:translate-x-2'>
                    {items.arrowIcon}
                </div>
            </div>
        </div>
    ))
    return (
        <div>
            <div className='bg-[#ffff]'>
                <div className="max-w-[1200px] m-auto  px-3">
                    <h2 className='text-center text-[#030522] font-ff-mont text-[40px] font-bold capitalize pt-[100px]'>Our Features</h2>
                    <div className='grid  sm:grid-cols-2 lg:grid-cols-4  justify-center items-center gap-6 py-9'>
                        {Card}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features