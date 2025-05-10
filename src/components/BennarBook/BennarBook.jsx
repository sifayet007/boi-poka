import React, { useState } from "react";
import bennarBook from "../../assets/pngwing 1.png";
const BennarBook = () => {
  const [theme, setTheme] = useState("");
  console.log(theme);

  const handleTheme = (st) => {
    setTheme(st);
  };
  return (
    <div>
      <main className="mt-12">
        <div className="flex items-center gap-5">
          <button
            className={`${theme === "light" ? "bg-green-400" : "bg-white"}`}
            onClick={() => handleTheme("light")}
          >
            light
          </button>
          <button
            className={`${theme === "dark" ? "bg-green-500" : "bg-white"}`}
            onClick={() => handleTheme("dark")}
          >
            Dark
          </button>
        </div>
        <section className="md:flex items-center p-5 md:px-[120px] md:py-20 bg-[#F3F3F3] rounded-3xl justify-between">
          <div className="">
            <h1 className="md:text-7xl/snug text-3xl font-semibold tracking-wider font-serif  line-clamp-2 ">
              Books to freshen up <br />
              your bookshelf
            </h1>
            <button className="py-5 px-6 bg-[#23BE0A] hover:bg-opacity-60 duration-300 rounded-lg cursor-pointer text-[#ffffff] font-bold mt-12">
              View The List
            </button>
          </div>
          <div>
            <img src={bennarBook} alt="" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default BennarBook;
