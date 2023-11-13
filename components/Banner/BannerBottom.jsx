import React from "react";
import { MdLocalShipping } from "react-icons/md";
import { CgRedo } from "react-icons/cg";
import "./BannerBottom.css"

const BannerBottom = () => {
  return (
    <div className="container-fluidd bg-white border-bottom py--4 px--4 border-gray">
      <div className="max-w-container containerss  mx-auto h-20 d-flex flex-column flex-md-row justify-content-between items-center">
        <div className="d-flex items-center gap-2 w-72 shadow-sm hover-shadow-md transition fbox">
          <span className="font-weight-bold w-6 text-center">2</span>
          <p className="text-light text-base">Two years warranty</p>
        </div>
        <div className="d-flex md-w-auto items-center gap-2 w-72 shadow-sm hover-shadow-md transition">
          <span className="text-xl text-center w-6 ml-1">
            <MdLocalShipping />
          </span>
          <p className="text-light text-base">Free shipping</p>
        </div>
        <div className="d-flex md-w-auto items-center gap-2 w-72 shadow-sm hover-shadow-md transition">
          <span className="text-2xl text-center w-6">
            <CgRedo />
          </span>
          <p className="text-light text-base">Return policy in 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
