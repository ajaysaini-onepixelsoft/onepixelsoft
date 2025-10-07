import React from 'react'
import RedArrowButton from './RedArrowButton'
import BlackWhiteBtu from './BlackWhiteBtu'
import Link from 'next/link'

export default function OurLocation() {
    return (
        <section className=" bg-white xl:px-40 px-5 md:py-15 p-5 lg:rounded-lg rounded-md overflow-hidden wow  animate__animated  animate__fadeInUp">
            {/* inset-0 bg-gradient-to-tr from-red-500 via-white/80 to-transparent */}
            <div className='lg:rounded-lg rounded-md flex gap-5 md:flex-row flex-col'>

                <div className="  w-full h-full lg:rounded-lg rounded-md">
                    <div className='md:px-20 md:py-30 p-5'>
                        <h1 className="text-3xl font-[500] text-black  mb-4">{"Let's Discuss Your Project!"}</h1>
                        <p className="font-dark mb-6 xl:w-[60%]">
                            {"Share your project idea and we’ll provide a free consultation on how we will turn it into an amazing digital product."}
                        </p>
                        <Link href={'/'} className="underline text-black">Get a Free Quote Now</Link>
                    </div>
                </div>
                <div className="w-full h-100 lg:rounded-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3559.505947100964!2d75.766124!3d26.855662!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5c709c8d6ed%3A0xfa5c247173e31c7a!2sOnepixel%20soft%20private%20limited%20an%20IT%20company%20in%20jaipur%20%7C%20Shopify%20web%20development%20%7C%20app%20development%20%7C%20Digital%20marketing%20agency!5e0!3m2!1sen!2sin!4v1745583411097!5m2!1sen!2sin"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full border-0"
                    ></iframe>
                </div>
            </div>
        </section>
    )
}
