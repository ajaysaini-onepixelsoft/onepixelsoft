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
                heading: "Drupal Web Development Services",
                slug: "drupal-web-development",
                heading3: "(Build Scalable And Secure Digital Experiences With Expert Drupal Development.)",
                desc: "Create Scalable And Secure Digital Experiences With Expert Drupal Development. Drupal Is A Powerful Open-Source Content Management System (CMS) Perfect For Building High-Performance Websites And Sophisticated Web Applications.",
                desc1: "It Provides Advanced Features, Modular Architecture, And Unparalleled Flexibility—Making It A Choice Of Enterprises, Government Portals, And Educational Institutions. At OnePixel Soft, We Offer End-To-End Drupal Web Development Services Specifically Designed To Accomplish Your Business Objectives.",
        }}/>
        <AboutSilder/>
        <OurServicePoints serviceData={{
                            heading1: "Drupal Web Development Services – Key Of Success",
                slug: "drupal-web-development",
                poits1: [`
                    Drupal Provides The Ideal Combination Of Flexibility, Security, And Scalability That Makes It One Of The Strongest CMS Platforms For High-End Web Solutions.`,
                    `With Drupal Web Development Services, You Have Access To A Framework That Empowers Complex Content Arrangements, Multilingual Support, And Advanced Security Protocols.
                    `,
                    `One Of The Success Factors Of Drupal Is Its Modular Design, Which Enables You To Personalize Features Without Compromising Core Functionality.`,
                    `The Open-Source Ecosystem Facilitates Ongoing Innovation, With Thousands Of Modules That Extend Your Site's Functionality Naturally.`,
                    `From Online Stores To Government Portals, Drupal Empowers You To Design Responsive, Mobile-Friendly, And SEO Optimized Web Platforms That Improve User Experience.`,
                    `At OnePixel Soft, We Leverage These Strengths By Providing Tailored Drupal Development That Fits Your Business Requirements To The T.`,
                    `Our Developers Employ Agile Frameworks To Provide Fast Delivery, Scalability With Ease, And Future-Proof Digital Solutions.`,
                    `Drupal's Robust API Support Also Facilitates Seamless Integration With Third-Party Applications And CRMs For Seamless Business Operations.`,
                    `The Open-Source Ecosystem Facilitates Ongoing Innovation, With Thousands Of Modules That Extend Your Site's Functionality Naturally.`,
                    `Select OnePixel Soft For Dependable, Custom, And Future-Proof Drupal Solutions That Actually Lift Your Online Performance.`
                ]
        }}/>
        <OurWebsiteDevelopment/>
        <OurServicesSection/>
        <FeqSection/>
    </div>
  )
}
