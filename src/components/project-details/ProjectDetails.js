import HrRow from '@/Commen-components/HrRow'
import Image from 'next/image';
import React from 'react'

export default function ProjectDetails({ data }) {

  return (
    <section className='xl:px-40 lg:px-10 px-5 pt-10'>
      {/* Project Banner Image */}
      <div className='main-image wow animate__animated animate__fadeInUp relative md:w-full w-full lg:h-[50vh] h-40'>
        <Image
          src='/assets/images/project/default-image.png'
          alt={data.project_name} fill loading="lazy" sizes='100%'
          className=' object-cover rounded-lg shadow-lg'
        />
      </div>


      {/* Project Information */}
      <div className=" mt-10">
        <div className=" pt-10 pb-10 mt-10 flex gap-3 justify-between flex-wrap wow animate__animated animate__fadeInUp">
          <div className='space-y-3 mt-5'>
            <h5 className='text-xl font-semibold'>{data.project_name}</h5>
            <span className='text-gray-600'>ABC Cafe House</span>
          </div>
          <div className='space-y-3 mt-5'>
            <h5 className='text-xl font-semibold'>Service</h5>
            <span className='text-gray-600'>{data.cat_name}</span>
          </div>
          <div className='space-y-3 mt-5'>
            <h5 className='text-xl font-semibold'>Project Timeline</h5>
            <span className='text-gray-600'>2023-2024</span>
          </div>
          <div className='space-y-3 mt-5'>
            <h5 className='text-xl font-semibold'>Increased ROI revenue</h5>
            <span className='text-gray-600'>30%</span>
          </div>
        </div>

        {/* Project Brief */}
        <h3 className="mt-10 text-2xl font-semibold wow animate__animated animate__fadeInUp">Project Brief</h3>


        <div className='px-5 wow animate__animated animate__fadeInUp'>
        <p className='mt-3 text-gray-700' dangerouslySetInnerHTML={{ __html: data.about_project }} />

        {/* Challenging Part */}
        <h3 className="mt-10 text-2xl font-semibold mb-3">Challenging Part</h3>
        <p className='text-gray-700'>
          ARTVISTA faced the challenge of translating the unique ambiance and allure of their physical gallery into an engaging online experience.
        </p>

        {/* Solution */}
        <h3 className="mt-10 text-2xl font-semibold mb-3">Solution</h3>
        <p className='text-gray-700'>
          Onepixel Soft approached the project with a focus on marrying aesthetics with functionality...
        </p>

        <h3 className="mt-10 text-2xl font-semibold mb-3">Innovation</h3>
        <p className='mb-3 text-gray-700'>
          Onepixel Soft introduced several innovative features to differentiate ARTVISTA&apos;s website from traditional art gallery platforms:
        </p>
        <ol className="list-inside list-decimal pl-5 space-y-3">
          <li><strong>Virtual Tours:</strong> Utilizing 360-degree photography and virtual reality technology.</li>
          <li><strong>Artwork Customization Tool:</strong> An interactive tool allows users to visualize artwork within their own space.</li>
          <li><strong>Art Discovery Algorithm:</strong> Leveraging machine learning algorithms for personalized recommendations.</li>
        </ol>

        {/* Images Section */}
<div className="case-details__image-sm mt-10 grid grid-cols-2  lg:grid-cols-3 gap-5">
  {/* Image 1 */}
  <div className="relative w-full h-30 md:h-[30vh] ">
    <Image
      src="/assets/images/project/default-image.png"
      alt={data.project_name}
      fill
      className="object-cover rounded-lg shadow-lg"
    />
  </div>

  {/* Image 2 */}
  <div className="relative w-full h-30 md:h-[30vh] ">
    <Image
      src="/assets/images/project/default-image.png"
      alt={data.project_name}
      fill
      loading="lazy"
      className="object-cover rounded-lg shadow-lg"
    />
  </div>

  {/* Image 3 */}
  <div className="relative w-full h-30 md:h-[30vh] ">
    <Image
      src="/assets/images/project/default-image.png"
      alt={data.project_name}
      fill
      loading="lazy"
      className="object-cover rounded-lg shadow-lg"
    />
  </div>
</div>


        {/* Results Section */}
        <h3 className="mt-10 text-2xl font-semibold">Results</h3>
        <ul className="list-disc pl-5 text-gray-700 mb-10 space-y-3 mt-3">
          <li><strong>Enhanced User Engagement:</strong> 40% increase in user engagement metrics.</li>
          <li><strong>Increased Sales and Conversions:</strong> 30% increase in online sales.</li>
          <li><strong>Positive Feedback and Recognition:</strong> Industry accolades for innovation.</li>
        </ul>

        {/* Testimonial Section */}
        <div className=" rounded-lg bg-cover bg-center mb-10 p-10 text-white" style={{ backgroundImage: "url('/assets/images/case/bg-image.png')" }}>
          <p>{`"Onepixel Soft's innovative design transformed our art gallery's online presence. We're thrilled with the results."`}</p>
          <div className="flex justify-between mt-5">
            <div className="flex gap-2 items-center ">
              <div className='relative w-10 h-10'>

                <Image loading="lazy" src="/assets/images/case/user.png" alt="User" fill sizes='100%' className=" rounded-full object-contain" />
              </div>
              <h5 className="font-bold">
                <a href={data.project_url} className="text-white">
                  Edward Rafael
                </a>
              </h5>
              <span className="text-sm">Director of ARTVISTA</span>
            </div>
            <svg
              width={52}
              height={40}
              viewBox="0 0 52 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M51.0467 23.7413L43.765 38.2763C43.2833 39.2396 42.2917 39.8346 41.2433 39.8346H33.9617C32.9133 39.8346 32.2333 38.7296 32.6867 37.7946L40.1667 22.8346H33.0833C30.7317 22.8346 28.8333 20.9363 28.8333 18.5846V4.41797C28.8333 2.0663 30.7317 0.167969 33.0833 0.167969H47.25C49.6017 0.167969 51.5 2.0663 51.5 4.41797V21.843C51.5 22.4946 51.3583 23.1463 51.0467 23.7413ZM23.1667 21.843V4.41797C23.1667 2.0663 21.2683 0.167969 18.9167 0.167969H4.75C2.39833 0.167969 0.5 2.0663 0.5 4.41797V18.5846C0.5 20.9363 2.39833 22.8346 4.75 22.8346H11.8333L4.35333 37.7946C3.87167 38.7296 4.57999 39.8346 5.62833 39.8346H12.91C13.9867 39.8346 14.9783 39.2396 15.4317 38.2763L22.7133 23.7413C22.9967 23.1463 23.1667 22.4946 23.1667 21.843Z"
                fill="currentColor"
                fillOpacity="0.4"
              />
            </svg>
          </div>
        </div>
        <h3 className="mt-10 text-2xl font-semibold">Conclusion</h3>
        <p className="text-gray-700">
          The collaboration between ARTVISTA and Onepixel Soft exemplifies the power of innovative UI/UX design...
        </p>
      </div>

      </div>
    </section>
  );
}
