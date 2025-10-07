"use client"
import React, { useEffect } from 'react'
import { FaArrowUp, FaChevronUp  } from 'react-icons/fa6';

export default function BackToTop() {
    useEffect(() => {
        document.addEventListener("scroll", function () {
            if (window.scrollY > 20) {
                document.getElementById("back-top")?.classList.add("show");
            } else {
                document.getElementById("back-top")?.classList.remove("show");
            }
        });

        document.getElementById("back-top")?.addEventListener("click", function (event) {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }, [])
    return (
        <button id="back-top" className="fixed cursor-pointer z-99 bottom-10 right-10 bg-[#731212] p-3 text-white rounded-lg">
            <FaArrowUp size={15}/>
        </button>
    )
}
