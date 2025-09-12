import React from 'react'
import ServicesSection from './ServicesSection'
import CommenHeading from '@/Commen-components/CommenHeading'
import Image from 'next/image'

export default function OurServicesSection() {
  return (
    <div className='xl:px-40 lg:px-10 px-5 py-15' style={{
      background: 'linear-gradient(180deg, hsla(0,0%,100%,0.9) 103.91%), hsla(0,84%,85%,0.4)'
    }}>
      <ServicesSection heading={"Our Services"} />
      <div className='section-2 mt-15'>
        <CommenHeading cmHeading={{
          smtext: "Map Your Roadmap",
          desc: "Our Proven Work Process blends experience, precision, and innovation for consistently outstanding results.",
          title: "Our Proven Work Process",
        }} />
        <div className='work-processs mt-15 relative wow  animate__animated  animate__fadeInUp'>
          <div className='absolute top-[25%] left-40 lg:block hidden'>
            <Image src='/assets/images/shape/process-line.png' fill sizes='100%' alt=''loading="lazy"/>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5  relative">
            <div className="text-center flex justify-center items-center flex-col">
              <div className="bg-yellow-200 text-black w-20 h-20  rounded-full flex items-center justify-center font-semibold">
                1
              </div>
              <h3 className="mt-4 text-2xl font-[500]">Keyword Research</h3>
              <p className="text-gray-600 mt-2">We pinpoint and leverage the most impactful terms, aligning your content seamlessly.</p>
            </div>
            <div className="text-center flex justify-center items-center flex-col">
              <div className="bg-purple-200 text-black w-25 h-25  rounded-full flex items-center justify-center font-semibold relative">
                <Image src="/assets/images/shape/process-circle.png" alt="image" loading="lazy" className='absolute animation-rotate' fill sizes='100%'/>
                <span className='relative'>2</span>
              </div>
              <h3 className="mt-4 text-2xl font-[500]">Link Building</h3>
              <p className="text-gray-600 mt-2">{"We secure high-quality backlinks, boosting your site's credibility and contributing."}</p>
            </div>
            <div className="text-center flex justify-center items-center flex-col">
              <div className="bg-green-200 text-black w-20 h-20  rounded-full flex items-center justify-center font-semibold">
                3
              </div>
              <h3 className="mt-4 text-2xl font-[500]">Fast Ranking</h3>
              <p className="text-gray-600 mt-2">Our goal is clear – secure top rankings. Through meticulous optimization.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
