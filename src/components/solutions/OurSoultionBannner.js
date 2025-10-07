import RedArrowButton from '@/Commen-components/RedArrowButton'
import Image from 'next/image'
import React from 'react'

export default function OurSoultionBannner({ data }) {
  return (
    <section className="relative w-full lg:h-[50vh] h-full bg-white my-10 flex  items-center wow  animate__animated  animate__fadeInUp">
      <div className="relative z-10 flex items-center  lg:items-center md:items-start lg:flex-row flex-col-reverse justify-between xl:px-40 px-5 w-full h-full bg-gradient-to-r from-[#000] to-red-900  text-white py-10 gap-5 overflow-hidden">
        <div className="absolute z-1  -bottom-50 left-0 lg:rotate-30 wow  animate__animated  animate__fadeInLeft" data-wow-delay="0.5s">
          <div className='realtive lg:h-[25rem]  w-[40rem]'>
            <Image loading="lazy" src='/assets/images/shape/imgi_138_learning-bg.svg' className='object-contain' fill sizes='100%' alt="" />
          </div>
        </div>

        <div className="space-y-6 lg:basis-[60%] basis-full relative z-2 wow  animate__animated  animate__fadeInLeft" data-wow-delay="0.3s">
          <h1 className="text-[2rem] leading-tight">{data.heading}</h1>
          <p className="text-lg">{data.desc}</p>
          <div className="flex  gap-4">
            <RedArrowButton data={"Get Started with Us"} />
          </div>
        </div>
        <div className='lg:basis-[40%] basis-full flex justify-end   wow animate__animated animate__fadeInRight'
  data-wow-delay="0.3s">
          <div className="relative  w-64 h-64  ">
            <Image fill src={data.img1} alt="test" className="object-contain" />
          </div>
        </div>
      </div>
      {/* <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent">
      </div> */}
    </section>
  )
}
