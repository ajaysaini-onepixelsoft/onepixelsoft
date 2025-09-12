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
            heading:"LMS Software Development Company",
            heading3:"(Tailored eLearning Solutions by Onepixel Soft)",
            desc:"At Onepixel Soft, we offer custom LMS (Learning Management System) software development to enable businesses, educational institutions, and training providers. We possess years of experience in eLearning software development, providing scalable, secure, and easy-to-use LMS platforms customized to your objectives. Whether you want to train staff, onboard partners, or educate customers, our experienced team of LMS developers will support you through each step of the LMS development process, from planning and design to deployment and maintenance."
        }}/>
        <AboutSilder/>
        <OurServicePoints serviceData={{
            heading:"LMS Software Development – Scalable & Custom eLearning Solutions by Onepixel Soft",
            paragraph1:"We, at Onepixel Soft, utilize our years of eLearning development experience to create and implement custom Learning Management System (LMS) software solutions for your employees, partners, or customers. Our LMS platforms are developed to amplify learning experiences, enhance training effectiveness, and enable hassle-free user engagement. With a team of seasoned LMS developers and eLearning consultants, we walk you through each stage of the LMS software development cycle—from planning to long-term maintenance.",
            heading1:"Our LMS development offerings include:",
            poits1:[
                "Data-Driven Consulting – Strategic guidance through on-site and off-site consultations to determine your training goals.",
                "Custom LMS Development – Custom LMS components developed to suit your specific organizational requirements.",
                "Building LMS from Scratch – Complete development of your eLearning ecosystem from the ground up.",
                "Third-Party Integration – Seamless integration with CRMs, HRMS, ERP systems, payment gateways, video conferencing tools, and more.",
                "Ongoing System Enhancement – Continuous improvement and end-to-end quality assurance to ensure optimal performance.",
                "Full IT Support (L1, L2, L3) – Round-the-clock technical assistance and system maintenance to guarantee uninterrupted training delivery.",
                "It's our goal to assist you in delivering impactful, scalable, and compelling digital learning experiences using current technology and leading design practices."
            ]
        }}/>
        <OurWebsiteDevelopment/>
        <OurServicesSection/>
        <FeqSection/>
    </div>
  )
}
