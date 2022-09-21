import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BiBadgeCheck } from "react-icons/bi";
import AOS from "aos";
import { AboutData } from "./DATA";

export const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
    AOS.refresh();
  }, []);

  return (
    <div
      id="about"
      className="max-w-[1440px] bg-stone-100 rounded-lg dark:bg-inherit  py-20 mx-auto md:px-[100px] px-4"
    >
      <div className="mx-auto flex  flex-col">
        <span
          data-aos="zoom-in-up"
          className="text-3xl sm:mt-10 font-bold self-center dark:text-gray-200  mx-auto"
        >
          About Me
        </span>
        <div
          data-aos="zoom-in-up"
          className="text-lg my-10 dark:text-gray-400 flex-col flex items-center justify-center mx-auto"
        >
          <motion.div className="sm:w-3/5 flex justify-center pl-4 mb-4">
            <div className="text-black self-start dark:text-white">
              <BiBadgeCheck className="w-7 h-7 mr-3" />
            </div>
            <p className="text-sm text-start">
              A passionate Software Developer with hands on experience in
              developing fast, beautiful and responsive web apps with leading &
              powerfull technologies.
            </p>
          </motion.div>
          <motion.div className="sm:w-3/5 flex mb-4 pl-4">
            <div className="text-black self-start dark:text-white">
              <BiBadgeCheck className="w-7 h-7 mr-3" />
            </div>
            <p className="text-sm  text-start">
              An individual with a good grasp of engineering concepts, data
              structures, algorithms and the general design of systems.
            </p>
          </motion.div>
          <motion.div className="sm:w-3/5 flex mb-4 pl-4">
            <div className="text-black self-start dark:text-white">
              <BiBadgeCheck className="w-7 h-7 mr-3" />
            </div>
            <p className="text-sm  text-start">
              A Developer with knowledge of Search Engine Optimization(SEO), and
              beautiful UI/UX designer.
            </p>
          </motion.div>
          <motion.div className="sm:w-3/5 flex mb-4 pl-4">
            <div className="text-black self-start dark:text-white">
              <BiBadgeCheck className="w-7 h-7 mr-3" />
            </div>
            <p className="text-sm  text-start">
              Currently making progress at the Opensource community.
            </p>
          </motion.div>
        </div>
      </div>
      <motion.div className="mx-auto">
        <div className="flex flex-col items-center lg:flex-row">
          {AboutData?.map((item) => {
            return (
              <div
                key={item.id}
                data-aos="zoom-in-up"
                className="flex dark:shadow-sm dark:shadow-gray-900 dark:hover:border rounded-lg border-gray-700 m-4 max-w-xl py-6 px-5 flex-1 flex-col items-center gap-10"
              >
                <motion.img
                  className="w-[200px] h-[200px]"
                  src={item.icon}
                  alt={item.title}
                />
                <div className="flex sm:w-3/5 md:w-full p-2 dark:text-gray-300 self-center flex-col">
                  <motion.div className="text-2xl text-center font-bold py-3">
                    {item?.title}
                  </motion.div>
                  <motion.div className="text-center">
                    {item?.description}
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
        <p
          data-aos="zoom-in-up"
          className="text-sm sm:w-1/2 mx-auto text-center mt-10 text-start"
        >
          I'm very excited to have you here. Feel free to reach out to me with
          any project ideas you have or to just say hello😄, I'm always happy to
          Help..
        </p>
      </motion.div>
    </div>
  );
};
