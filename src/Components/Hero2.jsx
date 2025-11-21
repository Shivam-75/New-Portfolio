import React from "react";
import { motion } from "framer-motion";

function Hero2() {
  const experienceData = [
    {
      id: 1,
      title: "Full Stack Developer - Skillvertex Pvt.Ltd",
      list: [
        "Developed scalable web applications using React, Node.js, and MongoDB.",
        "Improved the performance of the company dashboard by 35%.",
        "Collaborated with a team of 5 members in an agile environment.",
        "Handled API integrations and optimized user interface performance.",
      ],
    },
  ];

  // Framer Motion Variants
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <main className="sm:py-7 w-[90%] mx-auto mb-9">
      {/* Lazy Image */}
      <motion.figure
        className="my-10 flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}>
        <img
          src="/image.png"
          alt="Experience"
          loading="lazy"
          decoding="async"
          className="sm:w-[30%] rounded-lg shadow-xl"
        />
      </motion.figure>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}>
        {experienceData.map((item, i) => (
          <motion.div
            key={item.id}
            className="shadow-2xl border p-5 rounded-md bg-white"
            variants={fadeUp}>
            <h1 className="font-serif font-extrabold text-[23px] mb-4">
              {item.title}
            </h1>

            {item.list.map((data, idx) => (
              <motion.ol
                key={idx}
                className="list-disc"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}>
                <li className="mx-6 hover:scale-105 hover:text-blue-500 duration-200">
                  {data}
                </li>
              </motion.ol>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}

export default React.memo(Hero2);
