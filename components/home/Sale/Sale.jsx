import React from "react";
import { Link } from "react-router-dom";
import {
  saleImgOne,
  saleImgTwo,
  saleImgThree,
} from "../../../assets/images/index";
import Image from "../../designLayouts/Image";
import "./Sale.css";

const Sale = () => {
  return (
    <div className="py-66 flex flex-col md:flex-row justify-content-between align-items-center gap--4 lg-gap--10">
      <div className="w-1000 md-w-50 lg-w-50 h-100 ">
        <Link to="/shop">
          <Image className="h-100 w-1000 object-cover" imgSrc={saleImgOne} />
        </Link>
      </div>
      <div className="w-1000 md-w-50 lg-w-50 h-auto d-flex flex-column gap--4 lg-gap--10">
        <div className="h-50 w-1000">
          <Link to="/shop">
            <Image className="h-100 w-1000 object-cover" imgSrc={saleImgTwo} />
          </Link>
        </div>
        <div className="h-50 w-1000">
          <Link to="/shop">
            <Image
              className="h-100 w-1000 object-cover"
              imgSrc={saleImgThree}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sale;
