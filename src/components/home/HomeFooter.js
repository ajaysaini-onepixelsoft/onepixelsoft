import MarqueeSection from '@/Commen-components/Marquee'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaPhoneAlt, FaYoutube } from 'react-icons/fa'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationDot, FaWhatsapp, FaXTwitter } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { navigationData } from '@/data/navigation'
import Image from 'next/image'

export default function HomeFooter() {
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
        <footer className="bg-[#000] text-gray-200 py-8 relative wow  animate__animated  animate__fadeInUp overflow-hidden">

            <div className='absolute bottom-0 left-0 h-[40vh]  w-full footer-moving-animation'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="px-5 lg:px-10 xl:px-40 pt-10 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1.2fr] lg:gap-20 md:gap-10 gap-5 relative ">
                    <div>
                        <div className='mb-5'>
                            <Link href="/">
                                <Image src="/assets/images/logo/onepixel-logo.png" alt="OnePixelSoft Logo" className="p-3 bg-white  rounded-md" width={200} height={60} loading="lazy" />
                            </Link>
                        </div>

                        <div className='flex gap-4 items-center my-3 text-gray-300 hover:text-white'>
                            <MdEmail />
                            <p className="text-md"> sales@onepixelsoft.com</p>
                        </div>
                        <div className='flex gap-4 items-center my-3 text-gray-300 hover:text-white'>
                            <FaPhoneAlt />
                            <p className="text-md"> +91-7737451230</p>
                        </div>
                        <div className='flex gap-4 items-start  my-3 text-gray-300 hover:text-white'>
                            <FaLocationDot size={50} />
                            <p className='text-md'> 3rd Floor, Roondla Plaza, 84/20, Madhyam Marg, near KV No 5, Mansarovar, Jaipur, Rajasthan 302020</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4 text-[1.1rem]">Quick Links</h3>
                        <ul className="space-y-2 text-md">
                            <li><Link href="/" className="hover:text-white">Home</Link></li>
                            <li><Link href="/about-us" className="hover:text-white">About Us</Link></li>
                            <li><Link href="/our-clients" className="hover:text-white">Our Client</Link></li>
                            <li><Link href="/contact" className="hover:text-white">Leadership</Link></li>
                            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4 text-[1.1rem]">Social media</h3>
                        <ul className="space-y-2 text-md">
                            <li>
                                <Link href="https://www.facebook.com/onepixelsoft1/" target="_blank" className="hover:text-white flex gap-3 items-center">
                                    <FaFacebook size={18} />
                                    Facebook
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.instagram.com/onepixel_soft/" target="_blank" className="hover:text-white flex gap-3 items-center">
                                    <FaInstagram size={18} />
                                    Instagram
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.youtube.com/@skillupgradeofficial" target="_blank" className="hover:text-white flex gap-3 items-center">
                                    <FaYoutube size={18} />
                                    Youtube
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.linkedin.com/company/one-pixel-soft" target="_blank" className="hover:text-white flex gap-3 items-center">
                                    <FaLinkedin size={18} />
                                    Linkedin
                                </Link>
                            </li>
                            <li>
                                <Link href="https://x.com/onepixel_soft" target="_blank" className="hover:text-white flex gap-3 items-center">
                                    <FaXTwitter size={18} />
                                    XTwitter
                                </Link>
                            </li>
                            <li>
                                <Link href={whatsAppLink} target="_blank" className="hover:text-white flex gap-3 items-center">
                                    <FaWhatsapp size={18} />
                                    Whatsapp
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="">

                        <h3 className="text-white font-semibold mb-2 text-[1.1rem]">Contact</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3559.505947100964!2d75.766124!3d26.855662!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5c709c8d6ed%3A0xfa5c247173e31c7a!2sOnepixel%20soft%20private%20limited%20an%20IT%20company%20in%20jaipur%20%7C%20Shopify%20web%20development%20%7C%20app%20development%20%7C%20Digital%20marketing%20agency!5e0!3m2!1sen!2sin!4v1745583411097!5m2!1sen!2sin"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-[400px] h-[250px] border-0"
                        ></iframe>
                    </div>

                </div>
                <div className='mt-8 border-t border-gray-300 pt-4 relative'>
                    <h3 className='text-white text-[1.1rem]'>Our Service</h3>
                    <div className='flex gap-3 flex-wrap mt-3'>

                        {
                            navigationData.map((v) => (
                                v?.subMenu?.map((item) => (
                                    item?.submenu &&
                                    item?.submenu?.map((nestItem, index) => {
                                        return (
                                            <div key={index}>
                                                <span className='text-md text-gray-300 duration-300 trastion-all hover:text-white'>
                                                    <Link href={nestItem.path}>
                                                        {nestItem.title}
                                                    </Link></span>
                                                <span> | </span>
                                            </div>
                                        )
                                    })
                                ))
                            ))
                        }
                    </div>
                </div>
                <div className='mt-8 border-t border-gray-300 pt-4 relative'>
                    <h3 className='text-white text-[1.1rem]'>Solutions</h3>
                    <div className='flex gap-3 flex-wrap mt-3'>

                        {
                            navigationData.map((v) => (
                                v?.subMenu?.slice(5).map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <span className='text-md text-gray-300 duration-300 trastion-all hover:text-white'>
                                                {
                                                    item?.href && (
                                                        <Link href={item?.href}>{item.title}</Link>
                                                    )
                                                }
                                            </span>
                                            <span> | </span>
                                        </div>
                                    )
                                }
                                )
                            ))
                        }
                    </div>
                </div>
                <div className="mt-8 pb-10 border-t border-gray-700 pt-4 text-md  items-center flex justify-between relative">
                    <p>© 2025 OnePixelSoft. All rights reserved.</p>
                    <div className='flex gap-2 justify-center mt-2 items-center '>
                        <Link href="/terms-conditions">Terms Conditions</Link>
                        <span> | </span>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                    </div>
                </div>
            </div>

        </footer>

    )
}
