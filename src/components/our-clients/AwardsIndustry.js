import HrRow from '@/Commen-components/HrRow'
import { AwardsIndustryData } from '@/data/AboutUs'
import Image from 'next/image'
import React from 'react'

export default function AwardsIndustry() {
  return (
    <section className='xl:px-40 px-5 pt-5 mb-15 text-black'>
        <div className='growth-client-heading wow  animate__animated  animate__fadeInUp'>
            <h1 className='text-[2.4rem] mb-2'>Awards & Industry Recognition</h1>
            <p className='text-[1.09rem] xl:w-[75%] w-full'>Our commitment to excellence has earned us recognition from top industry platforms like Clutch, TopDevelopers, UpCity, DesignRush and Google for showcasing our ability to deliver exceptional results and build meaningful partnerships with our clients.</p>
        </div>
        <div className='award-section xl:grid-cols-6 lg:grid-cols-3 grid-cols-2 grid gap-15 mt-10 mb-10'>
            {
                AwardsIndustryData.map((item,index)=>{
                    return(
                        <div key={index} className=' relative flex justify-center wow  animate__animated  animate__fadeInUp' data-wow-delay={`${index*0.09}s`}>
                            <Image src={item.src} alt={item.alt} width={80} height={80} loading="lazy" className='object-contain'/>
                        </div>
                    )
                })
            }
        </div>
        <HrRow/>
    </section>
  )
}
