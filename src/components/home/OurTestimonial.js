import { OurTestimonialdata } from "@/data/OurTestimonial";
import React from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa6";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function OurTestimonial() {
  return (
    <div className="relative xl:px-40 lg:px-10 px-5 xl:py-20 py-10 bg-gray-50 wow animate__animated animate__fadeInUp">
      <div className="flex flex-col xl:flex-row gap-12 xl:gap-20">
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold  text-gray-900 mb-2">
            Our Testimonial
          </h1>
          <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-6">
            A Symphony of Satisfied Voices!
          </h3>

          <div>
            <p className="text-base md:text-lg font-medium text-gray-700 mb-2">
              Our Awards:
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Image
                src="/assets/images/icon/certificate2.png"
                alt="icon"
                width={80}
                height={56} loading="lazy"
                className="object-contain"
              />
              <Image
                src="/assets/images/icon/certificate1.svg"
                alt="icon"
                width={80}
                height={56} loading="lazy"
                className="object-contain"
              />
              <Image
                src="/assets/images/icon/goodfirms.png"
                alt="icon"
                width={80} loading="lazy"
                height={56}
                className="object-contain"
              />
              <Image
                src="/assets/images/icon/MyBadge.png"
                alt="icon"
                width={80}
                height={56} loading="lazy"
                className="object-contain"
              />
            </div>
            <p className="text-gray-600 text-sm md:text-base">
              Embark on an inspiring journey through the harmonious echoes of
              client satisfaction.
            </p>
          </div>
        </div>

        <div className="flex-1 w-full max-w-full lg:max-w-[500px] xl:mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <Swiper
              modules={[Pagination, Navigation]}
              loop
              spaceBetween={20}
              speed={400}
              pagination={{ el: ".testimonial__dot", type: "fraction" }}
              navigation={{
                nextEl: ".testimonial__arry-next",
                prevEl: ".testimonial__arry-prev",
              }}
            >
              {OurTestimonialdata.map((v, i) => (
                <SwiperSlide key={i}>
                  <div className="testimonial__item flex flex-col h-full">
                    <div className="flex gap-1 mb-2 text-yellow-400">
                      {Array.from({ length: v.stars }).map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <Image
                        src="/assets/images/icon/svgviewer-png-output (5).png"
                        alt="quote"
                        width={32}
                        height={32} loading="lazy"
                        className="object-contain"
                      />
                      <h3 className="text-base md:text-lg font-semibold text-gray-800 break-words">
                        {v.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 text-sm md:text-base mb-4 break-words">
                      <strong className="text-blue-600 font-semibold">
                        Onepixel Soft
                      </strong>{" "}
                      {v.description}
                      <Image
                        src="/assets/images/icon/svgviewer-png-output (6).png"
                        alt="quote-end"
                        width={20}
                        height={20} loading="lazy"
                        className="inline-block ml-2 object-contain align-middle"
                      />
                    </p>

                    <div className="border-t pt-4 mt-4 flex items-center gap-3">
                      <Image
                        src={v.company.image}
                        alt={v.company.name}
                        width={48}
                        height={48} loading="lazy"
                        className="rounded-full object-cover"
                        onError={(e) =>
                          (e.currentTarget.src = "/assets/images/default-user.png")
                        }
                      />
                      <div>
                        <h5 className="font-semibold text-gray-900 text-sm md:text-base">
                          {v.company.name}
                        </h5>
                        <span className="text-gray-500 text-xs md:text-sm">
                          {v.company.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex items-center gap-4 mt-6 justify-center">
              <button className="testimonial__arry-prev bg-blue-200 hover:bg-blue-500 hover:text-white transition-colors p-2 rounded-full active disable">
                <FaArrowLeft />
              </button>
              <button className="testimonial__arry-next bg-blue-500 text-white hover:bg-blue-600 transition-colors p-2 rounded-full active">
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
