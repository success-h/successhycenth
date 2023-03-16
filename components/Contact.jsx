import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import { ContactData } from "./DATA";

const Contact = ({ contact }) => {
  return (
    <div
      id="contact"
      className="max-w-[1440px] dark:bg-inherit mx-auto md:px-[100px] sm:px-4"
    >
      <div className="mx-auto px-7 flex flex-col">
        <span
          data-aos="zoom-in-up"
          className="text-3xl dark:text-gray-200  my-5 font-bold self-center mx-auto"
        >
          Contact Me
        </span>
        <span
          data-aos="zoom-in-up"
          className="text-lg dark:text-gray-200  text-center self-center mx-auto"
        >
          Lets connect and work together on your next project.
        </span>
      </div>
      <div className="py-10 flex mb-40 gap-2 items-center justify-center">
        {ContactData?.map((item) => (
          <a
            data-aos="zoom-in-up"
            href={item.url}
            key={item.id}
            className="mx-2 cursor-pointer"
          >
            <div className="bg-gray-300 dark:bg-gray-800 p-2 rounded-full flex items-center justify-center">
              <Image
                height={30}
                width={30}
                src={item.icon}
                alt="icons"
                priority
              />
            </div>
          </a>
        ))}
      </div>
      <div className="mx-auto flex dark:text-gray-200  justify-center my-4">
        Copyright &copy; {new Date().getFullYear()} - Success Hycenth
      </div>
    </div>
  );
};

export default Contact;
