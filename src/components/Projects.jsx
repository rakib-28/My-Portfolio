import React from "react";
import Project from "./Project";

const Projects = () => {
  return (
    <div className="bg-indigo-50">
      <div className="container mx-auto flex flex-col items-center py-10 lg:pl-20">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
          <Project
            image="https://rakib-28.github.io/My-Portfolio/src/assets/shoppingsite.jpg"
            name="E-commerce Store"
            description="Product listing with search and filter options, Product detail pages, User authentication and profile management"
          />

          <Project
            image="https://rakib-28.github.io/My-Portfolio/src/assets/blogsite.jpg"
            name="Personal Blog"
            description="Markdown support for writing and formatting posts, Authentication for admin to create, edit, and delete posts"
          />

          <Project
            image="https://rakib-28.github.io/My-Portfolio/src/assets/chatsite.jpg"
            name="Real-Time Chat Application"
            description="User authentication and profile creation, Real-time messaging using WebSockets"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
