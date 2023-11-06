import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Bootstrap from "../assets/bootstrap.png";
import Tailwind from "../assets/tailwind.png";
import Php from "../assets/php.png";
import Mysql from "../assets/mysql.png";
import JavaScript from "../assets/javascript.png";
import Jquery from "../assets/jquery.png";
import Laravel from "../assets/laravel.png";
import GitHub from "../assets/github.png";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <>
      <div
        name="skills"
        id="skills"
        className="w-full h-screen bg-[#0a192f] text-gray-300"
      >
        {/* Container */}
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-[1000px]">
          <motion.div
            className=""
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="">
              <p className="text-4xl font-bold inline border-b-4 border-[#2D9FE7]">
                <FontAwesomeIcon icon={faCode} className="me-2" /> Skills
              </p>
              <p className="py-4">PROGRAMMING LANGUAGES & TOOLS</p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto mt-2" src={HTML} alt="HTML icon" />
                <p className="my-4">HTML</p>
              </div>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto mt-2" src={CSS} alt="HTML icon" />
                <p className="my-4">CSS</p>
              </div>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img
                  className="w-20 mx-auto mt-2"
                  src={Bootstrap}
                  alt="HTML icon"
                />
                <p className="my-4 mt-7">BOOTSTRAP</p>
              </div>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img
                  className="w-20 mx-auto mt-2"
                  src={Tailwind}
                  alt="HTML icon"
                />
                <p className="my-4">TAILWIND</p>
              </div>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto mt-2" src={Php} alt="HTML icon" />
                <p className="my-4 mt-14">PHP</p>
              </div>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img
                  className="w-20 mx-auto mt-2"
                  src={Mysql}
                  alt="HTML icon"
                />
                <p className="my-4">MYSQL</p>
              </div>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img
                  className="w-20 mx-auto mt-2"
                  src={JavaScript}
                  alt="HTML icon"
                />
                <p className="my-4">JAVASCRIPT</p>
              </div>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img
                  className="w-20 mx-auto mt-2"
                  src={Jquery}
                  alt="HTML icon"
                />
                <p className="my-4">JQUERY</p>
              </div>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img
                  className="w-20 mx-auto mt-2"
                  src={Laravel}
                  alt="HTML icon"
                />
                <p className="my-4">LARAVEL</p>
              </div>
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img
                  className="w-20 mx-auto mt-2"
                  src={GitHub}
                  alt="HTML icon"
                />
                <p className="my-4">GITHUB</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Skills;
