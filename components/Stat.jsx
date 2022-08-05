import React, { useEffect } from "react";
import { FaGithubAlt } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import AOS from "aos";

const Stat = () => {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch("https://api.github.com/users/success-h/repos");
      const data = await res.json();
      setData(data);
    })();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1400 });
    AOS.refresh();
  }, []);

  const arrayLength = data.length;
  return (
    <div data-aos="zoom-in-up" className="px-4 my-20">
      <div className="p-7 mx-auto flex  max-w-[600px] items-center justify-around rounded-2xl shadow-2xl mt-10">
        <a href="https://github.com/success-h/">
          <div className="flex items-center gap-4">
            <div className="rounded-full p-2 sm:p-2 bg-gray-200 dark:bg-gray-800">
              <AiOutlineFundProjectionScreen className="sm:h-7 dark:text-gray-200 h-5 w-5 sm:w-7" />
            </div>
            <div className="flex flex-col">
              <span className="dark:text-gray-200 ">{data.length / 2}</span>
              <span className="dark:text-gray-200 ">Projects</span>
            </div>
          </div>
        </a>
        <div className="h-10 bg-slate-800 opacity-30 w-[1px]"></div>
        <a href="https://github.com/success-h/">
          <div className="flex items-center gap-4">
            <div className="rounded-full  p-3 sm:p-5 bg-gray-200 dark:bg-gray-800">
              <FaGithubAlt className="sm:h-7 dark:text-gray-200 h-5 w-5 sm:w-7" />
            </div>
            <div className="flex dark:text-gray-200 flex-col">
              <span className="dark:text-gray-200 ">{`${arrayLength}+`}</span>
              <span className="dark:text-gray-200 ">Repos</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Stat;
