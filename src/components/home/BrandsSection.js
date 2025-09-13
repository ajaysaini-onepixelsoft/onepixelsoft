"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function BrandsSection() {
  const brandLogos = [
    { name: "CARID", url: "/assets/images/brand/CARID.png" },
    { name: "Drive Carma", url: "/assets/images/brand/drive carma.png" },
    { name: "Eyeaddon", url: "/assets/images/brand/Eyeaddon.png" },
    { name: "Farehood", url: "/assets/images/brand/farehood.png" },
    { name: "FOT", url: "/assets/images/brand/FOT.png" },
    { name: "Go Track On", url: "/assets/images/brand/go track on.png" },
    { name: "Infusion Notes", url: "/assets/images/brand/infusion-notes.png" },
    { name: "Jeevan Mitro", url: "/assets/images/brand/jeevan mitro.png" },
    { name: "Kodu", url: "/assets/images/brand/kodu.png" },
    { name: "Magnus Education", url: "/assets/images/brand/Magnus Education.png" },
    { name: "My ACE Bazar", url: "/assets/images/brand/My ACE Bazar.png" },
    { name: "My Bat11", url: "/assets/images/brand/my bat11.png" },
  ];

  return (
<<<<<<< HEAD
    <div className="brands-section py-10 xl:px-40 px-5 wow animate__animated animate__fadeIn">
=======
    <section className="brands-section py-10 xl:px-40 px-5 wow animate__animated animate__fadeIn">
>>>>>>> 6347013 (update)
      {/* LTR Row */}
      <Marquee speed={50}  gradient={false} pauseOnHover={true}>
        {brandLogos.map((logo, index) => (
          <div
            key={index}
            className="mx-6 mb-5 flex justify-center items-center"
          >
            <Image
              src={logo.url}
              alt={logo.name}
              width={120}
              height={80} loading="lazy"
              className="object-contain"
            />
          </div>
        ))}
      </Marquee>

      {/* RTL Row */}
      <Marquee
        speed={50}
        gradient={false}
        pauseOnHover={true}
        direction="right"
        className="mt-6" 
      >
        {brandLogos.map((logo, index) => (
          <div
            key={index}
            className="mx-6 flex justify-center items-center"
          >
            <Image
              src={logo.url}
              alt={logo.name}
              width={120}
              height={80} loading="lazy"
              className="object-contain"
            />
          </div>
        ))}
      </Marquee>
<<<<<<< HEAD
    </div>
=======
    </section>
>>>>>>> 6347013 (update)
  );
}
