
import CommenHero from '@/Commen-components/CommenHero'
import React from 'react'
import PrivacyPolicy from '../../components/privacy-policy/PrivacyPolicy'
export default function page() {
    const teamBanner = {
        heading: "Privacy and Policy",
        slug: "/Privacy and Policy",
        des: "We will help a client's problems to develop the products they have with high quality Change the appearance."
    }
    return (
        <>
          <CommenHero data={teamBanner}/>
          <PrivacyPolicy/>
        </>
    )
}
