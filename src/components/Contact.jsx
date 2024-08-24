import React from "react";
import Hero from "./Hero";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";

const Contact = () => {
  return (
    <div>
      <Hero />
      <div className="bg-slate-950">
        <div className="container mx-auto flex flex-col items-center justify-center py-10 lg:pl-20 pb-20">
          <h2 className="text-3xl font-bold mb-4 text-slate-100 tracking-widest">
            Contact Me
          </h2>
          <p className="text-lg mb-2 text-center text-slate-100">
            Feel free to reach out for any inquiries or collaborations .
          </p>
          <a href="mailto:rakib.hsn25@gmail.com">
            <EmailTwoToneIcon className="text-slate-100" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
