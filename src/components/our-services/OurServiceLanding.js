import Image from 'next/image'
import React from 'react'

export default function OurServiceLanding({ data }) {
    return (
        <section className="bg-[#ffe6e6] py-15 px-6 px-5 xl:px-40 flex flex-col md:flex-row-reverse items-center justify-between gap-10">
            {/* Left side images */}
            <div className=" bg-[#F7D4D4] p-10 rounded-xl basis-[40%] relative h-[300px] w-full">
                <Image src='/assets/images/industries/members.webp' loading="lazy" className='object-contain' sizes='100%' fill alt=''/>
            </div>

            {/* Right side content */}
            <div className="basis-[55%] flex gap-5 flex-col">
                <h2 className="text-[2.2rem]  text-gray-900">
                    {data?.heading}
                </h2>
                {data?.desc.map((v, i) => {
                    return(
                    <p className="text-gray-700 text-[1.2rem]" key={i}>
                        {v}
                    </p>
                    )
                })}
            </div>
        </section>)
}
