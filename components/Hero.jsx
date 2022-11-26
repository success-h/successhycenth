import React, { useEffect } from 'react';
import HeroSvg from './HeroSvg';

export const Hero = () => {
  return (
    <div>
      <div className="grid max-w-[1440px] md:px-[100px] mx-auto items-center  md:grid-cols-2 mt-40 px-4 gap-11">
        <div className="grid">
          <h1 className="font-black text-transparent text-[60px] bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600 font-sans text-center sm:text-left mb-3 leading-tight">
            Hi, I am Success Hycenth.
          </h1>
          <p className="text-[20px] sm:text- mt-4 text-center sm:text-left mb-3 text-[#0d0824] leading-tight dark:text-gray-300 drop-shadow-3xl dark:drop-shadow-sm font-mono">
            An innovative Frontend Mobile/Web React Engineer, a connoisseur in
            building amazing user interfaces with React, and UI/UX Designer.
          </p>
          <button className="justify-self-center mt-4 dark:bg-sky-500 sm:justify-self-start bg-gray-300 py-2 px-7 outline-none text-2xl font-medium hover:bg-emerald-400 active:bg-emerald-400 rounded-full">
            <a
              href="/Success-Resume.pdf"
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
