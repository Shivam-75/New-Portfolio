import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { data } from "../store/projectdt";

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const selected = data.find((item) => item.id == id);

  if (!selected) {
    return (
      <h1 className="text-center mt-10 text-red-600">Project Not Found</h1>
    );
  }

  return (
    <main className="sm:w-[90%] mx-auto px-4 font-serif py-10">
      {/* Back Button */}
      <h1
        className="font-extrabold text-[30px] absolute hover:bg-red-500 rounded-full px-2 flex justify-center cursor-pointer"
        onClick={() => {
          navigate(-1);
        }}>
        ←
      </h1>

      {/* Title */}
      <header>
        <h1 className="text-[18px] sm:text-4xl font-extrabold text-blue-700 text-center mb-10">
          {selected.ProjectName}
        </h1>
      </header>

      {/* Main Image Section */}
      <figure className="grid md:grid-cols-2 sm:p-3 grid-cols-1">
        {/* Main Project Image with fade-in */}
        <LazyImage
          src={selected.image}
          alt={selected.ProjectName}
          className="w-full max-w-xl rounded-2xl shadow-md my-auto"
        />

        {/* Description */}
        <section className="my-6 flex flex-col justify-center ml-3">
          <p className="text-gray-800 text-sm sm:leading-8 tracking-wide text-[16px]">
            {selected.description}
          </p>

          <section className="mt-6 space-y-2 text-gray-700 text-[15px]">
            <p>
              <span className="font-semibold text-gray-900">📍 Location:</span>{" "}
              {selected.location}
            </p>
            <p>
              <span className="font-semibold text-gray-900">📅 Date:</span>{" "}
              {selected.date}
            </p>
          </section>
        </section>
      </figure>

      {/* All Screenshots */}
      <figure className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-10 gap-8">
        {selected?.ssImgs.map((item, index) => (
          <LazyImage
            key={index}
            src={item}
            alt="Screenshot"
            className="rounded-md"
          />
        ))}
      </figure>
    </main>
  );
}

/* ---------------------------------------------
    ⭐ Lazy Image Component (Fade-in + Skeleton)
--------------------------------------------- */
function LazyImage({ src, alt, className }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative">
      {/* Skeleton Loader */}
      {!loaded && (
        <div className="w-full h-[200px] sm:h-[250px] bg-gray-300 animate-pulse rounded-md absolute top-0 left-0"></div>
      )}

      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`${className} transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

export default React.memo(ProjectDetails);
