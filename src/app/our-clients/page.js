import CommenHeading from '@/Commen-components/CommenHeading'
import CommenHero from '@/Commen-components/CommenHero'
import SuccessCard from '@/Commen-components/SuccessCard'
import AwardsIndustry from '@/components/our-clients/AwardsIndustry'
import GlobalClients from '@/components/our-clients/GlobalClients'
import GrowthClients from '@/components/our-clients/GrowthClients'
import React from 'react'

export default function OurClients() {
  return (
    <div className=''>
        <CommenHero data={{
            slug:"our-clients",
            heading:"Building Partnerships That Matter",
            des:"We are proud to work with a diverse range of businesses, from startups to global brands. Our clients' trust drives us to deliver impactful solutions and long-term success.",
        }}/>
        <div className='xl:px-40 px-5 pt-15 pb-10'>
            <CommenHeading cmHeading={{
                smtext:"Our Clients",
                title:"Brands That Trust OnePixel Soft",
                desc:"Every project reflects our commitment to innovation, quality, and client success. Discover the brands that have partnered with us on their digital transformation journey.",
            }}/>
        </div>
        <SuccessCard/>
        
        <GlobalClients/>
        <GrowthClients/>
        <AwardsIndustry/>
    </div>
  )
}
