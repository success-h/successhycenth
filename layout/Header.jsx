import React, { useState } from "react";
import Link from "next/link";
import { RiMoonFill } from "react-icons/ri";
import { BsSunFill } from "react-icons/bs";
import { IoReorderTwoOutline } from "react-icons/io5";
import { useTheme } from "next-themes";
import Sidebar from "./Sidebar";
const Header = () => {
  const [menu, setMenu] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? "light" : theme;
    if (currentTheme === "dark") {
      return (
        <BsSunFill
          className="w-8 h-8 dark:text-yellow-500"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <RiMoonFill className="w-7 h-7" onClick={() => setTheme("dark")} />
      );
    }
  };
  return (
    <>
      <div className="fixed hidden py-7 z-10 backdrop-blur-2xl dark:backdrop-blur-0 dark:bg-[#11121E]  bg-opacity-5 md:flex  top-0 left-0 right-0 justify-between items-center px-[100px]  mx-auto text-gray-800 dark:text-gray-100">
        <div className="text-[30px] dark:text-yellow-500">
          <Link href="/#">
            <span
              style={{
                fontFamily: "'Ranchers', cursive",
              }}
              className="cursor-pointer"
            >
              SUCCESS
            </span>
          </Link>
        </div>
        <div className="flex text-[18px] dark:text-gray-200 gap-10">
          <a href="/#about">About</a>
          <a href="/#projects">Projects</a>
          <a href="/#technologies">Technologies</a>
          <a href="/#contact">Contact</a>
        </div>
        <div className="">{renderThemeChanger()}</div>
      </div>

      {/* small screen */}
      <div className="flex md:hidden z-10 py-5 px-4 items-center dark:backdrop-blur-0 dark:bg-[#11121E] justify-between fixed backdrop-blur-2xl top-0 left-0 right-0">
        <div className="">{renderThemeChanger()}</div>
        <div className="z-10">
          <IoReorderTwoOutline
            onClick={() => setMenu(!menu)}
            className="text-3xl dark:text-gray-200"
          />
        </div>
        {menu && <Sidebar menu={menu} setMenu={setMenu} />}
      </div>
    </>
  );
};

export default Header;
