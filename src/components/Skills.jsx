import React from "react";

function Skills(props) {
  return (
    <p className=" text-gray-100 bg-indigo-600 rounded-full px-1">
      {props.skill}
    </p>
  );
}

export default Skills;
