import React, { useEffect, useState } from "react";
import SmallTitle from "../../Commen-components/SmallTitle";
import { getWorkSection } from "@/Api/Api";
import HrRow from "../../Commen-components/HrRow";
import { CiCirclePlus } from "react-icons/ci";
import { RxDividerHorizontal } from "react-icons/rx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowRight } from "react-icons/fa6";
import { Loader } from "@/Commen-components/Lodding";
import RedArrowButton from "@/Commen-components/RedArrowButton";
import Link from "next/link";
import Image from "next/image";

export default function WorkSection() {
  const [workData, setWorkData] = useState([]);
  const [isActive, setIsActive] = useState(null);

    const WorkApi = async () => {
      const res = await getWorkSection();
      if(res){
          setWorkData(res);
      }
    };
    useEffect(()=>{
      WorkApi();
    },[])

  return (
    <section className="relative">
      <div className="xl:py-15 bg-[#FCF7FF]">
        <div className="work-heading flex items-center flex-col text-center xl:px-40 px-5 py-10 wow  animate__animated  animate__fadeInUp">
          <SmallTitle
            smText="Work and Portfolio"
            exClass="text-[#751212] text-md text-center"
          />
          <h2 className="xl:text-[3rem] text-[2rem] text-black text-center">
            Our Recent Works
          </h2>
          <p className="xl:text-[1.2rem] text-sm mt-2 lg:w-[50%] w-full leading-[1.5rem] font-dark font-[500]">
            We deliver creative design, web development, branding, and mobile app
            solutions that drive real business growth. Discover how OnePixel Soft
            helps companies and startups succeed with innovative digital services.
          </p>
        </div>

        <div className="open-information-work xl:px-40 md:px-5 px-0 text-black">
          <div>
            <ul>
              {workData?.length === 0 ? <Loader /> :
                workData?.map((data, index) => (
                  <li key={index} className="mb-4 wow  animate__animated  animate__fadeInUp" data-wow-delay={`${index * 0.09}s`}>
                    <HrRow />
                    <div className="py-4 px-5 flex justify-between items-center">
                      <div className="left gap-5 flex items-center">
                        <p>{index + 1}</p>
                        <h4>{data.category_name}</h4>
                      </div>
                      <div className="right gap-5 flex items-center">
                        <p>{data.category_description}</p>
                        <button
                          className="cursor-pointer text-3xl transition-all duration-500"
                          onClick={() =>
                            isActive === index ? setIsActive(null) : setIsActive(index)
                          }
                        >
                          {isActive === index ? (
                            <RxDividerHorizontal />
                          ) : (
                            <CiCirclePlus />
                          )}
                        </button>
                      </div>
                    </div>
                    {isActive === index && data.projects.length > 0 && (
                      <div
                        className={`overflow-hidden transition-all duration-500 ${isActive === index ? "block opacity-100" : "hidden opacity-0"
                          }`}
                      >
                        <div className="border-t border-gray-200 p-5">
                          <Swiper
                            spaceBetween={20}
                            speed={500}
                            modules={[Scrollbar, Autoplay]}
                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                            scrollbar={{ el: ".custom-scrollbar", draggable: true }}
                            pagination={{ clickable: true }}
                            centeredSlides={false}
                            className="swiper-wrapper"
                            breakpoints={{
                              1024: { slidesPerView: 1.5 },
                              768: { slidesPerView: 2 },
                              0: { slidesPerView: 1 },
                            }}
                          >
                            {data.projects.map((project, idx) => (
                              <SwiperSlide key={idx}>
                                <div
                                  className="single-work-item border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-500 list-none  h-full bg-white"
                                >
                                  <div className="lg:h-[300px] h-[200px] w-full relative">
                                    <Image src="/assets/images/project/default-image.png" fill sizes="100%" alt={project.project_name} 
                                      className=" relative object-cover rounded-t-lg" loading="lazy" />
                                  </div>
                                  <div className="p-4">
                                    <h5 className="text-xl py-2 font-semibold mb-2">
                                      {project.project_name}
                                    </h5>
                                    <div className="flex flex-wrap gap-2 justify-between items-center">
                                      <div className="text-gray-600 text-md w-100" dangerouslySetInnerHTML={{
                                        __html: project.about_project.slice(0, 200),
                                      }}
                                      />
                                        <RedArrowButton pathName={`/project-details/${idx + 1}`} data={"view full project"} />
                                    </div>
                                  </div>
                                </div>
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
