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
                heading: "NFT Marketplace Development Company",
                desc: "Ready to create your own NFT marketplace from the ground up? Partner with Onepixel Soft, a trusted NFT development company offering tailored NFT solutions for the digital space. With our expertise, we're here to turn your ideas into a fully functional and expertly crafted NFT marketplace."
            }} />
            <AboutSilder />
            <OurSolutionleftCard data={{
                heading: "Onepixel Soft–Your One Top Digital Partner for NFT Software Development",
                desc: ["As a leading NFT development firm, Onepixel Soft provides expert technical support for creating NFTs and developing the next generation of NFT marketplaces across various industries, including gaming, music, art, and collectibles. We offer end-to-end NFT development services, covering everything from setup to testing.", "Our services include crafting custom smart contracts for NFT collections and seamless integration with top blockchain platforms like Ethereum, Solana, and Polygon, all backed by cutting-edge technology. With a team of certified NFT developers, we hold a significant market share and possess unparalleled expertise in the rapidly evolving NFT landscape."],
                img1: "/assets/images/solution/niftyy.png"

            }} />
            <OurSolutionsDevlopment devlopmentData={{
                heading: "Diverse Range of NFT Marketplace Development Solutions by Onepixel Soft",
                desc: "From concept to implementation, our team of experts will work closely with you to bring your ideas to the next level. Whether you're trying to develop an online platform for music, art gaming, gaming, or another digital product, we use the latest technologies to provide secure, high-quality, feature-rich, and scalable marketplaces for NFT.",
                cards: [
                    {
                        id: 1,
                        icon: "/assets/images/icon/feature-three-icon1.png",
                        title: "Custom NFT Marketplace Development",
                        desc:
                            "We build tailored smart contracts for various use cases like DeFi, NFT, and supply chain, ensuring secure and efficient automation.",
                    },
                    {
                        id: 2,
                        icon: "/assets/images/icon/feature-three-icon2.png",
                        title: "Multi-Chain Compatibility",
                        desc:
                            "Our solutions support major blockchains like Ethereum, BNB Chain, Polygon, and Solana for wider reach and lower transaction fees.",
                    },
                    {
                        id: 3,
                        icon: "/assets/images/icon/feature-three-icon3.png",
                        title: "Auction & Bidding Features",
                        desc:
                            "Enable real-time auctions, timed bids, and reserve pricing to increase engagement and drive higher asset value.",
                    },
                    {
                        id: 4,
                        icon: "/assets/images/icon/feature-three-icon4.png",
                        title: "Wallet Integration & Security",
                        desc:
                            "Seamless integration with popular wallets like MetaMask and WalletConnect, along with top-tier security protocols to protect users and assets.",
                    },

                ]
            }} />
            <OurFeatured FeaturedData={{
                heading: "Get Custom NFT Applications Like",
                desc: "It doesn't matter if you dream of a platform such as OpenSea for a variety of digital resources, Rarible for creator-centric NFTs, or NBA Top Shot for sports collectibles—we can bring your ideas to reality. Our team of experts harnesses the most advanced blockchain technology to provide seamless, user-friendly, and intuitive experiences that empower creators and entice collectors.",
                cards: [
                    {
                        title: "OpenSea Like App",
                        desc:
                            "Explore the possibilities of your digital marketplace with our OpenSea-like application development services. We specialize in creating user-friendly platforms so that collectors and creators can effortlessly purchase or sell NFTs. We can help you duplicate OpenSea's popularity while tailoring the application to meet your needs.",
                        icon: "/assets/images/icon/feature-icon1.png",
                        bgClass: "bg-blue-100",
                        color: "#dbeafe",
                        link: "/service-details",
                    },
                    {
                        title: "Rarible-Like App",
                        desc:
                            "Let the power of decentralized innovation with our app development solutions that resemble Rarible. Our team is adept at creating platforms that allow creators to mint, buy, and sell NFTs quickly. Make your digital collectors' market more attractive by leveraging our experience in capturing the successes and innovations of Rarible and adding your unique design.",
                        icon: "/assets/images/icon/feature-icon2.png",
                        bgClass: "bg-green-100",
                        color: "#dcfce7",
                        link: "/service-details",
                    },
                    {
                        title: "NBA Top Shot Like App",
                        desc:
                            "Enter the world of collectibles from digital sports by using the NBA Top Shot like app creation. We are experts in creating platforms that let fans buy and sell officially licensed NBA moments. Use our expertise to replicate the excitement and popularity of NBA Top Shot while customizing the app to fit your target audience and objectives.",
                        icon: "/assets/images/icon/feature-icon3.png",
                        bgClass: "bg-orange-100",
                        color: "#ffedd5",
                        link: "/service-details",
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
                        title: "NFT Marketplace Development",
                        desc: "Our team of software engineers creates customizable NFT marketplace solutions with wallet integration, storefronts, smart contracts, and auction modules to facilitate efficient NFT buying, selling, and trading.",
                    },
                    {
                        id: 2,
                        icon: "/assets/images/icon/service-three-icon2.png",
                        title: "NFT Website Development",
                        desc: "NFT websites promote Blockchain-based solutions. Our developers build immersive and secure platforms that enable listing, bidding, and token minting functionalities while ensuring a seamless user experience.",
                    },
                    {
                        id: 3,
                        icon: "/assets/images/icon/service-three-icon3.png",
                        title: "NFT App Development",
                        desc: "We create high-performance NFT mobile apps that mirror your business goals and provide access to real-time trading, wallet integration, and notifications on both Android and iOS platforms.",
                    },
                    {
                        id: 4,
                        icon: "/assets/images/icon/service-three-icon4.png",
                        title: "NFT Staking Projects",
                        desc: "Boost user engagement and offer long-term value through NFT staking capabilities. Our staking platforms enable holders to lock their NFTs in smart contracts in exchange for rewards.",
                    },
                    {
                        id: 5,
                        icon: "/assets/images/icon/service-three-icon5.png",
                        title: "Auction Portal Development",
                        desc: "Create customizable auction systems and support time-based, reserve-price, or sealed-bid auctions for digital collectibles. We ensure smooth user bidding experiences with real-time updates.",
                    },
                    {
                        id: 6,
                        icon: "/assets/images/icon/service-three-icon6.png",
                        title: "NFT Lending Platform Development",
                        desc: "Launch your own lending platform to allow users to borrow against their NFTs. We integrate lending protocols and smart contracts for transparency and trust.",
                    },
                    {
                        id: 7,
                        icon: "/assets/images/icon/service-three-icon7.png",
                        title: "NFT Minting Platform",
                        desc: "We build custom NFT minting platforms that allow creators and users to create NFTs easily. Features include metadata input, gas fee optimization, and royalty configuration.",
                    },
                    {
                        id: 8,
                        icon: "/assets/images/icon/service-three-icon1.png",
                        title: "NFT Games Development",
                        desc: "From play-to-earn to NFT trading card games, we develop blockchain-based gaming experiences with token integration, NFT collectibles, and immersive visuals.",
                    },
                    {
                        id: 9,
                        icon: "/assets/images/icon/service-three-icon2.png",
                        title: "NFT Streaming Platform",
                        desc: "We help launch NFT streaming platforms for video, music, and digital art. Empower creators to tokenize their work and earn royalties through NFT-backed streaming systems.",
                    }
                ]
            }} />
            <OurAppSuccess appSuccessData={{
                heading: "Boost Your Dating App Success with AI-Driven Development Solutions",
                cards: [
                    {
                        title: "Bidding",
                        description: "You can add an auction slot to the items on your NFTs. Bidders can bid transparently and fairly for the NFT. This system enhances the user experience on NFT or blockchain-based apps. Users have a pleasant trading experience while purchasing assets.",
                        icon: "/assets/images/icon/service-icon1.png",
                        bgClass: "bg1",
                        color: "#e6f8f0",
                        link: "/service-details",
                    },
                    {
                        title: "Tracking",
                        description: "We provide our customers with an enhanced tracking system, which shows them the trace details about their assets. Buyers can see if it’s a new item or a resale. This feature allows for easy research to track item origin and authenticity.",
                        icon: "/assets/images/icon/service-icon2.png",
                        bgClass: "bg2",
                        color: "#e8f7ff",
                        link: "/service-details",
                    },
                    {
                        title: "Virtual Art Exhibitory",
                        description: "Users can showcase, exhibit, and display digital art pieces displayed on the NFT platforms. This helps creators in monetization and artists in building a collection or gallery.",
                        icon: "/assets/images/icon/service-icon3.png",
                        bgClass: "bg3",
                        color: "#f9f1fb",
                        link: "/service-details",
                    },
                    {
                        title: "Push Notifications",
                        description: "The apps enable users to stay informed of the latest updates on their NFT listings, bids, new arrivals, or sale alerts. With push notifications, the users never miss the latest deals or listing opportunities.",
                        icon: "/assets/images/icon/service-icon4.png",
                        bgClass: "bg4",
                        color: "#f3f4ff",
                        link: "/service-details",
                    },
                    {
                        title: "Tradability",
                        description: "NFT's tradability feature allows holders to trade across multiple NFT marketplaces. It enables features like bundling, bidding, fixed-rate listings, and timed auctions to support various liquidity preferences.",
                        icon: "/assets/images/icon/service-icon5.png",
                        bgClass: "bg5",
                        color: "#fff3f1",
                        link: "/service-details",
                    },
                    {
                        title: "Standardization",
                        description: "We assist in NFT token standardization, where developers use common or widely used standards like ERC-721 or ERC-1155. This boosts compatibility and user trust by ensuring asset integrity and easier implementation.",
                        icon: "/assets/images/icon/service-icon6.png",
                        bgClass: "bg6",
                        color: "#fcf7f0",
                        link: "/service-details",
                    },
                    {
                        title: "Liquidity",
                        description: "The major aspect of the NFT is the level of assurance on product liquidity. Users can easily exchange or sell the NFTs across supported platforms. This enables users to realize their returns and portfolio potential at any time.",
                        icon: "/assets/images/icon/service-icon7.png",
                        bgClass: "bg7",
                        color: "#fff5eb",
                        link: "/service-details",
                    },
                    {
                        title: "Interoperable",
                        description: "We integrate solutions that allow NFTs to be shared, traded, or listed across multiple platforms. This includes using APIs or blockchain bridges that ensure seamless NFT movement across supported platforms.",
                        icon: "/assets/images/icon/service-icon8.png",
                        bgClass: "bg8",
                        color: "#f2fdf7",
                        link: "/service-details",
                    }
                ]
            }} />
            <OurSoultionBannner data={{
                heading: "Ready to Revolutionize your Digital Assets with NFTs?",
                desc: "Contact us today to discuss your NFT needs for development and unlock opportunities in blockchain technologies for your company",
                img1: "/assets/images/solution/nifty.png"
            }} />
            <FeqSection />

        </div>
    )
}
