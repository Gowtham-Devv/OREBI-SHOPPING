import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import "./SamplePrevArrow.css"

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="w- h- rounded-circle text-white bg-dark bg-opacity-40 hover-bg-opacity-100 duration-300 cursor-pointer d-flex justify-content-center align-items-center position-absolute z-10 top start-2"
      onClick={onClick}
    >
      <span>
        <FaLongArrowAltLeft />
      </span>
    </div>
  );
};

export default SamplePrevArrow;


