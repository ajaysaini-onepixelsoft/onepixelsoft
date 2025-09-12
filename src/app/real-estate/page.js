import AboutSilder from '@/components/about-us/AboutSilder'
import FeqSection from '@/components/our-services/FeqSection'
import ServiceGetStart from '@/components/our-services/ServiceGetStart'
import OurAppSuccess from '@/components/solutions/OurAppSuccess'
import OurDevlomentCycle from '@/components/solutions/OurDevlomentCycle'
import OurFeatured from '@/components/solutions/OurFeatured'
import OurSolutionleftCard from '@/components/solutions/OurSolutionleftCard'
import OurSoultionBannner from '@/components/solutions/OurSoultionBannner'
import React from 'react'

export default function page() {
    return (
        <div>
            <ServiceGetStart singleData={{
                heading: "Real Estate App Development Company",
                desc: "At Onepixel Soft, we specialize in creating advanced real estate apps that enhance user experience and streamline property transactions. Whether you need mobile or web solutions, our apps feature intuitive design, secure payment systems, real-time property updates, and more. Partner with us to revolutionize your real estate business with a fully customized platform that meets the unique needs of your clients and agents."
            }} />
            <AboutSilder />
            <OurSolutionleftCard data={{
                heading: "Revolutionize Your Property Business with Real Estate App Solutions",
                desc: ["At Onepixel Soft, we build innovative real estate apps that redefine how property businesses manage transactions and user experiences. Whether it’s property bookings, management, or listing updates, our custom solutions ensure seamless functionality for users and agents alike. We specialize in developing secure and scalable apps that simplify real estate operations.", "With years of experience, we craft tailored, mobile-first platforms that focus on user engagement. Our team delivers end-to-end real estate app development services, allowing your business to thrive in a competitive market while offering a superior customer experience."],
                img1: "/assets/images/solution/rs.png"
            }} />
            <OurFeatured FeaturedData={{
                heading: "Get Your Personalized Milk Delivery App Like Top Brands",
                desc: "Need to streamline and expand your dairy business? Onepixel Soft provides bespoke milk delivery app development to suit your business model. Our skilled developers design on-demand milk delivery apps with inspiration from market leaders, with cutting-edge features to facilitate effortless ordering, subscription management, and doorstep delivery.",
                cards: [
                    {
                        title: "Custom Real Estate App Development",
                        desc:
                            "We provide customized real estate app development solutions designed to align with your business objectives. From concept to launch, our apps offer seamless property management and intuitive features for both buyers and agents.",
                        icon: "/assets/images/icon/feature-icon1.png",
                        bgClass: "bg-blue-100",
                        color: "#dbeafe",
                        link: "/service-details",
                    },
                    {
                        title: "Real Estate App Consultation",
                        desc:
                            "Our experienced team provides real estate app consultation services to help you define your app’s needs. We assist you in selecting the ideal technology stack and features to build a high-performance property platform.",
                        icon: "/assets/images/icon/feature-icon2.png",
                        bgClass: "bg-green-100",
                        color: "#dcfce7",
                        link: "/service-details",
                    },
                    {
                        title: "Android Real Estate App Development",
                        desc:
                            "Tap into our expertise in Android real estate app development to create scalable applications. From advanced search features to property booking, our apps are designed for Android users, delivering speed and efficiency.",
                        icon: "/assets/images/icon/feature-icon3.png",
                        bgClass: "bg-orange-100",
                        color: "#ffedd5",
                        link: "/service-details",
                    },
                    {
                        title: "iOS Real Estate App Development",
                        desc:
                            "We specialize in iOS real estate app development, creating secure and intuitive apps. Our solutions ensure smooth navigation and enhanced user engagement for iPhone and iPad users.",
                        icon: "/assets/images/icon/feature-icon1.png",
                        bgClass: "bg-blue-100",
                        color: "#dbeafe",
                        link: "/service-details",
                    },
                    {
                        title: "Real Estate App Maintenance",
                        desc:
                            "Our real estate app maintenance services keep your app running smoothly. We handle updates, bug fixes, and performance optimization to ensure an uninterrupted user experience.",
                        icon: "/assets/images/icon/feature-icon2.png",
                        bgClass: "bg-green-100",
                        color: "#dcfce7",
                        link: "/service-details",
                    },
                    {
                        title: "Real Estate App UI/UX Design",
                        desc:
                            "With our expertise in real estate app designing, we craft visually appealing and easy-to-navigate interfaces. Our focus is on delivering a seamless user experience with modern, intuitive designs.",
                        icon: "/assets/images/icon/feature-icon3.png",
                        bgClass: "bg-orange-100",
                        color: "#ffedd5",
                        link: "/service-details",
                    },
                ],
            }} />
            <OurDevlomentCycle DevlomentCycleData={{
                heading: "Web-Admin Panel Features",
                desc: "It provides complete control over users, orders, content, payments, and analytics to efficiently manage and scale the platform.",
                cards: [
                    {
                        icon: "/assets/images/icon/service-three-icon1.png",
                        title: "Artificial Intelligence (AI)",
                        desc: "We leverage AI to offer personalized recommendations, property valuations, and virtual assistants, enhancing user engagement and improving decision-making processes."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon2.png",
                        title: "Cloud Computing",
                        desc: "Through cloud integration, our apps offer secure data storage, scalability, and easy access to property information, ensuring smooth and efficient operations."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon3.png",
                        title: "Machine Learning (ML)",
                        desc: "Our apps leverage ML for predictive analytics, market trend forecasting, and dynamic search capabilities. ML empowers smarter property management."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon4.png",
                        title: "Blockchain Technology",
                        desc: "Blockchain ensures secure and transparent transactions in real estate application development. It simplifies payments, contracts, and document management processes."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon5.png",
                        title: "IoT Integration",
                        desc: "We incorporate IoT for smart home controls and real-time property monitoring, adding modern convenience to custom real estate app development."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon6.png",
                        title: "Augmented Reality (AR)",
                        desc: "AR enables virtual property tours, offering immersive 3D experiences. It’s a game-changer for remote property exploration and engagement."
                    }
                ]
            }} />
            <OurAppSuccess appSuccessData={{
                heading: "Customer App Features",
                desc: "It offers a seamless experience for browsing, ordering, tracking, and securely paying for products or services in real time.",
                cards: [
                    {
                        title: "Zillow App Clone",
                        description: "Our Zillow app clone offers a robust platform with features for property listings, advanced search, and smooth property booking capabilities.",
                        icon: "/assets/images/icon/service-icon1.png",
                        bgClass: "bg1",
                        color: "#e6f8f0",
                        link: "/service-details"
                    },
                    {
                        title: "Realtor.com App Clone",
                        description: "Create a highly functional Realtor.com app clone with an intuitive design, seamless property comparison features, and a user-friendly interface to enhance user engagement and attract more users.",
                        icon: "/assets/images/icon/service-icon2.png",
                        bgClass: "bg2",
                        color: "#e0f7ff",
                        link: "/service-details"
                    },
                    {
                        title: "Redfin App Clone",
                        description: "Build your own Redfin app clone featuring real-time property updates, interactive maps, and robust communication tools for seamless interaction between agents and buyers.",
                        icon: "/assets/images/icon/service-icon3.png",
                        bgClass: "bg3",
                        color: "#fde7ea",
                        link: "/service-details"
                    },
                    {
                        title: "Trulia App Clone",
                        description: "We create a dynamic Trulia app clone featuring advanced filters, personalized recommendations, and detailed property insights for users.",
                        icon: "/assets/images/icon/service-icon4.png",
                        bgClass: "bg4",
                        color: "#f3e8ff",
                        link: "/service-details"
                    },
                    {
                        title: "Rightmove App Clone",
                        description: "Get a custom Rightmove app clone with seamless property browsing, booking options, and tailored solutions for buyers and agents.",
                        icon: "/assets/images/icon/service-icon5.png",
                        bgClass: "bg5",
                        color: "#fdf3e8",
                        link: "/service-details"
                    },
                    {
                        title: "Bayut App Clone",
                        description: "Our Bayut app clone includes top-notch features like multi-language support, advanced analytics, and property booking for a global audience.",
                        icon: "/assets/images/icon/service-icon6.png",
                        bgClass: "bg6",
                        color: "#e9f9f2",
                        link: "/service-details"
                    }
                ]
            }} />
            <OurSoultionBannner data={{
                heading: "Let’s Build Your Next-Gen Real Estate App Together",
                desc: "Turn your vision into reality with our expert developers, crafting cutting-edge solutions that drive success and transform businesses.",
                img1: "/assets/images/solution/rs-1.png"
            }} />
            <FeqSection />
        </div>
    )
}
