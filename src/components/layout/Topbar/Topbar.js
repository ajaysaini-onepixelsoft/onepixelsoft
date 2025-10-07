"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaYoutube } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';

export default function Topbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 992);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) return null;

  return (
    <section className='topbar bg-[#222222] lg:px-10 text-white font-semibold xl:text-[1.2rem] md:text-[13px] xl:px-40 md:px-5 py-3 flex justify-between items-center'>
      <h4 className='text-[#ccc]'>
        <span className='text-[#fff]'>Working Hours:</span> Monday - Friday, 10am - 07pm
      </h4>
      
      <ul className="flex gap-5 text-right items-center">
        <li>sales@onepixelsoft.com</li>
        <span className='inline-block h-[20px] w-[1px] bg-[#777]'></span>
        
        <li>+91-7737451230</li>
        <span className='inline-block h-[20px] w-[1px] bg-[#777]'></span>
        
        <li className="flex xl:gap-4 gap-2 justify-end">
          <Link 
            href="https://www.facebook.com/onepixelsoft1/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <FaFacebook size={20} color="#fff" />
          </Link>
          <Link 
            href="https://www.instagram.com/onepixel_soft" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <FaInstagram size={20} color="#fff" />
          </Link>
          <Link 
            href="https://x.com/onepixel_soft" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <FaXTwitter size={20} color="#fff" />
          </Link>
          <Link 
            href="https://www.linkedin.com/company/onepixelsoft" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <FaLinkedinIn size={20} color="#fff" />
          </Link>
          <Link 
            href="https://www.youtube.com/@skillupgradeofficial" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <FaYoutube size={20} color="#fff" />
          </Link>
        </li>
      </ul>
    </section>
  );
}
