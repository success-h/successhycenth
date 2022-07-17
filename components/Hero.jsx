import React from "react";
import HeroSvg from "./HeroSvg";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        className="grid max-w-[1440px] md:px-[100px] mx-auto items-center  md:grid-cols-2 mt-40 px-4 gap-11"
      >
        <motion.h1
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -200, opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.19 }}
          className="text-4xl text-[#0d0824] leading-tight dark:text-gray-300 drop-shadow-3xl dark:drop-shadow-sm md:text-start font-bold lg:text-[54px]"
        >
          Hi 👋 I’m Success Hycenth, I’m a full-stack developer and a UI/UX
          Designer.
        </motion.h1>
        <HeroSvg className="max-h-[345px] max-w-[470px] drop-shadow-xl" />
      </motion.div>
    </div>
  );
};
