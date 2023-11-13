import React, { useState } from "react";
import { ImPlus } from "react-icons/im";
import NavTitle from "./NavTitle";
import "./Category.css";

const Category = () => {
  const [showSubCatOne, setShowSubCatOne] = useState(false);
  const items = [
    {
      _id: 990,
      title: "New Arrivals",
      icons: true,
    },
    {
      _id: 991,
      title: "Gadgets",
    },
    {
      _id: 992,
      title: "Accessories",
      icons: true,
    },
    {
      _id: 993,
      title: "Electronics",
    },
    {
      _id: 994,
      title: "Others",
    },
  ];

  return (
    <div className="w-full">
      <NavTitle title="Shop by Category" icons={false} className="category-title" />
      <div>
        <ul className="category-list flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {items.map(({ _id, title, icons }) => (
            <li key={_id} className="category-item border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center justify-between">
              {title}
              {icons && (
                <span onClick={() => setShowSubCatOne(!showSubCatOne)} className="category-icon text-gray-400 hover:text-primeColor duration-300">
                  <ImPlus />
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
