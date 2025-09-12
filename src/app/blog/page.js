import CommenHero from '@/Commen-components/CommenHero'
import BlogesSection from '@/components/home/BlogesSection'
import React from 'react'

export default function page() {
  return (
    <div>
        <CommenHero data={{
            slug:"Blog and News",
            heading:"Blog and News 1",
            des:"We will help a client's problems to develop the products they have with high quality Change the appearance."
        }}/>
        <BlogesSection/>
    </div>
  )
}
