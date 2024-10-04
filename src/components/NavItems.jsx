import React from "react";

const NavItems = ({ title, children }) => {
  return (
    <div className="w-full rounded-md transition-300 hover:bg-black/5">
      <a
        href="#"
        className="mx-4 px-1 py-2  flex gap-1.5 items-center cursor-pointer"
      >
        {children}
        <span className="text-gray-600 font-semibold">{title}</span>
      </a>
    </div>
  );
};

export default NavItems;
