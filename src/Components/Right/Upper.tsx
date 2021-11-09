import React, { FunctionComponent } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Upper: FunctionComponent = () => {
  return (
    <div className="flex justify-between  border-2 bg-three p-2">
      <div className="text-5xl text-five font-black antialiased hidden lg:flex ">
        PAULSITE
      </div>

      <div className="text-4xl text-one font-black hidden sm:flex">
        Wong Ching Tak Paul
      </div>

      <div className="text-2xl text-one font-black flex sm:hidden">
        Paul Wong
      </div>

      <div className=" flex flex-col">
        <div className="flex flex-row justify-center text-4xl">
          <a
            href="https://www.linkedin.com/in/paulwong177/"
            className=" hover:text-five"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Pjaijai?tab=repositories"
            className="hover:text-five"
          >
            <FaGithub />
          </a>
        </div>

        <div className="text-xs mt-3">pwongct2000@gmail.com</div>
      </div>
    </div>
  );
};

export default Upper;
