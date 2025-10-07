import HrRow from '@/Commen-components/HrRow'
import { clientLogos } from '@/data/AboutUs'
import Image from 'next/image'
import React from 'react'

export default function GrowthClients() {
  return (
    <section className='xl:px-40 px-5 py-12 text-black'>
        <div className='growth-client-heading wow  animate__animated  animate__fadeInUp'>
            <h1 className='text-[2.4rem] mb-2'>Proud Partners in Growth</h1>
            <p className='text-[1.09rem] xl:w-[75%] w-full'>We are honored to be a trusted partner for businesses worldwide. Their satisfaction and success fuel our passion for delivering outstanding digital solutions.</p>
        </div>

        <div className='growth-client-grid grid grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 rounded-lg mt-10 mb-20'>
            {
                clientLogos.map((item,index)=>{
                    return(
                        <div className='border border-gray-200 relative w-full h-[10rem] p-10 wow  animate__animated  animate__fadeInUp flex justify-center items-center' data-wow-delay={`${index*0.09}s`} key={index}>
                            <Image src={item.src} alt={item.alt} data-src={item.dataSrc} loading="lazy" className='object-contain' height={100} width={100}/>
                        </div>
                    )
                })
            }
        </div>
        <HrRow/>
    </section>
  )
}
