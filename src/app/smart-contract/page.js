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
                heading: "Smart Contract Development Company",
                desc: "Onepixel Soft is a seasoned smart contract development company, bringing extensive experience in crafting smart contracts tailored to the needs of diverse businesses and industries. With the expertise of our skilled smart contract professionals, we understand the necessary steps to design efficient, computer-based processes that streamline business agreements."
            }} />
            <AboutSilder />
            <OurSolutionleftCard data={{
                heading: "Scrupulously Developed Smart Contract Solutions",
                desc: ["Enhance your business processes with our expertly crafted smart contract development solutions, tailored for various industries. Onepixel Soft specializes in smart contract development, automating business contracts that traditionally require manual transactions between multiple parties.", "As a leading smart contract development company, Onepixel Soft offers comprehensive services tailored to meet your project's unique needs. Our team of skilled, tech-savvy developers is well-versed in various blockchain protocols and networks, creating self-executing contracts and custom protocols without compromising on quality or reliability. We work closely with our clients to accelerate their projects and deliver high-quality services within the specified timeframes."],
                img1: "/assets/images/solution/smartcontract_about.webp"
            }} />

            <OurSolutionsDevlopment devlopmentData={{
                heading: "Wide Range of Smart Contract Development Services we Offer",
                desc: "With a particular focus on security, scalability, and productivity, we help individuals and businesses tap the potential of smart contracts, improving efficiency, transparency, and confidence in a decentralized market.",
                cards: [
                    {
                        id: 1,
                        icon: "/assets/images/icon/feature-three-icon1.png",
                        title: "Custom Smart Contract Development",
                        desc:
                            "We build tailored smart contracts for various use cases like DeFi, NFT, and supply chain, ensuring secure and efficient automation.",
                    },
                    {
                        id: 2,
                        icon: "/assets/images/icon/feature-three-icon2.png",
                        title: "Smart Contract Audit & Testing",
                        desc:
                            "Our experts perform in-depth audits to detect vulnerabilities and ensure the reliability and safety of your smart contracts.",
                    },
                    {
                        id: 3,
                        icon: "/assets/images/icon/feature-three-icon3.png",
                        title: "Smart Contract for Token Creation",
                        desc:
                            "We develop and deploy smart contracts for creating and managing custom tokens on Ethereum, BNB Chain, and other blockchains.",
                    },
                    {
                        id: 4,
                        icon: "/assets/images/icon/feature-three-icon4.png",
                        title: "Smart Contract Integration",
                        desc:
                            "Seamlessly integrate smart contracts into your existing dApps or platforms to automate transactions and business logic.",
                    },

                ]
            }} />
            <OurFeatured FeaturedData={{
                heading: "Crafting Feature Rich Smart Contract Solutions Like",
                desc: "Our method combines the latest development practices with profound knowledge of blockchain protocols to offer unbeatable solutions. Explore blockchain's possibilities using our custom smart contract development solutions.",
                cards: [
                    {
                        title: "Ethereum Clone Development",
                        desc:
                            "You're in the right place! Our Ethereum Clone development services allow you to duplicate the powerful capabilities and flexibility offered by the Ethereum blockchain. If you want to develop a decentralized financial (DeFi) platform, tokenization service, or another DApp, We provide complete support from conception to deployment.",
                        icon: "/assets/images/icon/feature-icon1.png",
                        bgClass: "bg-blue-100",
                        color: "#dbeafe",
                        link: "/service-details",
                    },
                    {
                        title: "Chainlink Oracle Network Integration",
                        desc:
                            "If you're impressed with Chainlink's ability to provide safe and reliable data feeds for smart contracts, you can now benefit from similar capabilities when developing your projects. Chainlink's Oracle integration allows seamless connection between your smart contracts and other data sources, providing accuracy and security of data inputs.",
                        icon: "/assets/images/icon/feature-icon2.png",
                        bgClass: "bg-green-100",
                        color: "#dcfce7",
                        link: "/service-details",
                    },
                    {
                        title: "Tezos Smart Contract Clone Development",
                        desc:
                            "Our Tezos smart contract clone development services make it possible! With Tezos growing in popularity due to its self-amendment system and an emphasis on scalability and security, this is the right moment to begin this Tezos journey. If you're looking at replicating existing applications based on Tezos or coming up by introducing new applications, our experts are here to help you.",
                        icon: "/assets/images/icon/feature-icon3.png",
                        bgClass: "bg-orange-100",
                        color: "#ffedd5",
                        link: "/service-details",
                    },
                ]
            }} />
            <OurDevlomentCycle DevlomentCycleData={{
                heading: "Our Smart Contract Development Services",
                desc: "OnopeSoft builds a secured smart contract development company with easy highly skilled automation workflows. When you choose our smart contract developers from OnopeSoft, you gain great advantages in delivering cost-effective, bug-free, and transparent solutions. Are you ready to scale your business growth?",
                cards: [
                    {
                        id: 1,
                        icon: "/assets/images/icon/service-three-icon1.png",
                        title: "Smart Contract Architecture",
                        desc:
                            "We design the entire structure of smart contracts along with developing optimized smart contract logic, including security, functionality, and audibility."
                    },
                    {
                        id: 2,
                        icon: "/assets/images/icon/service-three-icon2.png",
                        title: "Smart Contracts Development",
                        desc:
                            "Our skilled developers build and deploy customizable smart contracts for various industries like supply chain, real estate, DeFi, NFTs, etc., ensuring automation and trustless processes."
                    },
                    {
                        id: 3,
                        icon: "/assets/images/icon/service-three-icon3.png",
                        title: "Smart Contract for DApps",
                        desc:
                            "We develop a wide range of advanced and secure smart contracts for decentralized apps to ensure accuracy, performance, and complete decentralization."
                    },
                    {
                        id: 4,
                        icon: "/assets/images/icon/service-three-icon4.png",
                        title: "Smart Contract Optimization",
                        desc:
                            "We optimize and streamline blockchain contracts to improve execution efficiency, gas usage, and overall performance without affecting the contract’s logic."
                    },
                    {
                        id: 5,
                        icon: "/assets/images/icon/service-three-icon5.png",
                        title: "Smart Contracts Audit",
                        desc:
                            "Professional smart contract auditing to detect and prevent potential bugs or security vulnerabilities, ensuring complete safety and transparency."
                    },
                    {
                        id: 6,
                        icon: "/assets/images/icon/service-three-icon6.png",
                        title: "Smart Contract for Digital Wallet",
                        desc:
                            "We create and integrate smart contracts that allow digital wallets to store, transfer, and manage digital assets securely and efficiently."
                    },
                    {
                        id: 7,
                        icon: "/assets/images/icon/service-three-icon1.png",
                        title: "Smart Contract for DEX",
                        desc:
                            "Our team creates reliable and efficient contracts for decentralized exchanges, facilitating peer-to-peer trading without intermediaries."
                    },
                    {
                        id: 8,
                        icon: "/assets/images/icon/service-three-icon2.png",
                        title: "Smart Contracts for DeFi",
                        desc:
                            "We develop smart contracts to automate DeFi operations, such as lending, borrowing, staking, farming, and more, ensuring performance and transparency."
                    },
                    {
                        id: 9,
                        icon: "/assets/images/icon/service-three-icon3.png",
                        title: "Smart Contracts for NFT",
                        desc:
                            "We create secure, standard-compliant smart contracts to mint, sell, and transfer non-fungible tokens (NFTs) with royalty and ownership logic."
                    },
                    {
                        id: 10,
                        icon: "/assets/images/icon/service-three-icon4.png",
                        title: "Smart Contracts for Yield Farming",
                        desc:
                            "Develop advanced yield farming smart contracts to enable users to stake tokens and earn rewards through automated logic."
                    },
                    {
                        id: 11,
                        icon: "/assets/images/icon/service-three-icon5.png",
                        title: "Smart Contracts for DeFi Staking",
                        desc:
                            "Build DeFi staking smart contracts to support high-yield staking platforms that incentivize users for locking tokens for a fixed period."
                    },
                    {
                        id: 12,
                        icon: "/assets/images/icon/service-three-icon6.png",
                        title: "Token Smart Contracts",
                        desc:
                            "We develop token smart contracts on Ethereum, Binance Smart Chain, Solana, and other networks to launch fungible or non-fungible digital tokens."
                    }
                ]
            }} />
            <OurAppSuccess appSuccessData={{
                heading: "Key Features Of Our Smart Contract Solutions",
                cards: [
                    {
                        title: "Automated Execution",
                        description:
                            "Contracts are executed by encoding predefined criteria, eliminating intermediaries and increasing efficiency.",
                        icon: "/assets/images/icon/service-icon1.png",
                        bgClass: "bg1",
                        color: "#e6f8f0",
                        link: "/service-details"
                    },
                    {
                        title: "Transparency",
                        description:
                            "Transparency is guaranteed as agreements and transactions lay everything out clearly on the blockchain, which improves reliability and builds trust.",
                        icon: "/assets/images/icon/service-icon2.png",
                        bgClass: "bg2",
                        color: "#e6f6fb",
                        link: "/service-details"
                    },
                    {
                        title: "Security",
                        description:
                            "Smart contracts rely on standards such as encryption and blockchain immutability to protect sensitive information and user data.",
                        icon: "/assets/images/icon/service-icon3.png",
                        bgClass: "bg3",
                        color: "#f6f0fb",
                        link: "/service-details"
                    },
                    {
                        title: "Decentralization",
                        description:
                            "Enjoy the benefits of decentralization by using digital contracts in various sectors, eliminating the possibility of single-point failures.",
                        icon: "/assets/images/icon/service-icon4.png",
                        bgClass: "bg4",
                        color: "#f8f4fb",
                        link: "/service-details"
                    },
                    {
                        title: "Customizability",
                        description:
                            "Create smart contracts tailored to your business’s specific requirements, allowing flexibility to meet changing demands.",
                        icon: "/assets/images/icon/service-icon5.png",
                        bgClass: "bg5",
                        color: "#fff8ed",
                        link: "/service-details"
                    },
                    {
                        title: "Cost-effectiveness",
                        description:
                            "Integrated automation and the removal of traditional overheads make smart contracts a cost-effective solution for businesses.",
                        icon: "/assets/images/icon/service-icon6.png",
                        bgClass: "bg6",
                        color: "#fff5f0",
                        link: "/service-details"
                    },
                    {
                        title: "Auditability",
                        description:
                            "Make it easy to audit and understand contracts using an integrated smart contract framework that ensures consistent verification.",
                        icon: "/assets/images/icon/service-icon7.png",
                        bgClass: "bg7",
                        color: "#eafbf4",
                        link: "/service-details"
                    },
                    {
                        title: "Smart Triggers",
                        description:
                            "Smart contract solutions automatically trigger actions or responses when predefined conditions are met, improving speed and compliance.",
                        icon: "/assets/images/icon/service-icon8.png",
                        bgClass: "bg8",
                        color: "#eef9fd",
                        link: "/service-details"
                    }
                ]
            }} />

            <OurSoultionBannner data={{
                heading: "Ready to Revolutionize Your Business with our Cutting-Edge Smart Contract Solutions?",
                desc: "Contact us today to discuss how our knowledge can enhance your smart contract development needs and boost your performance in a digital world.",
                img1: "/assets/images/solution/smartcontract_app_fortfolio1.webp"
            }} />
            <FeqSection />
        </div>
    )
}
