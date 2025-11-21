import { memo } from "react";
import { education } from "../store/EducationData";
import { motion } from "framer-motion";

function Educationcard() {
  // Framer Motion variants
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      <h1 className="text-[20px] font-extrabold font-serif">📙📖 Education</h1>

      <motion.main
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mx-auto my-10 py-2"
        variants={container}
        initial="hidden"
        animate="visible">
        {education.map((items) => (
          <motion.section
            key={items.id}
            className="bg-white rounded-2xl p-5 shadow-2xl border hover:scale-105 duration-200"
            variants={cardVariant}
            whileHover={{ scale: 1.05 }}>
            <h1 className="text-center font-extrabold font-serif text-[23px] mb-5 text-red-700">
              {items.Standard}
            </h1>

            <h1 className="font-serif py-1">
              <strong>College : </strong>
              {items.College}
            </h1>

            <p className="font-serif py-1">
              <strong>Description : </strong>
              {items.Description}
            </p>

            <div className="flex justify-between mt-6">
              <p className="font-serif py-1">
                <strong>Skill : </strong>
                {items.extraSkill1}
              </p>
            </div>

            <p className="font-extrabold font-serif text-blue-600">
              {items.skill}
            </p>
          </motion.section>
        ))}
      </motion.main>
    </>
  );
}

export default memo(Educationcard);
