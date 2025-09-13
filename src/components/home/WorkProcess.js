import SmallTitle from '@/Commen-components/SmallTitle'
import Image from 'next/image'
import React from 'react'

export default function WorkProcess() {
    return (
        <section className="relative xl:px-40 px-5 py-20 bg-white">
            <div className="flex flex-col xl:flex-row justify-between items-start mb-12 wow  animate__animated  animate__fadeInUp">
                <SmallTitle smText="Our Work Process" exClass="text-[#751212] text-[20px]" />
                <h4 className="font-dark lg:text-[28px] md:text-[1.5rem] font-medium xl:w-[70%] mt-4 xl:mt-0">
                    <span className="text-black">We work closely with you</span> throughout the entire process, <span className="text-black">ensuring your vision is always at the center.</span> By staying aligned with your goals and preferences, <span className='text-black'>we guarantee a smooth journey with no surprises</span> or unmet expectations.
                </h4>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 gap-4 wow  animate__animated  animate__fadeInUp">
                <div className="flex lg:flex-col md:flex-row flex-col lg:gap-20 gap-4 text-black">
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-xl font-bold lg:mb-2"><span className="text-[#751212] mr-2">01.</span> Consultation</h3>
                        <p className="font-dark">We delve deep into understanding our client&apos;s aspirations, challenges, and unique requirements.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-xl font-bold lg:mb-2"><span className="text-[#751212] mr-2">03.</span> Execution</h3>
                        <p className="font-dark">Our skilled team employs cutting-edge technologies to the latest design principles to bring the chosen concept to life.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="relative w-full flex flex-col items-center  h-[20rem]  ">
                        <Image className="object-contain rounded-lg z-10" loading="lazy" src="/assets/images/process/OurWorkProcess-01.png" alt="Our Work Process" fill sizes='100%'/>
                        <Image className="absolute top-[30%]  lg:scale-[1.3] scale-1 object-contain" loading="lazy" src="/assets/images/process/process-image12.png" alt="Process Point" fill sizes='100%'/>
                    </div>
                </div>
                <div className="flex lg:flex-col md:flex-row flex-col lg:gap-20 gap-4 text-black">
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-xl font-bold lg:mb-2"><span className="text-[#751212] mr-2">02.</span> Concept Generate</h3>
                        <p className="font-dark">With a thorough understanding of our client&apos;s needs, our next step involves the exciting process of concept generation.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-xl font-bold lg:mb-2"><span className="text-[#751212] mr-2">04.</span> Completion</h3>
                        <p className="font-dark">We meticulously review the final product, leaving no stone unturned to guarantee its functionality, and overall performance.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
