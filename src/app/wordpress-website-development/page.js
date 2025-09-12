import AboutSilder from '@/components/about-us/AboutSilder'
import FeqSection from '@/components/our-services/FeqSection'
import OurServiceReport from '@/components/our-services/OurServiceReport'
import OurServicesSection from '@/components/our-services/OurServicesSection'
import OurWebsiteDevelopment from '@/components/our-services/OurWebsiteDevelopment'
import ServiceGetStart from '@/components/our-services/ServiceGetStart'
import ServicesSection from '@/components/our-services/ServicesSection'
import React from 'react'

export default function page() {
  return (
    <>
      <ServiceGetStart singleData={{
        heading: "WordPress Website ",
        slug: "wordpress-website-development",
        heading3: "(Scalable, SEO-Optimized, And Customizable Solutions)",
        desc: "Want A Strong, Adaptable, And SEO-Savvy Website? Our Expert WordPress Website Development Services Assist You In Creating High-Performance, Fully Customizable Websites That Get Results.",
        desc1: "WordPress Supports More Than 35% Of All Sites Globally, Including Numerous Fortune 500 And Inc. 5000 Firms, So It Is Among The Most Reputable CMS Platforms Today. As A Top WordPress Development Company, We Provide End-To-End Solutions That Are Customized To Your Business Requirements — From Breathtaking Designs And Plugin Integrations To Mobile Optimization And Advanced SEO Capabilities."
      }} />
      <AboutSilder />
      <OurWebsiteDevelopment />
      <OurServicesSection />
      <FeqSection />
    </>
  )
}
