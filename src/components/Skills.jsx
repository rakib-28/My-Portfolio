import React from "react";

function Skills(props) {
  return (
    <p className=" text-gray-100 bg-blue-800 min-[320px]:hover:bg-amber-400 min-[320px]:hover:text-black rounded-full px-1">
      {props.skill}
    </p>
  );
}

export default Skills;
