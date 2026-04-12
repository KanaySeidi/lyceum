import React from "react";

const BurgerMenu = ({ isOpen, toggle }) => {
  return (
    <button
      className="relative w-10 h-8 flex flex-col justify-between items-center cursor-pointer z-50 "
      onClick={toggle}
    >
      <span
        className={`absolute h-1 w-full bg-white rounded-full transition-all duration-300 ease-in-out origin-left ${
          isOpen ? "rotate-45 top-0 left-[5px]" : "top-0"
        }`}
      />
      <span
        className={`absolute h-1 w-full bg-white rounded-full transition-all duration-300 ease-in-out origin-left ${
          isOpen ? "opacity-0 w-0" : "top-1/2 -translate-y-1/2"
        }`}
      />
      <span
        className={`absolute h-1 w-full bg-white rounded-full transition-all duration-300 ease-in-out origin-left ${
          isOpen
            ? "rotate-[-45deg] top-[28px] left-[5px]"
            : "top-full -translate-y-full"
        }`}
      />
    </button>
  );
};

export default BurgerMenu;