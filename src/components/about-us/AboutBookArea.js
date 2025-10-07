"use client";

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsPersonWorkspace } from 'react-icons/bs';
import { FaArrowRight, FaRegBuilding } from 'react-icons/fa6'
import { IoMdHappy } from "react-icons/io";
import { IoSchoolSharp } from "react-icons/io5";
import { MdRateReview } from 'react-icons/md';

export default function AboutBookArea() {
    return (
        <section className="relative overflow-hidden mt-2 wow animate__animated animate__fadeInDown">
            <div className="relative flex flex-col items-center justify-center">
                <div className="bg-gradient-to-tr from-[#731212]  to-black rounded-t-xl shadow-lg px-8 py-12 xl:max-w-5xl w-full relative">

                    <div className="absolute top-20 left-20 w-10 h-10">
                        <Image src="/assets/images/shape/book-star.png" alt="shape" fill sizes='100%' loading="lazy" className="object-contain" />
                    </div>
                    <div className="absolute top-20 right-20 w-10 h-10">
                        <Image src="/assets/images/shape/book-star.png" alt="shape" fill sizes='100%' loading="lazy" className="object-contain" />
                    </div>
                    <div className="absolute bottom-[18%] left-[25%] w-10 h-10">
                        <Image src="/assets/images/shape/book-btn-left.png" alt="shape" fill sizes='100%' loading="lazy" className="object-contain" />
                    </div>
                    <div className="absolute bottom-[20%] right-[25%] w-10 h-10">
                        <Image src="/assets/images/shape/book-btn-right.png" alt="shape" fill sizes='100%' loading="lazy" className="object-contain" />
                    </div>

                    <div className='main-container flex flex-col items-center'>
                        <h2 className="text-3xl md:text-4xl text-center text-white">
                            {"Let's Do Something"} {' '}
                            <span className="relative text-primary-600">
                                Amazing
                                <span className="absolute left-1/2 -bottom-1 w-24 h-2 -translate-x-1/2">
                                    <Image src="/assets/images/shape/title-line-book.png" alt="shape" fill sizes='100%' loading="lazy" className="object-contain" />
                                </span>
                            </span>{' '}
                            Together!
                        </h2>
                        <p className="mt-6 mb-8 text-center text-[#aaa]">
                            Ready to elevate your online presence? Get in touch with us today
                            for personalized <br /> solutions tailored to your business needs.
                        </p>

                        <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-8">
                            <li>
                                <Link href="/leadership" className='flex items-center text-[#aaa] font-medium gap-2 hover:text-white hover:underline'>
                                    <BsPersonWorkspace />
                                    60+ Team Members
                                </Link>
                            </li>
                            <li>
                                <Link href="/client-reviews" className='flex items-center text-[#aaa] font-medium gap-2 hover:text-white hover:underline'>
                                    <MdRateReview />
                                    client reviews
                                </Link>
                            </li>
                            <li>
                                <Link href="/case-study" className='flex items-center text-[#aaa] font-medium gap-2 hover:text-white hover:underline'>
                                    <IoMdHappy />
                                    Success Stories
                                </Link>

                            </li>
                            <li>
                                <Link href="/career" className='flex items-center text-[#aaa] font-medium gap-2 hover:text-white hover:underline'>
                                    <IoSchoolSharp />
                                    career
                                </Link>

                            </li>
                        </ul>

                        <Link href="/contact" className="about-button second inline-flex items-center gap-2 hover:bg-primary-700 text-black px-6 py-3 rounded-full shadow transition bg-white animate__animated_shakeX">
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
