import React from 'react'
import SmallTitle from './SmallTitle'

export default function CommenHeading({cmHeading}) {
    return (
        <section className="flex flex-col md:flex-row justify-between items-center md:gap-0 wow  animate__animated  animate__fadeInUp">
            <div className="md:w-1/2 w-full mb-6 md:mb-0">
                {cmHeading?.smtext && <SmallTitle smText={cmHeading.smtext} exClass="font-primary text-lg md:text-xl font-medium" />}
                <h2 className="text-3xl md:text-4xl mt-2 text-gray-900">{cmHeading.title}</h2>
            </div>
            <div className="md:w-1/2 w-full">
                <p className="text-base md:text-lg text-gray-700 md:w-4/5">
                 {cmHeading.desc}
                </p>
            </div>
        </section>
    )
}
