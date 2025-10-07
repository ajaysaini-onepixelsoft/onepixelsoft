import SmallTitle from '@/Commen-components/SmallTitle'
import Image from 'next/image'
import React from 'react'

export default function AboutHero({data}) {
  return (

      <section className='herosection leading-[3rem] flex md:flex-row flex-col  gap-3 md:items-center items-start justify-between xl:px-40 lg:px-10 px-5 wow  animate__animated  animate__fadeInDown'>
        <div className='left-heading'>
          <SmallTitle smText={`Home/${data.slug}`} exClass={"py-0 my-0 leading-[2rem] text-gray-300 text-[1.02rem]"}/>
          <h2 className='font-bold text-[1.8rem] mb-3 text-[#eee]'>{data.heading}</h2>
          <p className='text-[1.2rem] leading-[2rem] text-[#ccc] w-[80%]'>{data.des}</p>
        </div>
        <div className='img about-header-image relative md:h-[20rem]  md:w-[50rem] h-[20rem] w-[20rem]'>
          <Image src={data.img}  fill sizes='100%' alt="" className='object-cover ' loading="lazy"/>
        </div>
      </section>  
    )
}
