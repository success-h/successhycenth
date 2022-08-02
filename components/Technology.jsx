import React, { useEffect } from "react";
import Image from "next/image";
import { useScroll } from "./useScroll";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

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

const Technology = ({ technologies }) => {
  const [ref, inView] = useInView();
  const control = useAnimation();
  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <div
      id="technologies"
      className="max-w-[1440px] dark:bg-inherit  py-20 mx-auto md:px-[100px] px-4"
    >
      <div className="mx-auto flex  flex-col dark:text-gray-200">
        <motion.span
          initial="hidden"
          variants={fadeInUp}
          animate={control}
          ref={ref}
          transition={{
            delay: 0.03,
            duration: 0.8,
            ease: easing,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl my-10 font-bold self-center mx-auto"
        >
          Technologies
        </motion.span>
        <motion.span
          initial="hidden"
          variants={fadeInUp}
          animate={control}
          ref={ref}
          transition={{
            delay: 0.03,
            duration: 0.8,
            ease: easing,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-lg text-center dark:text-gray-300  self-center mx-auto"
        >
          Learn more about my skills, these are the core technologies I use in
          making all these magic happen feel free to click and learn about them.
          <br />
          <em className="text-xs">
            This website is powered Nextjs | DjangoRestFramework | Tailwinds
          </em>{" "}
        </motion.span>
      </div>
      <div className="grid sm:grid-rows-3 grid-rows-6 grid-flow-col gap-2   mt-10">
        {technologies.map(({ url, id, icon, name }) => {
          return (
            <a href={url} key={id}>
              <motion.div
                initial="hidden"
                variants={fadeInUp}
                animate={control}
                ref={ref}
                transition={{
                  delay: 0.03,
                  duration: 0.8,
                  ease: easing,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                key={id}
                className="flex justify-center h-[170px] max-w-full flex-col  rounded-lg items-center hover:bg-gray-300  p-3   bg-gray-200 dark:hover:bg-gray-800 dark:bg-gray-900"
              >
                {icon && <Image height={90} width={90} src={icon} alt={name} />}
                <span className="text-md dark:text-gray-200  py-2">{name}</span>
              </motion.div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Technology;
