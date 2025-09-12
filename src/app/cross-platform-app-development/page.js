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
            heading:"Cross-Platform App Development",
            desc:"OnePixel Soft is a leading cross-platform mobile application development firm, building applications that can be used perfectly on various devices and platforms. Through the usage of HTML5, CSS3, and JavaScript, we design excellent mobile experiences tailored to suit your business goals.",
            desc1:"Our responsive development approach enables us to offer personalized solutions in record time with flexible engagement options for businesses operating in different industries."
        }}/>
        <AboutSilder/>
        <OurServiceLanding data={{
            heading:"Cross-Platform App Development",
            desc:["There is a diverse array of devices and platforms out there. And, OnePixel Soft is one of the top cross-platform application development firms to develop mobile applications for all platforms and devices.","At OnePixel soft, we design and develop memorable mobile experiences with HTML5, CSS3, and JavaScript technologies. Whether cross-platform HTML5 app development or implementing any other technology, we have the expertise to deliver results. We invest time deeply understanding your requirements and employing an agile development process to create applications that suit the requirements of your business, industry, and users. Further, we provide proven and flexible engagement models."]
        }}/>
        <OurWebsiteDevelopment/>
        <OurServicesSection/>
        <FeqSection/>
    </div>
  )
}
