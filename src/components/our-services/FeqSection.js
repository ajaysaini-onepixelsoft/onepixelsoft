"use client";

import React, { useState } from 'react';
import { FaqQuestionData } from '../../data/OurServicesData';
import { FaAngleDown } from "react-icons/fa6";

export default function FeqSection() {
  const [isActive, setIsActive] = useState(0);

  const toggleFAQ = (index) => {
    setIsActive(isActive === index ? null : index);
  };

  return (
    <div className="xl:px-40 px-5 lg:px-10 py-10 bg-white wow  animate__animated  animate__fadeInUp">
      <div className="flex flex-wrap gap-10  justify-between">
        <div className="left basis-full md:basis-[45%] space-y-4 wow  animate__animated  animate__fadeInLeft" data-wow-delay="0.3s">
          <h1 className="text-[2.2rem] text-gray-800 mb-2">Frequently Asked Questions Answered</h1>
          <p className="text-gray-600">
            {"Create A Powerful, Professional, And User-Friendly Website With WordPress — The World's Most Popular Content Management System (CMS)."}
          </p>
          <p className="text-gray-600">
            WordPress Website Development Is Perfect For Small Businesses, Bloggers, E-Commerce Stores, And Enterprises In Search Of A Flexible, Scalable, And SEO-Optimized Platform.
          </p>
          <p className="text-gray-600">
            Whether You Require A Blog, Portfolio, Store, Or Business Site, WordPress Provides All You Need To Achieve Success Online.
          </p>
          <p className="text-gray-600 font-semibold">Still Having Questions Regarding WordPress Web Development?</p>
          <p className="text-gray-600">Call Us Today To Talk With Our Specialists And Obtain The Answers You Require!</p>
          <a className="text-lg font-semibold underline" href="#contact">
            Contact us
          </a>
        </div>

        <div className="right-feq-section basis-full w-full  md:basis-[40%] space-y-4 wow  animate__animated  animate__fadeInRight" data-wow-delay="0.3s">
          {FaqQuestionData.map((item, index) => (
            <div className="rounded-lg shadow flex flex-col bg-gray-50" key={index}>
              <button
                className="text-black text-lg-t font-medium flex justify-between items-center  rounded-lg p-4 w-full"
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
                <FaAngleDown className={`transform transition-transform duration-300 ${isActive === index ? "rotate-180" : ""}`} />
              </button>
              {isActive === index && (
                <div className="bg-white px-5  pt-2 pb-6 text-gray-700">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
