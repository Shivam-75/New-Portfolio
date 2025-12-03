import Hero from "../Components/Hero";
import Hero2 from "../Components/Hero2";
import NpmContributer from "../Components/NpmContributer";
import Skiil from "../Components/Skiil";

function Home() {
  return (
    <>
      <Hero />
      <Skiil />
      <div className="grid w-[90%] mx-auto py-10 grid-cols-1  lg:grid-cols-2">
        <NpmContributer />
        <Hero2 />
      </div>
    </>
  );
}

export default Home;
