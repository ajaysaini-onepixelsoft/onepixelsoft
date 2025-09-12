import React from 'react'

export default function SmallTitle({smText,exClass}) {
    smText = smText || "Unleash Creativity, Inspire Possibilities";
  return (
    <p className={`${exClass} py-2 wow  animate__animated  animate__fadeInUp`}><span className='inline-block h-[10px] w-[10px] bg-[#DE9FFF] rounded-full mr-2'></span>{smText}</p>
  )
}
