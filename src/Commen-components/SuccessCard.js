import { innovativeData } from '@/data/CommenData'
import React from 'react'
import HrRow from './HrRow'
import Image from 'next/image'

export default function SuccessCard({ exclass }) {
    return (
        <section className={`xl:px-40 lg:px-10 px-5 ${exclass ? exclass : null}`}>
            <HrRow />
            <div className='about-info-success-text grid xl:grid-cols-4 grid-cols-2 xl:gap-10 gap-4 pt-10 text-center pb-10'>
                {
                    innovativeData.map((data, index) => (
                        <div
                            key={index}
                            className="single-about-info md:p-5 p-3 border border-gray-200 rounded-lg 
            normal-scale shadow-lg 
             transition-all duration-300"
                        >                            <div className='h-10 w-10 mx-auto mb-3  relative'>
                                <Image src={data.icon} loading="lazy" alt="icon" className=' object-contain' fill sizes='100%' />
                            </div>
                            <h3 className='md:text-4xl text-xl text-black mb-2' data-aos="fade-up" data-aos-delay={data.delay} data-aos-duration={data.duration}>{data.count}+</h3>
                            <h4 className='md:text-xl text-sm  text-black mb-2'>{data.title}</h4>
                            <p className='font-dark md:text-md text-sm'>{data.desc}</p>
                        </div>
                    ))
                }
            </div>
            <HrRow />

        </section>
    )
}
