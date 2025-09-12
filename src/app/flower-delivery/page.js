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
                desc: "At Onepixel Soft, we help florists and gift businesses scale online with custom flower delivery app development solutions. Our expert team builds intuitive, high-performance mobile apps tailored to streamline operations, manage orders, track deliveries in real-time, and enhance customer satisfaction.",
                desc1: "Whether you’re a startup or an established flower store, our premium delivery app development services equip your business with the tools it needs to grow in the digital space. Ready to build a delivery app that delivers results? Let’s talk!"
            }} />
            <AboutSilder />
            <OurSolutionleftCard data={{
                heading: "Top-Notch Flower Delivery App Development Solution Provider",
                desc: ["Onepixel Soft stands out as a trusted flower delivery app development company with over a decade of industry expertise. We deliver secure, scalable, and feature-rich flower delivery mobile app development solutions tailored for modern businesses. Our apps help customers easily browse, order, and send flowers or bouquets to loved ones with just a few taps.", "Empower your florist business with a custom-built delivery platform designed to drive growth, enhance customer satisfaction, and streamline operations. Get in touch today for a personalized quote!"],
                img1: "/assets/images/solution/flowerdelivery.png"
            }} />
            <OurSolutionsDevlopment devlopmentData={{
                heading: "Complete Flower Delivery App Development Solutions",
                desc: "At Onepixel Soft, we provide end-to-end flower delivery app development services designed to meet your specific business goals. Whether you're launching a new startup or upgrading an existing floral business, our expert developers will build a fully customized, feature-rich mobile app that enhances customer experience and streamlines your delivery operations. From intuitive UI/UX to real-time order tracking and secure payments, we deliver scalable solutions for Android, iOS, and web platforms.",
                cards: [
                    {
                        id: 1,
                        icon: "/assets/images/icon/feature-three-icon1.png",
                        title: "Customer App Development",
                        desc:
                            "A beautifully designed app for users to browse floral arrangements, schedule deliveries, and make secure payments with ease.",
                    },
                    {
                        id: 2,
                        icon: "/assets/images/icon/feature-three-icon2.png",
                        title: "Florist/Vendor Panel",
                        desc:
                            "Allows florists to manage inventory, update product listings, handle orders, and monitor delivery status in real time.",
                    },
                    {
                        id: 3,
                        icon: "/assets/images/icon/feature-three-icon3.png",
                        title: "Delivery Agent App",
                        desc:
                            "A dedicated app for delivery personnel to receive orders, navigate routes, update statuses, and ensure timely delivery.",
                    },
                    {
                        id: 4,
                        icon: "/assets/images/icon/feature-three-icon4.png",
                        title: "Admin Dashboard",
                        desc:
                            "A robust backend to oversee users, vendors, orders, payments, and promotional activities while generating insightful reports.",
                    },

                ]
            }} />
            <OurFeatured FeaturedData={{
                heading: "Get Customized On-Demand Flower Delivery Applications",
                desc: "Step into the future of floral gifting with Onepixel Soft’s custom flower delivery app development services. Our skilled developers create intuitive, beautifully designed on-demand apps that bring a virtual garden to your customers’ fingertips—complete with real-time delivery, custom bouquet options, and a seamless user experience. Whether you're a local florist or a nationwide flower delivery brand, we craft scalable and efficient mobile solutions that elevate your service offerings and delight your users.",
                cards: [
                    {
                        title: "App Like Flowwow",
                        desc:
                            "Ready to succeed in the world of on-demand flower delivery? Our team of innovative developers is here to turn your vision into reality. Inspired by the essence of Flowwow, we will create an engaging on-demand flower delivery app that attracts users and propels your floral business to the forefront of the industry.",
                        icon: "/assets/images/icon/feature-icon1.png",
                        bgClass: "bg-blue-100",
                        color: "#dbeafe",
                        link: "/service-details",
                    },
                    {
                        title: "App Like 1800 Flowers",
                        desc:
                            "Ready to succeed in the digital age? We specialize in creating on-demand flower delivery apps that compete with industry giants like 1-800-Flowers. Our expert team will bring your vision to life, from the ordering process to delivery. Join the floral revolution and captivate customers with your exceptional app.",
                        icon: "/assets/images/icon/feature-icon2.png",
                        bgClass: "bg-green-100",
                        color: "#dcfce7",
                        link: "/service-details",
                    },
                    {
                        title: "App Like Floom",
                        desc:
                            "Looking to thrive in the on-demand flower delivery market? Your search ends here! Our skilled team of developers is ready to turn your vision into reality. Focused on providing a Floom-like user experience, we'll create a captivating on-demand flower delivery app that engages customers and takes your business to new heights.",
                        icon: "/assets/images/icon/feature-icon3.png",
                        bgClass: "bg-orange-100",
                        color: "#ffedd5",
                        link: "/service-details",
                    },
                ]
            }} />

            <OurDevlomentCycle DevlomentCycleData={{
                heading: "Web-Admin Panel Features",
                desc: "It provides complete control over users, orders, content, payments, and analytics to efficiently manage and scale the platform.",
                cards: [
                    {
                        icon: "/assets/images/icon/service-three-icon1.png",
                        title: "User Management",
                        desc: "This feature enables the admin to effortlessly manage all user activities on the dedicated flower and bouquet delivery mobile app."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon2.png",
                        title: "Delivery Agent Management",
                        desc: "With the functional tools available in this section, the admin can efficiently manage and monitor the activities of the delivery drivers."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon3.png",
                        title: "Flower Category Manager",
                        desc: "The flower category manager feature in the app enables the admin to organize and manage different flower categories, each with its own dedicated manager."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon4.png",
                        title: "Content Management System",
                        desc: "This feature allows the admin to provide essential content to users and flower service providers, managing it efficiently through the admin panel and CMS for tracking purposes."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon5.png",
                        title: "Commission Management",
                        desc: "This section of our flower delivery app software enables the admin to manage payments to florist partners and commissions for flower buyers."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon6.png",
                        title: "Analytics",
                        desc: "Our on-demand flower delivery app solutions include analytics in the admin panel, helping track the total number of buyers, active users, and flower service partners to effectively manage the data."
                    }
                ]
            }} />
            <OurAppSuccess appSuccessData={{
                heading: "Customer App Features",
                desc: "It offers a seamless experience for browsing, ordering, tracking, and securely paying for products or services in real time.",
                cards: [
                    {
                        title: "Advance Search",
                        description: "This feature enables users to search for florists or flowers they wish to order using a variety of filter options.",
                        icon: "/assets/images/icon/service-icon1.png",
                        bgClass: "bg1",
                        color: "#e6f8f0",
                        link: "/service-details"
                    },
                    {
                        title: "Customization",
                        description: "Customers can customize their flower arrangements to meet their specific needs, such as choosing particular flowers, adding decorative items, including cards, and more.",
                        icon: "/assets/images/icon/service-icon2.png",
                        bgClass: "bg2",
                        color: "#e6f4fb",
                        link: "/service-details"
                    },
                    {
                        title: "Order Placement",
                        description: "This feature makes it easy for customers to place orders, encouraging users to visit your flower store more frequently for their flower ordering needs.",
                        icon: "/assets/images/icon/service-icon3.png",
                        bgClass: "bg3",
                        color: "#faeef4",
                        link: "/service-details"
                    },
                    {
                        title: "Real-Time Tracking",
                        description: "Our flower delivery app solution allows users to track the real-time status of their flower and bouquet delivery orders.",
                        icon: "/assets/images/icon/service-icon4.png",
                        bgClass: "bg4",
                        color: "#f3f0ff",
                        link: "/service-details"
                    },
                    {
                        title: "Delivery Schedule",
                        description: "This feature allows users to schedule the delivery time and location for their flowers through the app.",
                        icon: "/assets/images/icon/service-icon5.png",
                        bgClass: "bg5",
                        color: "#fff4ed",
                        link: "/service-details"
                    },
                    {
                        title: "Multiple Payment Options",
                        description: "The flower delivery mobile app we created is equipped with various payment options, allowing users to make payments for flower deliveries with ease.",
                        icon: "/assets/images/icon/service-icon6.png",
                        bgClass: "bg6",
                        color: "#f6f9f3",
                        link: "/service-details"
                    }
                ]
            }} />
            <OurSoultionBannner data={{
                heading:"Looking for a Mobile App Solution to propel your Business?",
                desc:"Engage our specialists to turn your idea into Reality!",
                img1:"/assets/images/solution/flowerdeliveryy.png"
            }}/>
            <FeqSection />
        </div>
    )
}
