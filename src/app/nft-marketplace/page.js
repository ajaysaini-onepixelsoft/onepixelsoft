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
                heading: "Our NFT Marketplace Development Services",
                desc: "Our knowledgeable NFT developers will assist you in shaping your requirements. They are also capable of developing your own NFT world gracefully through Polygon Matic, Tron, Solana, Binance Smart Chain, Polkadot, and other relevant blockchain networks like these.",
                cards: [
                    {
                        id: 1,
                        icon: "/assets/images/icon/service-three-icon1.png",
                        title: "NFT Marketplace Development",
                        desc: "Take care of collectors, organizers, vendors, and other audiences with our feature-rich NFT marketplace development solutions including smart contract development and integration, crypto wallet integration, storefront, bidding engine, and more."
                    },
                    {
                        id: 2,
                        icon: "/assets/images/icon/service-three-icon2.png",
                        title: "NFT Website Development",
                        desc: "NFT websites provide Blockchain-based digital asset platforms to trade digital collectibles, arts, and virtual assets securely. We assist you in designing NFT website architecture, wallet setup, token creation, and more."
                    },
                    {
                        id: 3,
                        icon: "/assets/images/icon/service-three-icon3.png",
                        title: "NFT App Development",
                        desc: "We develop robust NFT mobile applications for Android and iOS, ensuring smooth user experience. Our apps include features like minting, real-time trading, in-app wallets, and custom storefronts."
                    },
                    {
                        id: 4,
                        icon: "/assets/images/icon/service-three-icon4.png",
                        title: "NFT Staking Projects",
                        desc: "Enable users to stake their NFTs and earn rewards by integrating staking functionalities into your NFT platform. We design NFT staking systems that maximize engagement and utility."
                    },
                    {
                        id: 5,
                        icon: "/assets/images/icon/service-three-icon5.png",
                        title: "Auction Portal Development",
                        desc: "Design real-time auction portals to support timed auctions, reserve price options, and royalty rewards. Our auction development services ensure transparency and real-time bidding."
                    },
                    {
                        id: 6,
                        icon: "/assets/images/icon/service-three-icon6.png",
                        title: "NFT Lending Platform Development",
                        desc: "Launch an NFT lending and borrowing platform where users can use NFTs as collateral to get instant loans. We integrate robust smart contracts to secure and automate lending transactions."
                    },
                    {
                        id: 7,
                        icon: "/assets/images/icon/service-three-icon7.png",
                        title: "NFT Minting Platform",
                        desc: "We help you develop NFT minting platforms that allow creators to tokenize their digital assets with customizable metadata, attributes, and royalties."
                    },
                    {
                        id: 8,
                        icon: "/assets/images/icon/service-three-icon1.png",
                        title: "NFT Games Development",
                        desc: "Boost user engagement by creating NFT-based play-to-earn games. We offer NFT gaming development services including character creation, weaponization, asset ownership, and trading."
                    },
                    {
                        id: 9,
                        icon: "/assets/images/icon/service-three-icon2.png",
                        title: "NFT Streaming Platform",
                        desc: "Offer secure and tokenized live streaming for exclusive digital content. Our NFT streaming platforms support subscription models, royalties, and DRM protection."
                    }
                ]
            }} />
            <OurAppSuccess appSuccessData={{
                heading: "Key Features Of Our NFT Development Services",
                desc: "We harness the strength of vast web3 tokens, fast transfer and deep understanding of NFTs and blockchain to provide customized solutions, ranging from creating art asset that can be linked to tokens to creating an inclusive marketplace for NFTs. NFTs can now be used for everything, including music, art, virtual properties, and collectibles organizations.",
                cards: [
                    {
                        title: "Bidding",
                        description:
                            "You can allow users to bid on your NFTs. Bidding can fuel competition and raise the value of NFTs. We integrate flexible bidding engines into the NFT app like blockchains, cryptos, and more to support all types of auction models for increased demand & platform engagement.",
                        icon: "/assets/images/icon/service-icon1.png",
                        bgClass: "bg1",
                        color: "#e6f8f0",
                        link: "/service-details"
                    },
                    {
                        title: "Tracking",
                        description:
                            "We provide our customers with an enhanced tracking system, which helps them trace their collectibles. It will increase security, make auditing easier, and improve transparency. You can keep a track of their ownership.",
                        icon: "/assets/images/icon/service-icon2.png",
                        bgClass: "bg2",
                        color: "#e6f4fb",
                        link: "/service-details"
                    },
                    {
                        title: "Virtual Art Exhibitory",
                        description:
                            "Virtual Art Exhibitory allows digital art pieces displayed on a screen. The audience can easily navigate, interact, and even bid from the comfort of their home. It's a digital extension to the traditional gallery.",
                        icon: "/assets/images/icon/service-icon3.png",
                        bgClass: "bg3",
                        color: "#f9f0fa",
                        link: "/service-details"
                    },
                    {
                        title: "Push Notifications",
                        description:
                            "Push notifications let users stay informed of the newest updates, status of listings, bid offers, or purchase confirmations. These features enhance the user experience, ensuring they never miss anything.",
                        icon: "/assets/images/icon/service-icon4.png",
                        bgClass: "bg4",
                        color: "#f3efff",
                        link: "/service-details"
                    },
                    {
                        title: "Tradability",
                        description:
                            "NFTs' underlying feature allows them to trade across multiple marketplaces with various digital wallets. We ensure that tradability remains seamless and secure for both buyers and sellers.",
                        icon: "/assets/images/icon/service-icon5.png",
                        bgClass: "bg5",
                        color: "#fef5ea",
                        link: "/service-details"
                    },
                    {
                        title: "Standardization",
                        description:
                            "We ensure a uniform development process. Our solutions are designed in compliance with standard protocols like ERC-721 and ERC-1155 to ensure maximum usability, flexibility, and security.",
                        icon: "/assets/images/icon/service-icon6.png",
                        bgClass: "bg6",
                        color: "#eef7f5",
                        link: "/service-details"
                    },
                    {
                        title: "Liquidity",
                        description:
                            "NFTs are easy to sell, thanks to the presence of an ever-increasing number of users and traders. We ensure our development includes features that maintain liquidity on marketplaces and platforms.",
                        icon: "/assets/images/icon/service-icon1.png",
                        bgClass: "bg7",
                        color: "#fff4e6",
                        link: "/service-details"
                    },
                    {
                        title: "Interoperable",
                        description:
                            "NFTs developed with our solutions are cross-chain ready. Be it linked through Ethereum, Solana, Polygon, or Binance Chain, our NFTs ensure maximum compatibility across platforms.",
                        icon: "/assets/images/icon/service-icon2.png",
                        bgClass: "bg8",
                        color: "#f6f9fc",
                        link: "/service-details"
                    }
                ]
            }} />
            <OurSoultionBannner data={{
                heading:"Ready to Revolutionize your Digital Assets with NFTs?",
                desc:"Contact us today to discuss your NFT needs for development and unlock opportunities in blockchain technologies for your company.",
                img1:"/assets/images/solution/nifty.png"
            }}/>
            <FeqSection/>

        </div>
    )
}
