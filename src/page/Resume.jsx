import { useNavigate } from "react-router-dom";

function Resume() {
  const navigate = useNavigate();
  return (
    <main className="h-[92vh]">
      <h1
        className="font-extrabold text-[30px] absolute hover:bg-red-500 rounded-full w-[50px] flex justify-center cursor-pointer sm:mx-10 mt-4 mx-2 "
        onClick={() => {
          navigate(-1);
        }}>
        ←
      </h1>
      <header className="h-[100px] flex justify-center items-center">
        <h1 className="text-[30px] font-serif font-extrabold">Resume</h1>
      </header>

      <section className="flex justify-center items-center  gap-4 flex-col">
        <div className="flex gap-2 border shadow-2xl rounded-md ">
          <iframe
            src="https://drive.google.com/file/d/1O6CGt3fCAPUimykIAW6VKmkMWeNcMO2s/preview"
            width="100%"
            height="423px"
            allow="autoplay"
            className="overflow-hidden"
          />
        </div>
        <div className="flex justify-center items-center gap-4">
          <a
            href="/Shivam_Resume.pdf"
            target="_blank"
            className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-blue-600 duration-150">
            View Resume
          </a>
          <a
            href="/Shivam_Resume.pdf"
            download="Shivam_Resume.pdf"
            className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-blue-600 duration-150 ">
            Download Resume
          </a>
        </div>
      </section>
    </main>
  );
}

export default Resume;
