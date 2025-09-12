"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Footer from "../layout/Footer/Footer";
import HomeFooter from "../home/HomeFooter";
import "animate.css/animate.css";

export default function ClientWrapper({ children }) {
  const slug = usePathname();

  useEffect(() => {
    (async () => {
      const WOW = (await import("wow.js")).default;
      const wow = new WOW({
        offset: 100,
        mobile: true,
      });
      wow.init();
    })();
  }, []);

  return (
    <div>
      {children}
      {slug === "/" ? <HomeFooter /> : <Footer />}
    </div>
  );
}
