import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./SampleNextArrow.css"

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="w- h- rounded-circle text-white bg-dark bg-opacity-40 hover-bg-opacity-100 duration-300 cursor-pointer d-flex justify-content-center align-items-center position-absolute top end-2"
      onClick={onClick}
    >
      <span className="text-xl">
        <FaLongArrowAltRight />
      </span>
    </div>
  );
};

export default SampleNextArrow;
