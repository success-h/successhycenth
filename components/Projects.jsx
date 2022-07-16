import React from "react";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import ShowMoreText from "react-show-more-text";
import { useRouter } from "next/router";

let easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  hidden: {
    y: 60,
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
  const [element, controls] = useScroll();
  function executeOnClick(isExpanded) {}
  console.log("projects", projects);

  return (
    <motion.div
      ref={element}
      animate={controls}
      transition={{ duration: 1 }}
      id="projects"
      className="max-w-[1440px] dark:bg-inherit  py-20 mx-auto md:px-[100px] px-4"
    >
      <div className="mx-auto flex dark:text-gray-100 flex-col ">
        <motion.span
          initial="hidden"
          variants={fadeInUp}
          ref={element}
          animate={controls}
          transition={{
            delay: 0.03,
            duration: 0.8,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl my-10 font-bold self-center mx-auto"
        >
          Projects
        </motion.span>
        <motion.div
          initial="hidden"
          variants={fadeInUp}
          animate={controls}
          ref={element}
          transition={{
            delay: 0.5,
            duration: 0.8,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-lg dark:text-gray-300  text-center self-center mx-auto"
        >
          Some opensource projects I have worked on in the past and currently.
        </motion.div>
      </div>
      <div className="my-10">
        <div className="grid md:grid-cols-2 gap-14 px-3 sm:px-10 xl:grid-cols-3 justify-center">
          {projects.map((project) => (
            <motion.a
              ref={element}
              href={project.link}
              initial="hidden"
              variants={fadeInUp}
              animate={controls}
              key={project.name}
              transition={{
                delay: 0.2,
                duration: 0.8,
              }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <motion.div>
                <div
                  key={project.id}
                  className="sm:min-w-fit sm:max-w-fit flex flex-col overflow-hidden rounded-lg transition ease-in-out delay-75"
                >
                  <div className="h-[200px] flex items-center justify-center">
                    <motion.img
                      src={project?.image}
                      className="rounded-lg w-full h-full object-cover object-center"
                      whileHover={{
                        scale: 1.1,
                        transition: {
                          ease: "easeInOut",
                          duration: 0.5,
                        },
                      }}
                      alt={project?.name}
                    />
                  </div>

                  <div className="bg-gray-white grid">
                    <div className="flex w-full my-2">
                      {project.tags.map((tag) => (
                        <div
                          key={tag.name}
                          className="px-2 mx-2 py-1 dark:bg-rose-500 text-xs my-1 rounded-full bg-gray-400"
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
                      onClick={executeOnClick}
                      expanded={false}
                      truncatedEndingComponent={"... "}
                    >
                      {project.description}
                      <div className="flex my-2 w-full justify-between">
                        <a href={project.link}>
                          <button
                            className="px-2 dark:bg-gray-700 rounded-sm py-1 bg-gray-300"
                            onClick={() => router.push(`${project.link}`)}
                          >
                            visit site
                          </button>
                        </a>
                        <a href={project.source}>
                          <button
                            className="px-2  dark:bg-gray-700 rounded-sm py-1 bg-gray-300"
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
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
