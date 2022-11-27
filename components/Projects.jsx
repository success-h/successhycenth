import React, { useEffect } from 'react';
import ShowMoreText from 'react-show-more-text';
import { useRouter } from 'next/router';
import Image from 'next/image';
import AOS from 'aos';
import { ProjectData } from './DATA';

const Projects = () => {
  const router = useRouter();

  return (
    <div
      id="projects"
      className="max-w-[1440px] dark:bg-inherit  py-20 mx-auto md:px-[100px] px-4"
    >
      <div className="mx-auto flex dark:text-gray-100 flex-col ">
        <div
          data-aos="zoom-in-up"
          className="text-3xl my-10 font-bold self-center mx-auto"
        >
          Projects
        </div>
        <div
          data-aos="zoom-in-up"
          className="text-lg dark:text-gray-300  text-center self-center mx-auto"
        >
          Some projects I have worked on in the past and currently.
        </div>
      </div>
      <div className="my-10">
        <div className="grid md:grid-cols-2 gap-14 px-3 sm:px-10 xl:grid-cols-3 justify-center">
          {ProjectData?.map((project) => (
            <div data-aos="zoom-in-up" key={project.id}>
              <div className="sm:min-w-fit hover:shadow-lg border dark:shadow-2xl dark:shadow-gray-800 dark:border-gray-800 sm:max-w-fit flex flex-col overflow-hidden rounded-lg transition ease-in-out delay-75">
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
                        key={tag.id}
                        className="px-2 mx-2 py-1 dark:bg-gray-800 text-[9px] my-1 rounded-full bg-gray-200"
                      >
                        {tag.name}
                      </div>
                    ))}
                  </div>
                  <div className="text-start dark:text-gray-100  text-lg font-bold py-2">
                    {project.title}
                  </div>
                  <ShowMoreText
                    lines={2}
                    more="Show more"
                    less="Show less"
                    className="content-css"
                    anchorClass="my-anchor-css-class"
                    expanded={false}
                    truncatedEndingComponent={'... '}
                  >
                    <p className="text-xs">{project.description}</p>
                    <div className="flex my-3 w-full justify-between">
                      <a href={project.link}>
                        <button
                          className="px-2 text-xs dark:bg-sky-700 rounded-sm py-1 bg-gray-300"
                          onClick={() => router.push(`${project.link}`)}
                        >
                          visit site
                        </button>
                      </a>
                      <a href={project.source}>
                        <button
                          className="px-2 text-xs dark:bg-sky-700 rounded-sm py-1 bg-gray-300"
                          onClick={() => router.push(`${project.source}`)}
                        >
                          source code
                        </button>
                      </a>
                    </div>
                  </ShowMoreText>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
