import AboutSilder from '@/components/about-us/AboutSilder'
import FeqSection from '@/components/our-services/FeqSection'
import OurServiceLanding from '@/components/our-services/OurServiceLanding'
import OurServicesSection from '@/components/our-services/OurServicesSection'
import OurWebsiteDevelopment from '@/components/our-services/OurWebsiteDevelopment'
import ServiceGetStart from '@/components/our-services/ServiceGetStart'
import React from 'react'

export default function page() {
  return (
    <div>
      <ServiceGetStart singleData={{
        heading:"Crowdfunding Application Development",
        desc:"At Onepixel Soft, we help build robust, bespoke crowdfunding platforms that empower businesses, entrepreneurs, and investors. As a top-rated crowdfunding app development firm, we deliver innovative, scalable web and mobile solutions to suit your exact industry—whether equity-based, real estate, infrastructure, or donation-based platforms.",
        desc1:"Whether you're starting a new startup or expanding an existing platform, our experienced developers provide white-label crowdfunding software that's secure, intuitive, and full of the latest technology. We assist you in bringing your vision to life in the form of a fully functional, market-ready product that fuels growth and investor engagement."
      }}/>
      <AboutSilder/>
      <OurServiceLanding data={{
        heading:"Crowdfunding App Development",
        desc:["Dreaming of having a crowdfunding website such as Kickstarter, Indiegogo, GoFundMe, Seedrs, and CrowdRise? Onepixel soft is one of the top companies developing crowdfunding platforms offering crowdfunding solutions that tap the potential of pioneering technologies for cutting-edge web and mobile apps in the industry.",
        "Whether start-ups, a small company, or a company, our top-class online funding platform services offer a variety of crowdfunding application development solutions. Our white-label crowdfunding software development solutions facilitate Equity Crowdfunding Platform, Real Estate Crowdfunding Platform, Infrastructure Crowdfunding Platform, and so on. Our crowdfunders develop spectacular crowdfunding web and mobile applications using popular technology stacks to your requirements, ideology, and business objectives that will make you market leaders."]
      }}/>
      <OurWebsiteDevelopment/>
      <OurServicesSection/>
      <FeqSection/>
    </div>
  )
}
