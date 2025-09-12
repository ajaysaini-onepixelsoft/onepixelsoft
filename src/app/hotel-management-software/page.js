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
        heading: "Hotel Management Software",
        desc: "For today's highly competitive hotel industry, numerous hotel software vendors sell low-cost, low-functionality solutions—making hotel management inefficient and decentralized. Here at Onepixel Soft, we do things differently. Our integrated system is designed to enhance operational effectiveness, drive guest satisfaction, and streamline day-to-day work flows—so you can deliver outstanding hospitality."
      }} />
      <AboutSilder />
      <OurServicePoints serviceData={{
        heading: "Hotel Management Software",
        paragraph1: "In the rapidly changing hospitality business today, numerous software companies offer hotel management solutions—but the majority of them market low-cost products with basic features, which result in inefficient hotel operations.Onepixel Soft differs from others by providing a full-fledged Hotel Management Software System in cloud as well as on-premise models. Our system is designed to manage every necessary feature of hotel operations, such as: Online booking engine , Front desk and reception management , Housekeeping and maintenance tracking , Invoicing and billing , Reports and performance analytics , With Onepixel Soft, you have a robust, single system that streamlines operations, maximizes guest satisfaction, and enhances overall efficiency."
      }} />
      <OurWebsiteDevelopment />

      <OurServicesSection />
      <FeqSection />

    </div>
  )
}
