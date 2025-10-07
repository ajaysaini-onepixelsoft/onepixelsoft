import Image from 'next/image'
import React from 'react'

export default function OurFeatured({FeaturedData}) {
    return (
        <section className='xl:px-40 px-5 pt-10'>
            <div className='heading wow  animate__animated  animate__fadeInUp'>
                <h1 className='text-[2.2rem] mb-3'>{FeaturedData.heading}</h1>
                <p className='text-[1.1rem]'>{FeaturedData.desc}</p>
            </div>
            <div className="py-10 bg-white">
                <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 ">
                    {
                        FeaturedData.cards.map((item,index)=>{
                            return(
                                <div className="p-6 rounded-lg border border-gray-200  wow animate__animated  animate__fadeInUp normal-scale shadow-lg featured-data-container transition-all duration-300" data-wow-delay={`${index*0.09}s`} key={index}>
                                    <div className={` flex items-center justify-center w-16 h-16 mb-3 ${item.bgClass} relative  rounded-xl`}>
                                        <Image loading="lazy" src={item.icon} alt="Planning Icon" className='object-contain' width={50} height={50}/>
                                    </div>
                                    <h3 className="text-2xl mb-3">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            )
                        })
                    }


                </div>
            </div>


        </section>
    )
}
