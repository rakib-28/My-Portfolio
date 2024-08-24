import React from "react";

function Skills(props) {
  return (
    <p className=" text-gray-100 bg-blue-800 sm:hover:bg-amber-400 sm:hover:text-black rounded-full px-1">
      {props.skill}
    </p>
  );
}

export default Skills;
