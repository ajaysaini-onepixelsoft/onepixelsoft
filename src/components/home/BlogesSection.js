"use client";

import React, { useEffect, useState } from "react";
import { getBloges } from "@/Api/Api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Loader() {
  return (
    <div className="flex justify-center items-center h-[250px]">
      <div className="loader rounded-full border-4 border-t-4 border-gray-200 border-t-blue-500 w-10 h-10 animate-spin"></div>
    </div>
  );
}

export default function BlogesSection() {
  const [bloges, setBloges] = useState([]);

  const fetchBlogs = async () => {
    const res = await getBloges();
    setBloges(res || []);
  }
  useEffect(()=>{
    fetchBlogs();
  },[])

  return (
<<<<<<< HEAD
    <div className="relative xl:px-40 lg:px-10 px-5 xl:py-20 mt-10">
=======
    <section className="relative xl:px-40 lg:px-10 px-5 xl:py-20 mt-10">
>>>>>>> 6347013 (update)
      <div className="flex flex-col lg:flex-row md:items-center md:justify-between lg:mb-20 md:mb-10 mb-5">
        <h2 className="font-medium text-3xl md:text-4xl text-gray-900 mb-4 md:mb-0 tracking-tight">
          Our Latest Blog
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          Delve into real-world examples where our Technology <br className="hidden md:block" />
          Solutions, Consulting and Strategy
        </p>
      </div>

      {bloges.length === 0 ? (
        <Loader />
      ) : (
        <Swiper
          modules={[Navigation, Pagination]}
          loop={bloges.length > 3}
          spaceBetween={24}
          navigation={{
            nextEl: ".blog__arry-next",
            prevEl: ".blog__arry-prev",
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            1200: { slidesPerView: 3 },
            992: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            525: { slidesPerView: 1 },
          }}
          className="!pb-10"
        >
          {bloges.map((post, index) => (
            <SwiperSlide key={index}>
              <div className="blog__item bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full transition-transform hover:scale-[1.02] duration-300">
                {/* Image */}
                <div className="blog__image relative w-full h-[250px] overflow-hidden">
                  <Link href="/">
                    <Image
                      src="/assets/images/blog/1744806283.jpg"
                      alt={post.blog_name || "Blog"}
                      fill
                      sizes="100%"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </Link>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col p-5">
                  <h4 className="mt-2 mb-4 text-lg font-semibold text-gray-800">
                    <Link href="/" className="hover:text-primary transition-colors">
                      {post.blog_name}
                    </Link>
                  </h4>
                  <div className="mt-auto text-black">
                    <Link href={`/blog-details/${post.blog_name}`} className="inline-flex items-center text-primary hover:underline font-medium">
                      Read More <BsArrowRight className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Navigation Arrows */}
      <div className="blog__arry-prev absolute top-1/2 xl:left-10 lg:left-2 z-10 cursor-pointer hidden lg:block">◀</div>
      <div className="blog__arry-next absolute top-1/2 xl:right-20 lg:right-2 z-10 cursor-pointer hidden lg:block">▶</div>
<<<<<<< HEAD
    </div>
=======
    </section>
>>>>>>> 6347013 (update)
  );
}
