import React, { useState, Suspense, lazy } from "react";

function Hero() {
  // Image smooth fade-in effect
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="mx-auto font-serif w-[95%] sm:w-[85%] items-center pb-16 mt-12 md:mt-24 flex justify-between flex-wrap sm:flex-nowrap">
      {/* LEFT SIDE TEXT */}
      <div className="flex flex-col gap-6 py-10 md:py-0 px-2 sm:w-[80%]">
        <h1 className="xl:text-6xl lg:text-6xl md:text-5xl text-4xl font-semibold  2xl:text-[100px]">
          Hi there, I am
        </h1>
        <h1
          className="xl:text-6xl lg:text-6xl md:text-5xl text-4xl font-semibold text-green-600 overflow-hidden whitespace-nowrap   animate-typing animate-blink  2xl:text-[100px] 
">
          Shivam Pandey
        </h1>

        <p className="sm:text-lg text-md capitalize 2xl:text-[30px]">
          I have been working as a Full-Stack Developer at SkillVertex for the
          past 7 months
        </p>

        <div className="flex gap-2">
          <a
            href="mailto:shivam6386000621@gmail.com"
            className="bg-green-600 text-white px-6 py-2 rounded-md relative overflow-hidden group">
            <span className="absolute top-0 left-0 w-full h-full bg-white opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition duration-500"></span>
            <span className="relative z-10 font-bold text-white ">Hire Me</span>
          </a>

          <button className="relative text-gray-200 dark:text-black px-6 py-2  rounded-md overflow-hidden group">
            <span className="absolute inset-0 bg-green-600 transform -translate-x-full group-hover:translate-x-0  transition duration-300 text-white"></span>
            <span className="relative z-10 font-bold hover:text-white group-hover:text-gray-800">
              Latest Projects
            </span>
          </button>
        </div>

        {/* Stats Section */}
        <div className="flex items-center sm:gap-10 gap-6">
          <div className="flex flex-col gap-1">
            <h4 className="text-xl sm:text-3xl font-bold">
              1 <sup className="font-bold -ml-1"></sup>
            </h4>
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
        </div>
      </div>

      {/* RIGHT SIDE — LAZY LOADED IMAGE */}
      <div className="sm:w-[30%] flex items-center justify-center mx-auto w-[90%]">
        <div className="relative rounded-lg p-2">
          <img
            src="/me-removebg-preview.png"
            alt="Portfolio Image"
            loading="lazy"
            decoding="async"
            onLoad={() => setLoaded(true)}
            className={`rounded-full  ${loaded ? "opacity-100" : "opacity-0"}`}
          />
        </div>
      </div>
    </div>
  );
}

// Performance Optimization
export default React.memo(Hero);
