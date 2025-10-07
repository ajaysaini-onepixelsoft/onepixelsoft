import RedArrowButton from '@/Commen-components/RedArrowButton'
import Image from 'next/image'
import React from 'react'

export default function OurDevlomentCycle({DevlomentCycleData}) {
    return (
        <section className='xl:px-40 px-5 mt-10'>
            <div className='heading wow  animate__animated  animate__fadeInUp'>
                <h1 className='text-[2.2rem] mb-3'>{DevlomentCycleData.heading}</h1>
                <p className='text-[1.1rem] mb-3'>{DevlomentCycleData.desc}</p>
            </div>
            <div className="py-10">
                <div className="container mx-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {DevlomentCycleData.cards.map((service, index) => (
                        <div key={index}
                        data-wow-delay={`${index*0.09}s`}
                        className="
                        bg-white rounded-xl  p-6 border border-gray-200
                        text-black hover:text-white
                        wow  animate__animated  animate__fadeInUp
                        transition-all duration-500 ease-in-out
                        hover:bg-gradient-to-bl hover:from-[#740603] hover:to-[#0b0b0b]

                        ">
                            <div className="flex items-center justify-center relative w-20 h-20  mb-3 bg-pink-100 rounded-full">
                                <Image loading="lazy" src={service.icon} alt={service.title} className="object-contain" height={50} width={50}/>
                            </div>
                            <h3 className="text-lg font-semibold mb-3">
                                {service.title}
                            </h3>
                            <p className=" text-md ">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            <RedArrowButton data={"Share Your Requirements with Us"}/>
        </section>
    )
}
