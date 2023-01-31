import React from "react";

const TopMessage = ({ className }) => {
  return (
    <div
      className={`h-[50px] w-full bg-cyan-300 text-center text-white items-center flex justify-center bg-[#6bcbd7] ${className}`}
    >
      Coming soon
    </div>
  );
};

export default TopMessage;
