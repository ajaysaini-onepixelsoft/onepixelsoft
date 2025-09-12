"use client"
import CommenHero from '@/Commen-components/CommenHero'
import Loyalty from '@/components/client-reviews/Loyalty'

import dynamic from 'next/dynamic'
import React from 'react'
const AboutAwards = dynamic(() => import('@/components/about-us/AboutAwards'), { ssr: false });
const BlogesSection = dynamic(()=>import ('@/components/home/BlogesSection'),{ssr:false})
export default function ClientReviews() {
  return (
    <div>
        <CommenHero data={{
          slug:"Client Review's",
          heading:"What Our Clients Say About Us",
          des:"Our clients' words inspire us to keep delivering exceptional results. Explore real reviews and stories that highlight our commitment to quality, innovation, and customer success."
        }}/>
        <AboutAwards/>
        <Loyalty/>
        <BlogesSection/>
    </div>
  )
}
