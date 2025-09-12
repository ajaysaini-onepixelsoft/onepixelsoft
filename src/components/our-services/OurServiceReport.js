import RedArrowButton from '@/Commen-components/RedArrowButton'
import Image from 'next/image'
import React from 'react'
export default function OurServiceReport({ data }) {
    return (
        <div className="bg-[#ffe6e6] py-15 px-6 px-5 xl:px-40 flex flex-col md:flex-row items-center justify-between gap-10 wow  animate__animated  animate__fadeInUp">
            {/* Left side images */}
            <div className=" bg-[#F7D4D4] p-10 rounded-xl basis-[40%] wow  animate__animated  animate__fadeInLeft" data-wow-delay="0.3s">
                {data.img1 || data.img2 || data.img3 ? (
                    <div className="grid grid-cols-2 gap-4 relative">
                        {data.img1 && (
                            <div className='h-[250px] lg:w-[500px] w-[250px]'>
                                <Image fill
                                    src={data.img1}
                                    alt="Image 1" sizes='100%'
                                    className="rounded-xl h-full w-full object-contain" loading="lazy"
                                />
                            </div>
                        )}
                        {data.img2 && (
                          <div className='h-[250px] lg:w-[500px] w-[250px]'>
                            <Image fill
                                src={data.img2}
                                alt="Image 2" sizes='100%'
                                className="rounded-xl h-full w-full object-contain" loading="lazy"
                            />
                          </div>
                        )}
                        {data.img3 && (
                            <div className='h-[250px] lg:w-[500px] w-[250px]'>
                            <Image fill
                                src={data.img3}
                                alt="Image 3" loading="lazy" sizes='100%'
                                className={`rounded-xl h-full w-full object-contain ${data.img1 && data.img2 ? "col-span-2" : "col-span-1"
                                    }`}
                            />
                        </div>
                        )}
                    </div>):null
                }
            </div>

            {/* Right side content */}
                <div className="basis-[55%] flex gap-5 flex-col wow  animate__animated  animate__fadeInRight" data-wow-delay="0.3s">
                    <h2 className="text-[2.2rem]  text-gray-900">
                        {data.heading}
                    </h2>
                    <p className="text-gray-700 text-[1.2rem]">
                        {data.desc}
                    </p>
                    {
                        data?.poits1 && (

                            <div className="grid grid-cols-2 gap-y-2 gap-x-6 text-gray-800 text-lg font-medium">
                                {
                                    data.poits1.map((v, i) => (
                                        <p key={i}>{v}</p>
                                    ))
                                }
                            </div>
                        )
                    }
                    <div className='w-[45%] mt-10'>
                        <RedArrowButton data={data.btu} />
                    </div>
                </div>
            </div>
            )
}
