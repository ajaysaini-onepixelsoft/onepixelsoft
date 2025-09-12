import AboutSilder from '@/components/about-us/AboutSilder'
import FeqSection from '@/components/our-services/FeqSection'
import ServiceGetStart from '@/components/our-services/ServiceGetStart'
import OurAppSuccess from '@/components/solutions/OurAppSuccess'
import OurDevlomentCycle from '@/components/solutions/OurDevlomentCycle'
import OurFeatured from '@/components/solutions/OurFeatured'
import OurSolutionleftCard from '@/components/solutions/OurSolutionleftCard'
import OurSolutionsDevlopment from '@/components/solutions/OurSolutionsDevlopment'
import OurSoultionBannner from '@/components/solutions/OurSoultionBannner'
import React from 'react'

export default function page() {
    return (
        <div>
            <ServiceGetStart singleData={{
                heading: "Cloud Kitchen App Development Solutions",
                desc: ["Onepixel Soft is an expert in designing seamless cloud kitchen apps that streamline restaurant operations, from order processing to delivery management. Our bespoke solutions allow kitchen owners to automate processes, increase productivity, and deliver improved customer experiences.", "With real-time order updates, automated workflow, payment integration, and optimized delivery, we transform your cloud kitchen business. Let us help you scale your cloud kitchen with cutting-edge technology that easily fits into your culinary enterprise."]
            }} />
            <AboutSilder />
            <OurSolutionleftCard data={{
                heading: "Enhance Your Cloud Kitchen with AI-Driven Solutions",
                desc: ["Transform your cloud kitchen business with AI-based apps from Onepixel Soft. Our smart solutions enhance operating efficiency, maximize resource utilization, and enhance customer care. With automation of ordering, inventory, and delivery functions, we assist ghost kitchens to become more scalable and profitable.", "Through powerful AI capabilities, our apps offer insights-based data to automate restaurant processes, enhance order accuracy, and maximize customer satisfaction. Let us infuse AI technology into your cloud kitchen and advance your food delivery business to great heights."],
                img1: "/assets/images/solution/ck2.png"
            }} />
            <OurFeatured FeaturedData={{
                heading: "Custom Cloud Kitchen App Clones to Accelerate Your Business",
                desc: "Take your cloud kitchen to the next level with custom app clones that are built for hassle-free food delivery and increased user interaction. Our solutions mimic popular culinary platforms and customize them to suit your unique requirements. With powerful features and easy-to-use interfaces, these app clones are designed to optimize your operations, increase customer satisfaction, and drive growth in the food delivery market. We can assist you in broadening your reach with precisely designed cloud kitchen app clones for a successful digital journey",
                cards: [
                    {
                        title: "Posist App Clone",
                        desc:
                            "Post from Restroworks is a Unified cloud-based platform that powers more than 15,000+ restaurants worldwide. The platform enables restaurant owners to expand by scaling, increasing efficiency in the bottom line, and offering the same experience for guests. Posist’s unified technology platform streamlines restaurants’ Front-of-House (FOH), Back-of-House (BOH), Out-of-house/integrations, Analytics, and CRM.",
                        icon: "/assets/images/icon/feature-icon1.png",
                        bgClass: "bg-blue-100",
                        color: "#dbeafe",
                        link: "/service-details",
                    },
                    {
                        title: "LimeTray App Clone",
                        desc:
                            "One platform that can handle all the needs of your restaurant. Expand your online presence, manage your restaurant’s operations, and market your restaurant more efficiently with LimeTray’s Restaurant software suite. Technology and marketing solutions that are complete for restaurants. The support team is available all week through the year via live chat or phone seven. You will be assigned an account manager to assist you with all your questions.",
                        icon: "/assets/images/icon/feature-icon2.png",
                        bgClass: "bg-green-100",
                        color: "#dcfce7",
                        link: "/service-details",
                    },
                    {
                        title: "App Like UrbanPiper",
                        desc:
                            "UrbanPiper offers a wide range of products that include custom-designed and white-labeled websites, applications, an advanced rich and feature-packed CMS and CRM dashboard that lets you control and analyze your web presence, including customer segmentation, campaigning, and customer tracking tool that makes it easier to maintain your customer happy and most of with a committed assistance team that will ensure your online experience is easy.",
                        icon: "/assets/images/icon/feature-icon3.png",
                        bgClass: "bg-orange-100",
                        color: "#ffedd5",
                        link: "/service-details",
                    },
                ]
            }} />
            <OurSolutionsDevlopment devlopmentData={{
                heading: "Comprehensive Cloud Kitchen App Solutions",
                desc: "At Onepixel Soft, we offer customized cloud kitchen app solutions meant to improve working efficiency and increase customer interaction. From cutting-edge order management systems to intuitive app interfaces, our innovative solutions help restaurant entrepreneurs to provide exceptional food experiences. With our knowledge of culinary technology and bespoke app development, your cloud kitchen can excel in a competitive market through optimized operations, efficient utilization of resources, and customer satisfaction at all levels. Let us guide you to re-imagine your cloud kitchen with intelligent and scalable solutions.",
                cards: [
                    {
                        id: 1,
                        icon: "/assets/images/icon/feature-three-icon1.png",
                        title: "Customer Ordering App",
                        desc:
                            "A user-friendly app for customers to browse menus, place orders, track delivery, and make payments seamlessly.",
                    },
                    {
                        id: 2,
                        icon: "/assets/images/icon/feature-three-icon2.png",
                        title: "Restaurant/Kitchen Dashboard",
                        desc:
                            "A centralized panel for managing orders, inventory, menus, kitchen workflow, and real-time analytics.",
                    },
                    {
                        id: 3,
                        icon: "/assets/images/icon/feature-three-icon3.png",
                        title: "Delivery Partner App",
                        desc:
                            "A dedicated app for delivery agents with order pickup/drop details, route optimization, and status updates.",
                    },
                    {
                        id: 4,
                        icon: "/assets/images/icon/feature-three-icon4.png",
                        title: "Admin Panel & Analytics",
                        desc:
                            "We analyze your business goal, target audience, and market trends.",
                    },

                ]
            }} />
            <OurDevlomentCycle DevlomentCycleData={{
                heading: "Types Of Cloud Kitchen Solutions We Develop",
                desc: "Capture the attention of food lovers with an innovative cloud kitchen app engineered with multiple features. Contact Depeche Soft and leverage backend cloud kitchen app development services.",
                cards: [
                    {
                        id: 1,
                        icon: "/assets/images/icon/service-three-icon1.png", // Placeholder
                        title: "Order Management App Development",
                        desc: "Manage orders efficiently from multiple channels using real-time sync. Our app enables restaurant owners to update order statuses, accept or reject orders, and ensure prompt deliveries with optimized workflows and kitchen visibility."
                    },
                    {
                        id: 2,
                        icon: "/assets/images/icon/service-three-icon2.png", // Placeholder
                        title: "Customer Ordering App Development",
                        desc: "Channel food lovers straight to your offerings through intuitive UI/UX and seamless ordering experience. Our app provides personalized menus, repeat order features, multi-payment modes, and real-time order tracking."
                    },
                    {
                        id: 3,
                        icon: "/assets/images/icon/service-three-icon3.png", // Placeholder
                        title: "Kitchen Operations App Development",
                        desc: "Streamline kitchen workflows with automated cooking schedules, inventory tracking, real-time communication, and staff coordination—all in one efficient backend system for cloud kitchens."
                    },
                    {
                        id: 4,
                        icon: "/assets/images/icon/service-three-icon4.png", // Placeholder
                        title: "Delivery Driver App Development",
                        desc: "Offer reliable delivery by developing driver apps with navigation, route optimization, and live status updates. Enable order acceptance, delivery confirmation, and secure chat within one interface."
                    },
                    {
                        id: 5,
                        icon: "/assets/images/icon/service-three-icon5.png", // Placeholder
                        title: "Analytics and Insights",
                        desc: "Track business performance via dashboards showing order frequency, delivery time, customer retention, and more. Our apps offer in-depth analytics to improve efficiency and customer satisfaction."
                    },
                    {
                        id: 6,
                        icon: "/assets/images/icon/service-three-icon6.png", // Placeholder
                        title: "Marketing and Loyalty",
                        desc: "Build brand loyalty with integrated marketing tools like promo codes, referral programs, loyalty rewards, and personalized push notifications. Expand customer engagement through automated targeting."
                    }
                ]
            }} />
            <OurAppSuccess appSuccessData={{
                heading: "Social Media Marketing",
                cards: [
                    {
                        title: "Social Media Marketing",
                        description: "Leverage the power of social media platforms to connect with your audience and drive engagement.",
                        icon: "/assets/images/icon/service-icon1.png",
                        bgClass: "bg1",
                        color: "#e6f8f0",
                        link: "/service-details"
                    },
                    {
                        title: "Email Marketing Services",
                        description: "Build brand trust and customer loyalty through personalized and effective email campaigns.",
                        icon: "/assets/images/icon/service-icon2.png",
                        bgClass: "bg2",
                        color: "#f0f6ff",
                        link: "/service-details"
                    },
                    {
                        title: "Social Media Advertising",
                        description: "Promote your brand with tailored ads across social platforms to increase reach and ROI.",
                        icon: "/assets/images/icon/service-icon3.png",
                        bgClass: "bg3",
                        color: "#f9efff",
                        link: "/service-details"
                    },
                    {
                        title: "Search Engine Optimization (SEO)",
                        description: "Boost visibility on search engines and attract more traffic with targeted SEO strategies.",
                        icon: "/assets/images/icon/service-icon4.png",
                        bgClass: "bg4",
                        color: "#f6f0ff",
                        link: "/service-details"
                    },
                    {
                        title: "Pay-Per-Click (PPC) Advertising",
                        description: "Drive instant traffic to your website with targeted PPC campaigns and maximize your ROI.",
                        icon: "/assets/images/icon/service-icon5.png",
                        bgClass: "bg5",
                        color: "#fefbe5",
                        link: "/service-details"
                    },
                    {
                        title: "Analytics and Data Insights",
                        description: "Measure the power of digital marketing with dashboards and metrics to refine your strategy and enhance results.",
                        icon: "/assets/images/icon/service-icon6.png",
                        bgClass: "bg6",
                        color: "#e7fcff",
                        link: "/service-details"
                    }
                ]
            }
            } />
            <OurSoultionBannner data={{
                heading: "Looking for a Mobile App Solution to propel your Business?",
                desc: "Engage our specialists to turn your idea into Reality!",
                img1: "/assets/images/solution/ck.png"
            }} />
            <FeqSection />
        </div>
    )
}
