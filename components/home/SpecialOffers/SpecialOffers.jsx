import React from "react";
import Heading from "../Products/Heading";
import Products from "../Products/Products";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
} from "../../../assets/images/index";
import "./SpecialOffers.css"

const SpecialOffers = () => {
  return (
    <div className="w-100 pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        <Products
          _id="1101"
          img={spfOne}
          productName="Cap for Boys"
          price="35.00"
          color="Blank and White"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Products
          _id="1102"
          img={spfTwo}
          productName="Tea Table"
          price="180.00"
          color="Gray"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Products
          _id="1103"
          img={spfThree}
          productName="Headphones"
          price="25.00"
          color="Mixed"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Products
          _id="1104"
          img={spfFour}
          productName="Sun glasses"
          price="220.00"
          color="Black"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
      </div>
    </div>
  );
};

export default SpecialOffers;