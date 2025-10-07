import BlackWhiteBtu from "@/Commen-components/BlackWhiteBtu";
import Image from "next/image";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCalendar, FaPhone, FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function ContactFrom({ exClass, rotate = 0 }) {
  return (
    <section
      className={`xl:px-40 px-5 py-20 ${exClass ? exClass : "bg-[#FAE6E6]/60 backdrop-blur-md"
        } relative wow animate__animated animate__fadeInUp overflow-hidden`}
      data-wow-delay="0.5s"
    >
      {/* Background shapes */}
      <div className="absolute bg-yellow-100 opacity-[0.7] rounded-full animated-random-shape"></div>
      <div className="absolute bg-fuchsia-100 h-[200px] w-[200px] rounded-full bottom-10 right-10 blur-2xl animated-random-shape"></div>


      <div
        className={`flex gap-10 md:flex-row flex-col justify-between relative z-10 rotate-${rotate}`}
      >
        {/* Left Content */}
        <div className="basis-[45%] text-black">
          <h3 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            We’d Love to Hear From You!
          </h3>
          <p className="mb-6 text-lg text-gray-700 leading-relaxed">
            Your insights matter! Drop us a line and share your thoughts.{" "}
            <span className="font-semibold font-dark">OnePixel Soft</span>{" "}
            values your feedback and looks forward to hearing from you.
          </p>

          <div className="space-y-6">
            <div>
              <h5 className="text-lg font-semibold font-dark flex gap-2 items-center">
                <MdEmail/> Email Address
              </h5>
              <p className="text-gray-600 text-[1.1rem]">
                sales@onepixelsoft.com
              </p>
              <p className="text-gray-600 text-[1.1rem]">
                info@onepixelsoft.com
              </p>

            </div>
            <div>
              <h5 className="text-lg font-semibold font-dark">
                Contact Number
              </h5>
              <p className="text-gray-600 flex gap-3 items-center py-1 text-[1.1rem]"><FaWhatsapp size={20}/> +91-7737451230</p>
              <p className="text-gray-600 flex gap-3 items-center py-1 text-[1.1rem]"><FaPhone size={20}/>+91-8892020208</p>
            </div>
            <div>
              <h5 className="text-lg font-semibold font-dark flex gap-2 items-center">
                <FaMapMarkerAlt/> Headquarters Address
              </h5>
              <p className="text-gray-600">
                3rd Floor, Roondla Plaza, 84/20, Madhyam Marg, near KV No 5, Jaipur, Rajasthan 302020
              </p>
            </div>
            <div>
              <h5 className="text-lg font-semibold font-dark flex gap-2 items-center">
                <FaCalendar/> Business Hours
              </h5>
              <p className="text-gray-600">
                Monday–Saturday <br /> 10:00 AM – 07:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="basis-[50%]">
          <form className="flex flex-col gap-4 bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-gray-200">
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300 font-medium placeholder-gray-400"
            />

            <div className="flex gap-4">
              <input
                id="email"
                type="email"
                placeholder="Email address"
                className="border border-gray-300 rounded-lg px-4 py-3 w-1/2 focus:outline-none focus:ring-2 focus:ring-indigo-300 font-medium placeholder-gray-400"
              />
              <input
                id="number"
                type="tel"
                placeholder="Phone number"
                className="border border-gray-300 rounded-lg px-4 py-3 w-1/2 focus:outline-none focus:ring-2 focus:ring-indigo-300 font-medium placeholder-gray-400"
              />
            </div>

            <input
              id="company-name"
              type="text"
              placeholder="Company name"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300 font-medium placeholder-gray-400"
            />

            <textarea
              name="message"
              id="message"
              placeholder="Your message"
              className="border border-gray-300 rounded-lg px-4 py-3 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-300 font-medium placeholder-gray-400"
            />
            <BlackWhiteBtu data={"Send Massaged"} exClass={"second"}/>
            </form>
        </div>
      </div>
    </section>
  );
}
