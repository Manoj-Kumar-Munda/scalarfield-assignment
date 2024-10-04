import React from "react";
import globeIcon from "../assets/discover.svg";
const Discover = () => {
  return (
    <div>
      <div className="inline-flex gap-2 items-center py-1">
        <div className="w-8 h-8 overflow-hidden">
          <img src={globeIcon} alt="" className="w-full h-full" />
        </div>
        <h1 className="text-3xl font-sans text-gray-600 leading-loose">
          Discover
        </h1>
      </div>
      <div className="absolute left-0 right-0 h-[1px] bg-black/5"></div>
    </div>
  );
};

export default Discover;
