import React, { useState } from "react";
import { SmLogo } from "./Logo";
import { FaPlus } from "react-icons/fa6";
import { NavLinks } from "../utils/constants";
import { nanoid } from "nanoid";
import { useLocation } from "react-router-dom";
import { cn } from "../utils/cn";
import thumbnail from "../assets/thumbnail.avif";
import { LuArrowRightToLine } from "react-icons/lu";
import useApp from "../context/context";
import { AnimatePresence, motion } from "framer-motion";
import SmNavs from "./SmNavs";
const SmSidebar = () => {
  const { pathname } = useLocation();
  const { setIsSmSidebarOpen } = useApp();
  const [showMenuTitle, setShowMenuTitle] = useState();
  return (
    <div className="h-full flex flex-col justify-between max-w-[90px]">
      <div className="flex flex-col items-center gap-6">
        <div className="">
          <SmLogo />
        </div>

        <button className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center">
          <FaPlus size={18} />
        </button>

        <div className="flex flex-col w-full">
          {NavLinks?.map((link) => (
            <SmNavs link={link} key={nanoid()} />
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <button
          onClick={() => setIsSmSidebarOpen(false)}
          className="mx-auto w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center"
        >
          <LuArrowRightToLine />
        </button>

        <div className="flex justify-center py-2">
          <img src={thumbnail} alt="profile" className="w-8 h-8 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default SmSidebar;
