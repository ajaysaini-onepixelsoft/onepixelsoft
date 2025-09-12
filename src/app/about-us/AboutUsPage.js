
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

export default function AboutUsPage() {
  return (
    <div className='relative'>
      <div
        className="bg-cover bg-center relative"
        style={{ backgroundImage: "url('/assets/images/bg/banner-fout-bg.png')" }}
      >
        <div className='absolute top-0 left-0'>
          <Image src='/assets/images/shape/banner-four-arrow.png' alt="" fill sizes='100%' loading="lazy"/>
        </div>
                <div className='absolute top-[40%] left-[45%] h-90'>
          <Image src='/assets/images/shape/download__1_-removebg-preview.png' className='h-full w-full' alt='' loading="lazy" fill/>
        </div>

        <AboutHero data={{
          img:"/assets/images/about/about-three-kit.png",
          heading:"About Us",
          slug:"about-us",
          des:"We will help a client's problems to develop the products they have with high quality Change the appearance."
        }}/>
        <VideoSection />
      </div>
      <MarqueeSection exClass={"blank"}/>
      <AboutMission />
      <AboutSilder/>
      <AboutTeam />
      <AboutAwards/>
    </div>
  )
}
