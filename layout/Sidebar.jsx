import React from "react";
import Link from "next/link";

const Sidebar = ({ menu, setMenu }) => {
  return (
    <div
      className={` ${
        menu ? "translate-x-0 " : "translate-x-full"
      } md:hidden absolute backdrop-blur-md top-0 right-0 left-0 dark:bg-[#0000009b] h-screen w-full"`}
    >
      <div
        className={`ease-in-out duration-700 px-4 pt-24 w-full h-full  dark:bg-[#000000] bg-white ${
          menu ? "translate-x-48 " : "translate-x-full"
        }`}
      >
        <div className="text-4xl font-Ranchers dark:text-sky-500 cursor-pointer">
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
