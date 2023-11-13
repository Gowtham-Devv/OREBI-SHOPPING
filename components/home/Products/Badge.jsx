import React from "react";
import "./Badge.css";

const Badge = ({ text }) => {
  return (
    <div className="bg-primeColor w-[92px] h-[35px] text-white flex justify-center items-center text-base font-semibold bg-blacks duration-300 cursor-pointer">
      {text}
    </div>
  );
};

export default Badge;