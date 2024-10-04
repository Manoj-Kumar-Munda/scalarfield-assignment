import React from "react";
import logo from "../assets/logo.svg";
import { LuArrowLeftToLine } from "react-icons/lu";
import { cn } from "../utils/cn";


const Sidebar = () => {
  return (
    <div className="fixed top-0 bottom-0 hidden sm:inline-block bg-creame">
      <div className="flex flex-col py-4 px-3">
        <div className="inline-flex gap-6 mb-4 items-center">
          <div className="w-[146px]">
            <img className="w-full" src={logo} alt="logo" />
          </div>
          <button className="relative w-8 h-8 rounded-full flex justify-center items-center transition group hover:bg-gray-200">
            <span
              className={cn(
                "absolute invisible top-full inline-block px-2 text-xs font-semibold py-1 box-border rounded-md bg-black opacity-0 transition-all duration-300 ease-in-out  text-white group-hover:visible  group-hover:top-[calc(100%+8px)] group-hover:opacity-100"
              )}
            >
              Collapse
            </span>

            <LuArrowLeftToLine size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
