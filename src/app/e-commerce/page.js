import AboutSilder from '@/components/about-us/AboutSilder'
import FeqSection from '@/components/our-services/FeqSection'
import OurServicePoints from '@/components/our-services/OurServicePoints'
import OurServicesSection from '@/components/our-services/OurServicesSection'
import OurWebsiteDevelopment from '@/components/our-services/OurWebsiteDevelopment'
import ServiceGetStart from '@/components/our-services/ServiceGetStart'
import React from 'react'

export default function page() {
  return (
    <div>
        <ServiceGetStart singleData={{
                            heading: "Ecommerce Website Development Services",
                heading2: "(Drive Sales & Grow Worldwid)",
                slug: "e-commerce",
                desc: "OnePixel Soft specializes in bespoke ecommerce website development that powers customer satisfaction, increases your market reach, and optimizes sales online. Our experts leverage the latest technologies and time-tested ecommerce practices to provide responsive, secure, and scalable ecommerce solutions that meet your business requirements.",
                desc1: " Whether you're opening a new online shop, revamping your existing ecommerce site, or venturing into mobile commerce, we assist you in developing a robust online presence.",
        }}/>
        <AboutSilder/>
        <OurServicePoints serviceData={{
                            slug:"e-commerce",
                heading:"E-commerce Development Service",
                paragraph1:"At OnePixel Soft, we assist companies to enhance customer satisfaction, increase reach among audiences, and boost web sales with impactful, performance-centric e-commerce solutions. In this fast-paced age of digital engagement, being competitive translates to maintaining a professionally created, custom-fit, and growing ecommerce presence—an engaging responsive site or a super-performing mobile app. It's why we couple our extensive knowledge of ecommerce development with the current technology and business-oriented strategies to provide customized solutions that address changing business needs in industries globally.",
                poits1:[
                    "E-commerce Development Service At OnePixel Soft, we assist companies to enhance customer satisfaction, increase reach among audiences, and boost web sales with impactful, performance-centric e-commerce solutions. In this fast-paced age of digital engagement, being competitive translates to maintaining a professionally created, custom-fit, and growing ecommerce presence—an engaging responsive site or a super-performing mobile app. It's why we couple our extensive knowledge of ecommerce development with the current technology and business-oriented strategies to provide customized solutions that address changing business needs in industries globally.",
                    "E-commerce Development Service At OnePixel Soft, we assist companies to enhance customer satisfaction, increase reach among audiences, and boost web sales with impactful, performance-centric e-commerce solutions. In this fast-paced age of digital engagement, being competitive translates to maintaining a professionally created, custom-fit, and growing ecommerce presence—an engaging responsive site or a super-performing mobile app. It's why we couple our extensive knowledge of ecommerce development with the current technology and business-oriented strategies to provide customized solutions that address changing business needs in industries globally."

                ]
        }}/>
        <OurWebsiteDevelopment/>
        <OurServicesSection/>
        <FeqSection/>
    </div>
  )
}
