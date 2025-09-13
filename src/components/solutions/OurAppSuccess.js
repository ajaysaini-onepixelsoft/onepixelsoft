import Image from 'next/image'
import React from 'react'

export default function OurAppSuccess({appSuccessData}) {
    return (
        <section className='xl:px-40 px-5 pt-10'>
            <div className='wow  animate__animated  animate__fadeInUp'>
                <h1 className='text-[2.2rem] mb-3'>{appSuccessData.heading}</h1>
                <p className='text-[1.1rem]'>{appSuccessData?.desc}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                {appSuccessData.cards.map((item, index) => (
                    <div
                        key={index}
                        className={` px-10 py-8 rounded-xl shadow-md hover:shadow-xl hover:scale-101 transition-transform duration-300
                            wow  animate__animated  animate__fadeInUp
                        `}
                        data-wow-delay={`${index*0.09}s`}
                        style={{
                            backgroundColor: `${item.color}`
                        }}
                    >
                        <div className="flex items-center mb-4 relative">
                            <Image
                                src={item.icon}
                                alt={item.title} height={50} width={50}
                                className="object-contain mr-4" loading="lazy"
                            />
                            <h2 className="text-[1.4rem] text-[600]">{item.title}</h2>
                        </div>
                        <p className="text-gray-700 text-lg">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
