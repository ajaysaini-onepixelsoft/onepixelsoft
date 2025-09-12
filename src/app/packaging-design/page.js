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
            heading:"Packaging Design Services by Onepixel Soft",
            desc:"At Onepixel Soft, we know that product packaging design is more than just a box—it's your brand's initial handshake with the customer. Our custom packaging solutions are designed to safely ship your products while making a strong, lasting first impression. Whether on store shelves or unboxed in the home, your packaging is frequently the first direct contact customers have with your brand. That's why our creative packaging solutions emphasize both functionality and visual impact, so that your product is noticed and conveys trust, quality, and brand identity."
        }}/>
        <AboutSilder/>
        <OurServiceReport data={{
            img1:"/assets/images/choose/Brochure%20image-01.svg",
            heading:"Packaging That Protects & Promotes Your Brand",
            desc:"At Onepixel Soft, we understand that product packaging is not just a protective coating—it's a forceful branding mechanism. Your packaging protects your products from damage throughout shipping, handling, and storage. But beyond that, it's usually the first tangible experience your customer has with your company. No matter whether it lands in their hands or catches their eye on a store shelf, your packaging design makes a lasting impact. It shares your brand message, instills confidence, and makes purchasing decisions before the product is even picked up. We design bespoke packaging solutions that not only appear breathtaking but also embody your brand philosophy and speak to your audience emotionally. From idea to realization, we provide packaging solutions that are robust, functional, and memorable.",
            btu:"contact now"
        }}/>
        <OurWebsiteDevelopment/>
        <OurServicesSection/>
        <FeqSection/>
    </div>
  )
}
