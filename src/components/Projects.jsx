import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="bg-white py-20 pl-20 text-center">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-xl font-bold mb-2">Project 1</h3>
          <p>A brief description of Project 1.</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-xl font-bold mb-2">Project 2</h3>
          <p>A brief description of Project 2.</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-xl font-bold mb-2">Project 3</h3>
          <p>A brief description of Project 3.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
