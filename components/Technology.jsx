import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import AOS from "aos";

const Technology = ({ technologies }) => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
    AOS.refresh();
  }, []);

  return (
    <div
      id="technologies"
      className="max-w-[1440px] dark:bg-inherit  py-20 mx-auto md:px-[100px] px-4"
    >
      <div className="mx-auto flex  flex-col dark:text-gray-200">
        <motion.span
          data-aos="zoom-in-up"
          className="text-3xl my-10 font-bold self-center mx-auto"
        >
          Technologies
        </motion.span>
        <div
          data-aos="zoom-in-up"
          className="text-lg text-center dark:text-gray-300  self-center mx-auto"
        >
          Learn more about my skills, these are the core technologies I use in
          making all these magic happen feel free to click and learn about them.
          <br />
          <em className="text-xs">
            This website is powered Nextjs | DjangoRestFramework | Tailwinds
          </em>{" "}
        </div>
      </div>
      <div className="grid sm:grid-rows-3 grid-rows-6 grid-flow-col gap-2   mt-10">
        {technologies.map(({ url, id, icon, name }) => {
          return (
            <a href={url} key={id}>
              <div
                data-aos="zoom-in-up"
                key={id}
                className="flex justify-center h-[170px] max-w-full flex-col  rounded-lg items-center hover:bg-gray-300  p-3   bg-gray-200 dark:hover:bg-[#181b1f] dark:bg-[#101215]"
              >
                {icon && <Image height={90} width={90} src={icon} alt={name} />}
                <span className="text-md dark:text-gray-200 py-2">{name}</span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Technology;
