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
            heading:"Onepixel Soft Brochure Design Services",
            desc:"At Onepixel Soft, we are delighted to be one of India's top creative design firms, with a focus on bespoke brochure design services that engage and convert.",
            desc1:"Whether you want to highlight your products, services, or brand narrative, our professionally designed brochures are customized to achieve your marketing and sales objectives. We combine creativity, innovation, and strategic thought to craft brochures that are not only beautiful—they get results."
        }}/>
        <AboutSilder/>
        <OurServiceReport data={{
            img1:"/assets/images/choose/Brochure%20image-01.svg",
            heading:"UI Design – Designing Experiences That Inspire",
            desc:"At Onepixel Soft, we think that good design fixes problems—but great design creates unforgettable experiences. Our UI/UX design services are designed to provide your business not only visual appeal but also smooth functionality that captivates your audience and improves usability. With a group of creatively motivated UI and UX professionals, we take simple concepts and rough wireframes and turn them into visually stunning, user-focused interfaces. Whether you're developing mobile applications, cloud apps, or interactive websites, we make sure every detail is carefully crafted to represent your brand and enhance user experience.",
            btu:"contact now"
        }}/>
        <OurWebsiteDevelopment/>
        <OurServicesSection/>
        <FeqSection/>
    </div>
  )
}
