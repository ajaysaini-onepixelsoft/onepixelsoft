
import { getWorkSection } from "@/Api/Api";
import CommenHeading from "@/Commen-components/CommenHeading";
import { Loader } from "@/Commen-components/Lodding";
import Link from "next/link";
import React, {  useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";

export default function CaseProjects() {
  const [workData, setWorkData] = useState([]);
  const apiData =async()=>{
    const res = await getWorkSection();
    const data = Array.isArray(res) ? res : res.data || [];
    if(data){
        setWorkData(data)
    }
  }
  useEffect(()=>{
    apiData()
  },[])

  return (
<<<<<<< HEAD
    <div className="xl:px-40 lg:px-10 px-5 py-16">
=======
    <section className="xl:px-40 lg:px-10 px-5 py-16">
>>>>>>> 6347013 (update)
      <CommenHeading
        cmHeading={{
          title: "Real Projects, Real Results",
          desc: "Discover how our innovative technology solutions and strategic expertise have helped businesses overcome challenges, drive growth, and achieve lasting success.",
        }}
      />

      {workData.length === 0 ? (
        <Loader />
      ) : (
        workData.map(
          (item, index) =>
            item?.projects.length !== 0 && (
              <div className="work-data-main" key={index}>
                {/* Heading */}
                <div className="work-data-heading flex justify-between items-center text-black py-4">
                  <h3 className="text-3xl">{item.category_name}</h3>
                  <p>{item.category_description}</p>
                </div>

                {/* Swiper */}
                <div className="work-section-cards-main mt-6">
                  <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    speed={1000}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                      480: { slidesPerView: 1 },
                      768: { slidesPerView: 2 },
                      1024: { slidesPerView: 3 },
                      1280: { slidesPerView: 3 },
                    }}
                  >
                    {(item.projects || []).map((project, pIndex) => (
                      <SwiperSlide key={pIndex}>
                        <div className="work-section-card border border-gray-200 rounded-xl hover:scale-[1.02] transition-transform duration-300">
                          {/* Image */}
                          <div className="relative w-full h-[220px]">
                            <Image
                            
                              src="/assets/images/project/default-image.png"
                              alt={project.project_name || "Project"}
                              fill
                              sizes="100%"
                              className="object-cover rounded-t-xl"
                              loading="lazy"
                            />
                          </div>

                          {/* Content */}
                          <div className="text py-3 px-4">
                            <h4 className="text-[1.3rem] py-2 text-black">
                              {project.project_name}
                            </h4>
                            <ul className="flex gap-3 items-center text-black">
                              <li>UI/UX Design</li>
                              <li className="h-2 w-2 rounded-full bg-[#F4CA42]" />
                              <li>Development</li>
                              <li className="h-2 w-2 rounded-full bg-[#F4CA42]" />
                              <li>Creative Service</li>
                            </ul>
                            <Link
                              href="/contact"
                              className="about-button inline-flex items-center gap-2 my-4 text-[0.9rem] text-white px-4 py-2 rounded-full shadow transition bg-black hover:bg-gray-900"
                            >
                              view case
<<<<<<< HEAD
                              <span className="arrow ml-2 inline-flex gap-1">
                                <FaArrowRight className="text-white" />
                                <FaArrowRight className="text-white" />
                              </span>
=======
>>>>>>> 6347013 (update)
                            </Link>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            )
        )
      )}
<<<<<<< HEAD
    </div>
=======
    </section>
>>>>>>> 6347013 (update)
  );
}
