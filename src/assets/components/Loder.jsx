import React, { useEffect, useState } from "react";
const Preloader = () => {
    const [loder, setloader] = useState(true);
    useEffect(() => {
        setTimeout(() => { setloader(false); }, 2000);
    }, []);
    {
        if (loder === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }
    return (
        <div>
            {loder ? (
                <section
                    className="bg-black top-0 start-0 fixed w-full flex flex-col z-30 justify-center items-center   min-h-screen"
                >
                    <div className="flex justify-center items-center content text-center">
                        <h2 className="text-white text-[100px] font-ff-mont absolute ">FT_PLANE</h2>
                            <h2 className="text-white text-[100px] font-ff-mont absolute ">FT_PLANE</h2>
                    </div>
                </section>
            ) : (
                ""
            )}
        </div>
    )
}

export default Preloader