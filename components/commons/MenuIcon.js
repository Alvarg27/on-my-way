import React, { useState } from "react";

const MenuIcon = () => {
  const [isOpen, setIsOpen] = useState();
  return (
    <div
      onClick={() => setIsOpen((prev) => !prev)}
      className={`w-[30px] h-[30px] flex flex-col justify-between cursor-pointer  ${
        isOpen ? "py-0" : "py-[2px]"
      }`}
    >
      <div
        className={` h-[4px] bg-white rounded-sm transition duration-300  ${
          isOpen ? "rotate-45 -translate-x-[0px] translate-y-[13px]" : ""
        }`}
      />
      <div
        className={` h-[4px] bg-white rounded-sm transition duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={` h-[4px] bg-white rounded-sm transition duration-300  ${
          isOpen ? "-rotate-45 -translate-x-[0px] -translate-y-[13px]" : ""
        }`}
      />
    </div>
  );
};

export default MenuIcon;
