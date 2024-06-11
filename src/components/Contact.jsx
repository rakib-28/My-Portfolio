import React from "react";
import Hero from "./Hero";

const Contact = () => {
  return (
    <div>
      <Hero />
      <div className="bg-indigo-50">
        <div className="container mx-auto flex flex-col items-center justify-center py-10 lg:pl-20 pb-20">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p className="text-lg mb-4 text-center">
            Feel free to reach out for any inquiries or collaborations.
          </p>
          <a
            href="mailto:rakib.hsn25@gmail.com"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Email Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
