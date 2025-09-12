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
                heading: "Professional Logo Design Services That Establish Your Brand Identity",
                desc: "At Onepixel Soft, we know that your logo is the face of your brand—and it should say a lot. Sure, there are many logo design platforms available out there, but not all provide the quality or creativity your business needs. When you're introducing a startup or need to rebrand your company, our creative logo design work guarantees you outshine the competition and leave a lasting impression.",
            }} />
            <AboutSilder />
            <OurServiceReport data={{
                img1:"/assets/images/choose/Brochure%20image-01.svg",
                heading: "Professional Logo Design Services That Make Your Brand Shine",
                desc: "In the world of logo design, there are many services claiming to offer `free` or budget-friendly options, but not all can deliver the quality and professionalism your brand deserves. At Onepixel Soft, we take pride in crafting high-quality, unique logos that truly represent your business. We know you don’t want a logo that looks like it was designed by a beginner, nor do you want to go through a complex and lengthy process to get the perfect design.",
                btu: "contact now"
            }} />
            <OurWebsiteDevelopment />
            <OurServicesSection />
            <FeqSection />
        </div>
    )
}
