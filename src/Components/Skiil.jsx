import { skillsIconstData } from "../store/Icons";

function Skiil() {
  return (
    <section className="relative flex overflow-hidden gap-3 my-10">
      {skillsIconstData.map((section, idx) => {
        return (
          <div
            key={idx}
            className="bg-white border rounded-lg shadow-2xl animate-marquee flex justify-center items-center flex-col p-2 m-2 w-[100%]">
            <h2 className=" text-[50px] hover:scale-125 duration-150 rounded-2xl">
              {section.icon}
            </h2>
            <p>{section.name}</p>
          </div>
        );
      })}
    </section>
  );
}

export default Skiil;
