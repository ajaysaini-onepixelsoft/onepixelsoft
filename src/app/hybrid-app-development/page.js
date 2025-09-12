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
            heading:"Hybrid App Development",
            desc:"We, at Onepixel Soft, are experts in hybrid application development that merges the strength of native apps with the versatility of HTML5 technologies. Hybrid apps run smoothly on many platforms through one codebase—saving time and money and accelerating deployment. Such applications execute inside a native container and utilize the browser engine of the device, presenting a seamless, responsive user interface that is almost indistinguishable from a native app. From the perspective of businesses and developers, hybrid app development provides an effective, scalable, and agile means of developing apps that offer good performance across both Android and iOS platforms. Whether you have a large user base in mind or must get up and running quickly across multiple platforms, our hybrid solutions provide the best of both worlds."
        }}/>
        <AboutSilder/>
        <OurServiceLanding data={{
            heading:"Hybrid App Development",
            desc:["Hybrid app development integrates the best of native applications with the versatility of web technologies such as HTML5, CSS, and JavaScript. Although hybrid apps appear and act like native apps to end-users—being downloadable from the App Store or Google Play and cached on mobile devices—the most important difference is in their development process","Rather than developing individual code for every platform, hybrid apps share a single codebase that executes within an embedded browser component, allowing development to be faster, less expensive, and more manageable. This method allows companies to provide feature-rich, high-performance mobile apps that are well-suited to run on both Android and iOS platforms. At Onepixel Soft, we create hybrid apps that are fast, responsive, and customized to your business objectives—filling the gap between web and mobile experiences."]
        }}/>
        <OurWebsiteDevelopment/>
        <OurServicesSection/>
        <FeqSection/>
    </div>
  )
}
