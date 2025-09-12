import RedArrowButton from '@/Commen-components/RedArrowButton'
import { LoyaltyData } from '@/data/AboutUs'
import Image from 'next/image'
import React from 'react'
export default function Loyalty() {
  return (
    <div className='xl:px-40 px-5 lg:px-10 py-15 bg-[#FCF7FF] relative mt-5'>
      <div className="absolute lg:block hidden top-10 left-0 w-[150px] h-[150px]">
        <Image
          src="/assets/images/shape/image.png"
          alt="shape"
          fill
          className="object-contain"
        />
      </div>

      <div className="absolute -top-50 lg:right-0 right-5 w-[50rem] h-[50rem]">
        <Image
          src="/assets/images/shape/contact-roket.png"
          alt="contact rocket"
          fill loading="lazy"
          className="object-contain"
        />
      </div>

      <div className='loyalty-container flex lg:flex-row flex-col  gap-10 items-end wow  animate__animated  animate__fadeInUp'>
        <div className='left flex gap-5 flex-col'>
          <h1 className='lg:text-[2.2rem] text-[1.8rem]'>Exceptional Service Builds Trust and Loyalty</h1>
          <p className='text-[1.1rem] xl:w-[50%] '>Quality service builds lasting trust. Our happy clients are a reflection of our commitment to excellence.</p>
          <div className='flex gap-3 flex-wrap'>
            <RedArrowButton data={"Get Started"} />
            <RedArrowButton data={"Request a Quote"} />
          </div>
        </div>


        <div className='right'>
          <h1 className='lg:text-[2.6rem] text-[2rem]'>We Take Your Ideas And Make Them Happen</h1>
          <div className='grid grid-cols-2 gap-5 mt-10'>
            {
              LoyaltyData.map((item, index) => {
                return (
                  <div className="border border-gray-200 p-5 rounded-md bg-white" key={index}>
                    <h2 className="text-[1.7rem]">
                      {item.value}{item.suffix}
                    </h2>
                    <strong>{item.label}</strong>
                  </div>

                )
              })
            }
          </div>
        </div>

      </div>
    </div>
  )
}
