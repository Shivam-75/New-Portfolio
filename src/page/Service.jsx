import { ServiceData } from "../store/survicess.jsx";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Service() {
  const navigate = useNavigate();

  // Variants
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="lg:h-[92vh] w-[90%] mx-auto flex my-5 flex-col"
      variants={container}
      initial="hidden"
      animate="visible">
      {/* Back Button */}
      <motion.h1
        className="font-extrabold text-[30px] absolute hover:bg-red-500 rounded-full px-2 flex justify-center cursor-pointer"
        onClick={() => navigate(-1)}
        whileHover={{ scale: 1.1 }}>
        ←
      </motion.h1>

      {/* Header */}
      <motion.header
        className="flex items-center flex-col justify-center mt-2"
        variants={fadeUp}>
        <h1 className="font-serif text-[30px] font-extrabold capitalize">
          Service
        </h1>

        {/* Services Grid */}
        <motion.main
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 xl:grid-cols-3 py-10"
          variants={container}>
          {ServiceData.map((item) => (
            <motion.div
              key={item.id}
              className="hover:scale-105 duration-200 p-2 py-7 rounded-lg text-center shadow-2xl border"
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}>
              <h1 className="text-red-600 text-center flex justify-center text-4xl">
                {item.icon}
              </h1>
              <h1 className="font-serif font-extrabold text-[20px] mt-3">
                {item.title}
              </h1>
              <p className="text-[15px] mt-4 font-serif">{item.description}</p>
            </motion.div>
          ))}
        </motion.main>
      </motion.header>
    </motion.div>
  );
}

export default Service;
