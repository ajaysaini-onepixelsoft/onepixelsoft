import Image from "next/image";
import React from "react";

export default function ContactFrom({ exClass, rotate = 0 }) {
  return (
    <section
      className={`xl:px-40 px-5 py-20 ${
        exClass ? exClass : "bg-gradient-to-br from-violet-100 to-[#eee]"
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
            <span className="font-semibold text-indigo-600">OnePixel Soft</span>{" "}
            values your feedback and looks forward to hearing from you.
          </p>

          <div className="space-y-6">
            <div>
              <h5 className="text-lg font-semibold text-indigo-700">
                Email Address
              </h5>
              <p className="text-gray-600">sales@onepixelsoft.com</p>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-indigo-700">
                Phone Number
              </h5>
              <p className="text-gray-600">+91-7737451230</p>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-indigo-700">
                Headquarters Address
              </h5>
              <p className="text-gray-600">
                3rd Floor, Roondla Plaza, 84/20, Madhyam Marg, near KV No, Ward
                27, Mansarovar Sector 8, Jaipur, Rajasthan 302020
              </p>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-indigo-700">
                Business Hours
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

            <button
              type="submit"
              className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-6 py-3 rounded-lg mt-4 font-semibold shadow-md hover:scale-105 hover:shadow-lg transition duration-300"
            >
              Send Message
              <i className="ri-arrow-right-line text-lg ml-2"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
