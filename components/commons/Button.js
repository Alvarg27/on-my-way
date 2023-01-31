import React from "react";

const Button = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center h-[50px] rounded-lg px-8 hover:scale-105 transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
