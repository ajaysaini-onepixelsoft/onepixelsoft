"use client";

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

export default function AboutBookArea() {
    return (
        <section className="relative overflow-hidden mt-2 wow animate__animated animate__fadeInDown">
            <div className="relative flex flex-col items-center justify-center">
                <div className="bg-gradient-to-bl from-[#731212] via-black to-black rounded-t-xl shadow-lg px-8 py-12 xl:max-w-5xl w-full relative">

                    <div className="absolute top-20 left-20 w-10 h-10">
                        <Image src="/assets/images/shape/book-star.png" alt="shape" fill sizes='100%' loading="lazy" className="object-contain"/>
                    </div>
                    <div className="absolute top-20 right-20 w-10 h-10">
                        <Image src="/assets/images/shape/book-star.png" alt="shape" fill sizes='100%' loading="lazy" className="object-contain"/>
                    </div>
                    <div className="absolute bottom-[18%] left-[25%] w-10 h-10">
                        <Image src="/assets/images/shape/book-btn-left.png" alt="shape" fill sizes='100%' loading="lazy" className="object-contain"/>
                    </div>
                    <div className="absolute bottom-[20%] right-[25%] w-10 h-10">
                        <Image src="/assets/images/shape/book-btn-right.png" alt="shape" fill sizes='100%' loading="lazy" className="object-contain"/>
                    </div>

                    <div className='main-container flex flex-col items-center'>
                        <h2 className="text-3xl md:text-4xl text-center text-white">
                            {"Let's Do Something"} {' '}
                            <span className="relative text-primary-600">
                                Amazing
                                <span className="absolute left-1/2 -bottom-1 w-24 h-2 -translate-x-1/2">
                                    <Image src="/assets/images/shape/title-line-book.png" alt="shape" fill sizes='100%' loading="lazy" className="object-contain"/>
                                </span>
                            </span>{' '}
                            Together!
                        </h2>
                        <p className="mt-6 mb-8 text-center text-[#aaa]">
                            Ready to elevate your online presence? Get in touch with us today
                            for personalized <br /> solutions tailored to your business needs.
                        </p>

                        <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-8">
                            <li className="flex items-center text-[#aaa] font-medium">
                                <svg className="mr-2" width={18} height={18} viewBox="0 0 18 18" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M17.1221 6.88023L16.6812 6.43922C16.4002 6.15822 16.2421 5.77622 16.2421 5.37822V4.75722C16.2421 3.10122 14.9002 1.75923 13.2442 1.75923H12.6232C12.2252 1.75923 11.8442 1.60124 11.5622 1.32024L11.1212 0.879227C9.95017 -0.291773 8.05218 -0.291773 6.88118 0.879227L6.44014 1.32024C6.15914 1.60124 5.77723 1.75923 5.37923 1.75923H4.75826C3.10225 1.75923 1.76021 3.10122 1.76021 4.75722V5.37822C1.76021 5.77622 1.60224 6.15722 1.32124 6.43922L0.880203 6.88023C-0.290797 8.05123 -0.290797 9.94922 0.880203 11.1202L1.32124 11.5612C1.60224 11.8422 1.76021 12.2242 1.76021 12.6222V13.2432C1.76021 14.8992 3.10225 16.2412 4.75826 16.2412H5.37923C5.77723 16.2412 6.15814 16.3992 6.44014 16.6802L6.88118 17.1212C8.05218 18.2922 9.95017 18.2922 11.1212 17.1212L11.5622 16.6802C11.8432 16.3992 12.2252 16.2412 12.6232 16.2412H13.2442C14.9002 16.2412 16.2421 14.8992 16.2421 13.2432V12.6222C16.2421 12.2242 16.4002 11.8432 16.6812 11.5612L17.1221 11.1202C18.2931 9.94922 18.2931 8.05123 17.1221 6.88023Z" fill="currentColor" fillOpacity="0.7" />
                                </svg>
                                <span className="font-semibold text-primary-600">60</span>+ Team Members
                            </li>
                            <li className="flex items-center text-[#aaa] font-medium">
                                Award Winning Agency
                            </li>
                            <li className="flex items-center text-[#aaa] font-medium">
                                Affordable Pricing Plan
                            </li>
                        </ul>

                        <Link href="/contact" className="about-button inline-flex items-center gap-2 hover:bg-primary-700 text-black px-6 py-3 rounded-full shadow transition bg-white">
                            Book a Free Consultation
                            <span className="arrow ml-2 inline-block whitespace-nowrap gap-1 w-5 overflow-hidden">
                                <FaArrowRight className="faArrow text-black inline-block" />
                                <FaArrowRight className="faArrow ml-2 text-black inline-block" />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
