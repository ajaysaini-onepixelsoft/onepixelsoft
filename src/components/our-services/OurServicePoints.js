import React from 'react'

export default function OurServicePoints({ serviceData }) {
  return (
<<<<<<< HEAD
    <div className="xl:px-40 px-5 py-16 bg-white wow  animate__animated  animate__fadeInUp">
=======
    <section className="xl:px-40 px-5 py-16 bg-white wow  animate__animated  animate__fadeInUp">
>>>>>>> 6347013 (update)
      {
        serviceData?.paragraph1 && (
          <div>
            <h1 className='text-[2.2rem] my-4'>{serviceData.heading}</h1>
            <p className='text-gray-700'>{serviceData.paragraph1}</p>
          </div>
        )
      }
      {
        serviceData?.poits1 && (
          <div className="flex flex-col md:flex-row gap-10 mt-10">
            <div className="left  ">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">{serviceData?.heading1}</h2>
<<<<<<< HEAD
              <ul className="space-y-4 list-disc ">
=======
              <ul className="space-y-4 list-disc px-5">
>>>>>>> 6347013 (update)
                {serviceData?.poits1?.map((item, index) => (
                  <li
                    className="pl-4 py-2"
                    key={index}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="right ">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">{serviceData?.heading2}</h2>
<<<<<<< HEAD
              <ul className="space-y-4 list-disc">
=======
              <ul className="space-y-4 md:list-disc  px-5">
>>>>>>> 6347013 (update)
                {serviceData?.poits2?.map((item, index) => (
                  <li
                    className="pl-4 py-2 text-gray-700"
                    key={index}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )
      }
      {
         (serviceData?.poits3 || serviceData?.poits4) && (
<<<<<<< HEAD
          <div className="flex flex-col md:flex-row gap-10 mt-10">
=======
          <div className="flex flex-col flex-row gap-10 mt-10">
>>>>>>> 6347013 (update)
            <div className="left ">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">{serviceData?.heading3}</h2>
              <ul className="space-y-4 list-disc ">
                {serviceData?.poits3?.map((item, index) => (
                  <li
                    className="pl-4 py-2"
                    key={index}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="right ">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">{serviceData?.heading4}</h2>
              <ul className="space-y-4 list-disc">
                {serviceData?.poits4?.map((item, index) => (
                  <li
                    className="pl-4 py-2 text-gray-700"
                    key={index}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )
      }
<<<<<<< HEAD
    </div>
=======
    </section>
>>>>>>> 6347013 (update)
  )
}
