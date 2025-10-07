"use client"

import { getBloges } from '@/Api/Api';
import CommenHero from '@/Commen-components/CommenHero'
import { Loader } from '@/Commen-components/Lodding';
import Image from "next/image";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function BlogDetails({ Slugdata }) {
  const [BlogDetailsData, setBlogDetailsData] = useState([])
  const [AllBlogDetailsData, setAllBlogDetailsData] = useState([])
  useEffect(() => {
    async function fetchData() {
      const blogData = await getBloges();
      const singledata = blogData.find((item) => item.blog_name === decodeURIComponent(Slugdata))
      setBlogDetailsData(singledata)
      setAllBlogDetailsData(blogData)
    }
    fetchData()
  }, [Slugdata])
  if(!BlogDetailsData){
    return "data not found"
  }
  return (
    <>
      {/* Hero Section */}
      <CommenHero
        data={{
          slug: "bloge -1",
          heading: decodeURIComponent(Slugdata),
          des: "How to design modern, responsive blog detail pages",
        }}
      />
      {
         BlogDetailsData.length === 0 ? <Loader /> :
          (
            <section className="px-5 lg:px-10 xl:px-40  py-12">
              <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <article className="lg:col-span-2 bg-white rounded-2xl border-gray-200 border overflow-hidden p-6 md:p-10">



                  {/* title */}
                  <h2 className="mt-6 text-2xl md:text-3xl font-extrabold">
                    {decodeURIComponent(Slugdata)}
                  </h2>

                  {/* hero image */}
                  <div className="mt-6 w-full rounded-lg overflow-hidden shadow-md relative h-64">
                    <Image
                      src="/assets/images/blog/1744806283.jpg"
                      alt="Article hero"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-4 pt-10">
                    <Image
                      src="/assets/images/blog/1744806283.jpg"
                      alt="Author"
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold">
                        By <span className="">OnePixelSoft</span>
                      </p>
                      <p className="text-xs text-gray-500">
                        {BlogDetailsData.created_date}
                      </p>
                    </div>
                  </div>
                  {/* content */}
                  <div className='mt-3' dangerouslySetInnerHTML={{ __html: BlogDetailsData.blog_desc }} />
                </article>

                {/* Sidebar */}
                <aside className="bg-white rounded-2xl border-gray-200 border p-6 h-fit">
                  <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
                  <ul className="space-y-4">
                    {AllBlogDetailsData.slice(0,4).map((item,index)=>{
                      return(
                        <li key={index} className='underline'>
                          <Link href={`/blog-details/${item.blog_name}`}>{item.blog_name}</Link>
                        </li>
                      )
                    })}
                  </ul>
                </aside>
              </main>
            </section>
          )
      }
    </>
  );
}
