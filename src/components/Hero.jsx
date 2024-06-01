import React from "react";

const Hero = () => {
  return (
    <section id="Hero" className="bg-gray-100 py-20 relative ">
      <div className=" md:h-[500px] container mx-auto px-6 flex flex-col md:flex-row items-center justify-center ">
        <div className=" mx-4 flex justify-center ">
          <img
            src="src/assets/rakib.jpg"
            alt="Rakib"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg object-cover"
          />
        </div>
        <div className="  mt-6 text-center ">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-2">
            Hello, I'm <span className="text-indigo-600">Rakib</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-4">
            A passionate developer building beautiful web applications
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
