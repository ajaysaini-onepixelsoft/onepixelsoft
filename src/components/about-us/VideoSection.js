import Image from "next/image";
import { useState } from "react";
export default function VideoSection() {
    const [isOpen, setOpen] = useState(false);

    return (
        <section className="">
            <div className="xl:px-40 wow lg:px-10 px-5 pt-15 animate__animated  animate__fadeInUp">
                <div className="relative rounded-lg overflow-hidden shadow-lg md:h-[30rem] h-[12rem] md:w-full w-full">
                    <Image
                        src="/assets/images/about/about-video-image.jpg"
                        alt="About us video" fill loading="lazy"
                        className="w-full h-full object-cover object-center brightness-40"
                    />
                    <button
                        className="absolute inset-0 flex items-center justify-center  bg-opacity-30 hover:bg-opacity-50 transition group"
                        aria-label="Play video"
                        onClick={() => setOpen(true)}
                    >
                        <span className="flex items-center justify-center w-20 h-20 rounded-full bg-white bg-opacity-80 group-hover:bg-opacity-100 shadow-lg transition">
                            <svg className="w-10 h-10 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    onClick={() => setOpen(false)}
                >
                    <div
                        className="relative bg-black rounded-lg overflow-hidden shadow-xl"
                        onClick={(e) => e.stopPropagation()}
                        role="dialog"
                        aria-modal="true"
                    >
                        <button
                            className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-red-500 transition"
                            aria-label="Close video"
                            onClick={() => setOpen(false)}
                        >
                            &times;
                        </button>
                        <iframe
                            width="800"
                            height="450"
                            src="https://www.youtube.com/embed/TqER7cWAaus?autoplay=1"
                            title="YouTube video player"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            className="block"
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
}
