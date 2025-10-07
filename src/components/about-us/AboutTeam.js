import SmallTitle from '@/Commen-components/SmallTitle'
import { teamData } from '@/data/AboutUs'
import Link from 'next/link'
import React from 'react'
import { FaPaperPlane, FaLinkedinIn, FaDiscord, FaFacebookF } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import Image from 'next/image'

export default function AboutTeam() {
    return (
        <section className="xl:px-40 lg:px-10 px-5 bg-sub-three py-10">
            <div className="container mx-auto px-4">
                <div className="mb-10 text-left wow  animate__animated  animate__fadeInDown">
                    <SmallTitle smText={"Our Team Members"} exClass={"text-[#731212] text-[1.2rem]"} />
                    <h2 className="text-[2.4rem] font-[500] xl:w-[60%]">
                        Meet with Our 60+ <span className="text-gray-500">Designers, Coders, and Strategists!</span>
                    </h2>
                </div>

                <Swiper
                    spaceBetween={24}
                    speed={500}
                    modules={[Pagination, Navigation, Scrollbar]}
                    navigation={{
                        nextEl: ".team-four__arrow-next",
                        prevEl: ".team-four__arrow-prev",
                    }}
                    scrollbar={{
                        el: ".team-four__swiper-scrollbar .swiper-scrollbar",
                        draggable: true,
                    }}
                    breakpoints={{
                        1200: { slidesPerView: 4 },
                        991: { slidesPerView: 3 },
                        575: { slidesPerView: 2 },
                        0: { slidesPerView: 1 },
                    }}
                    className="team-four__slider"
                >
                    {teamData.map((member,index) => (
                        <SwiperSlide key={index} className='wow  animate__animated  animate__fadeInUp' data-wow-delay={`${index*0.09}s`}>
                            <div className="swiper-about-team-main bg-white border border-gray-200 flex flex-col justify-center p-5 rounded-xl shadow-sm hover:shadow-lg duration-500 transition-all ">
                                <div className="relative w-full h-70 mb-4 overflow-hidden">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill loading="lazy"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                    <div className="absolute team-social-links  left-1/2 -translate-x-1/2 flex space-x-2 bg-white bg-opacity-80 rounded-full px-2 py-3 gap-4">
                                        <a href="#" className="font-drak hover:font-ex-dark normal-scale">
                                            <FaPaperPlane />
                                        </a>
                                        <a href="#" className="font-drak hover:font-ex-dark normal-scale">
                                            <FaLinkedinIn />
                                        </a>
                                        <a href="#" className="font-drak hover:font-ex-dark normal-scale">
                                            <FaDiscord />
                                        </a>
                                        <a href="#" className="font-drak hover:font-ex-dark normal-scale">
                                            <FaFacebookF />
                                        </a>
                                    </div>

                                </div>
                                <h5 className="mt-4 text-xl font-semibold">
                                    <Link href={`/team-details`} className="hover:underline transition">{member.name}</Link>
                                </h5>
                                <span className="text-gray-500">{member.position}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="mt-10">
                    <div className='flex justify-center'>
                        <div className="team-four__swiper-scrollbar w-[10%]">
                            <div className="relative">
                                <div className="swiper-scrollbar w-[10%]" />
                            </div>
                        </div>
                    </div>


                    <div className="flex justify-center items-center gap-4 mt-5">
                        <button className="team-four__arrow-prev cursor-pointer bg-black text-white hover:text-black rounded-full p-3 hover:bg-[#eee] transition active disable">
                            <FaArrowLeft className="w-5 h-5" />
                        </button>
                        <button className="team-four__arrow-next cursor-pointer bg-black text-white hover:text-black rounded-full p-3 hover:bg-[#eee] transition active">
                            <FaArrowRight className="w-5 h-5" />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}
