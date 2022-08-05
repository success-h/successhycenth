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
        <h1 className="text-[40px] text-center mb-3 text-[#0d0824] leading-tight dark:text-gray-300 drop-shadow-3xl dark:drop-shadow-sm md:text-start font-bold lg:text-[54px]">
          Hi <span className="animate-bounce">👋</span> I’m Success Hycenth, I’m
          a full-stack developer and a UI/UX Designer.
        </h1>
        <HeroSvg className="max-h-[345px] max-w-[470px] drop-shadow-xl" />
      </div>
    </div>
  );
};
