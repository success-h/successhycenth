import Image from "next/image";
import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";

let easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  hidden: {
    y: 200,
    opacity: 0,
    transition: { duration: 0.7, ease: easing },
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

export const About = ({ about }) => {
  const [element, controls] = useScroll();

  return (
    <div
      id="about"
      className="max-w-[1440px] bg-gray-200 dark:bg-inherit  py-20 mx-auto md:px-[100px] px-4"
    >
      <div className="mx-auto flex  flex-col ">
        <motion.span
          initial="hidden"
          variants={fadeInUp}
          animate={controls}
          ref={element}
          transition={{
            delay: 0.03,
            duration: 0.8,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl sm:mt-10 font-bold self-center dark:text-gray-200  mx-auto"
        >
          About Me
        </motion.span>
        <motion.span
          initial="hidden"
          variants={fadeInUp}
          animate={controls}
          transition={{
            delay: 0.03,
            duration: 0.8,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-lg my-10 text-center dark:text-gray-400  mx-auto"
        >
          I'm a full-stack web developer and I'm passionate about building apps
          that are fast and easy to use.
        </motion.span>
      </div>
      <motion.div className="mx-auto">
        <div className="flex flex-col md:flex-row">
          {about.map((item) => {
            return (
              <motion.div
                initial="hidden"
                variants={fadeInUp}
                animate={controls}
                transition={{
                  delay: 0.03,
                  duration: 0.8,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                key={item.id}
                className="flex dark:shadow-2xl py-6 px-5 flex-1 flex-col items-center gap-10"
              >
                <motion.img
                  className="w-[200px] h-[200px]"
                  src={item?.icon}
                  alt={item.name}
                />
                <div className="flex sm:w-3/5 md:w-full p-2 dark:text-gray-300 self-center flex-col">
                  <motion.div className="text-2xl text-center font-bold py-3">
                    {item.title}
                  </motion.div>
                  <motion.div className="text-center">
                    {item.description}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};
