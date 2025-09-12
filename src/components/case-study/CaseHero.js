import Image from 'next/image'
import React from 'react'

export default function CaseHero() {
    return (
        <section className="wow  animate__animated  animate__fadeInDown">
            <div className="">
                <div className="relative">
                    {/* Background Image */}
                    <div className='relative h-80 w-full'>
                        <Image
                            src="/assets/images/case/about_page_background.webp"
                            alt="Case Study Banner" fill loading="lazy"
                            className="object-cover brightness-40"
                        />
                    </div>
                    {/* Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center px-5">
                        <a href="#" className="text-[#ccc] text-sm mb-2 hover:underline">
                            Home <span className="mx-1">/</span> Case Study
                        </a>
                        <h2 className="text-white text-3xl md:text-5xl  mb-4 text-center">
                            Success Stories That Inspire Growth
                        </h2>
                        <p className="text-[#ccc] text-center max-w-xl mx-auto">
                            Explore how we transform ideas into real-world digital success through innovative solutions and expert execution.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
