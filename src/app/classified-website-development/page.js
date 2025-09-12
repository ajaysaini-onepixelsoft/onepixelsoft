import AboutSilder from '@/components/about-us/AboutSilder'
import FeqSection from '@/components/our-services/FeqSection'
import OurServicePoints from '@/components/our-services/OurServicePoints'
import OurServicesSection from '@/components/our-services/OurServicesSection'
import OurWebsiteDevelopment from '@/components/our-services/OurWebsiteDevelopment'
import ServiceGetStart from '@/components/our-services/ServiceGetStart'
import React from 'react'

export default function page() {
  return (
    <div>
        <ServiceGetStart singleData={{
                            heading: "Classified Website Development Services ",
                heading3: "(Reach More with Strong Classified Sites)",
                slug: "classified-website-development",
                desc: `Classified sites give enterprises a budget-friendly way to sell goods and services on the Internet, increasing digital marketing presence. At Onepixel Soft, we are professionals at affordable classified site development for clients worldwide.`,
                desc1: 'Our own designed classified websites give companies the ability to reach out further online and engage with a wider audience, much more effectively than older forms of advertising such as newspapers and magazines. Through the use of internet technology, our classified websites generate activity and offer a user-friendly experience that draws in more visitors, allowing companies to thrive in the online marketplace.'
        }}/>
        <AboutSilder/>
        <OurServicePoints serviceData={{
                            heading1: "Features and Advantages of a Classified Website:",
                slug: "classified-website-development",
                heading2: "Buyer (the one who buys the products)",
                heading3: "Seller (the one who sells the products)",
                poits1: [`
                    SEO Features with Advanced Catalog Management:Tailor your site to rank higher on search engines, which will drive more organic traffic. Let advanced catalog management facilitate easy sorting and filtering of products and services.`,
                    `Employs Latest Technologies and Platforms: Developed with contemporary technologies such as PHP, Java, and WordPress to provide flexibility, performance, and scalability.`,
                    `Exceptional Promotion on Top-Ranked Sites: Get visibility by promoting ads on top-ranked sites, enhancing visibility and traffic.`,
                    `High Revenue Generation and Visibility: Classified websites are a great place to monetize with ad placements and premium features contributing to revenue.`
                ],
                poits2: [
                    `Multiple Registrations:Multiple Logins: Enable users to log in using various methods like email, Facebook, or Google, making it easier for them to access your platform and encouraging frequent usage. This functionality greatly enhances the user experience and drives engagement.`,
                    `Advanced Search and Filter: Allow buyers to find products easily with advanced search and filter options. Users can narrow down their choices based on price, distance, date, and duration, making browsing more efficient and hassle-free.`,
                    `Multiple Product Categories: Organize similar products into multiple categories such as cars, home, fashion, and more. This feature helps users explore products with precision, ensuring they find exactly what they’re looking for.`,
                    `Message carrier: Chat with Resellers: The message carrier functionality allows users to easily communicate with resellers. This feature fosters better interaction between buyers and sellers, enabling seamless negotiations and agreements. It’s an essential tool for enhancing user engagement and ensuring a friendly shopping experience.`
                ],
                poits3: [
                    `Rating and Reviews: Increase Sales & Improve Quality: Ratings and reviews from buyers can significantly boost a seller's credibility and sales. Positive feedback helps build trust and attract more customers. Sellers can also improve their products based on reviews, enhancing their reputation and the quality of their offerings.`,
                    `Product Category: Accurate Product Organization: Sellers can categorize their products into relevant groups, such as cars, home, fashion, and more, making it easier for buyers to find what they’re looking for. Proper categorization ensures products are easily discoverable, increasing the likelihood of a sale.`,
                    `Message Support: Post-Chat Communication: After a buyer shows interest through a chat, the seller can efficiently process their orders and engage with customers. This feature allows for better communication, providing a user-friendly platform for sellers to manage inquiries, track progress, and improve customer relationships.`,
                    `Verified Users: Buyer Verification: Sellers can verify buyer profiles using trusted services like Gmail or Facebook. This ensures that all buyers are legitimate, leading to healthier transactions and reducing the risk of fraudulent activities. Verified profiles enhance the security and trustworthiness of the platform, benefiting both sellers and buyers.`
                ]
        }}/>
        <OurWebsiteDevelopment/>
        <OurServicesSection/>
        <FeqSection/>
    </div>
  )
}
