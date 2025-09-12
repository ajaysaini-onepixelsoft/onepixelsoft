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
                heading: "DeFi Development Company",
                desc: "Our DeFi solutions play a crucial role in providing clients with transparency, confidence, trust, and security in their financial operations.",
                desc1: "As a top DeFi development firm, we specialize in transforming traditional financial services into secure, transparent, and equitable decentralized finance applications."
            }} />
            <AboutSilder />
            <OurSolutionleftCard data={{
                heading: "Elevate Your Business Success with Secure DeFi Wallet Development",
                desc: ["Bring your business closer to digital success by collaborating with a leading DeFi wallet development company, and seamlessly transition your traditional financial services to an efficient, cost-effective decentralized system. With our expertise in blockchain development, we provide decentralized blockchain solutions and crypto exchange services that enhance transaction transparency through smart contracts and token creation.", "At Onepixel Soft, we offer top-tier DeFi development services, including DeFi cryptocurrency coins, DeFi token wallets, DeFi cryptocurrency exchanges, DeFi dApps, and DeFi smart contract development. As blockchain specialists, we excel in every aspect of the ledger, helping numerous businesses achieve industry leadership through our innovative solutions."],
                img1: "/assets/images/solution/defi.png"
            }} />
            <OurSolutionsDevlopment devlopmentData={{
                heading: "Making Job Search Easy with Custom Job Portal App Development",
                desc: "At Onepixel Soft, we offer customized cloud kitchen app solutions meant to improve working efficiency and increase customer interaction. From cutting-edge order management systems to intuitive app interfaces, our innovative solutions help restaurant entrepreneurs to provide exceptional food experiences. With our knowledge of culinary technology and bespoke app development, your cloud kitchen can excel in a competitive market through optimized operations, efficient utilization of resources, and customer satisfaction at all levels. Let us guide you to re-imagine your cloud kitchen with intelligent and scalable solutions.",
                cards: [
                    {
                        id: 1,
                        icon: "/assets/images/icon/feature-three-icon1.png",
                        title: "Personalized Job Recommendations",
                        desc:
                            "Using AI and user profiles, the app can suggest relevant jobs based on skills, experience, and preferences—saving users from scrolling through irrelevant listings.",
                    },
                    {
                        id: 2,
                        icon: "/assets/images/icon/feature-three-icon2.png",
                        title: "Advanced Filtering and Search",
                        desc:
                            "Custom filters (by location, salary, remote/on-site, industry, etc.) help users narrow down results quickly and find jobs that truly match their needs.",
                    },
                    {
                        id: 3,
                        icon: "/assets/images/icon/feature-three-icon3.png",
                        title: "Easy Resume Upload and Application Tracking",
                        desc:
                            "Users can upload resumes, auto-fill applications, and track their status in one place, making the entire application process smoother and more transparent.",
                    },
                    {
                        id: 4,
                        icon: "/assets/images/icon/feature-three-icon4.png",
                        title: "Real-Time Alerts and Notifications",
                        desc:
                            "Push notifications for new job matches, application updates, or recruiter messages keep users informed and responsive, improving their chances of success.",
                    },

                ]
            }} />
            <OurFeatured FeaturedData={{
                heading: "Custom Job Portal Mobile Application Development Similar to Top Recruiting Sites",
                desc: "At OnePixel Soft, We Possess A Talented Team Of Web-Based Job Portal App Developers Who Are Experts In Developing High-Performance Recruitment Platforms. We Have Successfully Developed Custom Job Portal Apps For Diverse Industries, Ranging From Startups To Large Enterprises. Our Team Is Excellent At Developing Strong Mobile Applications And Scalable Software Solutions That Fill The Gap Between Job Seekers And Employers. With A Strong Background In Job Portal Development, We Design User-Centric Platforms That Are Fast, Secure, And Packed With Features Like Resume Upload, Job Filters, Employer Dashboards, And Real-Time Notifications.",
                cards: [
                    {
                        title: "App Like Dice",
                        desc:
                            "Are You Ready To Revolutionize The Job Market With A Job-Disrupting App Like Dice? Envision A Cutting-Edge Job Portal App Crafted With State-Of-The-Art Features, Personalization, And Sleek UI/UX Experience. Here At OnePixel Soft, Our Professional Developers Are Waiting To Make Your Dream Come True—Developing One Of The Top Job Search Apps In The USA. Equip Job Seekers To Search For The Correct Opportunities While Helping Employers To Identify Talented Professionals. Let's Revolutionize Recruitment Together!",
                        icon: "/assets/images/icon/feature-icon1.png",
                        bgClass: "bg-blue-100",
                        color: "#dbeafe",
                        link: "/service-details",
                    },
                    {
                        title: "App Like Indeed",
                        desc:
                            "Reimagine Job Hunting With An App Inspired By Indeed—But Improved. Want To Create A Platform Similar To Indeed Job Portal, But With A Creative Twist? We Expertise In Creating Intuitive, Feature-Rich Recruitment Apps That Match Job Seekers With Their Ideal Jobs And Assist Employers In Hiring Smarter. From Resume Screening To Location-Based Jobs And Instant Alerts—We've Got You Covered. Let's Change The Way People Find Work!",
                        icon: "/assets/images/icon/feature-icon2.png",
                        bgClass: "bg-green-100",
                        color: "#dcfce7",
                        link: "/service-details",
                    },
                    {
                        title: "App Like Glassdoor",
                        desc:
                            "Step Into The Future With An App Like Glassdoor—Based On Transparency & Trust. Develop A Job Portal That Exceeds Listings. With Company Reviews, Salary Insights, And Interview Experiences, We Assist You In Developing A Platform That Enables Users To Make Informed Career Decisions. OnePixel Soft's Developers Stand Ready To Deliver A Unique, Informative, And Engaging Job Marketplace Platform That Brings Home A Difference In Today's Digital Economy.",
                        icon: "/assets/images/icon/feature-icon3.png",
                        bgClass: "bg-orange-100",
                        color: "#ffedd5",
                        link: "/service-details",
                    },
                ]
            }} />
            <OurDevlomentCycle DevlomentCycleData={{
                heading: "Our DeFi Development Services",
                desc: "DeFi Development Services is evolving the financial sector to support digital assets and decentralized transactions. DeFi development company Onepixel Soft offers small- and large-scale financial institutions the power of modern decentralized finance systems to raise money from their assets. We are developing a new type of finance and other advantages like loans and borrowing using DeFi flexible applications.",
                cards: [
                    {
                        id: 1,
                        icon: "/assets/images/icon/service-three-icon1.png",
                        title: "DeFi Token Development",
                        desc:
                            "DeFi tokens enable users to borrow or lend resources and other financial assets with no intermediaries. We utilize open blockchain that allows customers to connect to banks.",
                    },
                    {
                        id: 2,
                        icon: "/assets/images/icon/service-three-icon2.png",
                        title: "dApp Development",
                        desc:
                            "With information that becomes the norm in web3 design, dApp is part of the same success story. Our team builds robust dApps based on Solidity, guaranteeing a safe and secure route to dApp success. Use cases include all top ones.",
                    },
                    {
                        id: 3,
                        icon: "/assets/images/icon/service-three-icon3.png",
                        title: "DeFi Wallet Development",
                        desc:
                            "Let users store and manage cryptocurrency with the ability to design a multi-crypto wallet. We create send/receive and QR-code scan platform to provide 360-degree security.",
                    },
                    {
                        id: 4,
                        icon: "/assets/images/icon/service-three-icon4.png",
                        title: "DeFi Exchange Development",
                        desc:
                            "Cut middle and unsafe features with the best DeFi crypto exchange platform. Our platform enables buyers & sellers to eliminate third-party compliance for easy and secure fund transfer.",
                    },
                    {
                        id: 5,
                        icon: "/assets/images/icon/service-three-icon5.png",
                        title: "DeFi Smart Contract Development",
                        desc:
                            "Provides an attractive business opportunity for platforms who want to save time and reduce risk. With the help of Ethereum, TRON, or Polkadot, we create safe and legal DeFi smart contracts.",
                    },
                    {
                        id: 6,
                        icon: "/assets/images/icon/service-three-icon6.png",
                        title: "DeFi Staking Platform Development",
                        desc:
                            "Get an opportunity for businesses to implement token staking with secure protocols. Users can earn more tokens by choosing how long they want to stake or design an ROI option in return.",
                    },
                    {
                        id: 7,
                        icon: "/assets/images/icon/service-three-icon1.png",
                        title: "DeFi Yield Farming Development",
                        desc:
                            "Yield farming platforms are in more demand by users who want to earn money on crypto deposits. We develop decentralized DeFi apps with staking, lending, and borrowing to ensure greater earnings.",
                    },
                    {
                        id: 8,
                        icon: "/assets/images/icon/service-three-icon2.png",
                        title: "DeFi Lottery System Development",
                        desc:
                            "Decentralize the complete process using DeFi development. We help build the latest lottery apps with complete transparency, automation, and decentralized infrastructure.",
                    },
                    {
                        id: 9,
                        icon: "/assets/images/icon/service-three-icon3.png",
                        title: "DeFi Insurance System Development",
                        desc:
                            "Offer more automation to alternate insurance. We develop platforms that let customers make claims, review risks, and access a decentralized insurance model.",
                    }
                ]
            }} />
            <OurAppSuccess appSuccessData={{
                heading: "Cost Estimation Factors For DeFi Wallet Development Services",
                desc: "Making the DeFi wallet is a complex process that involves various features that impact the total price. This is due to the complexity of features such as multi-chain support and decentralized exchange (DEX) connectivity, as well as security measures like encryption and authorization.",
                cards: [
                    {
                        title: "Feature Complexity",
                        description:
                            "The development cost is impacted by the complexity and sophistication of the integrated features like multi-blockchain support, multi-currency support, DEX integration, staking capabilities, and sophisticated security measures.",
                        icon: "/assets/images/icon/service-icon1.png",
                        bgClass: "bg1",
                        color: "#e6f8f0",
                        link: "/service-details"
                    },
                    {
                        title: "Blockchain Integration",
                        description:
                            "The selection of blockchain networks and protocols that integrate with the wallet is one of the key factors influencing development costs. The wider their complexity, directly impact total development cost.",
                        icon: "/assets/images/icon/service-icon2.png",
                        bgClass: "bg2",
                        color: "#e6f4fb",
                        link: "/service-details"
                    },
                    {
                        title: "Security Measures",
                        description:
                            "Implementing robust security measures, including encryption standards, two-factor authentication, and biometric authentication, can increase development costs. However, these added layers guarantee the security of the user’s assets and data.",
                        icon: "/assets/images/icon/service-icon3.png",
                        bgClass: "bg3",
                        color: "#f9f1f5",
                        link: "/service-details"
                    },
                    {
                        title: "User Interface and Experience (UI/UX)",
                        description:
                            "Making a user-friendly, intuitive interface that is seamless in its navigation and design helps reduce user frustration. This involves UI research and development effort, which contributes to the overall cost estimate.",
                        icon: "/assets/images/icon/service-icon4.png",
                        bgClass: "bg4",
                        color: "#f1f6fe",
                        link: "/service-details"
                    },
                    {
                        title: "Compliance Requirements",
                        description:
                            "The compliance requirements of regulatory standards, including KYC (Know Your Customer) and AML (Anti-Money Laundering), can add complexity and raise the total development cost. Adding compliance also ensures the DeFi wallet meets the law and trust.",
                        icon: "/assets/images/icon/service-icon5.png",
                        bgClass: "bg5",
                        color: "#f6f5fd",
                        link: "/service-details"
                    },
                    {
                        title: "Scalability and Performance",
                        description:
                            "A scalable and efficient DeFi wallet that can handle growing user load, transaction volume, and multiple integrations must be planned in development. As a result, scaling effort, third-party integrations, and load testing all influence pricing.",
                        icon: "/assets/images/icon/service-icon6.png",
                        bgClass: "bg6",
                        color: "#e6f8f0",
                        link: "/service-details"
                    },
                    {
                        title: "Testing and Quality Assurance",
                        description:
                            "Integration with APIs, wallets from chains, or decentralized apps requires thorough QA testing. The more custom and advanced the features, the greater the test scope, affecting cost estimation due to time and testing tools used.",
                        icon: "/assets/images/icon/service-icon7.png",
                        bgClass: "bg7",
                        color: "#fff4f0",
                        link: "/service-details"
                    },
                    {
                        title: "Maintenance and Support",
                        description:
                            "Comprehensive post-development services like maintenance, support, and upgrades will impact cost estimations. These services ensure the DeFi wallet remains stable, free from vulnerabilities, and functions well with any updated blockchain protocols in the future.",
                        icon: "/assets/images/icon/service-icon8.png",
                        bgClass: "bg8",
                        color: "#f1f6fe",
                        link: "/service-details"
                    }
                ]
            }} />
            <OurSoultionBannner data={{
                heading: "Let’s Develop a Custom DeFi Solution for Your Business Success!",
                desc: "Contact our DeFi development team today to unleash the power of decentralized financing on your business!",
                img1: "/assets/images/solution/defi1.png"
            }} />
            <FeqSection />
        </div>
    )
}
