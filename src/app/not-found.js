import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-white">
      <div className="text-center px-6">
        <h1 className="text-[120px] font-extrabold leading-none text-[#751212]">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-black">Page Not Found</h2>
        <p className="text-base md:text-lg text-gray-800 mb-8">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        <Link 
          href="/"
          className="inline-block px-6 py-3 rounded-xl bg-white text-[#751212] font-semibold hover:bg-gray-100 transition-colors duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  )
}
