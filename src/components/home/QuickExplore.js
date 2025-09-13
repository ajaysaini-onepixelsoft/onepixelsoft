
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

export default function QuickExplore() {
    return (
<<<<<<< HEAD
        <div className="px-5 lg:px-10 xl:px-40 py-10 flex relative items-center justify-center gap-10 lg:flex-row flex-col">
=======
        <section className="px-5 lg:px-10 xl:px-40 py-10 flex relative items-center justify-center gap-10 lg:flex-row flex-col">
>>>>>>> 6347013 (update)
            {/* Left Text Section */}
            <div className="left-container-for-text basis-1/3 lg:text-left text-center">
                <h3 className="text-2xl font-semibold text-black mb-3">
                    Quick Explore Our Services
                </h3>
                <p className="font-dark leading-relaxed mb-5">
                    Discover the range of digital solutions we provide — from creating dynamic
                    and user-friendly websites to mobile development, branding, and online
                    marketing. Our services are designed to help businesses grow and stay
                    ahead in today’s digital market.
                </p>
                <Link
                    href="/blog"
                    className="inline-block px-6 py-2 bg-[#731212] font-light font-medium rounded-xl shadow-md hover:bg-[#5a0f0f] transition-all duration-300" alt=""
                >
                    Explore Now
                </Link>
            </div>

            {/* Arrow Image */}
             <div className="image-arrow  left-1/2 lg:block hidden w-[300px] h-[288px] absolute">
                <Image
                    src="/assets/images/shape/imgi_146_arrows-group.svg"
                    alt="Arrow Shape" loading="lazy"
                    fill sizes="100%" className="object-contain"
                />
            </div>

            {/* Center Swiper */}
            <div className="center-swiper basis-1/3 justify-center flex relative">

                <div className="w-30 h-30 rounded-full flex justify-center items-center bg-black text-white border border-white border-5 shadow-lg relative">
                    <div className="bg-[#FCF7FF] rounded-full h-30 w-30 absolute -z-1 animation-scale"></div>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 3000 }}
                        modules={[Autoplay]}
                        className="w-full flex justify-center items-center h-full "
                    >
                        <SwiperSlide className="p-6 lg:flex-row flex-col">
                            <Image  src="/assets/images/icon/link (1).png" width={128} height={128} loading="lazy" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="p-6 lg:flex-row flex-col">
                            <Image  src="/assets/images/icon/web-design.png" width={128} height={128} loading="lazy" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="p-6 lg:flex-row flex-col">
                            <Image  src="/assets/images/icon/social-media.png" width={128} height={128} loading="lazy" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="p-6 lg:flex-row flex-col">
                            <Image  src="/assets/images/icon/ecommerce.png" width={128} height={128} loading="lazy" alt="" />
                        </SwiperSlide>

                        <SwiperSlide className="p-6 lg:flex-row flex-col">
                            <Image  src="/assets/images/icon/success.png" width={128} height={128} loading="lazy" alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            {/* Right Quick Links */}
            <div className="quick-link basis-1/3 relative">
                <ul className="lg:space-y-4 flex lg:flex-col flex-row flex-wrap gap-2 justify-center lg:justify-start">
                    <li className="bg-white rounded-xl px-5 py-2 border border-gray-300 w-fit transition-transform duration-300 hover:translate-x-[5px]  shadow-sm lg:ml-[80px]">
                        <Link href={"/e-commerce"}>E-Commerce Website Development</Link>
                    </li>
                    <li className="bg-white rounded-xl px-5 py-2 border border-gray-300 w-fit transition-transform duration-300 hover:translate-x-[5px]  shadow-sm lg:ml-[160px]">
                        <Link href={"/logo-design"}>Logo Design</Link>
                    </li>
<<<<<<< HEAD
                    <li className="bg-white rounded-xl px-5 py-2 border border-gray-300 w-fit transition-transform duration-300 hover:translate-x-[5px]  shadow-sm lg:ml-[120px]">
=======
                    <li className="bg-white rounded-xl px-5 py-2 border border-gray-300 w-fit transition-transform duration-300 hover:translate-x-[5px]  shadow-sm lg:ml-[10px]">
>>>>>>> 6347013 (update)
                        <Link href={"/dynamic-web-development"}>
                            Dynamic Website Development
                        </Link>
                    </li>
                    <li className="bg-white rounded-xl px-5 py-2 border border-gray-300 w-fit transition-transform duration-300 hover:translate-x-[5px]  shadow-sm lg:ml-[80px]">
                        <Link href={"/android-app-development"}>
                            Android Web Development
                        </Link>
                    </li>
                    <li className="bg-white rounded-xl px-5 py-2 border border-gray-300 w-fit transition-transform duration-300 hover:translate-x-[5px]  shadow-sm lg:ml-[120px]">
                        <Link href={"/seo-smo-service-provider"}>
                            Digital Marketing Services
                        </Link>
                    </li>
                </ul>
            </div>
<<<<<<< HEAD
        </div>
=======
        </section>
>>>>>>> 6347013 (update)
    );
}
