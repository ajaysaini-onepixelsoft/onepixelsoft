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
            heading:"Onepixel Soft – Digital Marketing Company",
            desc:"At Onepixel Soft, we take pride in being among the top-notch digital marketing agencies in India that provide customized solutions to enable businesses to grow online and establish strong digital presence. Having years of experience in the field, our team of experts has successfully carried out various projects across different domains ranging from website development and design to mobile application development, digital marketing services, and even 2D/3D animation.",
            desc1:"We remain in front of the curve by tracking the most current digital trends and leveraging innovative tools to keep your brand ahead, not just competing, but winning. From startups to long-time brands, we provide rapid project delivery, innovative strategies, and quantifiable results that drive genuine business outcomes."
        }}/>
        <AboutSilder/>
        <OurServiceLanding data={{
            heading:"Why Onepixel Soft?",
            desc:["At Onepixel Soft, we're not just a service provider — we're your digital growth partner. We mix trust, creativity, and strategic thinking to help your business flourish in today's competitive online marketplace. Here's why clients across industries work with us: Partnership-Driven Approach We don't serve clients as customers — we serve you as partners. By comprehensively knowing your objectives, we provide assistance with care, clarity, and commitment along the way.",
            "Dedicated to Your Growth We commit to establishing more than your business — we assist you in expanding as an influencer and thought leader in your market. Your success is our purpose. Creators of Real Value Our organization is dedicated to providing significant, quantifiable outcomes. We collaborate to create digital solutions that create brand equity, enhance ROI, and establish high levels of professionalism. End-to-End Project Management Relax and think about your vision—we'll do everything from A to Z. From web and app development to digital marketing, your success is our duty."
            ]
        }}/>
        <OurWebsiteDevelopment/>
        <OurServicesSection/>
        <FeqSection/>
    </div>
  )
}
