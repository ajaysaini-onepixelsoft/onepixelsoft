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
                heading: "Medicine Delivery App Development Company",
                desc: "Onepixel Soft Solutions specializes in creating on-demand medicine delivery apps for pharmacy businesses, hospitals, and e-pharmacy startups. With our expertise, we provide a user-friendly, scalable platform that ensures real-time access to prescription medications, OTC products, and healthcare services. Our app development solutions offer secure online ordering, seamless payment gateways, and reliable delivery tracking, improving customer convenience and satisfaction. Partner with us to enhance your business's digital presence and streamline medicine delivery services effectively."
            }} />
            <AboutSilder />
            <OurSolutionleftCard data={{
                heading: "Pharmacy App Development Company",
                img1: "/assets/images/solution/medicined.png",
                desc: ["Onepixel Soft is a leader in pharmacy app development, offering both white-label and custom solutions for businesses of all sizes. From standalone pharmacies to multi-chain stores and e-pharmacy startups, we provide scalable, user-friendly medicine delivery apps.", "Our apps feature advanced technology, secure payments, and interactive UI/UX designs, ensuring a seamless user experience. Whether for home delivery services or in-hospital pharmacies, we cater to all pharmacy models with fast time-to-market and innovative solutions. Start your digital pharmacy journey with Onepixel Soft today."]
            }} />
            <OurSolutionsDevlopment devlopmentData={{
                heading: "Customer App Development",
                desc: "A user-friendly app that allows customers to book massage services, choose therapists, and make secure payments with ease.",
                cards: [
                    {
                        id: 1,
                        icon: "/assets/images/icon/feature-three-icon1.png",
                        title: "User-Friendly Customer App",
                        desc:
                            "Enable users to upload prescriptions, browse medicines, place orders, and track deliveries in real-time with ease.",
                    },
                    {
                        id: 2,
                        icon: "/assets/images/icon/feature-three-icon2.png",
                        title: "Pharmacy Panel Integration",
                        desc:
                            "Pharmacies can manage inventory, update availability, process orders, and view analytics through a dedicated dashboard.",
                    },
                    {
                        id: 3,
                        icon: "/assets/images/icon/feature-three-icon3.png",
                        title: "Secure Delivery Agent App",
                        desc:
                            "A reliable app for delivery personnel to manage pickups, deliveries, and ensure prescription verification at drop-off.",
                    },
                    {
                        id: 4,
                        icon: "/assets/images/icon/feature-three-icon4.png",
                        title: "Robust Admin Dashboard",
                        desc:
                            "Offers centralized control over users, pharmacies, delivery agents, orders, and compliance with health regulations.",
                    },

                ]
            }} />
            <OurFeatured FeaturedData={{
                heading: "Customised Medicine Delivery Applications Like",
                desc: "Looking to create a Medicine Delivery App for your startup? Partner with Onepixel Soft, a leading app development company offering custom solutions tailored to your business needs. Our team ensures high-performance, responsive apps that help new startups grow in the healthcare sector. With seamless integration of instant medical services like prescription fulfillment and over-the-counter deliveries, we make sure your business delivers quality healthcare services to users efficiently. Let us help you build a powerful platform that boosts your healthcare startup.",
                cards: [
                    {
                        title: "img Clone",
                        desc:
                            "A prominent brand under Tata in the healthcare industry offers immediate services to its customers. Users can purchase medicines and other related products through their online platforms.",
                        icon: "/assets/images/icon/feature-icon1.png",
                        bgClass: "bg-blue-100",
                        color: "#dbeafe",
                        link: "/service-details",
                    },
                    {
                        title: "Netmeds Clone",
                        desc:
                            "Netmeds is an online platform offering top-notch healthcare services by delivering medicines quickly to your doorstep with a fast payment process. Get your own personalized Netmeds-like app today.",
                        icon: "/assets/images/icon/feature-icon2.png",
                        bgClass: "bg-green-100",
                        color: "#dcfce7",
                        link: "/service-details",
                    },
                    {
                        title: "PharmEasy Clone",
                        desc:
                            "PharmEasy is an online pharmaceutical company that offers a wide range of medicinal services to customers through its online platform. Discover how PharmEasy's contributions can help you customize your app.",
                        icon: "/assets/images/icon/feature-icon3.png",
                        bgClass: "bg-orange-100",
                        color: "#ffedd5",
                        link: "/service-details",
                    },
                ]
            }} />
            <OurDevlomentCycle DevlomentCycleData={{
                heading: "Web-Admin Panel Features",
                desc: "It offers full control over users, bookings, payments, service providers, and real-time analytics to efficiently manage the app ecosystem.",
                cards: [
                    {
                        icon: "/assets/images/icon/service-three-icon1.png",
                        title: "Powerful Dashboard",
                        desc: "Admin can manage all users’ activities under this category of on-demand laundry services mobile app."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon2.png",
                        title: "Customer Management",
                        desc: "The admin can monitor customer activities, including their browsing history, orders, payments, feedback, and more."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon3.png",
                        title: "Driver Management",
                        desc: "Allows the admin to manage driver details and track the locations and activities of each driver on the app."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon4.png",
                        title: "Manage Store Owners/Store",
                        desc: "The admin can oversee details and track the activities of all pharmacy store owners registered on the app."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon5.png",
                        title: "Stock Management",
                        desc: "Allows the admin to manage and monitor the inventory of drugs and medicines on the app."
                    },
                    {
                        icon: "/assets/images/icon/service-three-icon6.png",
                        title: "Complaint Management",
                        desc: "Allows the admin to manage customer complaints, feedback, and reviews, and take appropriate actions."
                    }
                ]
            }} />
            <OurAppSuccess appSuccessData={{
                heading: "Customer App Features",
                desc: "It enables users to seamlessly browse menus, place orders, track deliveries, and make secure payments in real-time.",
                cards: [
                    {
                        title: "One-click login",
                        description: "Enables customers to easily register and log into the app using their email, phone number, or social media accounts.",
                        icon: "/assets/images/icon/service-icon1.png",
                        bgClass: "bg1",
                        color: "#e6f8f0",
                        link: "/service-details"
                    },
                    {
                        title: "Search medicines",
                        description: "Customers can search for the medicines they wish to order by either entering drug names or uploading prescriptions.",
                        icon: "/assets/images/icon/service-icon2.png",
                        bgClass: "bg2",
                        color: "#e8f9ff",
                        link: "/service-details"
                    },
                    {
                        title: "Add to cart",
                        description: "Enables patients/customers to add the medicines they want to order to their shopping cart before completing the payment process.",
                        icon: "/assets/images/icon/service-icon3.png",
                        bgClass: "bg3",
                        color: "#fdeef3",
                        link: "/service-details"
                    },
                    {
                        title: "Multiple Payment Options",
                        description: "Users can conveniently pay for the ordered medicines using any of the available payment options in the app.",
                        icon: "/assets/images/icon/service-icon4.png",
                        bgClass: "bg4",
                        color: "#f4f0fd",
                        link: "/service-details"
                    },
                    {
                        title: "Order tracking",
                        description: "Enables customers to track the real-time status of their ordered medicines through the online pharmacy delivery app.",
                        icon: "/assets/images/icon/service-icon5.png",
                        bgClass: "bg5",
                        color: "#fdf6ed",
                        link: "/service-details"
                    },
                    {
                        title: "Reviews",
                        description: "Users can leave reviews and ratings for their product purchases or share their overall experience with the online pharmacy app for buying medicines.",
                        icon: "/assets/images/icon/service-icon6.png",
                        bgClass: "bg6",
                        color: "#f8f8f8",
                        link: "/service-details"
                    },
                    {
                        title: "Push notifications",
                        description: "Customers receive notifications about their order status as well as any discounts and offers available from the service provider.",
                        icon: "/assets/images/icon/service-icon1.png",
                        bgClass: "bg7",
                        color: "#e6f8f0",
                        link: "/service-details"
                    },
                    {
                        title: "Order history",
                        description: "The app maintains a record of users’ past orders, allowing them to view their order history and easily repeat any order in the future.",
                        icon: "/assets/images/icon/service-icon2.png",
                        bgClass: "bg8",
                        color: "#e8f9ff",
                        link: "/service-details"
                    }
                ]
            }} />

            <OurSoultionBannner data={{
                heading:"Pharmacy Delivery Apps Developed by Onepixel Soft",
                desc:"Have a look at some of our latest works on on-demand medicine delivery app and get to know how your finished product will look like and be packed with requisite features & functionalities.",
                img1:"/assets/images/solution/medicine2.png",
            }}/>

            <FeqSection />
        </div>
    )
}
