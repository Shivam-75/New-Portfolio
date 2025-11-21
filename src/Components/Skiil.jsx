import { skillsIconstData } from "../store/Icons";

function Skiil() {
  return (
    <marquee>
      <section className="flex flex-row w-[100%] gap-x-10">
        {skillsIconstData.map((section, idx) => {
          return (
            <div
              key={idx}
              className="bg-white border rounded-lg shadow-2xl flex justify-center items-center flex-col p-4 m-2">
              <h2 className="text-[50px] hover:scale-125 duration-150 rounded-2xl">
                {section.icon}
              </h2>
              <p>{section.name}</p>
            </div>
          );
        })}
      </section>
    </marquee>
  );
}

export default Skiil;
