import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Home = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <>
      <div name="home" id="home" className="w-full h-screen bg-[#0a192f]  ">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="text-[#ffffff] font-bold text-2md">
              HEY THERE, MY NAME IS
            </p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#2D9FE7]">
              JONATHAN BATAC
            </h1>
            <h5 className="text-4xl sm:text-5xl font-bold text-[#ccd6f6]">
              I'm a Full Stack Developer.
            </h5>
            <h2 className="text-[#f5f8ff] py-4 max-w-[700px] font-medium">
              I am a skilled Full Stack Web Developer proficient in PHP,
              JavaScript, jQuery, HTML, CSS, and Bootstrap, adept at creating
              dynamic and visually appealing web applications to enhance user
              experiences. With a solid foundation in both front-end and
              back-end development, I take pride in delivering innovative
              solutions that bring ideas to life on the digital frontier.
            </h2>
            <div>
              <AnchorLink
                className="text-white group border-2 px-6 py-3 my-2 flex item-center hover:bg-[#2D9FE7] hover:border-[#2D9FE7] transition duration-500"
                onClick={() => setSelectedPage("work")}
                href="#work"
              >
                View Work
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3 mt-1" />
                </span>
              </AnchorLink>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
