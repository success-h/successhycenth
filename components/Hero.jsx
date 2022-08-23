import React, { useEffect } from "react";
import HeroSvg from "./HeroSvg";
import { motion } from "framer-motion";
import AOS from "aos";

export const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
    AOS.refresh();
  }, []);

  return (
    <div>
      <div
        data-aos="zoom-in"
        className="grid max-w-[1440px] md:px-[100px] mx-auto items-center  md:grid-cols-2 mt-40 px-4 gap-11"
      >
        <div className="grid">
          <h1 className="text-[35px] sm:text-[40px] text-center sm:text-left mb-3 text-[#0d0824] leading-tight dark:text-gray-300 drop-shadow-3xl dark:drop-shadow-sm font-bold">
            Hi <span className="animate-bounce">👋</span>I am Success Hycenth, a
            full-stack developer and a UI/UX Designer.
          </h1>
          <button className="justify-self-center mt-4 dark:bg-sky-500 sm:justify-self-start bg-gray-300 py-3 px-7 outline-none text-2xl font-medium hover:bg-emerald-400 active:bg-emerald-400 rounded-full">
            <a
              href="/SUCCESSCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              My Resume
            </a>
          </button>
        </div>
        <HeroSvg className="max-h-[345px] max-w-[470px] drop-shadow-xl" />
      </div>
    </div>
  );
};
