import { Link, useNavigate } from "react-router-dom";

const NpmContributer = () => {
  return (
    <section className="shadow-2xl p-5 w-[90vmin] sm:w-[80%] mx-auto ">
      <div className="flex items-center  justify-between py-6">
        <h1 className="text-[20px] font-serif font-extrabold ">
          NPM Contributor
        </h1>
        <ButtonClicker show={"View Details"} link={`project`} />
      </div>

      <div className="py-2 ">
        <img
          src="/Screenshot 2025-12-03 114931.png "
          className=" rounded-xl w-[100%] "
          alt="npm contributer "
        />
      </div>
    </section>
  );
};

const ButtonClicker = ({ show, link }) => {
  const navigate = useNavigate();
  return (
    <button
      className="text-blue-800 font-extrabold hover:bg-blue-950 duration-300"
      onClick={() => {
        navigate(link);
      }}>
      {show}
    </button>
  );
};
export default NpmContributer;
