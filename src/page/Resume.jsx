import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Resume() {
  const navigate = useNavigate();

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <motion.main
      className="h-[92vh] w-[95%] mx-auto flex flex-col overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
      {/* Back Button */}
      <motion.h1
        className="font-extrabold text-[30px] absolute hover:bg-red-500 rounded-full w-[50px] flex justify-center cursor-pointer sm:mx-10 mt-4 mx-2"
        onClick={() => navigate(-1)}
        whileHover={{ scale: 1.1 }}
        variants={fadeUp}>
        ←
      </motion.h1>

      {/* Header */}
      <motion.header
        className="h-[100px] flex justify-center items-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}>
        <h1 className="text-[30px] font-serif font-extrabold">Resume</h1>
      </motion.header>

      {/* Resume Iframe */}
      <motion.section
        className="flex justify-center items-center gap-4 flex-col"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}>
        <motion.div
          className="flex gap-2 border shadow-2xl rounded-md overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}>
          <iframe
            src="https://new-portfolios-orcin.vercel.app/Shivam_Resume.pdf"
            width="100%"
            height="423px"
            allow="autoplay"
            className="overflow-hidden"
          />
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex justify-center items-center gap-4 mt-4"
          variants={fadeUp}>
          <motion.a
            href="/Shivam_Resume.pdf"
            target="_blank"
            className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-blue-600 duration-150"
            whileHover={{ scale: 1.05 }}>
            View Resume
          </motion.a>
          <motion.a
            href="/Shivam_Resume.pdf"
            download="Shivam_Resume.pdf"
            className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-blue-600 duration-150"
            whileHover={{ scale: 1.05 }}>
            Download Resume
          </motion.a>
        </motion.div>
      </motion.section>
    </motion.main>
  );
}

export default Resume;
