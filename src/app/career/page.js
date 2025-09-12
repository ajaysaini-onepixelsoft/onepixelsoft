import CommenHero from '@/Commen-components/CommenHero'
import OurLocation from '@/Commen-components/OurLocation'
import ContactFrom from '@/components/contact/ContactFrom'
import React from 'react'


  export const metadata = {
  title: "Careers at OnePixelSoft | Join Our Web & Tech Team",
  description: "Explore exciting career opportunities at OnePixelSoft. Join our innovative web development, digital marketing, and design teams. Apply today for a rewarding career!",
  keywords: ["web design", "digital marketing", "Jaipur"],
  authors: [{ name: "OnePixel Soft" }],
  robots: "index, follow",
  applicationName: "OnePixelSoft",
  creator: "OnePixelSoft",
  publisher: "OnePixelSoft",
  openGraph: {
    title: "OG Title",
    description: "OG Description",
    url: "https://onepixelsoft.com",
    siteName: "OnePixelSoft",
    images: [
      {
        url: "https://onepixelsoft.com/images/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Twitter Title",
    description: "Twitter Description",
    creator: "@OnePixelSoft",
    images: ["https://onepixelsoft.com/images/logo.png"],
  },
};

export default function career() {

  return (
    <div>
        <CommenHero data={{
            slug:"Career",
            heading:"Career",
            des:"We will help a client's problems to develop the products they have with high quality Change the appearance.",
        }}/>
        <OurLocation/>
        <ContactFrom/>
    </div>
  )
}
