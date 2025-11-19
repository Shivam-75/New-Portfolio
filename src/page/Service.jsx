import { ServiceData } from "../store/survicess.jsx";
import { useNavigate } from "react-router-dom";

function Service() {
  const navigate = useNavigate();
  return (
    <div className="lg:h-[92vh] w-[90%] mx-auto flex my-5">
      <h1
        className="font-extrabold text-[40px] absolute hover:bg-red-500 rounded-full w-[50px] flex justify-center cursor-pointer "
        onClick={() => {
          navigate(-1);
        }}>
        ←
      </h1>
      <header className=" flex items-center flex-col justify-center mt-2 ">
        <h1 className="font-serif text-[30px] font-extrabold capitalize">
          service
        </h1>
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-6  xl:grid-cols-3 py-10">
          {ServiceData.map((item) => {
            return (
              <div
                key={item.id}
                className=" hover:scale-105 duration-200 p-2 py-7 rounded-lg text-center shadow-2xl border">
                <h1 className="text-red-600 text-center flex justify-center text-4xl ">
                  {item.icon}
                </h1>
                <h1 className="font-serif font-extrabold text-[20px] mt-3">
                  {item.title}
                </h1>
                <p className="text-[15px] mt-4 font-serif">
                  {item.description}
                </p>
              </div>
            );
          })}
        </main>
      </header>
    </div>
  );
}

export default Service;
