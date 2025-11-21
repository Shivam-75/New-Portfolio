import React, { Suspense, lazy } from "react";
import { iconsskill } from "../store/portfolio";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Lazy Loading Educationcard
const Educationcard = lazy(() => import("../Components/Educationcard"));

function Education() {
  const navigate = useNavigate();

  const desData = [
    {
      id: 1,
      tittle: "🎯 Goals",
      description:
        "My short-term goal is to become a full-stack developer and contribute to real-world projects. Long-term, I want to lead development teams and work on innovative digital solutions.",
    },
    {
      id: 2,
      tittle: "🧠 Learning Philosophy",
      description:
        "I believe in learning by doing — building projects, solving real problems, and staying active in the tech community. I'm always curious to learn new tools, frameworks, and best practices.",
    },
    {
      id: 3,
      tittle: "🌐 Let's Connect",
      description:
        "You can find me on GitHub and LinkedIn. I’m always open to collaboration, freelancing, and tech talks.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <main className="w-[95%] mx-auto overflow-hidden">
      {/* Back Button */}
      <motion.h1
        className="font-extrabold text-[30px] absolute hover:bg-red-500 rounded-full w-[50px] text-white z-30 flex justify-center cursor-pointer sm:mx-10 mt-4 mx-2"
        onClick={() => navigate(-1)}
        whileHover={{ scale: 1.1 }}>
        ←
      </motion.h1>

      {/* Header Image */}
      <motion.header
        className="sm:h-[90vh] h-[44vh] flex flex-col overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}>
        <img
          src="/image copy.png"
          alt="stake"
          loading="lazy"
          className="absolute z-10 w-[95%] h-[85vmin] rounded-lg shadow-xl"
        />
      </motion.header>

      {/* Skills & Technologies */}
      <motion.p
        className="font-serif font-bold text-[20px] py-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}>
        💻 Skills & Technologies
      </motion.p>

      <section className="grid sm:grid-cols-3 md:grid-cols-4 gap-3 p-2 lg:grid-cols-5">
        {Object.entries(iconsskill).map(([category, items]) => (
          <motion.div
            key={category}
            className="shadow-2xl bg-white p-3 rounded-xl border hover:scale-105 duration-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}>
            <h2 className="font-serif capitalize font-bold text-lg">
              {category}
            </h2>
            <ul className="flex gap-x-2 font-serif flex-wrap">
              {items.map((skill) => (
                <li key={skill} className="text-[15px]">
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>

      {/* Description Articles */}
      <section className="my-10 sm:p-4">
        {desData.map((item) => (
          <motion.article
            key={item.id}
            className="sm:p-2 font-serif w-[100%]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}>
            <h1 className="font-extrabold font-serif">{item.tittle}</h1>
            <p className="text-[14px] mx-7">{item.description}</p>
          </motion.article>
        ))}
      </section>

      {/* Lazy Loaded Component */}
      <Suspense
        fallback={
          <div className="text-center text-xl animate-pulse font-bold my-10">
            Loading Education Details...
          </div>
        }>
        <Educationcard />
      </Suspense>
    </main>
  );
}

export default Education;
