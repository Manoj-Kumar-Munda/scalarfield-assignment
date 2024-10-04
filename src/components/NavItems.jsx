import React from "react";
import { Link } from "react-router-dom";

const NavItems = ({ link }) => {
  return (
    <div className="w-full rounded-md transition-300 hover:bg-black/5 active:scale-95">
      <Link
        to={link?.path}
        className="mx-4 px-1 py-2  flex gap-1.5 items-center cursor-pointer"
      >
        <div className="w-4 overflow-hidden">
          <img src={link?.icon} alt="" />
        </div>
        <span className="text-gray-600 font-semibold">{link?.title}</span>
      </Link>
    </div>
  );
};

export default NavItems;
