import React from "react";
import Image from "next/image";

const Contact = ({ contact }) => {
  return (
    <div
      id="contact"
      className="max-w-[1440px] dark:bg-inherit mx-auto md:px-[100px] sm:px-4"
    >
      <div className="mx-auto flex flex-col">
        <span className="text-3xl dark:text-gray-200  my-5 font-bold self-center mx-auto">
          Contact Me
        </span>
        <span className="text-lg dark:text-gray-200  text-center self-center mx-auto">
          Lets get in touch and talk about your project.
        </span>
      </div>
      <div className="py-10 flex gap-2 items-center justify-center">
        {contact.map((item) => (
          <a href={item.link} key={item.id} className="mx-2">
            <div className="bg-gray-300 p-2 dark:bg-gray-500 rounded-full flex items-center justify-center">
              <Image
                height={30}
                width={30}
                src={item?.icon}
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
