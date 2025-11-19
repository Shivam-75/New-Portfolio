import React, { useEffect, useRef, useState } from "react";

function Hero2() {
  const experienceData = [
    {
      id: 1,
      title: "Full Stack Developer - Skillvertex Pvt.Ltd",
      list: [
        "Developed scalable web applications using React, Node.js, and MongoDB.",
        "Improved the performance of the company dashboard by 35%.",
        "Collaborated with a team of 5 members in an agile environment.",
        "Handled API integrations and optimized user interface performance.",
      ],
    },
  ];

  // Lazy Reveal Animation
  const [visibleItems, setVisibleItems] = useState({});
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute("data-index");
            setVisibleItems((prev) => ({ ...prev, [index]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="sm:py-7 w-[90%] mx-auto mb-9">
      {/* Lazy Image Placeholder */}
      <figure className="my-10 flex justify-center">
        <img
          src="/image.png"
          alt="Experience"
          loading="lazy"
          decoding="async"
          className="sm:w-[30%] opacity-0 transition-opacity duration-700"
          onLoad={(e) => e.target.classList.remove("opacity-0")}
        />
      </figure>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {experienceData.map((item, i) => (
          <div
            key={item.id}
            data-index={i}
            ref={(el) => (itemsRef.current[i] = el)}
            className={`shadow-2xl border p-5 rounded-md transition-all duration-700 transform
              ${
                visibleItems[i]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }
            `}>
            <h1 className="font-serif font-extrabold text-[23px] mb-4">
              {item.title}
            </h1>

            {item.list.map((data, idx) => (
              <ol key={idx} className="list-disc">
                <li className="mx-6 hover:scale-105 hover:text-blue-500 duration-200">
                  {data}
                </li>
              </ol>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}

export default React.memo(Hero2);
