import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";

const ToggleBtn = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="flex gap-4 items-center">
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
      <span className="text-sm font-medium text-gray-600">Pro</span>
    </div>
  );
};

export default ToggleBtn;
