import * as React from "react";

export const TabSelector = ({ isActive, children, onClick }) => (
  <button
    className={`mr-8 group inline-flex items-center justify-center text-[20px] font-semibold leading-5 cursor-pointer whitespace-nowrap ${
      isActive
        ? "border-b-[2px] border-black text-primary_text focus:outline-none focus:text-black focus:border-black"
        : "border-transparent text-[#8D8D8D] hover:text-gray-600 hover:border-gray-300 focus:text-gray-600 focus:border-gray-300"
    } w-[360px] h-[61px]`}
    onClick={onClick}
  >
    {children}
  </button>
);
