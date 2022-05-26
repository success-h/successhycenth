import React from "react";
import Link from "next/link";

const Sidebar = ({ menu, setMenu }) => {
  return (
    <div className="md:hidden absolute  top-0 right-0 left-0 dark:bg-[#11121E] h-screen w-full">
      <div className=" px-4 pt-24 w-full h-full  dark:bg-[#11121E] bg-white">
        <div
          style={{
            fontFamily: "'Ranchers', cursive",
          }}
          className="text-4xl dark:text-yellow-500 cursor-pointer"
        >
          <Link href="/#">SUCCESS</Link>
        </div>
        <div
          onClick={() => setMenu(!menu)}
          className="my-4 dark:text-gray-200 mt-10 text-xl"
        >
          <a href="/#about">About</a>
        </div>
        <div
          onClick={() => setMenu(!menu)}
          className="my-4  dark:text-gray-200 text-xl"
        >
          <a href="/#projects">Projects</a>
        </div>
        <div
          onClick={() => setMenu(!menu)}
          className="my-4 dark:text-gray-200 text-xl"
        >
          <a href="/#technologies">Technologies</a>
        </div>
        <div
          onClick={() => setMenu(!menu)}
          className="my-4 dark:text-gray-200 text-xl"
        >
          <a href="/#contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
