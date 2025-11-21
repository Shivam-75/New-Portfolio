import { skillsIconstData } from "../store/Icons";

function Skiil() {
  return (
    <marquee scrollamount="13">
      <section className=" m-3 flex flex-row w-[100%] gap-x-10">
        {skillsIconstData.map((section, idx) => {
          return (
            <div
              key={idx}
              className="bg-white border rounded-lg shadow-2xl h-[80px] w-[80px] flex  flex-col justify-center items-center p-4 hover:scale-110 duration-200">
              <h2 className="text-[45px] font-extrabold hover:scale-105">
                {section.icon}
              </h2>
              <p className="text-[15px] flex flex-wrap font-medium">
                {section.name}
              </p>
            </div>
          );
        })}
      </section>
    </marquee>
  );
}

export default Skiil;
