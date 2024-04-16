import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div
        name="about"
        id="about"
        className="w-full h-screen bg-[#0a192f] text-gray-300"
      >
        <div className="flex flex-col justify-center items-center w-full h-full">
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
            <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
              <div className="sm:text-left pb-8 pl-4">
                <p className="text-4xl text-left font-bold inline border-b-4 border-[#2D9FE7]">
                  
                  About
                </p>
              </div>
              <div></div>
            </div>
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
              <div className="sm:text-left text-4xl font-bold">
                <p>
                  Hi. I'm Jonathan, nice to meet you. Please take a look around.
                </p>
              </div>
              <div>
                <p className="font-medium">
                  In my experience of more than 5 years as a web developer, I
                  can offer a wide range of skills with my expertise in various
                  programming languages specifically in PHP, MYSQL, jQuery and
                  Javascript and for front end , such as HTML ,CSS and
                  bootstrap, laravel framework, which were primarily used to
                  develop in-house systems.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
