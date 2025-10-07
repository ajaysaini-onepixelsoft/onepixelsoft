"use client";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { MdArrowOutward } from "react-icons/md";
import '../../../styles/modules/Home.css'
import { FaAngleDown } from "react-icons/fa6";
import '../../../styles/modules/commen.css'
import MobileHeader from '../MobileHeader/MobileHeader';
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import { navigationData } from '@/data/navigation';
import Link from 'next/link';


export default function Header() {
  const [isOpen, setIsOpen] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [istopset, setIsTopSet] = useState(false)
  useEffect(() => {
    const changed = () => setIsMobile(window.innerWidth <= 992)
    changed()
    window.addEventListener('resize', changed)
    return () => window.removeEventListener('resize', changed)
  }, []);

  useEffect(() => {
    const fixedTop = document.querySelector(".header-area");
    if (!fixedTop) return;

    const onScroll = () => {
      if (window.scrollY > 50) {
        setIsTopSet(true)
        fixedTop.classList.add("menu-fixed", "animated", "fadeInDown");
      } else {
        setIsTopSet(false)
        fixedTop.classList.remove("menu-fixed", "fadeInDown");
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (

<section className='header-area header-main sticky z-50'>
      <div className='header bg-[#000000] text-white xl:px-40 lg:px-10 px-5 py-1 text-center flex justify-between items-center'>
        <div className="logo animate__animated_shakeX text-3xl font-bold bg-white  px-3 py-1 rounded-md relative animate__animated animate__fadeIn hover:animate__shakeX ">
          <Link href="/">
            <Image src="/assets/images/logo/onepixel-logo.png" alt="OnePixelSoft Logo" className=" bg-white rounded-md" width={200} height={150} loading="lazy" />
          </Link>
        </div>

        {
          isMobile ?
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`xl:hidden block ${isMenuOpen ? " bg-yellow-500 px-2 text-[25px] text-white  py-2 rounded-full" : "text-white "} text-3xl font-bold relative z-100 top-0 right-0`}>{isMenuOpen ? <IoCloseSharp /> : <CiMenuBurger />}</button> : false
        }
        {
          isMobile ?
            <MobileHeader setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} /> :
            (
              <>
                <nav className='navbar'>
                  <ul className='flex gap-10'>
                    {
                      navigationData && navigationData.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className='sticky  py-8 group cursor-pointer z-60 xl:text-[20px] lg:text-[16px] wow  animate__animated  animate__fadeIn'
                            // onMouseEnter={() => item.subMenu && setIsOpen(index)}  
                            onClick={() => item.subMenu && setIsOpen(isOpen === index ? null : index)}
                            onMouseEnter={() => setIsOpen(isOpen === index ? null : index)}
                          // onMouseLeave={() => item.subMenu && setIsOpen(null)}
                          >
                            {
                              item?.href ? (
                                <Link href={item?.href}>
                                  {item.title} {item?.subMenu && <span className='inline-block ml-1'><FaAngleDown className='FaAngleDown' /></span>}
                                </Link>
                              ) : (
                                <div className=''>{item.title} {item?.subMenu && <span className='inline-block ml-1'><FaAngleDown className='FaAngleDown' /></span>}</div>
                              )
                            }
                            <div className={`submenu-container px-2 ${istopset ? "top-24" : "top-37"}`}>
                              {
                                item?.subMenu && isOpen === index && (

                                  <div className='flex gap-3' style={{ width: "100%" }}>
                                    <div className='main-menu basis-[40%] relative '>
                                      <Image src={item.subMain} alt="" fill sizes="100%" loading="lazy" className="object-contain object-top " />
                                    </div>
                                    <ul className={`ul-main basis-[60%]  ${item.path === "/about-us" ? "grid-cols-3 xl:h-[350px]" : item.path === "/our-services" ? "xl:grid-cols-3 lg:grid-cols-2 h-[500px] overflow-y-scroll gap-3" : item.path === "/solutions" ? "xl:grid-cols-5 md:grid-cols-3 h-[500px] overflow-y-scroll" : null} grid py-10 gap-2 text-[18px]`}>
                                      {

                                        item.subMenu.map((subItem, indexSub) => {
                                          return (
                                            item?.path === "/about-us" ? (
                                              <li key={indexSub} className='pulse-once  border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-500 items-center  flex flex-col justify-center text-center'>
                                                <Link href={subItem.href} className='w-full flex flex-col justify-center items-center'>
                                                    <div className=''>
                                                      <Image loading="lazy" src={subItem.img} alt={subItem.title} height={50} width={50} />
                                                    </div>
                                                    <div className='flex text-center'>
                                                      {subItem.title}
                                                    </div>
                                                </Link>
                                              </li>
                                            ) :
                                              item.path === "/our-services" ? (
                                                <li key={indexSub}>
                                                  <h2 className='text-[#751212] text-left font-bold xl:text-[18px] lg:text-[12px]'>{subItem.title}</h2>
                                                  <ul className='text-left '>
                                                    {
                                                      subItem.submenu && subItem.submenu.map((nestedItem, nestedIndex) => (
                                                        <li key={nestedIndex} className='py-1 text-[.8rem] text-gray-800 hover:text-[#751212] transition-all duration-500 '>
                                                          <Link href={nestedItem.path}>{nestedItem.title}</Link>
                                                        </li>
                                                      ))
                                                    }
                                                  </ul>
                                                </li>

                                              ) :
                                                item.path === "/solutions" ? (
                                                  <li key={indexSub} className='header-sub-menu'>
                                                    <Link href={subItem.href}>

                                                      <div className='flex gap-2 p-2 flex-col border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-500 items-center justify-center text-center pulse-once'>
                                                        <div className='w-full h-15 justify-center items-center flex relative'>
                                                          <Image loading="lazy" src={subItem.img} alt={subItem.title} className='object-contain' width={40} height={40} />
                                                        </div>
                                                        <div className='text-sm'>
                                                          {subItem.title}
                                                        </div>
                                                      </div>
                                                    </Link>
                                                  </li>
                                                ) : null

                                          )
                                        })
                                      }
                                    </ul>
                                  </div>
                                )
                              }
                            </div>
                          </li>
                        )
                      })
                    }
                  </ul>
                </nav>
                <div className='contact-btn bg-[url("/assets/images/shape/btn.png")] bg-no-repeat py-3 px-3 transition-all duration-500 flex items-center gap-2 cursor-pointer '>
                  <Link href="/contact">Contact Us</Link>
                  <div className='arrow h-6 w-6 overflow-hidden'>
                    <MdArrowOutward className='MdArrowOutward' size={20} />
                    <MdArrowOutward className='MdArrowOutward' size={20} />
                  </div>
                </div>
              </>
            )
        }
      </div>
    </section>
  )
}
