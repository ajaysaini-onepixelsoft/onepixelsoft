import AboutSilder from '@/components/about-us/AboutSilder'
import FeqSection from '@/components/our-services/FeqSection'
import ServiceGetStart from '@/components/our-services/ServiceGetStart'
import OurAppSuccess from '@/components/solutions/OurAppSuccess'
import OurDevlomentCycle from '@/components/solutions/OurDevlomentCycle'
import OurFeatured from '@/components/solutions/OurFeatured'
import OurSolutionleftCard from '@/components/solutions/OurSolutionleftCard'
import OurSolutionsDevlopment from '@/components/solutions/OurSolutionsDevlopment'
import React from 'react'

export default function page() {
    return (
        <div>
            <ServiceGetStart singleData={{
                heading: "food delivery",
                desc: "Want to introduce a strong food delivery platform? Onepixel Soft is a highly-rated food delivery app development company providing customized solutions designed for restaurants, startups, and aggregators. We are experts in on-demand food delivery app development that allows users to explore menus, order food, track real-time delivery, and pay securely—all through a user-friendly mobile interface."
            }} />
            <AboutSilder />
            <OurSolutionleftCard data={{
                heading: "Your Go-To Partner for Scalable Food Delivery Platforms",
                desc: ["At Onepixel Soft, we are a top food delivery app development firm dedicated to creating high-performance mobile and web applications for the F&B sector. Our food delivery app development expertise guarantees that your platform is secure, fast, and easy to use—ideal for restaurants, cloud kitchens, and aggregators alike.", "From ready-to-go food delivery site development to end-to-end personalized on-demand delivery app development, we turn your vision into highly scalable digital products that bring more customers and increase more orders."],
                img1: "/assets/images/solution/flowerdelivery.png"
            }} />
            <OurSolutionsDevlopment devlopmentData={{
                heading: "Complete Range of Food Delivery App Development Solutions by OnepixelSoft",
                desc: "With years of experience in on-demand food delivery app development, we offer a comprehensive range of food delivery app solutions featuring innovative functions and capabilities. Our expert developers create apps for Web, Windows, iOS, MacOS, and Android platforms. Our food delivery solutions are compatible with all devices, allowing users to enjoy seamless experiences, while food delivery business owners can take advantage of these solutions to drive future growth.",
                cards: [
                    {
                        id: 1,
                        icon: "/assets/images/icon/feature-three-icon1.png",
                        title: "Customer App Development",
                        desc:
                            "Feature-rich, user-friendly apps for customers to browse menus, place orders, track deliveries, and make secure payments.",
                    },
                    {
                        id: 2,
                        icon: "/assets/images/icon/feature-three-icon2.png",
                        title: "Restaurant Panel Development",
                        desc:
                            "A powerful dashboard for restaurants to manage menus, orders, availability, and delivery status in real time.",
                    },
                    {
                        id: 3,
                        icon: "/assets/images/icon/feature-three-icon3.png",
                        title: "Delivery Partner App",
                        desc:
                            "A dedicated app for delivery agents with order details, navigation support, and real-time status updates.",
                    },
                    {
                        id: 4,
                        icon: "/assets/images/icon/feature-three-icon4.png",
                        title: "Admin Panel & Analytics",
                        desc:
                            "A centralized control panel for managing users, vendors, orders, promotions, and analyzing business performance.",
                    },

                ]
            }} />
            <OurFeatured FeaturedData={{
                heading: "Launch Your Branded Food Delivery App with Customized Solutions",
                desc: "Ignite your food business with Onepixel Soft's customized food delivery app development solutions. Being a reliable food delivery app development firm, we design and develop customized, scalable solutions that align with your individual requirements—be it a cloud kitchen, restaurant chain, or delivery startup. Bid farewell to cookie-cutter apps and opt for a platform that is designed for growth, user interaction, and hassle-free order management.",
                cards: [
                    {
                        title: "Uber Eats Clone App",
                        desc:
                            "An app like UberEats can transform your business operations by helping you deliver food, promote services through various in-app features, and monitor their progress.",
                        icon: "/assets/images/icon/feature-icon1.png",
                        bgClass: "bg-blue-100",
                        color: "#dbeafe",
                        link: "/service-details",
                    },
                    {
                        title: "Zomato Clone App",
                        desc:
                            "A Zomato clone app enables restaurants, hotels, and other food businesses to grow their customer base through the app, offering an easy and convenient way for users to order their desired meals.",
                        icon: "/assets/images/icon/feature-icon2.png",
                        bgClass: "bg-green-100",
                        color: "#dcfce7",
                        link: "/service-details",
                    },
                    {
                        title: "Domino’s Clone App",
                        desc:
                            "In today’s competitive landscape, an app like Domino’s is a game-changer for restaurant chain owners, allowing them to manage their entire business from a single platform and oversee everything virtually.",
                        icon: "/assets/images/icon/feature-icon3.png",
                        bgClass: "bg-orange-100",
                        color: "#ffedd5",
                        link: "/service-details",
                    },
                ]
            }} />
            <OurDevlomentCycle DevlomentCycleData={{
                heading: "Our Simplified Laundry App Development Process",
                desc: "We at Onepixel Soft have a goal-oriented laundry app development process specifically designed to your business model—single-store, aggregator, or franchise-based. Our process starts with intensive research and requirement gathering, followed by UI/UX design, solid backend development, and third-party API integrations such as payment gateways and location tracking.",
                cards: [
                    {
                        icon: "/assets/images/icon/service-three-icon1.png",
                        title: "AI-Powered Recommendations",
                        desc: "Personalized food suggestions based on user preferences, order history, and trending items to boost engagement."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon2.png",
                        title: "Real-Time GPS Tracking",
                        desc: "Live tracking for customers and delivery partners ensures transparency and timely deliveries."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon3.png",
                        title: "Smart Order Management System",
                        desc: "Automates order flow, kitchen notifications, and status updates for seamless operations."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon4.png",
                        title: "Chatbot & In-App Support",
                        desc: "AI-driven chatbots assist with common queries, update issues, and enhance customer service 24/7."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon5.png",
                        title: "Voice Search Integration",
                        desc: "Allows users to search for dishes or restaurants using voice commands for a hands-free experience."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon6.png",
                        title: "Advanced Analytics Dashboard",
                        desc: "Provides real-time insights into sales, user behavior, and delivery performance for data-driven decisions."
                    }
                ]
            }}
            />
            <OurAppSuccess appSuccessData={{
                heading: "Customer App Features",
                desc: "It offers a seamless experience for users to place orders, track deliveries, make secure payments, and manage food delivery services with ease.",
                cards: [
                    {
                        title: "Registration",
                        description:
                            "Users can easily register and sign in to the app by providing their email or phone number. They can also log in using their social media accounts.",
                        icon: "/assets/images/icon/service-icon1.png",
                        bgClass: "bg1",
                        color: "#e6f8f0",
                        link: "/service-details",
                    },
                    {
                        title: "Search Food/Restaurant",
                        description:
                            "Users can search for their favorite food or restaurants using the search feature, and refine the results with various available filters.",
                        icon: "/assets/images/icon/service-icon2.png",
                        bgClass: "bg2",
                        color: "#e6f6fd",
                        link: "/service-details",
                    },
                    {
                        title: "Order Placing/Scheduling",
                        description:
                            "Customers can place an order for selected food items to be delivered immediately or schedule it for a later time.",
                        icon: "/assets/images/icon/service-icon3.png",
                        bgClass: "bg3",
                        color: "#fde6eb",
                        link: "/service-details",
                    },
                    {
                        title: "Coupon Management",
                        description:
                            "Customers can browse available discount coupons and codes and apply them based on their eligibility.",
                        icon: "/assets/images/icon/service-icon4.png",
                        bgClass: "bg4",
                        color: "#f3edff",
                        link: "/service-details",
                    },
                    {
                        title: "Multiple Payment Options",
                        description:
                            "Users can choose from various payment options for their convenience and complete payments for their orders.",
                        icon: "/assets/images/icon/service-icon5.png",
                        bgClass: "bg5",
                        color: "#fff4e6",
                        link: "/service-details",
                    },
                    {
                        title: "Ratings & Reviews",
                        description:
                            "This feature allows customers to rate and review the restaurant, delivery agent, and overall experience related to their order.",
                        icon: "/assets/images/icon/service-icon6.png",
                        bgClass: "bg6",
                        color: "#f3f3f3",
                        link: "/service-details",
                    },
                    {
                        title: "Order Tracking",
                        description:
                            "Customers can track their order in real-time, from the order status to the live location of the delivery driver.",
                        icon: "/assets/images/icon/service-icon1.png",
                        bgClass: "bg1",
                        color: "#e6f8f0",
                        link: "/service-details",
                    },
                    {
                        title: "In-App Chat Support",
                        description:
                            "Customers can contact the relevant restaurant or delivery person via SMS or call to resolve updates on their order status.",
                        icon: "/assets/images/icon/service-icon2.png",
                        bgClass: "bg2",
                        color: "#e6f6fd",
                        link: "/service-details",
                    }
                ]
            }}
            />
            <FeqSection/>
        </div>
    )
}
