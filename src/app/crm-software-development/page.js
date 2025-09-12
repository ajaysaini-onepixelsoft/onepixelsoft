import AboutSilder from '@/components/about-us/AboutSilder'
import FeqSection from '@/components/our-services/FeqSection'
import OurServicesSection from '@/components/our-services/OurServicesSection'
import OurWebsiteDevelopment from '@/components/our-services/OurWebsiteDevelopment'
import ServiceGetStart from '@/components/our-services/ServiceGetStart'
import React from 'react'

export default function page() {
  return (
    <div>
        <ServiceGetStart singleData={{
            heading:"Custom CRM Software Development Services for Business Development",
            desc:"We at OnePixel Soft deal in CRM software development, providing tailored, expandable CRM solutions that enable businesses to streamline customer relationship management. Our experts develop, design, and implement CRM systems that make business more efficient by automating and enhancing customer interactions.",
            desc1:"No matter which industry you're from – pharmacy, finance, healthcare, or otherwise – we make our CRM solutions fit your specific business needs and objectives. Through our CRM development services, companies can streamline their processes, organize customer information, and enhance employee productivity."
        }}/>
        <AboutSilder/>
        <OurWebsiteDevelopment/>
        <OurServicesSection/>
        <FeqSection/>
    </div>
  )
}
