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
                heading: "Cryptocurrency Exchange Development Company",
                desc: "Start your crypto trading platform business confidently by joining hands with Onepixel Soft — a highly-rated cryptocurrency exchange development company. We provide secure, high-scalability, and bespoke cryptocurrency exchange software development services according to your business model.",
                desc1: "From startups to enterprises, our full-fledged crypto exchange app development solutions equip you with cutting-edge features, fast performance, and regulatory compliance. In need of white label crypto exchange development or want to start from scratch? We provide affordable solutions tailored to your needs and budget."
            }} />
            <AboutSilder />
            <OurSolutionleftCard data={{
                heading: "Cryptocurrency Exchange Development",
                desc: ["With a reliable cryptocurrency exchange development company like Onepixel Soft, you can have the next-generation trading platforms built to power your crypto business. Using our white label crypto exchange development led by expert professionals, you can minimize time-to-market and get a completely branded, secure exchange that matches your business needs.", "Our cryptocurrency exchange development solutions are scalable, regulatory compliant, and user-friendly. From simple trading platforms to high-frequency exchanges, we offer bespoke and affordable solutions that meet the demands of contemporary financial markets—supported by strong architecture and multi-payment capabilities."],
                img1: "/assets/images/solution/crptoex.png"
            }} />

            <OurFeatured FeaturedData={{
                heading: "Get Custom Crypto Payment Gateway Solutions",
                desc: "If you wish to emulate the success of top exchanges such as Binance, Coinbase Pro, or Kraken, we possess the talent to craft a bespoke cryptocurrency exchange platform for your requirements. Our offerings guarantee optimal performance, maximum security, and scalability, providing you with the competitive advantage that is demanded in the fast-moving crypto space. No matter if you require a sophisticated trading platform or cutting-edge payment gateway solutions, rely on us to power efficiency and growth for your business in the cryptocurrency arena.",
                cards: [
                    {
                        title: "Binance Clone App",
                        desc:
                            "Our Binance clone app provides users with seamless trading using a secure and reliable platform. With features like spot trading, trading in the futures, advanced types of orders, and more, our Binance Clone App caters to novice and experienced traders.",
                        icon: "/assets/images/icon/feature-icon1.png",
                        bgClass: "bg-blue-100",
                        color: "#dbeafe",
                        link: "/service-details",
                    },
                    {
                        title: "Coinbase Pro Clone App",
                        desc:
                            "Do you want to start an enterprise-grade cryptocurrency exchange platform similar to Coinbase Pro? We are experts in developing customized solutions, such as our Coinbase Pro Clone App, inspired by the well-known Coinbase Pro exchange.",
                        icon: "/assets/images/icon/feature-icon2.png",
                        bgClass: "bg-green-100",
                        color: "#dcfce7",
                        link: "/service-details",
                    },
                    {
                        title: "Kraken Clone App",
                        desc:
                            "As a top provider of crypto exchange software development, we provide a cloned app similar to Kraken, a well-known cryptocurrency exchange renowned for its safety, liquidity, and sophisticated trading capabilities.",
                        icon: "/assets/images/icon/feature-icon3.png",
                        bgClass: "bg-orange-100",
                        color: "#ffedd5",
                        link: "/service-details",
                    },
                ]
            }} />

            <OurSolutionsDevlopment devlopmentData={{
                heading: "Extensive Range of Cryptocurrency Exchange Development Services Provided by Onepixel Soft",
                desc: "At Onepixel Soft, we provide a complete range of services to fulfill your cryptocurrency exchange requirements. Custom platform development, security integrations, and payment gateway solutions - whatever you need, our team guarantees smooth implementation and continuous support. A white-label solution or a completely customized exchange, we have it covered. Expertise spans every stage to ensure success for your business in the booming crypto industry. We guarantee scalability, security, and high-performance to provide you with a competitive advantage.",
                cards: [
                    {
                        id: 1,
                        icon: "/assets/images/icon/feature-three-icon1.png",
                        title: "Centralized & Decentralized Exchange Development",
                        desc:
                            "We build both CEX and DEX platforms tailored to your business needs, offering high performance, security, and liquidity.",
                    },
                    {
                        id: 2,
                        icon: "/assets/images/icon/feature-three-icon2.png",
                        title: "Multi-Currency Wallet Integration",
                        desc:
                            "Secure wallets that support multiple cryptocurrencies with features like two-factor authentication and cold storage compatibility.",
                    },
                    {
                        id: 3,
                        icon: "/assets/images/icon/feature-three-icon3.png",
                        title: "Advanced Trading Engine",
                        desc:
                            "Robust and scalable engines to handle high-frequency trading, real-time order matching, and customizable trading pairs.",
                    },
                    {
                        id: 4,
                        icon: "/assets/images/icon/feature-three-icon4.png",
                        title: "KYC/AML & Compliance Integration",
                        desc:
                            "Built-in identity verification, regulatory compliance, and transaction monitoring to ensure secure and lawful operations.",
                    },

                ]
            }} />
            <OurDevlomentCycle DevlomentCycleData={{
                heading: "What are the Custom Taxi Booking App Services?",
                desc: "Our online taxi booking app development services are fully compatible with iOS & Android platforms and deliver top performance. Below, we explore each panel in detail.",
                cards: [
                    {
                        id: 1,
                        icon: "/assets/images/icon/service-three-icon1.png",
                        title: "Centralized Cryptocurrency Exchange Development",
                        desc:
                            "We develop centralized exchanges with robust architecture, high liquidity, and security features. These exchanges are ideal for businesses looking to provide users with regulated trading environments, easy-to-use interfaces, and customer support capabilities.",
                    },
                    {
                        id: 2,
                        icon: "/assets/images/icon/service-three-icon2.png",
                        title: "Decentralized Cryptocurrency Exchange Development",
                        desc:
                            "Our decentralized exchange (DEX) development services deliver peer-to-peer trading platforms that eliminate intermediaries. We integrate smart contracts for secure and transparent trades while offering wallet integrations and liquidity pooling solutions.",
                    },
                    {
                        id: 3,
                        icon: "/assets/images/icon/service-three-icon3.png",
                        title: "Hybrid Cryptocurrency Exchange Development",
                        desc:
                            "Hybrid exchanges combine centralized and decentralized benefits, offering security, privacy, and liquidity together. We develop hybrid platforms that deliver high-speed transactions with decentralized control and user asset custody.",
                    },
                    {
                        id: 4,
                        icon: "/assets/images/icon/service-three-icon4.png",
                        title: "Non-Fungible Token (NFT) Exchange Development",
                        desc:
                            "We build NFT exchange platforms where users can buy, sell, and trade unique digital assets or collectibles. These platforms are designed with intuitive interfaces, wallet integration, and multi-chain compatibility for seamless NFT transactions.",
                    },
                    {
                        id: 5,
                        icon: "/assets/images/icon/service-three-icon5.png",
                        title: "Crypto Derivatives Exchange Development",
                        desc:
                            "We create exchanges that allow trading in crypto derivatives like futures, options, and swaps. Our solutions include real-time price feeds, leveraged trading systems, risk management tools, and regulatory compliance.",
                    },
                    {
                        id: 6,
                        icon: "/assets/images/icon/service-three-icon6.png",
                        title: "Margin Trading Exchange Development",
                        desc:
                            "We develop platforms for margin trading where users can borrow funds to leverage their positions. Our solutions include robust risk controls, high-frequency trading engines, and real-time margin call alerts to ensure platform reliability.",
                    }
                ]
            }} />
            <OurAppSuccess appSuccessData={{
                heading: "Boost Your Dating App Success with AI-Driven Development Solutions",
                cards: [
                    {
                        title: "Overflowing TPS",
                        description:
                            "With our ultra-fast matching engine architecture, you’ll have access to thousands of TPS (transactions per second), ensuring your users enjoy a seamless experience. This technology enables us to handle 1000x transactions faster than average.",
                        icon: "/assets/images/icon/service-icon1.png",
                        bgClass: "bg1",
                        color: "#e6f8f0",
                        link: "/service-details",
                    },
                    {
                        title: "KYC/AML Verification",
                        description:
                            "We strictly comply with the jurisdiction’s policies. Each account is verified before it can be used for trading. Our KYC/AML integration ensures your exchange is secure and free from KYC loopholes.",
                        icon: "/assets/images/icon/service-icon2.png",
                        bgClass: "bg2",
                        color: "#e6f4fb",
                        link: "/service-details",
                    },
                    {
                        title: "Hot Wallet",
                        description:
                            "We offer secure and reliable multi-signature authorized hot wallets to manage transactions on the go. These are user-friendly and allow seamless integration with multiple exchanges.",
                        icon: "/assets/images/icon/service-icon3.png",
                        bgClass: "bg3",
                        color: "#f8f0f6",
                        link: "/service-details",
                    },
                    {
                        title: "Multi-Layer Security",
                        description:
                            "Our exchange solutions are embedded with several security layers including firewalls, data encryption, anti-phishing modules, and DDoS protection to prevent cyberattacks at every level.",
                        icon: "/assets/images/icon/service-icon4.png",
                        bgClass: "bg4",
                        color: "#f4f7fc",
                        link: "/service-details",
                    },
                    {
                        title: "Advanced Chart View",
                        description:
                            "Advanced chart view for trading is updated in real-time and provides data insights that help users analyze price movements. We integrate advanced libraries to bring industry-standard views to your platform.",
                        icon: "/assets/images/icon/service-icon5.png",
                        bgClass: "bg5",
                        color: "#fff5f2",
                        link: "/service-details",
                    },
                    {
                        title: "User Dashboard",
                        description:
                            "We design super-intuitive user dashboards that provide personalized information about assets, balances, open trades, and transaction history. Our dashboards are sleek, smart, and fully customizable.",
                        icon: "/assets/images/icon/service-icon6.png",
                        bgClass: "bg6",
                        color: "#f2f6f7",
                        link: "/service-details",
                    },
                    {
                        title: "Wallet Integration",
                        description:
                            "Our crypto wallet integration ensures easy and safe transfer of crypto assets. We offer both hot and cold wallet integrations to improve the liquidity and transaction handling of your platform.",
                        icon: "/assets/images/icon/service-icon1.png",
                        bgClass: "bg7",
                        color: "#e6f8f0",
                        link: "/service-details",
                    },
                    {
                        title: "Robust Trading Engine",
                        description:
                            "Our trading engine is designed to match orders at lightning-fast speeds and maintain precision. It supports multiple order types and provides scalability to manage high trading volumes.",
                        icon: "/assets/images/icon/service-icon2.png",
                        bgClass: "bg8",
                        color: "#e6f4fb",
                        link: "/service-details",
                    }
                ]
            }} />
            <OurSoultionBannner data={{
                heading: "Transform your Cryptocurrency Exchange Dreams into Reality!",
                desc: "Get in touch today to discover how our expert team can tailor a solution specifically for your needs.",
                img1: "/assets/images/solution/cryptoexx.png"
            }} />
            <FeqSection />

        </div>
    )
}
