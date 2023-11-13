import React, { useState } from "react";
import { motion } from "framer-motion";
import NavTitle from "./NavTitle";
import "./Color.css";

const Color = () => {
  const [showColors, setShowColors] = useState(true);
  const colors = [
    {
      _id: 9001,
      title: "Green",
      base: "#22c55e",
    },
    {
      _id: 9002,
      title: "Gray",
      base: "#a3a3a3",
    },
    {
      _id: 9003,
      title: "Red",
      base: "#dc2626",
    },
    {
      _id: 9004,
      title: "Yellow",
      base: "#f59e0b",
    },
    {
      _id: 9005,
      title: "Blue",
      base: "#3b82f6",
    },
  ];

  return (
    <div className="color-container">
      <div onClick={() => setShowColors(!showColors)} className="color-title">
        <NavTitle title="Shop by Color" icons={true} className="nav-title" />
      </div>
      {showColors && (
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          <ul className="color-list flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
            {colors.map((item) => (
              <li key={item._id} className="color-item border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2">
                <span style={{ background: item.base }} className="color-dot"></span>
                {item.title}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Color;
