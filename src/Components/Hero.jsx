import React, { useState } from "react";
import { motion } from "framer-motion";

function Hero() {
  const [loaded, setLoaded] = useState(false);

  // Animation variants
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <motion.div
      className="mx-auto font-serif w-[95%] sm:w-[85%] items-center pb-16 mt-12 md:mt-24 flex justify-between flex-wrap sm:flex-nowrap"
      variants={container}
      initial="hidden"
      animate="visible">
      {/* LEFT SIDE TEXT */}
      <motion.div className="flex flex-col gap-6 py-10 md:py-0 px-2 sm:w-[80%]">
        <motion.h1
          className="xl:text-6xl lg:text-6xl md:text-5xl text-4xl font-semibold"
          variants={fadeUp}>
          Hi there, I am
        </motion.h1>
        <motion.h1
          className="xl:text-6xl lg:text-6xl md:text-5xl text-4xl font-semibold text-green-600 overflow-hidden whitespace-nowrap animate-typing animate-blink"
          variants={fadeUp}>
          Shivam Pandey
        </motion.h1>

        <motion.p className="sm:text-lg text-md capitalize" variants={fadeUp}>
          I have been working as a Full-Stack Developer at SkillVertex for the
          past 7 months
        </motion.p>

        {/* Buttons */}
        <motion.div className="flex gap-2 mt-4" variants={fadeUp}>
          <a
            href="mailto:shivam6386000621@gmail.com"
            className="bg-green-600 text-white px-6 py-2 rounded-md relative overflow-hidden group">
            <span className="absolute top-0 left-0 w-full h-full bg-white opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition duration-500"></span>
            <span className="relative z-10 font-bold text-white">Hire Me</span>
          </a>

          <button className="relative text-gray-200 dark:text-black px-6 py-2  rounded-md overflow-hidden group">
            <span className="absolute inset-0 bg-green-600 transform -translate-x-full group-hover:translate-x-0  transition duration-300 text-white"></span>
            <span className="relative z-10 font-bold hover:text-white group-hover:text-gray-800">
              Latest Projects
            </span>
          </button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="flex items-center sm:gap-10 gap-6 mt-6"
          variants={fadeUp}>
          <div className="flex flex-col gap-1">
            <h4 className="text-xl sm:text-3xl font-bold">1</h4>
            <p className="text-sm sm:text-base text-gray-300 dark:text-gray-800">
              Years Experience
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-xl sm:text-3xl font-bold">10+</h4>
            <p className="text-sm sm:text-base text-gray-300 dark:text-gray-800">
              Projects Completed
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-xl sm:text-3xl font-bold">98%</h4>
            <p className="text-sm sm:text-base text-gray-300 dark:text-gray-800">
              Faster Project Delivery
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE — LAZY LOADED IMAGE */}
      <motion.div
        className=" sm:w-[30%] flex items-center justify-center mx-auto w-[90%]"
        variants={fadeIn}>
        <div className="relative rounded-lg p-2">
          <motion.img
            src="/me-removebg-preview.png"
            alt="Portfolio Image"
            loading="lazy"
            decoding="async"
            onLoad={() => setLoaded(true)}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 0.95 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-md object-cover object-center"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default React.memo(Hero);
