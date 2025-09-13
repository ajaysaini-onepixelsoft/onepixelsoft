import CommenHero from '@/Commen-components/CommenHero'
import Image from "next/image";
import Link from 'next/link';
import React from 'react';

export default function BlogDetails({ Slugdata }) {
  return (
    <>
      {/* Hero Section */}
      <CommenHero
        data={{
          slug: "bloge -1",
          heading: decodeURI(Slugdata), // Slug ko string me decode kiya
          des: "How to design modern, responsive blog detail pages",
        }}
      />

      <section className="px-5 lg:px-10 xl:px-40  py-12">
        {/* Main grid: article + sidebar */}
        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Article */}
          <article className="lg:col-span-2 bg-white rounded-2xl shadow-sm overflow-hidden p-6 md:p-10">
            {/* Article meta */}
            <div className="flex items-center gap-4">
              <Image
                src="/assets/images/blog/1744806283.jpg"
                alt="Author"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold">
                  By <span className="text-indigo-600">Aman Verma</span>
                </p>
                <p className="text-xs text-gray-500">
                  Published on Aug 25, 2025 · 7 min read
                </p>
              </div>
            </div>

            {/* title */}
            <h2 className="mt-6 text-2xl md:text-3xl font-extrabold">
                {decodeURI(Slugdata)}
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

            {/* content */}
            <div className="prose max-w-none mt-6 prose-indigo">
              <p>
                This is dummy content for the blog detail page. You can replace it
                with your dynamic data later. The layout is clean, responsive, and
                uses Tailwind CSS utilities.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at
                mauris ac libero convallis lacinia. Morbi volutpat lectus a erat
                vehicula, vitae suscipit justo fermentum. Nullam eget sapien non elit
                tincidunt tincidunt.
              </p>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="bg-white rounded-2xl shadow-sm p-6 h-fit">
            <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="block text-indigo-600 hover:underline line-clamp-2">
                  Why Tailwind CSS is the future of modern web design
                </Link>
              </li>
              <li>
                <Link href="#" className="block text-indigo-600 hover:underline line-clamp-2">
                  10 tips for creating better UI with utility-first CSS
                </Link>
              </li>
              <li>
                <Link href="#" className="block text-indigo-600 hover:underline line-clamp-2">
                  How to structure blog pages in Next.js effectively
                </Link>
              </li>
            </ul>
          </aside>
        </main>
      </section>
    </>
  );
}
