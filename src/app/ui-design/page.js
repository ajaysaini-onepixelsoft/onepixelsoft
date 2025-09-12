import AboutSilder from '@/components/about-us/AboutSilder'
import FeqSection from '@/components/our-services/FeqSection'
import OurServiceReport from '@/components/our-services/OurServiceReport'
import OurServicesSection from '@/components/our-services/OurServicesSection'
import OurWebsiteDevelopment from '@/components/our-services/OurWebsiteDevelopment'
import ServiceGetStart from '@/components/our-services/ServiceGetStart'
import React from 'react'

export default function page() {
  return (
    <div>
        <ServiceGetStart singleData={{
            heading:"WordPress Website Development",
            desc:"WordPress powers 30-35% of websites, including many Fortune 500 companies, and is used by 54% of Inc. 5000 companies. It's a flexible, open-source platform known for SEO, social media integration, and customization. WordPress receives 20 billion page views monthly and offers optimized, high-performance solutions for businesses of all sizes."
        }}/>
        <AboutSilder/>
        <OurServiceReport data={{
            img1:"/assets/images/choose/Brochure%20image-01.svg",
            heading:"Onepixel Soft Brochure Design Services",
            desc:"At Onepixel Soft, we are experts in providing cutting-edge brochure design services that enable your brand to communicate effectively, imaginatively, and persuasively. As a reliable Indian brochure design firm, we provide an extensive array of brochure and flyer design solutions for marketing, sales, product presentations, and more. We know brochure design is not merely about looks—it's a strategic combination of creativity, innovation, and professional execution. Having years of experience in the design field, we create effective brochures that not only appear professional but also drive purchasing decisions and build your brand image",
            btu:"contact now"
        }}/>
        <OurWebsiteDevelopment/>
        <OurServicesSection/>
        <FeqSection/>
    </div>
  )
}
