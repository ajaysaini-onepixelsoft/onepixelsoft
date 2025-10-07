import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import MarqueeSection from '@/Commen-components/Marquee';
import { FaWhatsapp } from 'react-icons/fa6';
export default function HeroSection() {


  const [whatsAppLink, setWhatsAppLink] = useState("");

  useEffect(() => {
    const phone = "7737451230";
    const text =
      "Hello, I am interested in digital marketing, web development, app development, and graphic design services for my business. Please share more details.";

    const encodedText = encodeURIComponent(text);

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      setWhatsAppLink(`whatsapp://send?phone=${phone}&text=${encodedText}`);
    } else {
      setWhatsAppLink(`https://wa.me/${phone}?text=${encodedText}`);
    }
  }, []);

  if (!whatsAppLink) return null;

  return (
    <section className="text-white bg-[url('/assets/images/bg/banner-fout-bg.png')] bg-no-repeat bg-cover bg-center relative">

      {/* Left Arrow Image */}
      <div className="banner-four__line absolute top-0 left-0 wow animate__animated animate__fadeInLeft">
        <div className="relative h-[70rem] w-[20em]">
          <Image
            src="/assets/images/shape/banner-four-arrow.png"
            alt="Arrow"
            fill
            className="object-contain"
          />
        </div>
      </div>


      {/* Text Section */}
      <div className="text-section flex lg:flex-row flex-col justify-between lg:items-center items-start w-full px-10 xl:px-40 xl:py-20 py-10 wow animate__animated animate__fadeIn">
        <div className="left-scetion xl:basis-1/2 basis-full">
          <p className="py-2 text-[1.2rem]">
            <span className="inline-block h-[10px] w-[10px] bg-[#DE9FFF] font-light rounded-full mr-2"></span>
            Unleash Creativity, Inspire Possibilities
          </p>
          <h1 className="text-[2rem] xl:text-[3.5rem] xl:leading-[4rem] font-[400] my-4 ">
            We Empower <br />
            <Typewriter 
              options={{
                strings: ['Businesses', 'Local Brands', 'E-Commerce Stores'],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 75,
              }}
            />
          </h1>
        </div>

        <div className="right xl:basis-1/2 basis-full">
          <p className="text-lg mb-6 font-light">
            At OnePixelSoft, we specialize in crafting innovative software solutions that drive business success.
            Our team of expert developers and designers work collaboratively to deliver custom applications tailored
            to your unique needs.
          </p>
          {/* hover:flex-row-reverse */}
          <Link href={whatsAppLink} target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-500 flex flex-row normal-scale  items-center gap-2 w-fit relative z-1 " > <FaWhatsapp size={30} className=" transition-all duration-300" /> Chat on WhatsApp </Link>


        </div>
      </div>

      {/* Button & Banner Images */}
      <div className="banner-four__image w-full p-3 xl:px-40 px-5 relative">
        <div className="text-btn">
          <div className="banner-four__line absolute xl:-top-[14%] lg:top-[10%] xl:right-20 lg:right-0 top-[69%] lg:block hidden wow animate__animated animate__fadeInRight">
            {/* <div className="relative z-2 w-[60px] h-[60px] xl:w-[120px] xl:h-[120px]">
              <Image
                src="/assets/images/shape/sysmbol.png"
                alt="Symbol"
                fill
                className="object-contain"
              />
            </div> */}
          </div>
          <div className='absolute xl:-top-15 xl:right-[23%] lg:right-[10%] '>
            <div className='relative  w-[250px] h-[250px]'>
              <Image
                src="/assets/images/banner/banner-four-text-btn.png"
                alt="Text Button"
                fill sizes='100%'
                className="btn-circle lg:block hidden object-contain"
              />
            </div>
          </div>
          <div className='absolute xl:right-[29%] right-[18%] top-[16%] xl:top-6'>
            <div className='relative z-11'>
              <Image
                src="/assets/images/banner/arrow.png"
                alt="Arrow"
                width={66}
                height={66}
                className=" lg:block hidden"
              />
            </div>
          </div>
        </div>

        <div className="relative w-full h-[180px] lg:h-[500px]">
          <Image
            src="/assets/images/banner/banner-four-image.png"
            alt="Banner"
            fill
            className="object-contain"
          />
        </div>
      </div>





      <MarqueeSection />
    </section>
  );
}
