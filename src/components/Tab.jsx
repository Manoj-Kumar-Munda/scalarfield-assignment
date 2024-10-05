import React from "react";
import { cn } from "../utils/cn";

const Tab = React.forwardRef(({ topic, setActiveTabIndex}, ref) => {
  return (
    <button
      onClick={setActiveTabIndex}
      ref={ref}
      className={cn(
        "flex items-center gap-1 px-3 py-2.5 rounded-lg shrink-0"
      )}
    >
      <div className="shrink-0">
        <img className="w-4 h-4" src={topic?.icon} alt={topic?.title} />
      </div>
      <span className="font-semibold text-torquoise text-sm text-nowrap">
        {topic?.title}
      </span>
    </button>
  );
});

export default Tab;
