import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../utils/cn";
import { useLocation } from "react-router-dom";

const ToggleBtn = () => {
  const [isOn, setIsOn] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const {pathname} = useLocation();
  return (
    <div
      className="flex gap-4 items-center"
      onMouseOver={() => setShowPopup(true)}
      onMouseOut={() => setShowPopup(false)}
    >
      <AnimatePresence>
        {pathname?.includes?.blogs &&  showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 100, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{delay:0.1}}
            className="absolute bg-white border rounded-md gap-2 bottom-12 right-14 p-3 max-w-80 w-full"
          >
            <div className="flex flex-col gap-1 items-start">
              <h1 className="text-xl font-medium text-gray-600">
                <span className="text-torquoise  font-medium">Pro</span> Search
              </h1>
              <p className="leading-normal text-gray-600">
                Our most powerful search, ideal for longer answers to complex
                questions
              </p>

              <button className="bg-gray-200 px-2.5 py-1.5 font-medium text-gray-600 rounded-sm">
                Learn More
              </button>

              <div className="h-[0.5px] bg-gray-200 w-full my-1.5"></div>
              <span className="text-xs font-semibold text-gray-700">
                5 searches left today. Reloads every 4 hours.
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOn((prev) => !prev)}
        className={
          "border w-12 rounded-xl px-1 py-1  bg-white  flex items-center transition-all duration-300 "
        }
      >
        <motion.div
          initial={{ x: isOn ? 22 : 0 }}
          animate={{ x: isOn ? 22 : 0 }}
          transition={{ duration: 0.1 }}
          whileHover={{ scale: 0.9 }}
          className={cn(
            "w-4 h-4 rounded-full bg-gray-600",
            isOn && "bg-torquoise"
          )}
        ></motion.div>
      </button>
      <span className={cn("text-sm font-medium text-gray-600", isOn && "text-torquoise")}>Pro</span>
    </div>
  );
};

export default ToggleBtn;
