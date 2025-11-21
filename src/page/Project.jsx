import { useNavigate } from "react-router-dom";
import { data } from "../store/projectdt";
import { motion } from "framer-motion";

function Project() {
  const navigate = useNavigate();

  // Animation variants
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
    <motion.main
      className="w-[90%] mx-auto my-[20px] md:h-[90vh]"
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

      {/* Page Title */}
      <motion.h1
        className="text-center text-[30px] font-serif font-extrabold py-3 my-10"
        variants={cardVariant}>
        Projects
      </motion.h1>

      {/* Projects Grid */}
      <section className="grid sm:grid-cols-2 mx-auto gap-y-6">
        {data.map((item) => (
          <motion.article
            key={item.id}
            className="flex flex-col sm:mx-2 mx-auto relative"
            variants={cardVariant}
            whileHover={{ scale: 1.03 }}>
            <div className="shadow-2xl bg-white border rounded-3xl p-4 py-3">
              <div className="lg:flex font-serif">
                {/* Project Image */}
                <motion.figure
                  whileHover={{ scale: 1.05 }}
                  className="overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt="Work"
                    style={{ width: item.width, height: item.height }}
                    className="rounded-lg"
                  />
                </motion.figure>

                {/* Project Info */}
                <div className="flex-auto ml-3 justify-evenly py-2">
                  <h3 className="text-center text-[20px] font-extrabold py-2 text-blue-600">
                    {item.ProjectName}
                  </h3>

                  <div className="flex justify-between py-3 font-serif flex-wrap w-full">
                    <p>{item.location}</p>
                    <p className="font-extrabold text-red-700">{item.date}</p>
                  </div>

                  <footer className="flex flex-col gap-y-2 text-sm font-medium">
                    <a
                      href={item?.link}
                      className="px-5 py-2 shadow-sm tracking-wider text-center text-white rounded-full bg-gray-400 hover:bg-green-800 font-extrabold duration-200">
                      {item.Content}
                    </a>
                    <button
                      onClick={() => navigate(`/details/${item.id}`)}
                      className="bg-red-600 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800 font-extrabold duration-200">
                      {item.buttons}
                    </button>
                  </footer>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </section>
    </motion.main>
  );
}

export default Project;
