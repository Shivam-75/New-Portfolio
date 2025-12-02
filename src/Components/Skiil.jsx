import { skillsIconstData } from "../store/Icons";

function Skill() {
  const scrollVariants = {
    animate: {
      x: ["0%", "-100%"], // move from 0% to -100%
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="overflow-hidden w-full py-4">
      <motion.div
        className="flex gap-x-10 w-max"
        variants={scrollVariants}
        animate="animate">
        {skillsIconstData.concat(skillsIconstData).map((section, idx) => {
          // duplicate array to create infinite loop effect
          return (
            <div
              key={idx}
              className="bg-white border rounded-lg shadow-2xl h-[90px] w-[90px] flex flex-col justify-center items-center p-4 hover:scale-110 duration-200">
              <h2 className="text-[45px] font-extrabold hover:scale-105">
                {section.icon}
              </h2>
              <p className="text-[15px] flex flex-wrap font-medium">
                {section.name}
              </p>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Skill;
