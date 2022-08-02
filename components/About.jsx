import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BiBadgeCheck } from "react-icons/bi";
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
  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <div
      id="about"
      className="max-w-[1440px] bg-gray-200 dark:bg-inherit  py-20 mx-auto md:px-[100px] px-4"
    >
      <div className="mx-auto flex  flex-col ">
        <span className="text-3xl sm:mt-10 font-bold self-center dark:text-gray-200  mx-auto">
          About Me
        </span>
        <motion.div
          initial="hidden"
          variants={fadeInUp}
          animate={control}
          ref={ref}
          transition={{
            delay: 0.1,
            duration: 1,
            ease: easing,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-lg my-10 dark:text-gray-400 flex-col flex items-center justify-center mx-auto"
        >
          <motion.div className="sm:w-3/5 flex justify-center pl-4 mb-4">
            <div className="text-black self-start dark:text-white">
              <BiBadgeCheck className="w-7 h-7 mr-3" />
            </div>
            <p className="text-sm  text-start">
              A passionate Software Developer with hands on experience in
              developing fast,beautiful and responsive web apps with leading &
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
              A Developer with knowledge and expenrence with Search Engine
              OptimizatioO(SEO), and beautiful UI/UX designer.
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
        </motion.div>
      </div>
      <motion.div className="mx-auto">
        <div className="flex flex-col md:flex-row">
          {about.map((item) => {
            return (
              <motion.div
                initial="hidden"
                variants={fadeInUp}
                animate={control}
                ref={ref}
                key={item.id}
                transition={{
                  delay: 0.03,
                  duration: 0.8,
                  ease: easing,
                }}
                whileInView={{ opacity: 1, y: 0 }}
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
        <p className="text-sm sm:w-1/2 mx-auto text-center mt-10 text-start">
          I'm very excited to have you here. Feel free to reach out to me with
          any project ideas you have or to just say hello😄, I'm always happy to
          Help..
        </p>
      </motion.div>
    </div>
  );
};
