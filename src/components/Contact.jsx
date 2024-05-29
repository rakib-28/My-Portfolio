import React from "react";
import Hero from "./Hero";

const Contact = () => {
  return (
    <div>
      <Hero />
      <section id="contact" className="bg-white py-20 pl-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg mb-4">
          Feel free to reach out for any inquiries or collaborations.
        </p>
        <a
          href="mailto:rakib.hsn25@gmail.com"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Email Me
        </a>
      </section>
    </div>
  );
};

export default Contact;
