import React from "react";

const Project = (props) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-80">
      <img src={props.image} alt={props.name} className="w-full object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{props.name}</h3>
        <p className="text-gray-700">{props.description}</p>
      </div>
    </div>
  );
};
export default Project;
