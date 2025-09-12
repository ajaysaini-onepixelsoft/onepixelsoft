import HrRow from '@/Commen-components/HrRow'
import { OurVisionInfo } from '@/data/AboutUs'
import Image from 'next/image'
import React from 'react'

export default function AboutMission() {
    return (
        <section className="pt-25 text-black pb-10 bg-white xl:px-40 lg:px-10 px-5">
            <div className="container mx-auto mb-15">
                <div className="flex flex-col lg:flex-row gap-10 justify-between wow animate__animated animate__fadeInUp">
                    <div className="lg:w-5/12">
                        <h2 className="text-[2.2rem] font-[500] mb-4">Transforming Your Vision into an Unforgettable Reality</h2>
                        <p className="mb-8 text-gray-600">
                            We are more than just a consultancy; we are architects of innovation, builders of dreams.
                        </p>
                        <h2 className="text-2xl font-[500] mb-2">Our Mission</h2>
                        <p className="mb-6 text-gray-600">
                            At OnePixel Soft Pvt. Ltd., our mission is to empower startups and brands by blending branding, digital development, and design expertise. We go beyond traditional web solutions, transforming data into powerful knowledge that helps businesses solve challenges, exceed expectations, and achieve lasting success.
                        </p>
                    </div>

                    {/* Image Grid */}
                    <div className="lg:w-6/12 grid grid-cols-2 gap-3">
                        <div className="relative w-full h-[10rem]">
                            <Image 
                                src="/assets/images/grow/grow-image1.png" 
                                alt="Grow Image 1" 
                                fill  sizes='100%' loading="lazy"
                                className="object-contain rounded-lg"
                            />
                        </div>
                        <div className="relative w-full h-[10rem]">
                            <Image 
                                src="/assets/images/grow/grow-image2.png" 
                                alt="Grow Image 2" 
                                fill  sizes='100%' loading="lazy"
                                className="object-contain rounded-lg"
                            />
                        </div>
                        <div className="relative w-full col-span-full h-[10rem]">
                            <Image 
                                src="/assets/images/grow/grow-image3.png" 
                                alt="Grow Image 3" 
                                fill  sizes='100%' loading="lazy"
                                className="object-contain rounded-lg"
                            />
                        </div>
                    </div>
                </div>

                {/* Vision + Mission Info */}
                <div className="flex flex-col lg:flex-row gap-10 justify-between mt-10 items-center wow animate__animated animate__fadeInUp">
                    
                    {/* Vision Cards */}
                    <div className="section-right-info lg:w-6/12">
                        <div className="grid grid-cols-2 md:gap-8 gap-4">
                            {OurVisionInfo.map((v, i) => (
                                <div key={i} className="flex items-center bg-white rounded-lg p-6 shadow gap-3">
                                    <div className='text-3xl font-[500] text-black'>
                                        {v.icon}
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-[300] text-[#731212]">{v.value}</h2>
                                        <p>{v.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Vision Text */}
                    <div className="our-vison-left lg:w-6/12">
                        <h2 className="text-[2.2rem] font-[500] mb-4">We Take Your Ideas And Make Them Happen</h2>
                        <h2 className="text-2xl font-[500] mb-2">Our Vision</h2>
                        <p className="mb-6 text-gray-600">
                            At OnePixel Soft Pvt. Ltd., our vision is to become a leading web solutions company in the IT sector, continuously advancing our position in the market. We believe our clients growth is our growth, and we are committed to helping businesses achieve their goals through precision, innovation, and top-quality services.
                        </p>
                    </div>
                </div>
            </div>
            <HrRow />
        </section>
    )
}
