import { OurServicesData } from '@/data/OurServicesData';
import React from 'react';
import OurServiceFrom from './OurServiceFrom';
import RedArrowButton from '@/Commen-components/RedArrowButton';

export default function ServiceGetStart({ singleData }) {
  return (
    <section className="relative xl:px-40 lg:px-20 px-5 py-16 bg-sub-three">
      <div className="flex flex-col md:flex-row lg:gap-5 gap-5 items-start wow animate__animated animate__fadeInDown">
        
        {/* Left Content */}
        <div className="flex flex-col gap-6 basis-full lg:basis-[50%] bg-white rounded-2xl shadow-lg p-6 lg:p-10 hover:shadow-xl transition duration-300">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            {singleData?.heading}
          </h1>

          {singleData?.heading3 && (
            <h5 className="text-lg md:text-xl text-[#731212] font-semibold tracking-wide">
              {singleData?.heading3}
            </h5>
          )}

          <p className="text-gray-700 leading-relaxed">{singleData?.desc}</p>

          {singleData?.desc1 && (
            <p className="text-gray-700 leading-relaxed">{singleData.desc1}</p>
          )}

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap pt-4">
            <RedArrowButton pathName={"/contact"} data="Get Started" />
            <RedArrowButton pathName={"/contact"} data="Request a Quote" />
          </div>
        </div>

        {/* Right Form */}
        <div className="basis-full lg:basis-[50%]  w-full wow animate__animated animate__fadeInRight">
          <div className="bg-white rounded-2xl shadow-lg lg:p-8 hover:shadow-xl transition duration-300">
            <OurServiceFrom />
          </div>
        </div>
      </div>
    </section>
  );
}
