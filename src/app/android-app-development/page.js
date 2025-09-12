import AboutSilder from '@/components/about-us/AboutSilder'
import FeqSection from '@/components/our-services/FeqSection'
import OurServiceLanding from '@/components/our-services/OurServiceLanding'
import OurServicesSection from '@/components/our-services/OurServicesSection'
import OurWebsiteDevelopment from '@/components/our-services/OurWebsiteDevelopment'
import ServiceGetStart from '@/components/our-services/ServiceGetStart'
import React from 'react'
export const metadata = {
  title: "Android App Development Services | OnePixelSoft",
  description: "Develop powerful Android apps with OnePixelSoft. We create secure, scalable, and user-friendly mobile applications that deliver exceptional performance and enhance user engagement.",
  keywords: ["web design", "digital marketing", "Jaipur"],
  authors: [{ name: "OnePixel Soft" }],
  robots: "index, follow",
  applicationName: "OnePixelSoft",
  creator: "OnePixelSoft",
  publisher: "OnePixelSoft",
  openGraph: {
    title: "OG Title",
    description: "OG Description",
    url: "https://onepixelsoft.com",
    siteName: "OnePixelSoft",
    images: [
      {
        url: "https://onepixelsoft.com/images/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Twitter Title",
    description: "Twitter Description",
    creator: "@OnePixelSoft",
    images: ["https://onepixelsoft.com/images/logo.png"],
  },
};

export default function page() {
  return (
    <div>
        <ServiceGetStart singleData={{
            heading:"Android App Development",
            desc:"We at Onepixel Soft specialize in developing high-performance Android apps that suit your business requirements. Our skilled team of developers utilizes the most advanced technologies to provide feature-packed, scalable, and secure mobile solutions.",
            desc1:"From idea to launch, we provide end-to-end Android app development solutions, such as UI/UX design, integration, testing, and maintenance."
        }}/>
        <AboutSilder/>
        <OurServiceLanding data={{
            heading:"Android App Development",
            desc:["With today's busy virtual age, mobile apps need to provide seamless performance and robust functionality. Android app development is a forward-thinking solution that increases your virtual reach and boosts user interaction.","We at Onepixel Soft have years of experience working in the industry and bring that expertise to the table. Our experienced developers create strong, high-performance Android applications with leading-edge features and seamless user interfaces. You may want a basic utility app or a sophisticated enterprise solution; we've got you covered."]
        }}/>
        <OurWebsiteDevelopment/>
        <OurServicesSection/>
        <FeqSection/>
    </div>
  )
}
