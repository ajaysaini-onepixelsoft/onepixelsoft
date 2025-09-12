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
                heading: "Milk Delivery App Development Company",
                desc: "At Onepixel Soft, we are experts at milk delivery app development that gives dairy businesses the power to modernize operations and achieve new age customer expectations. As a leading milk delivery app development firm, we design clean, feature-complete mobile apps that simplify day-to-day deliveries, automate subscription processing, and maximize customer satisfaction."
            }} />
            <AboutSilder />
            <OurSolutionleftCard data={{
                heading: "Renowned Milk Delivery App Development Firm",
                desc: ["With more than 10 years of mobile and web development expertise, Onepixel Soft is a top milk delivery app development firm providing cutting-edge, scalable, and secure solutions to the dairy and daily necessities sector. We are experts at developing bespoke milk delivery apps that streamline orders, subscriptions, and door-to-door delivery logistics.", "From white-label milk delivery app solutions to completely custom-built on-demand platforms, our apps are rich with features of real-time tracking, route optimization, inventory management, and payment gateway integration—all created to give your business a competitive advantage online."],
                img1: "/assets/images/solution/milk%20delivery.png"
            }} />
            <OurSolutionsDevlopment devlopmentData={{
                heading: "Complete Flower Delivery App Development Solutions",
                desc: "At Onepixel Soft, we provide end-to-end flower delivery app development services designed to meet your specific business goals. Whether you're launching a new startup or upgrading an existing floral business, our expert developers will build a fully customized, feature-rich mobile app that enhances customer experience and streamlines your delivery operations. From intuitive UI/UX to real-time order tracking and secure payments, we deliver scalable solutions for Android, iOS, and web platforms.",
                cards: [
                    {
                        id: 1,
                        icon: "/assets/images/icon/feature-three-icon1.png",
                        title: "Automated Subscription Management",
                        desc:
                            "Customers can easily set daily or weekly milk delivery schedules, pause services, and modify quantities as needed.",
                    },
                    {
                        id: 2,
                        icon: "/assets/images/icon/feature-three-icon2.png",
                        title: "Real-Time Order Tracking",
                        desc:
                            "Users can track delivery status and timing, ensuring transparency and enhancing customer trust.",
                    },
                    {
                        id: 3,
                        icon: "/assets/images/icon/feature-three-icon3.png",
                        title: "Seamless Payments & Invoicing",
                        desc:
                            "Integrated payment gateways support recurring payments, digital invoices, and secure transactions.",
                    },
                    {
                        id: 4,
                        icon: "/assets/images/icon/feature-three-icon4.png",
                        title: "Vendor & Delivery Management",
                        desc:
                            "A robust backend system allows vendors to manage orders, delivery agents, inventory, and customer preferences efficiently.",
                    },

                ]
            }} />
            <OurFeatured FeaturedData={{
                heading: "Get Your Personalized Milk Delivery App Like Top Brands",
                desc: "Need to streamline and expand your dairy business? Onepixel Soft provides bespoke milk delivery app development to suit your business model. Our skilled developers design on-demand milk delivery apps with inspiration from market leaders, with cutting-edge features to facilitate effortless ordering, subscription management, and doorstep delivery.",
                cards: [
                    {
                        title: "MilkBasket Clone",
                        desc:
                            "Milk Basket is a top milk delivery app that provides fresh milk right to customers' doorsteps. With this unique milk delivery app model, clients can bring their dream of launching a brand to life.",
                        icon: "/assets/images/icon/feature-icon1.png",
                        bgClass: "bg-blue-100",
                        color: "#dbeafe",
                        link: "/service-details",
                    },
                    {
                        title: "CountryDelight Clone",
                        desc:
                            "Country Delight is a popular milk delivery company known for providing fresh milk to its customers. With its advanced technology and business model, clients can target a similar audience for their own milk delivery service.",
                        icon: "/assets/images/icon/feature-icon2.png",
                        bgClass: "bg-green-100",
                        color: "#dcfce7",
                        link: "/service-details",
                    },
                    {
                        title: "MilkRun Clone",
                        desc:
                            "Applications like MilkRun enable clients to expand their reach to different regions worldwide, opening stores and offering instant delivery services. A skilled team of milk delivery app developers can help clients incorporate these features into their mobile applications.",
                        icon: "/assets/images/icon/feature-icon3.png",
                        bgClass: "bg-orange-100",
                        color: "#ffedd5",
                        link: "/service-details",
                    },
                ]
            }} />
            <OurDevlomentCycle DevlomentCycleData={{
                heading: "Web‑Admin Panel Features",
                desc: "It enables efficient management of users, orders, products, payments, and analytics—all with real-time insights and robust control over the platform.",
                cards: [
                    {
                        icon: "/assets/images/icon/service-three-icon1.png",
                        title: "Master Dashboard",
                        desc: "Gain a comprehensive overview of all operations—orders, customers, revenue, and analytics—at a glance."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon2.png",
                        title: "Customer Management",
                        desc: "Manage customer profiles, order history, preferences, and interaction logs efficiently."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon3.png",
                        title: "Order Management",
                        desc: "Track, process, and update orders, including status changes, packaging, and delivery progress."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon4.png",
                        title: "Product Management",
                        desc: "Add, edit, categorize, or archive products; organize inventory and manage offerings seamlessly."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon5.png",
                        title: "Delivery Executives Management",
                        desc: "Assign and monitor delivery agents, track their assignments, performance metrics, and locations."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon6.png",
                        title: "Subscription Management",
                        desc: "Handle user subscriptions, plan setups, renewals, and recurring billing with ease."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon7.png",
                        title: "Payment Management",
                        desc: "Configure and oversee payment methods, transaction tracking, processing, and reconciliation."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon1.png",
                        title: "Discount/Offers Management",
                        desc: "Create and manage promotional campaigns, coupon codes, and special offers for users."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon2.png",
                        title: "Analytics & Reports",
                        desc: "Gain insights via dashboards, sales summaries, user behavior metrics, and performance reports."
                    }
                ]
            }} />
            <OurAppSuccess appSuccessData={{
                heading: "Customer App Features",
                desc: "It offers a seamless experience for browsing, ordering, tracking, and securely paying for products or services in real time.",
                cards: [
                    {
                        title: "Sign Up/ Login",
                        description: "Users can easily register and login to your courier app with multi-platform integration through email, mobile, or social media credentials.",
                        icon: "/assets/images/icon/service-icon1.png",
                        bgClass: "bg1",
                        color: "#e6f8f0",
                        link: "/service-details"
                    },
                    {
                        title: "User Profile",
                        description: "Once logged in, consumers can set up their profiles on your web delivery platform, including preferences, saved addresses, and personal information.",
                        icon: "/assets/images/icon/service-icon2.png",
                        bgClass: "bg2",
                        color: "#e9f8fe",
                        link: "/service-details"
                    },
                    {
                        title: "Advanced Search",
                        description: "Advanced filters and search with category filters and auto-sorting options enable users to browse efficiently and select from a wide set of publisher or platform options.",
                        icon: "/assets/images/icon/service-icon3.png",
                        bgClass: "bg3",
                        color: "#fbf0f4",
                        link: "/service-details"
                    },
                    {
                        title: "GPS Tracking",
                        description: "GPS tracking integration ensures users have live delivery location status. All orders can be monitored in real time and stay updated about the delivery status.",
                        icon: "/assets/images/icon/service-icon4.png",
                        bgClass: "bg4",
                        color: "#f3f0ff",
                        link: "/service-details"
                    },
                    {
                        title: "Multiple Payment Options",
                        description: "Allow users to make payments easily via payment gateways of their choice—credit/debit cards, UPI, net banking, or wallets.",
                        icon: "/assets/images/icon/service-icon5.png",
                        bgClass: "bg5",
                        color: "#fff5eb",
                        link: "/service-details"
                    },
                    {
                        title: "Invoice Generation",
                        description: "Auto-generated and downloadable invoice of the order (PDF). Helps maintain expense logs and establish clarity with the customer.",
                        icon: "/assets/images/icon/service-icon6.png",
                        bgClass: "bg6",
                        color: "#f5faff",
                        link: "/service-details"
                    },
                    {
                        title: "Order History",
                        description: "Users can track all their historical order transactions with complete invoice and payment data—organized and exportable via the profile section in the app.",
                        icon: "/assets/images/icon/service-icon1.png",
                        bgClass: "bg7",
                        color: "#e6f8f0",
                        link: "/service-details"
                    },
                    {
                        title: "Push Notifications",
                        description: "Get instant updates on deliveries, promotions, and key user-facing actions. Enables real-time communication and enhanced user engagement.",
                        icon: "/assets/images/icon/service-icon2.png",
                        bgClass: "bg8",
                        color: "#e9f8fe",
                        link: "/service-details"
                    }
                ]
            }}/>
            <OurSoultionBannner data={{
                heading: "Let’s Connect to Build an Outstanding Milk Delivery App Solution",
                desc: "Engage our specialists to turn your idea into Reality!",
                img1: "/assets/images/solution/milkdeliveryy.png",
            }} />
            <FeqSection />
        </div>
    )
}
