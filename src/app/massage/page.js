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
                heading: "On-Demand Massage App Development Company",
                desc: "Launch your own on-demand massage app like Soothe, Zeel, or Urban with Onepixel Soft—India's go-to developer of on-demand massage apps. With more than a decade of experience, we create scalable, user-focused solutions that enable online growth for massage therapists, spas, and wellness brands. No matter if you're creating custom mobile apps or professional massage sites, we provide seamless booking, therapist profiles, real-time geo-tracking, secure payments, and more to bolster your digital reach and revenue."
            }} />
            <AboutSilder />
            <OurSolutionleftCard data={{
                heading: "Top Massage App Development Firm",
                desc: ["Onepixel Soft is a leading massage app development firm providing secure, user-friendly, and scalable on-demand massage app solutions. Whether you are an independent therapist or a wellness chain, our ready-to-use and customized app for massage services are designed to simplify bookings, increase visibility, and maximize client satisfaction.", "Want to create something extraordinary? We are experts at custom development for massage websites and mobile apps, assisting you to stand out through innovative features, smooth UX, and strong backend infrastructure that supports your brand vision."],
                img1: "/assets/images/solution/msgscreen.webp"
            }} />
            <OurSolutionsDevlopment devlopmentData={{
                heading: "Customer App Development",
                desc: "A user-friendly app that allows customers to book massage services, choose therapists, and make secure payments with ease.",
                cards: [
                    {
                        id: 1,
                        icon: "/assets/images/icon/feature-three-icon1.png",
                        title: "Therapist App Development",
                        desc:
                            "A dedicated app for therapists to manage appointments, update availability, and track earnings in real-time.",
                    },
                    {
                        id: 2,
                        icon: "/assets/images/icon/feature-three-icon2.png",
                        title: "Admin Dashboard",
                        desc:
                            "A centralized platform to manage users, therapists, bookings, commissions, and app performance analytics.",
                    },
                    {
                        id: 3,
                        icon: "/assets/images/icon/feature-three-icon3.png",
                        title: "Customer App Development",
                        desc:
                            "A user-friendly app that allows customers to book massage services, choose therapists, and make secure payments with ease.",
                    },
                    {
                        id: 4,
                        icon: "/assets/images/icon/feature-three-icon4.png",
                        title: "Real-Time Booking & GPS Integration",
                        desc:
                            "Enables live appointment scheduling, therapist tracking, and optimized route planning for on-demand service efficiency.",
                    },

                ]
            }} />
            <OurFeatured FeaturedData={{
                heading: "Tailored Massage App Solutions for Your Unique Business",
                desc: "Ready to start your own massage services app? With Onepixel Soft, you can get fully customized massage app development solutions made to suit your business objectives to the ground. From elegant user interfaces and appointment scheduling for therapists to secure transactions and geo-tracking, our highly skilled developers construct strong and accessible apps that place your brand apart.",
                cards: [
                    {
                        title: "Urban Clone App",
                        desc:
                            "An app like Urban can transform your business operations, help raise awareness about health through various in-app features, and streamline the scheduling of massage appointments.",
                        icon: "/assets/images/icon/feature-icon1.png",
                        bgClass: "bg-blue-100",
                        color: "#dbeafe",
                        link: "/service-details",
                    },
                    {
                        title: "MassageBodySpots Clone App",
                        desc:
                            "A MassageBodySpots clone app enables massage businesses to make their services more accessible to users while offering a simple and effective way to teach proper massage techniques.",
                        icon: "/assets/images/icon/feature-icon2.png",
                        bgClass: "bg-green-100",
                        color: "#dcfce7",
                        link: "/service-details",
                    },
                    {
                        title: "Zeel Clone App",
                        desc:
                            "In today’s fast-paced world, an app like Zeel is a lifesaver, allowing people to stay calm, happy, and stress-free by offering the convenience of regular or on-demand massage services right at their doorstep.",
                        icon: "/assets/images/icon/feature-icon3.png",
                        bgClass: "bg-orange-100",
                        color: "#ffedd5",
                        link: "/service-details",
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
                        desc: "Once the massage app development is complete, the admin receives access and login credentials to the platform, allowing them to manage the business securely with a unique ID and password."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon2.png",
                        title: "Database",
                        desc: "It contains all the essential data and information related to salon services, staff, customers, appointments, booking management, and more."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon3.png",
                        title: "Advance Search",
                        desc: "The advanced search feature includes multiple filters to help users find their desired service provider. It enhances the app's design with navigation processes on the app platform."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon4.png",
                        title: "Smart Booking",
                        desc: "The automated technology-driven system allows the admin to handle bookings by setting time priorities, allocating or canceling appointments, and checking therapist’s shifts or other data."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon5.png",
                        title: "Communication Channel",
                        desc: "The admin panel offers virtual communication channels for clients and service providers via audio/video calls, text messages, voice recordings, media file sharing, and more."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon6.png",
                        title: "Review/ Feedback",
                        desc: "This feature encourages all customer feedback and reviews. The admin can read feedback and analyze whether action is needed to fix issues or highlight the best pieces of work."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon7.png",
                        title: "Service History",
                        desc: "All services provided by the app are tracked and maintained in the database, including reviews, ratings, completed bookings, massage styles, duration, and more."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon2.png",
                        title: "Payment Management",
                        desc: "The admin panel manages the finances of the app, including service charges, taxes, commissions, payment methods, income, expenses, and more."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon3.png",
                        title: "Analytics",
                        desc: "Google Analytics is integrated into the admin panel to provide data on the number of users, ongoing bookings, financial reports, app usage, and detailed analysis of customer needs."
                    }
                ]
            }} />

            <OurAppSuccess appSuccessData={{
                heading: "Customer App Features",
                desc: "It offers a seamless experience for users to schedule pickups, track orders, make secure payments, and manage beauty services with ease.",
                cards: [
                    {
                        title: "Login",
                        description: "Users can log in to the app platform and begin booking massage appointments at their chosen salon to enjoy top-quality healthcare and beauty treatments.",
                        icon: "/assets/images/icon/service-icon1.png",
                        bgClass: "bg1",
                        color: "#e6f8f0",
                        link: "/service-details"
                    },
                    {
                        title: "Advanced Filters",
                        description: "Users can search for specific massage based on their healthcare or beauty treatment needs using advanced filtering options available at all partnered beauty clinics.",
                        icon: "/assets/images/icon/service-icon2.png",
                        bgClass: "bg2",
                        color: "#e6f7fd",
                        link: "/service-details"
                    },
                    {
                        title: "Therapists Information",
                        description: "Users can browse therapist profiles on the app platform, which includes essential information such as experience, expertise, and more, to help them make informed decisions.",
                        icon: "/assets/images/icon/service-icon3.png",
                        bgClass: "bg3",
                        color: "#fdeef2",
                        link: "/service-details"
                    },
                    {
                        title: "Easy Booking",
                        description: "Once users choose their preferred massage therapy and parlor, they can easily book an appointment at a convenient time and date and make an instant online payment.",
                        icon: "/assets/images/icon/service-icon4.png",
                        bgClass: "bg4",
                        color: "#f4edff",
                        link: "/service-details"
                    },
                    {
                        title: "Payment Modes",
                        description: "Users can utilize various payment options like UPI, credit/debit card, digital wallets, net banking, PayPal, and more, making the process easier, safe, and reliable.",
                        icon: "/assets/images/icon/service-icon5.png",
                        bgClass: "bg5",
                        color: "#fff2e5",
                        link: "/service-details"
                    },
                    {
                        title: "Communications",
                        description: "If users have any questions, concerns, or issues, they can easily contact therapists, massage parlors, or app management with just a few clicks inside the app.",
                        icon: "/assets/images/icon/service-icon6.png",
                        bgClass: "bg6",
                        color: "#eae9fe",
                        link: "/service-details"
                    },
                    {
                        title: "Recommendations",
                        description: "The massage app management suggests various massage parlors based on individual searches, preferences, needs, price range, location, and more.",
                        icon: "/assets/images/icon/service-icon1.png",
                        bgClass: "bg7",
                        color: "#e6f8f0",
                        link: "/service-details"
                    },
                    {
                        title: "Safety Tools",
                        description: "Along with all the advanced tools, it’s crucial to offer safety features to prevent accidents and ensure the best health and beauty care that every customer deserves.",
                        icon: "/assets/images/icon/service-icon2.png",
                        bgClass: "bg8",
                        color: "#f2faff",
                        link: "/service-details"
                    }
                ]
            }} />

            <OurSoultionBannner data={{
                heading:"Let’s Connect to Build Customer-Centric On-Demand Massage App.",
                desc:"Engage our specialists to turn your idea into Reality!",
                img1:"/assets/images/solution/msg-user-app.webp"
            }}/>


            <FeqSection />
        </div>
    )
}
