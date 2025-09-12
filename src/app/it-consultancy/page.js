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
            heading:"IT Consultant Firm – Onepixel Soft",
            desc:"Make your business change with industry-led IT Consulting Solutions. Our leading minds provide us with expertise and in-depth technical expertise to create a tailored IT strategy to fit your company's specific goals. No matter if you're a startup with growth ambitions or an enterprise wishing to modernize legacy systems, Onepixel Soft stands as your go-to technology partner—leading you through every phase of your digital transformation.",
        }}/>
        <AboutSilder/>
        <OurWebsiteDevelopment/>
        <OurServicesSection/>
        <FeqSection/>
    </div>
  )
}
