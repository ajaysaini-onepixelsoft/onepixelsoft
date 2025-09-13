import { services } from '@/data/OurServicesData'
import React from 'react'
import ServicesSection from './ServicesSection'
import Image from 'next/image'

export default function OurWebsiteDevelopment() {
  return (
<<<<<<< HEAD
    <div className='xl:px-40 px-5 lg:px-10 py-15' style={{
      background: 'linear-gradient(180deg, hsla(0,84%,85%,0.4), hsla(0,0%,100%,0.9) 103.91%)'
    }}>
=======
    <section className='xl:px-40 px-5 lg:px-10 py-15 bg-gradient-to-br from-violet-100 to-[#eee]' >
>>>>>>> 6347013 (update)
      <ServicesSection heading={"Our Website Development Team Also Provides Web Portals, Including"}/>
      <div className="section-2 mt-15">
        <div className='wow  animate__animated  animate__fadeInUp'>
          <h1 className="lg:text-[3rem] text-[2rem] text-center mb-3">
            Advantages of using our Website Development Services
          </h1>
          <p className="text-center text-gray-800 text-[1.3rem] mb-10">
            Leverage the power of social media platforms to connect with your audience and drive engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className={` px-10 py-8 rounded-xl shadow-md hover:shadow-xl hover:scale-101 transition-transform duration-300 wow  animate__animated  animate__fadeInUp`}
              data-wow-delay={`${index*0.09}s`}
              style={{
                backgroundColor:`${item.color}`
              }}
            >
              <div className="flex items-center mb-4 realtive">
                <Image
                  src={item.icon}
                  alt={item.title} height={50} width={50}
                  className=" mr-4" loading="lazy"
                />
                <h2 className="text-[1.4rem] text-[600]">{item.title}</h2>
              </div>
              <p className="text-gray-700 text-lg">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

<<<<<<< HEAD
    </div>
=======
    </section>
>>>>>>> 6347013 (update)
  )
}
