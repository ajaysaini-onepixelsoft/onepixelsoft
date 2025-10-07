import React from 'react'
import SmallTitle from './SmallTitle'
import Image from 'next/image'

export default function  CommenHero({data}) {
  return (
      <section className='  leading-[3rem] flex gap-3 items-center justify-between xl:px-40 lg:px-10 px-5 py-15  bg-cover wow animate__animated animate__fadeInDown relative lg:h-[40vh] ' 
      style={{
          background:"url('/assets/images/bg/banner-fout-bg.png')",
          backgroundPosition:' center',
      }}>
        <div className='top-0 left-0 absolute h-[40rem] wow  animate__animated  animate__fadeInLeft' data-wow-delay="0.3s">
          <Image src='/assets/images/shape/banner-four-arrow.png' className='h-full w-full' loading="lazy" alt='' fill/>
        </div>
        <div className='left-heading'>
          <SmallTitle smText={`Home/${data.slug}`} exClass={"py-0 my-0 leading-[2rem] text-gray-300 text-[1.02rem]"}/>
          {/* <h3 className='font-[500] text-[1.8rem]'>HOME<span>/about us</span></h3> */}
          <h2 className='font-bold text-[1.8rem] mb-3 text-[#eee]'>{data.heading}</h2>
          <p className='text-[1.2rem] leading-[2rem] text-[#ccc] w-[80%]'>{data.des}</p>
        </div>
        </section>
  )
}
