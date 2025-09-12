"use client";
import React, { useEffect } from "react";
import { FaChevronUp } from "react-icons/fa6";

export default function BackToTop() {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        document.getElementById("back-top")?.classList.add("show");
      } else {
        document.getElementById("back-top")?.classList.remove("show");
      }
    };

    const handleClick = (event: MouseEvent) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // ✅ add passive scroll listener
    document.addEventListener("scroll", handleScroll, { passive: true });
    document.getElementById("back-top")?.addEventListener("click", handleClick);

    // ✅ cleanup on unmount
    return () => {
      document.removeEventListener("scroll", handleScroll);
      document.getElementById("back-top")?.removeEventListener("click", handleClick);
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
}
