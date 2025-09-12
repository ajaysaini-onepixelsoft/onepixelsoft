"use client"

import CaseHero from '@/components/case-study/CaseHero'
import CaseProjects from '@/components/case-study/CaseProjects'
import ContactFrom from '@/components/contact/ContactFrom'
import React from 'react'

export default function CaseStudyPage() {
  return (
    <div>
        <CaseHero/>
        <CaseProjects/>
        <ContactFrom/>
    </div>
  )
}
