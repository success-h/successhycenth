import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ShowMoreText from "react-show-more-text";
import { useRouter } from "next/router";
import Image from "next/image";

let easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  hidden: {
    y: 300,
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
const Projects = ({ projects }) => {
  const router = useRouter();
  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      animate={control}
      transition={{ duration: 1.5, ease: easing }}
      id="projects"
      className="max-w-[1440px] dark:bg-inherit  py-20 mx-auto md:px-[100px] px-4"
    >
      <div className="mx-auto flex dark:text-gray-100 flex-col ">
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
          Projects
        </motion.span>
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
          className="text-lg dark:text-gray-300  text-center self-center mx-auto"
        >
          Some opensource projects I have worked on in the past and currently.
        </motion.div>
      </div>
      <div className="my-10">
        <div className="grid md:grid-cols-2 gap-14 px-3 sm:px-10 xl:grid-cols-3 justify-center">
          {projects.map((project, idx) => (
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
              key={project.name}
            >
              <div
                key={idx}
                className="sm:min-w-fit hover:shadow-lg border sm:max-w-fit flex flex-col overflow-hidden rounded-lg transition ease-in-out delay-75"
              >
                <div className="h-[200px] rounded-xl grid">
                  <Image
                    src={project.image}
                    height={200}
                    width={400}
                    objectFit="cover"
                    className="hover:scale-110 transition ease-in-out duration-300 transform cursor-pointer"
                    alt={project?.name}
                  />
                </div>

                <div className="bg-gray-white grid px-3 py-3">
                  <div className="flex w-full my-2">
                    {project.tags.map((tag) => (
                      <div
                        key={tag.name}
                        className="px-2 mx-2 py-1 dark:bg-gray-500 text-[9px] my-1 rounded-full bg-gray-200"
                      >
                        {tag.name}
                      </div>
                    ))}
                  </div>
                  <div className="text-start dark:text-gray-100  text-lg font-bold py-2">
                    {project.name}
                  </div>
                  <ShowMoreText
                    lines={2}
                    more="Show more"
                    less="Show less"
                    className="content-css"
                    anchorClass="my-anchor-css-class"
                    expanded={false}
                    truncatedEndingComponent={"... "}
                  >
                    <p className="text-xs">{project.description}</p>
                    <div className="flex my-3 w-full justify-between">
                      <a href={project.link}>
                        <button
                          className="px-2 text-xs dark:bg-gray-700 rounded-sm py-1 bg-gray-300"
                          onClick={() => router.push(`${project.link}`)}
                        >
                          visit site
                        </button>
                      </a>
                      <a href={project.source}>
                        <button
                          className="px-2 text-xs dark:bg-gray-700 rounded-sm py-1 bg-gray-300"
                          onClick={() => router.push(`${project.source}`)}
                        >
                          source code
                        </button>
                      </a>
                    </div>
                  </ShowMoreText>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
