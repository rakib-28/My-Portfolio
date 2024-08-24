import React from "react";
import Skills from "./Skills";

const Hero = () => {
  return (
    <section
      id="Hero"
      className="bg-slate-950 py-20 relative border-[1px] border-slate-950 border-y-amber-400"
    >
      <div className=" md:h-[500px] container mx-auto px-6 flex flex-col md:flex-row items-center justify-center ">
        <div className=" mx-4 flex justify-center ">
          <img
            src="https://rakib-28.github.io/My-Portfolio/src/assets/rakib.jpg"
            alt="Rakib"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg object-cover border-4 border-slate-950 hover:border-amber-400"
          />
        </div>
        <div className="  mt-6 text-center ">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 leading-tight mb-2">
            Hello, I'm{" "}
            <span className="text-amber-400 hover:text-amber-300">Rakib</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-4">
            A passionate developer building beautiful web applications
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1">
            <Skills skill="HTML" />
            <Skills skill="CSS" />
            <Skills skill="Bootstrap" />
            <Skills skill="Tailwind" />
            <Skills skill="Javasript" />
            <Skills skill="React" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
