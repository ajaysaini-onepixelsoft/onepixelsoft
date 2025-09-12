import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export default function RedArrowButton({data}) {
    return (
        <div className="about-button border px-8 py-2 flex items-center rounded-full gap-3 border-[#751212] bg-[#fff] hover:bg-gradient-to-r hover:from-[#740603] hover:to-[#0b0b0b] text-black hover:text-white transition-all duration-500">{data}
            <div className='arrow h-6 gap-3  w-8 overflow-hidden whitespace-nowrap '>
                <FaArrowRight className='faArrow inline-block' size={20} />
                <FaArrowRight className='faArrow inline-block ml-3' size={20} />
            </div>
        </div>)
}
