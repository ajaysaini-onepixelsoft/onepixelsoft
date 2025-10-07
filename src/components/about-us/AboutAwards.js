
import SmallTitle from '@/Commen-components/SmallTitle'
import React from 'react'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { testimonialsData } from '@/data/AboutUs'
import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import Image from 'next/image'

export default function AboutAwards() {
    return (
        <section className="xl:px-40 lg:px-10 px-5 pt-10 relative bg-white">

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 wow animate__animated animate__fadeInDown">
                <div className="md:w-1/2 w-full mb-6 md:mb-0">
                    <SmallTitle smText="Voices of Victory" exClass="text-[#731212] text-lg md:text-xl font-medium" />
                    <h2 className="text-3xl md:text-4xl mt-2 text-gray-900">Awards & Testimonials</h2>
                </div>
                <div className="md:w-1/2 w-full">
                    <p className="text-base md:text-lg text-gray-700 md:w-4/5">
                        A satisfied client is the best indicator of collaboration success and approach to a project.
                    </p>
                </div>
            </div>

            {/* Stats + Brands */}
            <div className="my-10 flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-center wow animate__animated animate__fadeInDown">
                <div className="flex gap-6 items-center justify-start w-full">
                    <div className="flex flex-col items-center px-8 py-6 bg-gray-50 rounded-xl shadow-md">
                        <h3 className="text-4xl text-black">10+</h3>
                        <span className="text-base text-gray-700 mt-2">verified reviews on Clutch</span>
                    </div>
                    <div className="hidden md:block w-px h-14 bg-gray-300" />
                    <div className="flex flex-col items-center px-8 py-6 bg-gray-50 rounded-xl shadow-md">
                        <h3 className="text-4xl text-black">5+</h3>
                        <span className="text-base text-gray-700 mt-2">Average rating on Clutch</span>
                    </div>
                </div>

                {/* Brands */}
                <div className="flex gap-4 flex-wrap md:mt-0 w-full justify-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="relative w-24 h-12 md:w-28 md:h-24">
                            <Image
                                src={`/assets/images/icon/testimonial-four-brand${i + 1}.png`}
                                alt={`brand ${i + 1}`}
                                fill loading="lazy"
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Slider Section */}
            <div className="card-container-main">
                <div className="flex flex-col lg:flex-row gap-8 lg:h-[400px] h-full">

                    {/* Left Card */}
                    <div className="basis-[40%] h-full">
                        <div className="relative bg-gradient-to-tl from-[#731212] to-[#ff3d2e] rounded-2xl shadow-lg p-8 flex flex-col items-center h-full overflow-hidden wow animate__animated animate__fadeInUp">
                            
                            {/* Background image */}
                            <div className="absolute top-0 left-0 w-full h-full rounded-2xl">
                                <Image
                                    src="/assets/images/bg/testimonia-four-card-bg.png"
                                    alt="background"
                                    fill loading="lazy"
                                    className="object-cover"
                                />
                            </div>

                            {/* Logo + Stars */}
                                <div className="relative mt-10 flex flex-col items-center z-10">
                                    <div className="relative w-24 h-24">
                                        <Image
                                            src="/assets/images/testimonial/testimonial-four-logo.png"
                                            alt="icon"
                                            fill loading="lazy"
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="flex justify-center items-center gap-1 mt-2">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className='text-white' />
                                        ))}
                                    </div>
                                </div>

                                <a
                                    href="#"
                                    className="about-button second animate__fadeIn hover:animate__shakeX wow animate__animated animate__animated_shakeX mt-8 inline-flex items-center cursor-pointer px-6 py-2 bg-white text-black font-[500] rounded-full shadow hover:bg-gray-100 transition duration-500 z-10"
                                >
                                    Go to Clutch
                                    <span className="arrow ml-2 w-5 whitespace-nowrap">
                                        <FaArrowRight className="text-black faArrow inline-block" />
                                        <FaArrowRight className="text-black faArrow inline-block ml-1" />
                                    </span>
                                </a>

                                <span className="mt-6 flex items-center gap-2 text-lg text-white font-medium z-10">
                                    <div className="relative w-6 h-6">
                                        <Image src='/assets/images/logo/svgviewer-png-output (8).png' alt="logo" fill sizes='100%' className="object-contain" loading="lazy"/>
                                    </div>
                                    10+ reviews
                                </span>
                        </div>
                    </div>

                    {/* Right Swiper */}
                    <div className="lg:w-2/3 w-full basis-[60%] h-full ">
                        <Swiper
                            spaceBetween={24}
                            speed={600}
                            modules={[Pagination, Navigation, Scrollbar]}
                            slidesPerView={1}
                            breakpoints={{
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 2 },
                            }}
                            onBeforeInit={(swiper) => {
                                swiper.params.navigation.prevEl = ".testimonial-four__arry-prev";
                                swiper.params.navigation.nextEl = ".testimonial-four__arry-next";
                                swiper.params.scrollbar.el = ".testimonial-four__scrollbar";
                            }}
                            navigation={{
                                prevEl: ".testimonial-four__arry-prev",
                                nextEl: ".testimonial-four__arry-next",
                            }}
                            scrollbar={{
                                el: ".testimonial-four__scrollbar",
                                draggable: true,
                            }}
                            className="testimonial-four__slider h-full"
                        >
                            {testimonialsData.map((testimonial, index) => (
                                <SwiperSlide key={index} className='wow animate__animated animate__fadeInUp' data-wow-delay={`${index * 0.09}s`}>
                                    <div className="border border-gray-200 p-5 hover:shadow-lg rounded-xl shadow-sm lg:h-[400px] h-full bg-white">
                                        
                                        {/* Testimonial image */}
                                        <div className="relative w-20 h-20 mb-4 rounded-full">
                                            <Image
                                                src={testimonial.image}
                                                alt="testimonial"
                                                fill loading="lazy"
                                                className="object-cover rounded-full"
                                            />
                                        </div>

                                        <div className="flex items-center gap-2 mb-6">
                                            <div className="relative w-6 h-6">
                                                <Image src='/assets/images/logo/svgviewer-png-output (7).png' fill sizes='100%' alt='' className="object-contain" loading="lazy"/>
                                            </div>
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <FaStar className='text-yellow-500' key={i} />
                                            ))}
                                            <span className="font-semibold text-lg text-[#ff3d2e]">{testimonial.rating}</span>
                                        </div>
                                        <p className="text-gray-700 text-md text-left mb-4">{testimonial.text}</p>
                                        <h5 className="mt-2 font-semibold text-gray-900">{testimonial.name}</h5>
                                        <span className="text-sm text-gray-500">{testimonial.position}</span>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                {/* Scrollbar + Arrows */}
                <div className="mt-10 z-10 relative">
                    <div className='flex justify-center'>
                        <div className="testimonial-four__scrollbar w-[10%] h-1 bg-gray-200 rounded-full" />
                    </div>

                    <div className="flex justify-center items-center gap-4 mt-5">
                        <button className="testimonial-four__arry-prev bg-black text-white hover:text-black rounded-full p-3 hover:bg-[#eee] transition active disable cursor-pointer">
                            <FaArrowLeft className="w-5 h-5" />
                        </button>
                        <button className="testimonial-four__arry-next bg-black text-white hover:text-black rounded-full p-3 hover:bg-[#eee] transition active cursor-pointer">
                            <FaArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
