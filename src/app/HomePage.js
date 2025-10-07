"use client"

import React, { Component } from 'react'
import HeroSection from "@/components/home/HeroSection";
import AboutInfo from "@/components/home/AboutInfo";
import BrandsSection from "@/components/home/BrandsSection";
import WorkProcess from "@/components/home/WorkProcess";
import QuickExplore from '@/components/home/QuickExplore';
import dynamic from 'next/dynamic';
import SuccessCard from '@/Commen-components/SuccessCard';
const WorkSection = dynamic(()=>import('@/components/home/WorkSection'),{srr:false})
const OurTestimonial = dynamic(()=>import('@/components/home/OurTestimonial'),{srr:false})
const BlogesSection = dynamic(()=>import('@/components/home/BlogesSection'),{srr:false})
export default function HomePage() {
    return (
        <>

            <HeroSection />
            <AboutInfo />
            <SuccessCard exclass={"bg-sub-three"}/>
            <BrandsSection />
            <WorkSection />
            <QuickExplore/>
            <WorkProcess />
            <OurTestimonial />
            <BlogesSection />
        </>)
}
