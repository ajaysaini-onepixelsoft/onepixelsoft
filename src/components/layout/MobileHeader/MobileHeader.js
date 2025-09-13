"use client"
import { navigationData } from '@/data/navigation';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { FaYoutube } from 'react-icons/fa';
import { FaPhoneFlip, FaPlus } from 'react-icons/fa6'
import { FaFacebook, FaInstagram, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';
import { MdArrowOutward, MdEmail } from 'react-icons/md';
import { RxDividerHorizontal } from 'react-icons/rx';

export default function MobileHeader({ isMenuOpen, setIsMenuOpen }) {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <div
      className={`bg-[#151314] text-[#151314] fixed top-0 right-0  
      ${isMenuOpen ? "md:w-[50%] w-[80%]" : "w-0"} 
      duration-500 transition-all h-full after:content-[''] 
      z-10
      after:absolute after:top-0 after:left-0 after:w-[2px] after:h-full after:bg-[#66D285]`}
    >
      {/* Logo */}
      <div className='top_container flex justify-between px-5 items-center pt-4'>
        <div className='Logo inline-block rounded-md relative'>
            <Image src="/assets/images/logo/onepixel-logo.png" loading="lazy" alt="OnePixelSoft Logo" className="w-40 bg-white px-5 py-2 rounded-md" width={150} height={100} />
        </div>
      </div>

      {/* Menu */}
      <div className="overflow-y-scroll h-full pt-10 pb-30">
        <ul className='text-left px-5 bg-[#151314] text-white relative z-50 hover:text-red-500'>
          {navigationData.map((item, index) => (
            <li key={index} className='border-t border-[#333] py-3 text-white text-xl'>
              <div className="flex justify-between items-center">
                {item?.href ? (
                  <Link href={item.href} className="flex-1">
                    {item.title}
                  </Link>
                ) : (
                  <span>{item.title}</span>
                )}

                {item?.subMenu && (
                  <span
                    className="inline-block cursor-pointer ml-2"
                    onClick={() => setIsOpen(isOpen === index ? null : index)}
                  >
                    {isOpen === index ? <RxDividerHorizontal /> : <FaPlus />}
                  </span>
                )}
              </div>

              {/* Submenu */}
              {item?.subMenu && isOpen === index && (
                <ul className="pl-5 transition-all duration-500 h-full py-2">
                  {item.subMenu.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className='py-2 border-gray-200 text-base text-white hover:text-red-500'
                    >
                      <Link href={subItem.href || "#"}>
                        {subItem.title}
                      </Link>

                      {/* Sub-submenu */}
                      {subItem?.submenu && (
                        <div className='sub-submenu h-full py-2 px-4'>
                          <ul>
                            {subItem.submenu.map((v, i) => (
                              <li key={i} className='py-1 text-[#999]'>
                                <Link href={v?.path || "#"}>{v.title}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Contact Info */}
        <div className="contact-info mb-4 flex flex-col gap-3 px-5 mt-5 text-left">
          <h4 className="text-[18px] text-[#aaa] w-full">
            <strong className="text-white block">Working Hours:</strong>
            Monday - Friday, 10am - 07pm
          </h4>

          <ul className="flex flex-col flex-wrap sm:flex-row sm:items-center gap-3 text-white text-[18px]">
            <li className="flex items-center gap-2 text-[#aaa]">
              <span className="font-medium"><MdEmail /></span>
              <Link href="#" className="transition">sales@onepixelsoft.com</Link>
            </li>
            <li className="flex items-center gap-2 text-[#aaa]">
              <span className="font-medium"><FaPhoneFlip /></span>
              <Link href="#" className="transition">+91-7737451230</Link>
            </li>
          </ul>

          {/* Social Media */}
          <div className="flex gap-4 mt-2 text-black">
            <Link href="https://www.facebook.com/onepixelsoft1/" target="_blank" rel="noopener noreferrer"
              className="p-2 bg-white rounded-full hover:bg-green-500 hover:text-white transition">
              <FaFacebook size={18} />
            </Link>
            <Link href="https://www.instagram.com/onepixel_soft/" target="_blank" rel="noopener noreferrer"
              className="p-2 bg-white rounded-full hover:bg-pink-500 hover:text-white transition">
              <FaInstagram size={18} />
            </Link>
            <Link href="https://x.com/onepixel_soft" target="_blank" rel="noopener noreferrer"
              className="p-2 bg-white rounded-full hover:bg-black hover:text-white transition">
              <FaXTwitter size={18} />
            </Link>
            <Link href="https://x.com/onepixel_soft" target="_blank" rel="noopener noreferrer"
              className="p-2 bg-white rounded-full hover:bg-blue-600 hover:text-white transition">
              <FaLinkedinIn size={18} />
            </Link>
            <Link href="https://www.youtube.com/@skillupgradeofficial" target="_blank" rel="noopener noreferrer"
              className="p-2 bg-white rounded-full hover:bg-blue-600 hover:text-white transition">
              <FaYoutube size={18} />
            </Link>
          </div>

          {/* Contact Button */}
          <div className='contact-btn bg-[url("/assets/images/shape/btn.png")] bg-no-repeat px-3 py-3  
              transition-all duration-500 flex items-center gap-2 cursor-pointer text-white mt-5'>
            <Link href="/contact">Contact Us</Link>
            <div className='arrow h-6 w-6 overflow-hidden'>
              <MdArrowOutward size={20} />
              <MdArrowOutward size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
