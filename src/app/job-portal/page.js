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
                heading: "Top Job Portal Development Company – Build Scalable, Smart & User-Centric Job Platforms",
                desc: "Want to create a robust, feature-loaded job portal website or mobile app? OnePixel Soft is a reliable job portal development company with expertise in custom employment portals for startups, recruitment firms, and corporations. Our experienced developers craft user-friendly, scalable, and mobile-supportive job portal apps that match recruiters and candidates perfectly. Be it sophisticated job search filters, resume upload facility, employer panel, or live notifications — we provide everything. From backend systems to UI/UX, we make sure your job portal site is secure, fast, and optimized for huge traffic. Let's revolutionize the way individuals get jobs and businesses employ — with intelligent tech solutions designed specifically for you."
            }} />
            <AboutSilder />
            <OurSolutionleftCard data={{
                heading: "Custom Job Portal Website Development Solutions By Top-Shelf Company",
                desc: ["Are You Considering Creating A Job Platform Similar To Indeed, Upwork, Or Others? Creating A High-Quality Recruitment App For Today's Job Market Will Drastically Change The Hiring Process. As The Population Increases, So Does The Pool Of Job Applicants. In This Ever-Changing Job Market, Our Recruitment Platforms Unite Job Seekers And Employers Effortlessly. Our Best-In-Class Online Job Search App Is Developed With The Competitive Market And Increased Demand In Mind, Providing Flexible, Innovative, And User-Friendly Job Portals.", "If You're Planning To Develop A Recruitment Website With An Exclusive Design, OnePixel Soft, A Top Job Portal Development Company, Is Here To Assist You In Turning Your Idea Into Reality With Scalable And Future-Proof Solutions."],
                img1: "/assets/images/solution/jp2.png"
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
                heading: "Personalized Job Portal Development Suited To Your Enterprise",
                desc: "We, at Onepixel Soft, offer custom job portal app development services tailored to streamline the recruitment process. Our easy-to-use platforms make it simple for recruiters to publish job posts and for applicants to apply in a matter of steps, thereby boosting user experience and productivity.",
                cards: [
                    {
                        id: 1,
                        icon: "/assets/images/icon/service-three-icon1.png",
                        title: "Custom Job Portal App Development",
                        desc:
                            "We develop customized job portal applications that meet your business’s recruitment demands. From intuitive UI/UX design to advanced features, we build and design a solution suitable for the job seeker and the employer."
                    },
                    {
                        id: 2,
                        icon: "/assets/images/icon/service-three-icon2.png",
                        title: "Recruitment Web Portal App Development",
                        desc:
                            "Our team is skilled in creating job portals on the internet that can provide an efficient experience with modern solutions and features that expand your business to new heights."
                    },
                    {
                        id: 3,
                        icon: "/assets/images/icon/service-three-icon3.png",
                        title: "Job Portal Design Services",
                        desc:
                            "We design visually appealing and user-friendly job portals that enhance visitor retention and provide an effective recruitment platform."
                    },
                    {
                        id: 4,
                        icon: "/assets/images/icon/service-three-icon4.png",
                        title: "Freelance Job Portal Development",
                        desc:
                            "Experience developing platforms that streamline the client and candidate work process and allow users to connect with freelance work opportunities in various industries."
                    },
                    {
                        id: 5,
                        icon: "/assets/images/icon/service-three-icon5.png",
                        title: "Recruitment Software Solutions",
                        desc:
                            "Our solutions feature in-built recruiting tools, automated hiring process, and precise matching to streamline the hiring process, making the right choice for recruiters."
                    },
                    {
                        id: 6,
                        icon: "/assets/images/icon/service-three-icon6.png",
                        title: "Data Integration & Migration Services",
                        desc:
                            "Migrate the data of job applicants and recruiters with secure and scalable systems. Ensure seamless data migration and help improve decision-making."
                    }
                ]
            }} />
            <OurAppSuccess appSuccessData={{
                heading: "Essential Features Of Our Job Portal App Solutions",
                cards: [
                    {
                        title: "Multiple Language Support",
                        description:
                            "Develop a solution that’s inclusive and accessible in a variety of languages. There’s no language limitation to make it simple to search for jobs in the local region and countries. With a multilingual option, you can build personalized segments from the USA or ensure that larger audiences can apply for local job applications and that it can match local users.",
                        icon: "/assets/images/icon/service-icon1.png",
                        bgClass: "bg1",
                        color: "#e6f8f0",
                        link: "/service-details"
                    },
                    {
                        title: "In-app Calling",
                        description:
                            "Sometimes, the candidates and recruiters aren’t comfortable sharing their personal contact information at first. Therefore, the first communication can be conducted through an in-app call option that simplifies the process.",
                        icon: "/assets/images/icon/service-icon2.png",
                        bgClass: "bg2",
                        color: "#e6f4fb",
                        link: "/service-details"
                    },
                    {
                        title: "Cloud Management",
                        description:
                            "The resumes and all the details for the application are kept in the cloud for secure and easy data access. This is an important feature as many may be applying if they’ve demonstrated interest in joining the company or a job post within the last few years.",
                        icon: "/assets/images/icon/service-icon3.png",
                        bgClass: "bg3",
                        color: "#f7f3fe",
                        link: "/service-details"
                    },
                    {
                        title: "Custom Templates",
                        description:
                            "The applicant can select an appropriate template from the available options or customize one. The templates ensure a structured job profile submission. This will reduce friction and allow only the interested ones to find the ones matching their actual needs.",
                        icon: "/assets/images/icon/service-icon4.png",
                        bgClass: "bg4",
                        color: "#fff2f2",
                        link: "/service-details"
                    },
                    {
                        title: "Referrals",
                        description:
                            "Earn referral points when there’s a common job description or a candidate’s profile. This is a great method for seeking your careers to share your application and getting greater responses.",
                        icon: "/assets/images/icon/service-icon5.png",
                        bgClass: "bg5",
                        color: "#fff7ed",
                        link: "/service-details"
                    },
                    {
                        title: "Social Sharing",
                        description:
                            "Sometimes, the referrals we provide to you include buttons for sharing via social media. Sharing the content your platform with others works as a value platform that allows them to connect with opportunities.",
                        icon: "/assets/images/icon/service-icon6.png",
                        bgClass: "bg6",
                        color: "#e9f7fb",
                        link: "/service-details"
                    }
                ]
            }
            } />
            <OurSoultionBannner data={{
                heading: "Ready to Revolutionize the Recruitment Process with Job Portal Solutions?",
                desc: "Contact us today to discuss your job portal app development needs and begin the first step toward unlocking unlimited opportunities for your company!",
                img1: "/assets/images/solution/jp1.png"
            }} />
            <FeqSection />


        </div>
    )
}
