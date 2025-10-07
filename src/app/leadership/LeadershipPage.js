"use client"

import { Loader } from '@/Commen-components/Lodding'
import MarqueeSection from '@/Commen-components/Marquee'
import SmallTitle from '@/Commen-components/SmallTitle'
import AboutHero from '@/components/about-us/AboutHero'
import AboutMission from '@/components/about-us/AboutMission'
import AboutTeam from '@/components/about-us/AboutTeam'
import VideoSection from '@/components/about-us/VideoSection'
import React from 'react'
import '../../styles/modules/About.css'
import AboutAwards from '@/components/about-us/AboutAwards'
import AboutSilder from '@/components/about-us/AboutSilder'
import Image from 'next/image'

export default function Leadership() {
  return (
    <div className='relative '>
      <div
        className="bg-cover bg-center relative"
        style={{ backgroundImage: "url('/assets/images/bg/banner-fout-bg.png')" }}
      >
        <div className='absolute top-0 left-0 wow  animate__animated  animate__fadeInLeft'>
          <Image src='/assets/images/shape/banner-four-arrow.png' fill alt='' loading="lazy" sizes='100%'/>
        </div>
          {/* <div className='absolute top-[40%] left-[45%] h-90 w-90 md:block hidden'>
          <Image src='/assets/images/shape/download__1_-removebg-preview.png' loading="lazy" className='h-full w-full' fill alt='' sizes='100%'/>
        </div> */}

        <AboutHero data={{
          img:"/assets/images/about/about-three-kit.png",
          slug:"Leadership",
          heading:"Meet the Leaders Driving Innovation",
          des:"Our leadership team brings vision, expertise, and dedication to every project. Together, we empower businesses with strategic direction and world-class solutions."
        }}/>
        <VideoSection />
      </div>
      {/* <MarqueeSection exClass={"blank"}/> */}
      <AboutSilder exClass={"pt-15"}/>
      <AboutMission />
      <AboutTeam />
      <AboutAwards/>
    </div>
  )
}
