import SmallTitle from '@/Commen-components/SmallTitle'
import Image from 'next/image'
import React from 'react'

export default function OurSolutionsDevlopment({devlopmentData}) {
  return (
    <section className='xl:px-40 px-5 mt-10'>
        <div className='heading wow  animate__animated  animate__fadeInUp'>
            {
              devlopmentData?.span && (
                <SmallTitle smText={devlopmentData.span} exClass={"text-[#731212]"}/>
              )
            }
            <h1 className='text-[2.2rem] mb-3'>{devlopmentData.heading}</h1>
            <p className='text-[1.1rem] mb-3'>{devlopmentData.desc}</p>
        </div>

            <section className="py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 ">
        {
          devlopmentData.cards.map((item,index)=>{
            return(
            <div key={index} className='wow  animate__animated  animate__fadeInUp' data-wow-delay={`${index*0.09}s`}>
<div className="flex mb-4 relative">
  <Image loading="lazy"
    src={item.icon} 
    alt="User Growth" 
    width={40}       
    height={40}      
    className="object-contain"
  />
</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">
                {item.desc}
              </p>
            </div>
            )
          })
        }


      </div>
    </section>
    </section>
  )
}
