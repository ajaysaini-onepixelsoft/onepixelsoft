import AboutSilder from '@/components/about-us/AboutSilder'
import FeqSection from '@/components/our-services/FeqSection'
import OurServiceLanding from '@/components/our-services/OurServiceLanding'
import OurServicePoints from '@/components/our-services/OurServicePoints'
import OurServicesSection from '@/components/our-services/OurServicesSection'
import OurWebsiteDevelopment from '@/components/our-services/OurWebsiteDevelopment'
import ServiceGetStart from '@/components/our-services/ServiceGetStart'
import React from 'react'

export default function page() {
    return (
        <div>
            <ServiceGetStart singleData={{
                heading: "Mobile App Promotion",
                desc: "With the transition of the world to smartphones, companies have tremendous possibilities to reach customers using mobile applications. Yet, with thousands of apps being released every day, many go unseen, are never downloaded, or get deleted soon. The success of an app depends on a well-thought-out plan based on strong marketing and promotion. A maximized mobile app marketing plan makes your app unique, drives users, and retains them, making it a success in the long run.",
            }} />
            <AboutSilder />
            <OurServiceLanding data={{
                heading: "Mobile App Marketing & Advertising",
                desc: ["The world has shifted from desktops to mobiles. Companies now have more and more opportunities on a daily basis that can radically alter the way their product or service is accessed and delivered to their potential customers. Having a mobile app is an excellent way to access these targeted consumers. There are thousands of apps being released on app stores each day, but the reality is that many of them are never downloaded at all and some even get uninstalled by users after one-time use. Your app's success varies based on the sales strategy you adopt."]
            }} />
            <OurWebsiteDevelopment />
            <OurServicesSection />
            <OurServicePoints serviceData={{
                heading: "Why Choose Us",
                paragraph1: "Onepixel Soft is a household brand in the mobile app marketing industry. Our experts and marketing strategists have a single mission: executing your app campaign with excellence and accuracy. Below are some of the reasons why you should partner with us for your app marketing services:",
                heading2: "",
                poits1: [
                    "Personalized App Marketing: Our expert team designs multi-channel, scalable marketing campaigns that meet your unique requirements, whether you are launching an iOS application, Android application, or gaming app. We aim at distinguishing your app from the fierce competition in the marketplace.",
                    "Professional Marketing Strategies: We specialize in ASO (App Store Optimization) and localization techniques to generate more installs and maximize user interactions. Our viral ad campaigns aim to achieve increased ROI and promote your app's performance in the market."
                ]


            }} />
            <FeqSection />
        </div>
    )
}
