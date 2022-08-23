import React, { useState } from "react";
import { RiMoonFill } from "react-icons/ri";
import { BsSunFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import Sidebar from "./Sidebar";

const Header = () => {
  const genericHamburgerLine = `w-7 my-[3px] rounded-full bg-black dark:bg-white transition ease transform duration-300`;
  const { systemTheme, theme, setTheme } = useTheme();
  const [menu, setMenu] = useState(false);

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? theme : theme;
    if (currentTheme === "dark") {
      return (
        <BsSunFill
          className="w-8 h-8 dark:text-sky-500"
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
      <div className="fixed hidden py-7 z-10 backdrop-blur-md bg-opacity-5 md:flex  top-0 left-0 right-0 justify-between items-center px-[100px]  mx-auto text-gray-800 dark:text-gray-100">
        <a
          className="cursor-pointer font-Ranchers text-[30px] dark:text-sky-500"
          href="/#"
        >
          SUCCESS
        </a>
        <div className="flex text-[18px] dark:text-gray-200 gap-10">
          <a href="/#about">About</a>
          <a href="/#projects">Projects</a>
          <a href="/#technologies">Technologies</a>
          <a href="/#contact">Contact</a>
        </div>
        <div className="">
          {renderThemeChanger ? renderThemeChanger() : null}
        </div>
      </div>

      {/* small screen */}
      <div className="flex md:hidden z-10 py-5 px-4 items-center justify-between fixed backdrop-blur-md top-0 left-0 right-0">
        <div className="">{renderThemeChanger()}</div>
        <div className="z-10">
          <div
            className={`flex flex-col h-9 w-9 rounded justify-center items-center`}
            onClick={() => setMenu(!menu)}
          >
            <div
              style={{
                height: "3px",
              }}
              className={`${genericHamburgerLine} ${
                menu
                  ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-100 group-hover:opacity-100"
              }`}
            />
            <div
              style={{
                height: "3px",
              }}
              className={`${genericHamburgerLine} ${
                menu
                  ? "-translate-x-96 transition-all opacity-0"
                  : "opacity-100 group-hover:opacity-100"
              }`}
            />
            <div
              style={{
                height: "3px",
              }}
              className={`${genericHamburgerLine} ${
                menu
                  ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-100 group-hover:opacity-100"
              }`}
            />
          </div>
        </div>
        {menu && <Sidebar menu={menu} setMenu={setMenu} />}
      </div>
    </>
  );
};

export default Header;
