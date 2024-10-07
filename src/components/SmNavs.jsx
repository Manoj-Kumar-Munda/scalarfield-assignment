import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../utils/cn";
import { useLocation } from "react-router-dom";
const SmNavs = ({ link }) => {
  const [showMenuTitle, setShowMenuTitle] = useState(false);
  const { pathname } = useLocation();
  return (
    <div
      onMouseOver={() => setShowMenuTitle(true)}
      onMouseOut={() => setShowMenuTitle(false)}
      className={cn(
        "relative cursor-pointer transition-300 py-3 hover:bg-gray-200"
      )}
    >
      {pathname === link.path && (
        <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-black"></div>
      )}

      <AnimatePresence>
        {showMenuTitle && (
          <motion.div
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x:0 }}
            exit={{ opacity: 0, x:-5 }}
            className="absolute  bg-black left-full ml-2 text-white px-2 text-xs py-1 font-medium rounded-md z-50"
          >
            <span>{link?.title}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-5 mx-auto">
        <img src={link?.icon} />
      </div>
    </div>
  );
};

export default SmNavs;
