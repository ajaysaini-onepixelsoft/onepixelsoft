import CommenHero from '@/Commen-components/CommenHero'
import TermsConditionsMain from '@/components/terms-conditions/TermsConditionsMain'
import React from 'react'

export default function TermsConditions() {
  return (
    <div>
        <CommenHero 
           data={{
            slug:"Term's and Condition",
            heading:"Term's and Condition",
            des:"We will help a client's problems to develop the products they have with high quality Change the appearance."
           }}
        />
        <TermsConditionsMain/>
    </div>
  )
}
