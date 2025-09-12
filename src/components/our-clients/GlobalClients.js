import HrRow from '@/Commen-components/HrRow'
import Image from 'next/image'
import React from 'react'

export default function GlobalClients() {
  return (
    <div className='xl:px-40 px-5 text-black'>
      <h1 className='text-3xl wow  animate__animated  animate__fadeInUp'>Our Top Global Giants</h1>
      <div className='grid xl:grid-col-4 md:grid-cols-4 gap-4 my-10 grid-cols-2'>
        {Array.from({ length: 4 }).map((_, idx) => (
          <div className='w-full relative p-20 bg-[#1D1D30] rounded-lg wow  animate__animated  animate__fadeInUp' data-wow-delay={`${idx*0.09}s`} key={idx}>
              <Image
                key={idx}
                alt="brands" height={200} width={200}
                className="object-contain " loading="lazy"
                src="https://www.jploft.com/img/nike-1.svg"
              />
          </div>
        ))}           
       </div>
       <HrRow/>
    </div>
  )
}
