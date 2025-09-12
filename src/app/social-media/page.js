import AboutSilder from '@/components/about-us/AboutSilder'
import FeqSection from '@/components/our-services/FeqSection'
import ServiceGetStart from '@/components/our-services/ServiceGetStart'
import OurAppSuccess from '@/components/solutions/OurAppSuccess'
import OurDevlomentCycle from '@/components/solutions/OurDevlomentCycle'
import OurSolutionleftCard from '@/components/solutions/OurSolutionleftCard'
import OurSolutionsDevlopment from '@/components/solutions/OurSolutionsDevlopment'
import OurSoultionBannner from '@/components/solutions/OurSoultionBannner'
import React from 'react'
export default function page() {
  return (
    <div>
      <ServiceGetStart singleData={{
        heading: "Social Media App development Company",
        desc: "Looking to create your own social media app that keeps users engaged and connected? At Onepixel Soft, we specialize in social app development tailored to your vision. Whether you're planning to develop a social media app for niche communities or to compete with the biggest platforms, our expert team delivers intuitive, feature-rich solutions."
      }} />
      <AboutSilder />
      <OurSolutionleftCard data={{
        heading: "Custom Social Media App Development for Every Need",
        desc: ["Onepixel Soft is a premier social media application development company offering end-to-end solutions to cater to your precise business requirements. If you desire to develop a social networking website, build a social media application, or construct a bespoke social application, we provide customized outcomes that surpass expectations. Our seasoned developers employ innovative tools to build innovative and easy-to-use apps.", "From small startups to big corporations, we are experts in social media app design, website creation, and flowless functionality to enable your platform to interact with users."],
        img1: "/assets/images/solution/sm.png"
      }} />
      <OurSolutionsDevlopment devlopmentData={{
        heading: "Social Media Development Mistakes to Avoid",
        cards: [
          {
            id: 1,
            icon: "/assets/images/icon/feature-three-icon1.png",
            title: "Neglecting User Privacy and Data Security",
            desc:
              "Failing to implement proper data protection can lead to breaches and legal issues. Always use secure authentication, encrypted data storage, and clear privacy policies.",
          },
          {
            id: 2,
            icon: "/assets/images/icon/feature-three-icon2.png",
            title: "Poor Onboarding Experience",
            desc:
              "If new users don’t quickly understand how to use the app, they’ll drop off. Design a smooth, guided onboarding process that highlights key features early.",
          },
          {
            id: 3,
            icon: "/assets/images/icon/feature-three-icon3.png",
            title: "Lack of Content Moderation",
            desc:
              "Without tools to report, block, or filter harmful content, your platform can become toxic. Invest in moderation systems (manual or AI-assisted) to maintain a healthy community.",
          },
          {
            id: 4,
            icon: "/assets/images/icon/feature-three-icon4.png",
            title: "Overloading with Features Too Soon",
            desc:
              "Trying to copy every feature from big platforms can confuse users and strain performance. Start simple, focus on core functionality, and iterate based on feedback.",
          },

        ]
      }} />
      <OurDevlomentCycle DevlomentCycleData={{
        heading: "Social Media App Clone Development",
        desc: "At Depeche Soft, we are experts in social media app clone development, assisting you in duplicating the success of trending platforms with scalable development, feature-rich applications. Our white-label clone designs match you with your unique requirements, tailored in a successful market. As a reliable social media app development team, we provide strategic solutions built for scalability, user retention, and innovation.",
        cards: [
          {
            id: 1,
            icon: "/assets/images/icon/service-three-icon1.png", // Placeholder
            title: "Facebook App Clone",
            desc: "Develop a feature-packed Facebook clone to empower your users with social media capabilities, messaging, and real-time feeds across devices."
          },
          {
            id: 2,
            icon: "/assets/images/icon/service-three-icon2.png", // Placeholder
            title: "TikTok App Clone",
            desc: "Our TikTok app clone development delivers seamless video sharing, filters, editing tools, and personalized feeds for viral content engagement."
          },
          {
            id: 3,
            icon: "/assets/images/icon/service-three-icon3.png", // Placeholder
            title: "Instagram App Clone",
            desc: "Create an engaging Instagram-style app with stories, reels, photo sharing, live streaming, and AI-powered feed customization."
          },
          {
            id: 4,
            icon: "/assets/images/icon/service-three-icon4.png", // Placeholder
            title: "Snapchat App Clone",
            desc: "Build a Snapchat-like platform offering disappearing messages, AR filters, Bitmojis, and short video stories for Gen-Z appeal."
          },
          {
            id: 5,
            icon: "/assets/images/icon/service-three-icon5.png", // Placeholder
            title: "Twitter App Clone",
            desc: "Launch your Twitter clone with microblogging features, real-time trends, hashtags, and user-friendly interface."
          },
          {
            id: 6,
            icon: "/assets/images/icon/service-three-icon6.png", // Placeholder
            title: "WhatsApp App Clone",
            desc: "Create a secure and scalable messaging app with voice/video calls, end-to-end encryption, media sharing, and chat backups."
          }
        ]
      }} />
      <OurAppSuccess appSuccessData={{
        heading: "Full-Featured Social Media App Development Solutions",
        desc: "Being one of the top social media app development firms, Depeche Soft provides result-driven and custom-fit tech to bring your dream idea to reality. Right from simplistic social media app designs to real-time communications, we deliver cutting-edge social networking solutions that stand the competition in the busy marketplace. Our professional team is well-versed in creating scalable, engaging, and user-friendly experiences.",
        cards: [
          {
            title: "Custom Social App Development",
            description: "Transform your idea into reality with our custom social media development services. We craft intuitive social platforms with streamlined features and smooth functionality.",
            icon: "/assets/images/icon/service-icon1.png",
            bgClass: "bg1",
            color: "#e6f8f0",
            link: "/service-details"
          },
          {
            title: "Web Design & Development",
            description: "Our creative team designs visually intuitive, mobile-friendly social platforms to engage your audience effectively while reinforcing your brand identity.",
            icon: "/assets/images/icon/service-icon2.png",
            bgClass: "bg2",
            color: "#f0f6ff",
            link: "/service-details"
          },
          {
            title: "Third-Party Integration",
            description: "Enhance your app with third-party features through APIs for payments, media sharing, analytics, and more—boosting functionality and engagement.",
            icon: "/assets/images/icon/service-icon3.png",
            bgClass: "bg3",
            color: "#fff3f3",
            link: "/service-details"
          },
          {
            title: "Social App Consulting",
            description: "Need direction on the best tech stack? Leverage our social app consulting services to guide development and maximize your product's potential.",
            icon: "/assets/images/icon/service-icon4.png",
            bgClass: "bg4",
            color: "#f6f0ff",
            link: "/service-details"
          },
          {
            title: "Social App Maintenance & Support",
            description: "Keep your app running flawlessly with regular updates, real-time bug fixes, and scalable performance monitoring for long-term success.",
            icon: "/assets/images/icon/service-icon5.png",
            bgClass: "bg5",
            color: "#fefbe5",
            link: "/service-details"
          },
          {
            title: "Social Web App Development",
            description: "Extend your presence with powerful web applications built for social interaction, admin control, content moderation, and cross-platform support.",
            icon: "/assets/images/icon/service-icon6.png",
            bgClass: "bg6",
            color: "#e7fcff",
            link: "/service-details"
          }
        ]
      }} />
      <OurSoultionBannner data={{
        heading:"Kickstart Your Social App Journey Today",
        desc:"Partner with us for innovative and reliable social media app development services tailored to your business.",
        img1:"/assets/images/solution/sm-1.png"
      }}/>
      <FeqSection/>
    </div>
  )
}
