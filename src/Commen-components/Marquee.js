import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Marquee from "react-fast-marquee";

export default function MarqueeSection({exClass}) {
  return (
      <div className="banner-moving-text realative overflow-hidden">
        <div className={`banner-moving-text-container absolute ${exClass?exClass:"bottom-0"} left-0 rotate-4 xl:h-15 h-10 w-[99.9%]  flex items-center bg-[#DCC5C5] text-black uppercase xl:text-3xl text-md`}>
          <Marquee
            direction="left"
            gradient={false}
            pauseOnHover={true}
            autoFill={true}
          >

            <Link href="#" className='xl:mx-10'>Web development</Link>
            <Image src="/assets/images/shape/svgviewer-png-output.png" width={30} height={10} loading="lazy" alt="line" className='mx-5 object-contain' />
            <Link href="#" className='xl:mx-10'>graphic design</Link>
            <Image src="/assets/images/shape/svgviewer-png-output.png" width={30} height={10} loading="lazy" alt="line" className='mx-5 object-contain' />
            <Link href="#" className='xl:mx-10'>Product design</Link>
            <Image src="/assets/images/shape/svgviewer-png-output.png" width={30} height={10} loading="lazy" alt="line" className='mx-5 object-contain' />
            <Link href="#" className='xl:mx-10'>UI/UXdesign</Link>
            <Image src="/assets/images/shape/svgviewer-png-output.png" width={30} height={10} loading="lazy" alt="line" className='mx-5 object-contain' />

            <Link href="#" className='xl:mx-10'>Brand identity</Link>
            <Image src="/assets/images/shape/svgviewer-png-output.png" width={30} height={10} loading="lazy" alt="line" className='mx-5 object-contain' />

            <Link href="#" className='xl:mx-10'>Content creation</Link>
            <Image src="/assets/images/shape/svgviewer-png-output.png" width={30} height={10} loading="lazy" alt="line" className='mx-5 object-contain' />

          </Marquee>
        </div>
        <div className={`banner-moving-text-container absolute  ${exClass?exClass:"bottom-0"} left-0 -rotate-3 xl:h-15 h-10 w-[99.9%] text-black uppercase xl:text-3xl text-md flex items-center bg-white`}>
          <Marquee
            direction="right"
            gradient={false}
            pauseOnHover={true}
            autoFill={true}
          >
            <Link href="#" className='xl:mx-10'>Web development</Link>
            <Image src="/assets/images/shape/svgviewer-png-output.png" width={30} height={10} loading="lazy" alt="line" className='mx-5 object-contain' />
            <Link href="#" className='xl:mx-10'>graphic design</Link>
            <Image src="/assets/images/shape/svgviewer-png-output.png" width={30} height={10} loading="lazy" alt="line" className='mx-5 object-contain' />
            <Link href="#" className='xl:mx-10'>Product design</Link>
            <Image src="/assets/images/shape/svgviewer-png-output.png" width={30} height={10} loading="lazy" alt="line" className='mx-5 object-contain' />
            <Link href="#" className='xl:mx-10'>UI/UXdesign</Link>
            <Image src="/assets/images/shape/svgviewer-png-output.png" width={30} height={10} loading="lazy" alt="line" className='mx-5 object-contain' />

            <Link href="#" className='xl:mx-10'>Brand identity</Link>
            <Image src="/assets/images/shape/svgviewer-png-output.png" width={30} height={10} loading="lazy" alt="line" className='mx-5 object-contain' />

            <Link href="#" className='xl:mx-10'>Content creation</Link>
            <Image src="/assets/images/shape/svgviewer-png-output.png" width={30} height={10} loading="lazy" alt="line" className='mx-5 object-contain' />
          </Marquee>
        </div>
      </div>  )
}
