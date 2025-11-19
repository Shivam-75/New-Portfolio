import { useNavigate } from "react-router-dom";
import { data } from "../store/projectdt";

function Project() {
  const navigate = useNavigate();
  return (
    <main className="w-[90%] mx-auto my-[20px] md:h-[90vh]">
      <h1
        className="font-extrabold text-[40px] absolute hover:bg-red-500 rounded-full w-[50px] flex justify-center cursor-pointer"
        onClick={() => {
          navigate(-1);
        }}>
        ←
      </h1>
      <h1 className="text-center text-[30px] font-serif font-extrabold py-3 my-10 ">
        Projects
      </h1>
      <section className="grid sm:grid-cols-2  mx-auto gap-y-6 ">
        {data.map((item) => (
          <article
            className="flex flex-col sm:mx-2 mx-auto relative"
            key={item.id}>
            <div className="shadow-2xl bg-white border rounded-3xl p-4 py-3">
              <div className="lg:flex font-serif">
                <figure>
                  <img
                    src={item.image}
                    alt="Work"
                    style={{ width: item.width, height: item.height }}
                    className="rounded-lg"
                  />
                </figure>

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
                      className=" px-5 py-2 shadow-sm tracking-wider text-center text-white rounded-full bg-gray-400 hover:bg-green-800 font-extrabold duration-200">
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
          </article>
        ))}
      </section>
    </main>
  );
}

export default Project;
