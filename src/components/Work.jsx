import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { data } from "../data/data.js";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const Work = () => {
  // projects file
  const project = data;
  //setProject(data);

  return (
    <div
      name="work"
      id="work"
      className="w-full h-full text-gray-300 bg-[#0a192f]"
    >
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
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#2D9FE7]">
              <FontAwesomeIcon icon={faCode} className="me-2" /> Work
            </p>
            <p className="py-6">Check out some of my recent work</p>
          </div>

          {/* container for projects */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Gird Item */}
            {project.map((item, index) => (
              <div
                key={index}
                style={{ backgroundImage: `url(${item.image})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md 
                flex justify-center text-center items-center mx-auto content-div "
              >
                {/* Hover effect for images */}
                <div className="opacity-0 group-hover:opacity-100 ">
                  <span className="text-2xl font bold text-white tracking-wider ">
                    {item.name}
                  </span>
                  <div className="pt-8 text-center ">
                    {/* eslint-disable-next-line */}
                    <a href={item.github} target="_blank">
                      <button
                        className="text-center rounded-lg px-4 py-3 m-2
                        bg-white text-gray-700 font-bold text-lg"
                      >
                        Code
                      </button>
                    </a>
                    {/* eslint-disable-next-line */}
                    <a href={item.live} target="_blank">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Live
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Work;
