<<<<<<< HEAD
"use client";
import React, { useEffect } from "react";
import { FaChevronUp } from "react-icons/fa6";

export default function BackToTop() {
  useEffect(() => {
    const handleScroll = () => {
      const btn = document.getElementById("back-top");
      if (!btn) return;
      if (window.scrollY > 20) {
        btn.classList.add("show");
      } else {
        btn.classList.remove("show");
      }
    };

    const handleClick = (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    const btn = document.getElementById("back-top");
    btn?.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("scroll", handleScroll);
      btn?.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <button
      id="back-top"
      className="fixed z-[99] bottom-10 right-10 bg-[#731212] p-3 text-white rounded-lg opacity-0 transition-opacity duration-300"
    >
      <FaChevronUp size={15} />
    </button>
  );
=======
"use client"
import React, { useEffect } from 'react'
import { FaChevronUp  } from 'react-icons/fa6';

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
        <button id="back-top" className="fixed z-99 bottom-10 right-10 bg-[#731212] p-3 text-white rounded-lg">
            <FaChevronUp size={15}/>
        </button>
    )
>>>>>>> 6347013 (update)
}
