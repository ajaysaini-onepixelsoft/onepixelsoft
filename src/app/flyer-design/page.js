import AboutSilder from '@/components/about-us/AboutSilder'
import OurServiceReport from '@/components/our-services/OurServiceReport'
import OurServicesSection from '@/components/our-services/OurServicesSection'
import OurWebsiteDevelopment from '@/components/our-services/OurWebsiteDevelopment'
import ServiceGetStart from '@/components/our-services/ServiceGetStart'
import React from 'react'

export default function page() {
  return (
    <div>
        <ServiceGetStart singleData={{
            heading:"Flyer Design Services at Onepixel Soft",
            desc:["Onepixel Soft is a professional service that creates unique and attention-grabbing flyer designs that successfully communicate your brand message. Whether you are advertising a product, service, or event, our professional designers create flyers that capture attention and make a lasting impression.","We aim to combine creativity with strategy to make each flyer an effective marketing tool, generating engagement and business success. From colorful graphics to effective calls to action, we provide flyers that are not only eye-catching but also strategically crafted to engage your target market. Let us assist you in conveying your message in a manner that cuts through and generates results."]
        }}/>
        <AboutSilder/>
        <OurServiceReport data={{
            heading:"Flyer Design Services at Onepixel Soft",
            desc:"At Onepixel Soft, we provide creative and innovative flyer and poster design services that effectively convey your brand's message. Our designers use advanced creativity and insightful design to develop materials that command attention and convey a strong marketing appeal. We recognize that well-designed posters and flyers have an imperative role in creating a favorable, lasting impression on your target customers. Our aim is to give you a premium-quality product that assists you in the most effective way to connect your target audience and reach your business goals. If you're launching a new product, organizing an event, or advertising a special promotion, we want to make sure each flyer and poster we produce is a professional reflection of your business that drives results.",
            btu:"contact now",
            img1:"/assets/images/choose/Brochure%20image-01.svg"
        }}/>
        <OurWebsiteDevelopment/>
        <OurServicesSection/>
        
    </div>
  )
}
