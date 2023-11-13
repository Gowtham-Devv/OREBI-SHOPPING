import React from "react";
import Brand from "./shopBy/Brand";
import Category from "./shopBy/Category";
import Color from "./shopBy/Color";
import Price from "./shopBy/Price";
import "./ShopSideNav.css";

const ShopSideNav = () => {
  return (
    <div className="w-100 h-100 flex flex-col gap-6">
      <Category icons={false} />
      <Color />
      <Brand />
      <Price />
    </div>
  );
};

export default ShopSideNav;