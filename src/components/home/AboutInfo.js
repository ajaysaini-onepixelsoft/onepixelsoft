import React from 'react'
import SmallTitle from '../../Commen-components/SmallTitle'

export default function AboutInfo() {

  return (
    <section className=' w-full pt-15 xl:px-40 lg:px-10 px-5 bg-sub-three' >
        <div className='about-heading-container flex flex-wrap justify-center pb-10 wow animate__animated  animate__fadeInUp' data-wow-delay="0.5s">
            <div className='left-side-heding-text xl:basis-[60%] basis-full ' >
                <SmallTitle smText="About Us" exClass="text-[#751212]  text-md"/>
                <h2 className='xl:text-[3rem] text-[2rem] xl:lending-[3rem] text-black xl:w-[80%] w-full'>Driving Innovation for Business Growth</h2>
            </div>
            <p className='wow font-info text-md xl:basis-[40%] basis-full text-justify mt-3 ' >At OnePixel Soft, we are committed to delivering innovative digital solutions that fuel business growth. As a leading software development company in Jaipur, we specialize in creating custom software, mobile apps, and web development services tailored to meet the unique needs of businesses, startups, enterprises, and local brands. With a focus on cutting-edge technology and digital marketing strategies, we help our clients enhance their digital presence and achieve measurable success.</p>
        </div>
    </section>
  )
}
