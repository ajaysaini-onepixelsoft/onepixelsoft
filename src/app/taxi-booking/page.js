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
                heading: "Taxi Booking App Development Company",
                desc: "Onepixel Soft is a leading taxi booking app development company specializing in taxi app development for both Android and iOS. We offer custom taxi booking app development solutions designed to enhance your business with features like real-time tracking, secure payment gateways, and easy ride booking. As a trusted taxi app development company, we provide scalable solutions at competitive prices. Ready to create a taxi app with top-notch features? Get in touch with our taxi app development services today!"
            }} />
            <AboutSilder />
            <OurSolutionleftCard data={{
                heading: "Build a Custom Taxi Booking App",
                desc: ["Build your own custom taxi booking app with Onepixel Soft’s white-label development services. Our tailored solutions offer features like real-time tracking, dynamic pricing based on traffic conditions, and reward systems for customer loyalty. This ensures a seamless experience for both customers and drivers, elevating your taxi-booking business.", "By leveraging our expertise, you can create an affordable and efficient solution similar to leading taxi services. Our development services are designed to help you stay competitive in metropolitan markets while offering a highly customizable and scalable platform to suit your business needs."],
                img1: "/assets/images/solution/taxibooking.png"
            }} />
            <OurSolutionsDevlopment devlopmentData={{
                heading: "What are the Custom Taxi Booking App Services?",
                desc: "Our online taxi booking app development services are fully compatible with iOS & Android platforms and deliver top performance. Below, we explore each panel in detail.",
                cards: [
                    {
                        id: 1,
                        icon: "/assets/images/icon/feature-three-icon1.png",
                        title: "Passenger App Development",
                        desc:
                            "A user-friendly app for customers to book rides, view fare estimates, track drivers, and make cashless payments.",
                    },
                    {
                        id: 2,
                        icon: "/assets/images/icon/feature-three-icon2.png",
                        title: "Driver App Development",
                        desc:
                            "Automatically trigger location-based notifications or actions when users enter or exit specific zones, ideal for marketing and logistics.",
                    },
                    {
                        id: 3,
                        icon: "/assets/images/icon/feature-three-icon3.png",
                        title: "Admin Dashboard",
                        desc:
                            "Gain insights into customer movement, behavior, and regional demand to drive strategic decisions and personalized marketing.",
                    },
                    {
                        id: 4,
                        icon: "/assets/images/icon/feature-three-icon4.png",
                        title: "Advanced Features Integration",
                        desc:
                            "Integrate interactive, branded maps with location pins, routes, and filters tailored to your industry and operational needs.",
                    },

                ]
            }} />
            <OurFeatured FeaturedData={{
                headin: "Customized Taxi Booking App Solutions",
                desc: "Our dedicated taxi app developers offer customized solutions tailored to your business needs. We integrate successful features from leading on-demand taxi apps into your own, ensuring a user-friendly and efficient experience. Whether you need ride scheduling, fare calculations, or a real-time tracking system, our team can create a solution designed for success.",
                cards: [
                    {
                        title: "Uber",
                        desc:
                            "Uber's clone app makes scheduling rides fast and simple with real-time vehicle tracking and multiple payment options.",
                        icon: "/assets/images/icon/feature-icon1.png",
                        bgClass: "bg-blue-100",
                        color: "#dbeafe",
                        link: "/service-details",
                    },
                    {
                        title: "Lyft",
                        desc:
                            "Lyft offers convenient, safe, and trustworthy ride-hailing experiences by only accepting drivers who possess current driver's licenses and conducting DMV and criminal background checks. Allow users to split the fare via your app itself.",
                        icon: "/assets/images/icon/feature-icon2.png",
                        bgClass: "bg-green-100",
                        color: "#dcfce7",
                        link: "/service-details",
                    },
                    {
                        title: "Gett",
                        desc:
                            "Gett is an app that allows users to book rides two weeks ahead, mitigating surge pricing. They hire only TLC-authorized and certified drivers to guarantee safety for users.",
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
                        title: "Taxi Booking Services",
                        desc: "We build easy-to-use taxi booking apps that offer real-time tracking, fare calculation, online payments, and automated dispatch for individual drivers, fleet operators, and startups."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon2.png",
                        title: "Car Rental Services",
                        desc: "Launch car rental services with on-demand or scheduled rental options. Our solutions include vehicle inventory, booking calendars, and real-time location tracking for customers and admins."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon3.png",
                        title: "VIP Corporate Taxis",
                        desc: "Cater to corporate clientele with our white-label VIP taxi solutions, offering priority booking, luxury vehicle options, automated invoicing, and expense reports for business accounts."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon4.png",
                        title: "Limousine and Chauffeur Services",
                        desc: "We develop limousine and chauffeur service apps that enable premium bookings with real-time route visualization, chauffeur ratings, and luxury fleet management features."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon5.png",
                        title: "Air Taxi Solutions",
                        desc: "Create air taxi booking platforms with GPS-based aircraft tracking, instant fare estimations, scheduling, and route optimization for elite travel services and tourism industries."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon6.png",
                        title: "Carpooling Apps",
                        desc: "Build secure and efficient carpooling or ride-sharing platforms to help users share rides, reduce fuel usage, and lower costs. Supports real-time matching and seamless payments."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon7.png",
                        title: "On-Demand Bikes Services",
                        desc: "Offer urban commuters a quick bike ride booking experience with real-time location tracking, instant reservations, digital payments, and in-app rider support."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon8.png",
                        title: "RV Operators",
                        desc: "We provide solutions customized for recreational vehicle (RV) operators to manage rentals, maintenance, availability, and customer bookings with ease."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon9.png",
                        title: "Paratransit Taxis Services",
                        desc: "Provide reliable taxi services to the disabled and elderly with scheduling, accessible vehicle dispatching, driver training modules, and caregiver coordination features."
                    }
                ]
            }} />
            <OurAppSuccess appSuccessData={{
                heading: "Boost Your Dating App Success with AI-Driven Development Solutions",
                cards: [
                    {
                        title: "Special Requests",
                        description:
                            "Users can make in-ride luggage requests or require baby seats. These features allow custom experiences, improving user satisfaction through personalized ride services.",
                        icon: "/assets/images/icon/service-icon1.png",
                        bgClass: "bg1",
                        color: "#e6f8f0",
                        link: "/service-details",
                    },
                    {
                        title: "Save Destinations",
                        description:
                            "Let riders easily bookmark favorite places. Taking a ride to work or home becomes faster when users can select saved destinations instead of typing them every ride.",
                        icon: "/assets/images/icon/service-icon2.png",
                        bgClass: "bg2",
                        color: "#e8faff",
                        link: "/service-details",
                    },
                    {
                        title: "Multiple Stops",
                        description:
                            "This feature lets passengers schedule different drop-off or pick-up points in one trip. Riders can share rides with friends or run errands without needing separate bookings.",
                        icon: "/assets/images/icon/service-icon3.png",
                        bgClass: "bg3",
                        color: "#fffaf0",
                        link: "/service-details",
                    },
                    {
                        title: "ETA and Status",
                        description:
                            "Give users real-time updates on arrival time, vehicle location, and trip progress. This builds trust and helps passengers plan better while waiting or traveling.",
                        icon: "/assets/images/icon/service-icon4.png",
                        bgClass: "bg4",
                        color: "#f5f2ff",
                        link: "/service-details",
                    },
                    {
                        title: "Fare Calculator",
                        description:
                            "By adding this feature to your app, riders get a transparent pricing estimate before confirming the ride. It improves clarity and builds trust among users.",
                        icon: "/assets/images/icon/service-icon5.png",
                        bgClass: "bg5",
                        color: "#fff5e6",
                        link: "/service-details",
                    },
                    {
                        title: "Emergency Contacts",
                        description:
                            "Let riders set emergency contacts, and drivers can alert them in case of trouble. Integrated with GPS and emergency features, this adds an extra layer of safety.",
                        icon: "/assets/images/icon/service-icon6.png",
                        bgClass: "bg6",
                        color: "#f0faff",
                        link: "/service-details",
                    }
                ]
            }} />
            <OurSoultionBannner data={{
                heading:"Looking for a Mobile App Solution to propel your Business?",
                desc:"Engage our specialists to turn your idea into Reality!",
                img1:"/assets/images/solution/taxibooking2.png"
            }}/>
            <FeqSection />
        </div>
    )
}
