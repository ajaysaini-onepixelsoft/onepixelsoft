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
                heading: "On Demand Dog Walking App Development",
                desc: "Are you searching for a leading dog walking app development company? Want to create an innovative, tech-driven pet care app? Connect with Onepixel Soft Solutions! With over ten years of experience in web and mobile app development, we deliver feature-rich, robust software solutions that have helped countless on-demand businesses enhance their brand value."
            }} />
            <AboutSilder />
            <OurSolutionleftCard data={{
                heading: "Get Your Dog Walking App Like",
                desc: ["Are you aware of the growing demand for dog walking services? Globally, there is a significant need for online platforms that assist pet owners in caring for their pets and providing regular walks.", "As the owner of a dog walking business, you can partner with Onepixel Soft’s professionals to create a customized mobile app that connects you with dog owners. Take a look at the list of apps for reference to inspire your own unique solution."],
                img1: "/assets/images/solution/dogwalking.png"
            }} />
            <OurFeatured FeaturedData={{
                heading: "Get Your Dog Walking App Like",
                desc: "Are you aware of the growing demand for dog walking services? There is a massive global need for online platforms that assist pet owners in taking care of their pets and providing them with regular walks. As the owner of a dog walking business, you can contact Onepixel Soft’s experts to create a customized mobile app that connects you with dog owners. Explore the list of apps for inspiration and reference.",
                cards: [
                    {
                        title: "Rover: The Dog Walking App",
                        desc: "This is one of the most popular dog-walking apps designed for pet owners who love their dogs but lack the time to take them for walks. Pet care professionals take the owner's dog on walks, ensuring they get the exercise and socialization they need in a healthy environment.",
                        icon: "/assets/images/icon/feature-icon1.png",
                        bgClass: "bg-blue-100",
                        color: "#dbeafe",
                        link: "/service-details",
                    },
                    {
                        title: "PetBacker Dog Walking App",
                        desc: "PetBacker is an online platform that allows pet owners to hire a caretaker who will look after their pets in their absence, including handling regular walks and meeting their nutritional needs.",
                        icon: "/assets/images/icon/feature-icon2.png",
                        bgClass: "bg-green-100",
                        color: "#dcfce7",
                        link: "/service-details",
                    },
                    {
                        title: "Wag! Instant Dog Walkers",
                        desc: "Wag is an on-demand dog walking service that lets pet owners schedule walk times and track the distance through the mobile app. Walks can be customized to last 20, 30, or 60 minutes.",
                        icon: "/assets/images/icon/feature-icon3.png",
                        bgClass: "bg-orange-100",
                        color: "#ffedd5",
                        link: "/service-details",
                    },
                ]
            }} />
            <OurSolutionsDevlopment devlopmentData={{
                heading: "On-demand Dog Walking App Development Solution Presented by Onepixel Soft",
                desc: "Create your on-demand Dog Walking app for mobile to help the peddler assist them with the guarding of their pets and provide sufficient time and taking them for a walk. Connect with the professional experts of Onepixel Soft to get more guidance on the interface and the personalized features of the Dog Walking App.",
                cards: [
                    {
                        id: 1,
                        icon: "/assets/images/icon/feature-three-icon1.png",
                        title: "Customer App Development",
                        desc:
                            "A user-friendly app for pet owners to book dog walking services, track walks in real-time, and make secure payment.",
                    },
                    {
                        id: 2,
                        icon: "/assets/images/icon/feature-three-icon2.png",
                        title: "Dog Walker App Development",
                        desc:
                            "A dedicated app for walkers to accept bookings, track routes, and manage schedules while ensuring efficient service.",
                    },
                    {
                        id: 3,
                        icon: "/assets/images/icon/feature-three-icon3.png",
                        title: "Admin Dashboard",
                        desc:
                            "A centralized platform for managing user profiles, bookings, payment systems, and service provider performance.",
                    },
                    {
                        id: 4,
                        icon: "/assets/images/icon/feature-three-icon4.png",
                        title: "Real-Time GPS Tracking & Notifications",
                        desc:
                            "Allows pet owners to track their dog’s walk live, receive updates, and ensure the safety and well-being of their pets.",
                    },

                ]
            }} />
            <OurDevlomentCycle DevlomentCycleData={{
                heading: "Admin Panel Features",
                desc: "It offers full control over users, bookings, payments, service providers, and real-time analytics to efficiently manage the app ecosystem.",
                cards: [
                    {
                        icon: "/assets/images/icon/service-three-icon1.png",
                        title: "Login",
                        desc: "The admin can log into the dog walking mobile application to efficiently monitor and manage team and business activities."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon2.png",
                        title: "Manage Dog Walkers",
                        desc: "The dog walking app feature allows the admin to manage dog walkers, assign them to dog walking locations, and ensure they are verified before they begin their work."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon3.png",
                        title: "Manage Bookings",
                        desc: "Admin can easily process bookings, track progress, and ensure that dog walkers meet customer needs by reviewing booked walks and their statuses."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon4.png",
                        title: "Advanced Analytics",
                        desc: "Google Analytics is used to generate micro-business insights, helping track user behavior, customer retention, demand fluctuations, and more."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon5.png",
                        title: "Manage Payments",
                        desc: "As the owner of the dog-walking app, the admin can manage payments for dog walkers, check earnings, track transactions, and manage payment settings."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon6.png",
                        title: "In-App Marketing",
                        desc: "The app's marketing feature alerts about upcoming events, promotions, and provides messaging tools to engage users and customers for better service."
                    }
                ]
            }} />
            <OurAppSuccess appSuccessData={{
                heading: "Dog Walker Panel Features",
                desc: "It allows walkers to manage bookings, view schedules, track walking routes, and update their availability in real-time.",
                cards: [
                    {
                        title: "Login",
                        description:
                            "Each professional dog sitter and walker must log into the platform using their email or mobile number and complete the verification process.",
                        icon: "/assets/images/icon/service-icon1.png",
                        bgClass: "bg1",
                        color: "#e6f8f0",
                        link: "/service-details",
                    },
                    {
                        title: "Profile Management",
                        description:
                            "The professional details of a skilled dog walker are crucial for providing services. These details include their experience, pricing, previous client feedback, and more.",
                        icon: "/assets/images/icon/service-icon2.png",
                        bgClass: "bg2",
                        color: "#e6f7fd",
                        link: "/service-details",
                    },
                    {
                        title: "Booking Management",
                        description:
                            "Enables dog walkers to manage requests from dog owners that fit their schedules, pricing, walking times, and allows them to cancel appointments if needed.",
                        icon: "/assets/images/icon/service-icon3.png",
                        bgClass: "bg3",
                        color: "#fdeef2",
                        link: "/service-details",
                    },
                    {
                        title: "Navigation Routes",
                        description:
                            "The navigation tool assists dog walkers in locating the best dog-friendly routes, such as park and trails, to take dogs for walks or treats.",
                        icon: "/assets/images/icon/service-icon4.png",
                        bgClass: "bg4",
                        color: "#f3f0ff",
                        link: "/service-details",
                    },
                    {
                        title: "Earning Summary",
                        description:
                            "The earnings list gets updated every time a dog walker gets payment for their services. The earning history is accessible to them at any time.",
                        icon: "/assets/images/icon/service-icon5.png",
                        bgClass: "bg5",
                        color: "#fff5e6",
                        link: "/service-details",
                    },
                    {
                        title: "Booking History",
                        description:
                            "The dog walker can view their work records in the booking history. It includes dog sitting, date, owner's name, working hours, etc.",
                        icon: "/assets/images/icon/service-icon6.png",
                        bgClass: "bg6",
                        color: "#f0fdfa",
                        link: "/service-details",
                    },
                    {
                        title: "Feedback",
                        description:
                            "Dog walkers get the highest rating, and it is visible to everyone on the app. This feedback helps the dog walker continue providing an excellent user experience.",
                        icon: "/assets/images/icon/service-icon1.png",
                        bgClass: "bg7",
                        color: "#e6f8f0",
                        link: "/service-details",
                    },
                    {
                        title: "Push Notification",
                        description:
                            "On the dog-walking app, push notifications are available to notify dog walkers about their schedules, new bookings, payment alerts, feedback, in-app messages, etc.",
                        icon: "/assets/images/icon/service-icon2.png",
                        bgClass: "bg8",
                        color: "#e9f8fe",
                        link: "/service-details",
                    },
                ],
            }} />
            <OurSoultionBannner data={{
                heading: "Let’s Connect to Get The Most Trusted Dog Walking Mobile App",
                desc: "Contact our experts to transform your dog care agency with dog-friendly caregiver app solutions!",
                img1: "/assets/images/solution/dogwalking2.png"
            }} />
            <FeqSection />
        </div>
    )
}
