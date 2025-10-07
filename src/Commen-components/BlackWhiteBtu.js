import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export default function BlackWhiteBtu({data,pathName,exClass}) {
    return (
        <Link href={pathName?pathName:"#"} className={`${exClass && exClass} white-black-button border px-4 py-2 flex items-center rounded-full gap-3 border-[#751212] bg-[#fff]  text-black `}>{data}
            <div className='arrow h-6 gap-3  w-8 overflow-hidden whitespace-nowrap '>
                <FaArrowRight className='faArrow inline-block' size={20} />
                <FaArrowRight className='faArrow inline-block ml-3' size={20} />
            </div>
        </Link>
    )
}
