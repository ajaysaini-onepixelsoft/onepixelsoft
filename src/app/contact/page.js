import CommenHero from '@/Commen-components/CommenHero'
import OurLocation from '@/Commen-components/OurLocation'
import ContactFrom from '@/components/contact/ContactFrom'
import React from 'react'

export default function page() {
  return (
    <div>
        <CommenHero data={{
            slug:"Contact Us",
            heading:"Contact Us",
            des:"We will help a client's problems to develop the products they have with high quality Change the appearance",
        }}/>
        <OurLocation/>
        <ContactFrom  rotate={0}/>
    </div>
  )
}
