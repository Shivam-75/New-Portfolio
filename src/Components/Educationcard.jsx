import { memo } from "react";
import { education } from "../store/EducationData";
function Educationcard() {
  return (
    <>
      <h1 className="text-[20px] font-extrabold font-serif">📙📖 Education</h1>

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5  mx-auto my-10 py-2 ">
        {education.map((items) => {
          return (
            <section
              key={items.id}
              className="bg-white rounded-2xl p-5 shadow-2xl border hover:scale-105 duration-200">
              <h1 className="text-center font-extrabold font-serif text-[23px] mb-5 text-red-700 ">
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
            </section>
          );
        })}
      </main>
    </>
  );
}

export default memo(Educationcard);
