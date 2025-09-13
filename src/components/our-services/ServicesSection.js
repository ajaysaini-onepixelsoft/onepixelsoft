import { servicesData } from '@/data/OurServicesData'
import React from 'react'
export default function ServicesSection({heading}) {
  return (
<<<<<<< HEAD
          <div className='section-1'>
=======
          <section className='section-1'>
>>>>>>> 6347013 (update)
            <h1 className='lg:text-[3rem] text-[2rem] text-center mb-10 wow  animate__animated  animate__fadeInUp'>{heading}</h1>
            <div className='grid xl:grid-cols-3 grid-cols-2 gap-5'>
              {
                servicesData.map((item, index) => {
                  return (
                    <div key={index} className='
                        wow  animate__animated  animate__fadeInUp
                        bg-white lg:px-10 lg:py-8 p-4 rounded-lg flex items-center gap-5 
                        rotate-0 
                        flex-wrap
                        flex-col lg:flex-row
                        hover:rotate-2 text-black hover:text-white
                        transition-all duration-500 ease-in-out
                        hover:bg-gradient-to-tl hover:from-[#740603] hover:to-[#0b0b0b]
                      ' data-wow-delay={`${index*0.09}s`}>
                      <h3 className='bg-[#eee] p-3 rounded-lg'>{item.icon}</h3>
                      <h2 className='lg:text-[1.5rem] text-[1.1rem] text-center lg:text-left'>{item.title}</h2>
                    </div>
                  )
                })
              }
            </div>
<<<<<<< HEAD
          </div>
=======
          </section>
>>>>>>> 6347013 (update)
  )
}
