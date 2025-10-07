import Image from 'next/image'
import React from 'react'

export default function OurSolutionleftCard({ data }) {
    return (
        <section className="bg-[#ffe6e6] py-15 px-6 px-5 xl:px-40 flex flex-col lg:flex-row-reverse md:items-start items-center  lg:items-center justify-between gap-10 wow  animate__animated  animate__fadeInUp">
            {/* Left side images */}
            <div className='lg:basis-[40%] basis-full'>
                <div className=" bg-[#F7D4D4] p-10 lg:w-90 lg:h-90 w-64 h-64  rounded-xl  wow  animate__animated  animate__fadeInLeft relative" data-wow-delay="0.3s">
                    <Image loading="lazy" src={data.img1} fill sizes='100%' alt='' className='object-contain rounded-md' />
                </div>
            </div>



            {/* Right side content */}
            <div className="lg:basis-[60%] basis-full flex gap-5 flex-col wow  animate__animated  animate__fadeInRight" data-wow-delay="0.3s">
                <h2 className="text-[2.2rem]  text-gray-900">
                    {data?.heading}
                </h2>
                {data?.desc.map((v, i) => {
                    return (
                        <p className="text-gray-700 text-[1.2rem]" key={i}>
                            {v}
                        </p>
                    )
                })}
            </div>
        </section>)
}
