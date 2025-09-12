import AboutSilder from '@/components/about-us/AboutSilder'
import FeqSection from '@/components/our-services/FeqSection'
import ServiceGetStart from '@/components/our-services/ServiceGetStart'
import OurAppSuccess from '@/components/solutions/OurAppSuccess'
import OurDevlomentCycle from '@/components/solutions/OurDevlomentCycle'
import OurSolutionleftCard from '@/components/solutions/OurSolutionleftCard'
import OurSolutionsDevlopment from '@/components/solutions/OurSolutionsDevlopment'
import OurSoultionBannner from '@/components/solutions/OurSoultionBannner'
import React from 'react'

export default function page() {
    return (
        <div>
            <ServiceGetStart singleData={{
                heading: "Grocery Delivery App Development Company",
                desc: "Ready to expand your grocery business online? Onepixel Soft has expertise in creating engaging and sales-generating grocery app development that suits your ambitions. As a local store or as a national chain, our bespoke grocery delivery app solutions are designed to fit your requirements. As a leading grocery app development firm, we provide secure, rich-featured apps for individual stores, multi-vendor platforms, and startups."
            }} />
            <AboutSilder />
            <OurSolutionleftCard data={{
                img1: "/assets/images/solution/gc2.png",
                heading: "Why Your Grocery Business Requires a Mobile App",
                desc: ["With the increase in demand for convenience, grocery mobile app development is now a necessity for stores to remain competitive. Customers now favor the convenience of ordering groceries online and having doorstep delivery—making physical-only operations obsolete.", "As a leading grocery delivery app development company, Onepixel Soft assists retailers in streamlining operations with white-label and bespoke grocery app solutions. Our cutting-edge features enable real-time inventory, secure transactions, and seamless order management, facilitating easy scaling of your grocery shopping app for long-term growth."]
            }} />
            <OurSolutionsDevlopment devlopmentData={{
                heading: "End-to-End Grocery Delivery App Development Solutions Customized for Growth.",
                desc: "At Onepixel Soft, we provide a solid suite of grocery delivery app development solutions to help you bring your grocery business online fast and efficiently. Being a reliable grocery app development company, we develop packed apps that attract customer engagement, simplify operations, and generate optimum sales.",
                cards: [
                    {
                        id: 1,
                        icon: "/assets/images/icon/feature-three-icon1.png",
                        title: "Customer-Friendly Ordering Experience",
                        desc:
                            "A smooth UI/UX with smart search, easy cart management, and secure checkout ensures customer satisfaction and repeat orders.",
                    },
                    {
                        id: 2,
                        icon: "/assets/images/icon/feature-three-icon2.png",
                        title: "Real-Time Inventory & Order Management",
                        desc:
                            "Integrated backend systems keep product listings, stock levels, and orders synchronized, reducing cancellations and improving efficiency.",
                    },
                    {
                        id: 3,
                        icon: "/assets/images/icon/feature-three-icon3.png",
                        title: "Delivery Partner & Route Optimization",
                        desc:
                            "Built-in delivery tracking, driver assignment, and route optimization ensure faster deliveries and reduce operational costs.",
                    },
                    {
                        id: 4,
                        icon: "/assets/images/icon/feature-three-icon4.png",
                        title: "Scalable Architecture with Admin Control",
                        desc:
                            "A robust admin panel and scalable tech stack allow you to manage stores, users, promotions, and analytics—helping the platform grow as demand increases.",
                    },

                ]
            }}
            />
            <OurDevlomentCycle DevlomentCycleData={{
                heading: "In-depth Grocery Delivery App Development Services",
                desc: "At Onepixel Soft, we provide full-cycle grocery delivery app development solutions that provide scalable, secure, and user-friendly applications. With attention to design, seamless integration, and advanced features, our team makes sure your app suits business requirements while ensuring customer satisfaction. Regardless of whether you need a straightforward grocery delivery solution or a high-end multi-vendor platform, we are experts in developing bespoke grocery shopping apps that outshine others in the market and provide excellent performance.",
                cards: [
                    {
                        icon: "/assets/images/icon/service-three-icon1.png",
                        title: "Single Store Grocery Delivery App",
                        desc: "Attract local customers with a custom grocery store app development. We specialize in creating personalized apps for smooth deliveries. Take your local store online and grow your customer base."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon2.png",
                        title: "iOS Dating App Development",
                        desc: "This app is ideal for effortlessly managing multi-store networks through a centralized solution. Onepixel Soft is renowned for delivering advanced grocery delivery app solutions. Hire our app developers to collaborate on creating a top-tier grocery delivery application!"
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon3.png",
                        title: "Grocery Marketplace App",
                        desc: "Our grocery store app development is centered on creating a vibrant online marketplace that connects various grocers with eager consumers. We are committed to developing unique and innovative solutions that set you apart from the competition."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon4.png",
                        title: "Cross-Platform Dating App Development",
                        desc: "Simplify your online store with an intuitive grocery delivery app. Onepixel Soft, a top on-demand grocery delivery app development company, provides highly engaging and feature-packed applications."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon5.png",
                        title: "Ecommerce Grocery Delivery App",
                        desc: "Our dating app design services are dedicated to crafting an engaging, user-focused experience. We create intuitive layouts, visually stunning interfaces, and seamless navigation, ensuring high quality and consistency with our custom dating app development."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon6.png",
                        title: "Aggregator Model App",
                        desc: "Create an app like Peapod that connects customers with multiple grocers and oversees deliveries through a centralized platform. It enables users to browse a variety of products from different stores."
                    },
                ]
            }} />
            <OurAppSuccess appSuccessData={{
                heading: "Grocery Delivery App Features for Customers",
                cards: [
                    {
                        title: "Tutorial and Onboarding Screens",
                        description:
                            "Custom illustrations guide users through the app’s features and benefits, helping them get started quickly and confidently.",
                        icon: "/assets/images/icon/service-icon1.png",
                        bgClass: "bg1",
                        color: "#e6f8f0",
                        link: "/service-details",
                    },
                    {
                        title: "Account Setup Panel",
                        description:
                            "Customers can easily create accounts using their email, phone number, or social media, making onboarding seamless and secure.",
                        icon: "/assets/images/icon/service-icon2.png",
                        bgClass: "bg2",
                        color: "#e6f6fd",
                        link: "/service-details",
                    },
                    {
                        title: "Convenient Pickup-Delivery Scheduling",
                        description:
                            "Customers can select delivery slots or choose in-store pickup if immediate delivery isn’t available, providing greater flexibility.",
                        icon: "/assets/images/icon/service-icon3.png",
                        bgClass: "bg3",
                        color: "#fde6eb",
                        link: "/service-details",
                    },
                    {
                        title: "Real-Time Order Tracking Tool",
                        description:
                            "Track the delivery status and live location of orders, ensuring transparency and boosting customer satisfaction.",
                        icon: "/assets/images/icon/service-icon4.png",
                        bgClass: "bg4",
                        color: "#f3edff",
                        link: "/service-details",
                    },
                    {
                        title: "Cost Calculator",
                        description:
                            "Enables users to view and compare prices for better budget management and smarter shopping decisions.",
                        icon: "/assets/images/icon/service-icon5.png",
                        bgClass: "bg5",
                        color: "#fff4e6",
                        link: "/service-details",
                    },
                    {
                        title: "Order Status with History",
                        description:
                            "Customers can review all previous and current orders, including billing and detailed information in the 'My Orders' section.",
                        icon: "/assets/images/icon/service-icon6.png",
                        bgClass: "bg6",
                        color: "#f3f3f3",
                        link: "/service-details",
                    },
                    {
                        title: "Product Search Filter",
                        description:
                            "Advanced search and sorting options let users find items by name, keyword, or category for a smooth shopping experience.",
                        icon: "/assets/images/icon/service-icon1.png",
                        bgClass: "bg1",
                        color: "#e6f8f0",
                        link: "/service-details",
                    },
                    {
                        title: "Multiple Address Options",
                        description:
                            "Customers can store and manage multiple addresses, making checkout faster and more convenient.",
                        icon: "/assets/images/icon/service-icon2.png",
                        bgClass: "bg2",
                        color: "#e6f6fd",
                        link: "/service-details",
                    },
                    {
                        title: "Offers and Discount Coupons",
                        description:
                            "The app allows users to redeem offers and discounts, increasing satisfaction and promoting repeat purchases.",
                        icon: "/assets/images/icon/service-icon3.png",
                        bgClass: "bg3",
                        color: "#fde6eb",
                        link: "/service-details",
                    },
                    {
                        title: "Digital Invoice Generating Tool",
                        description:
                            "Automatically sends digital invoices to customers’ email with all order details, enhancing record-keeping and transparency.",
                        icon: "/assets/images/icon/service-icon4.png",
                        bgClass: "bg4",
                        color: "#f3edff",
                        link: "/service-details",
                    },
                ],
            }} />
            <OurSoultionBannner data={{
                heading:"On-Demand Grocery Apps Developed by Onepixel Soft",
                desc:"Take a glimpse of our recent work on on-demand grocery delivery apps that will give you an idea of how your finished product will look and pack bespoke features and functionalities.",
                img1:"/assets/images/solution/gc1.png"
            }}/>
            <FeqSection/>
        </div>
    )
}
