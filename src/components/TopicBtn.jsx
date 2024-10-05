import React from "react";

const TopicBtn = ({topic}) => {
  return (
    <button
      className="flex items-center gap-1 border border-torquoise/10 px-1.5 py-2 bg-torquoise/10 rounded-lg"
    >
      <div>
        <img className="w-4 h-4" src={topic?.icon} alt={topic?.title} />
      </div>
      <span className="font-semibold text-torquoise text-sm">
        {topic?.title}
      </span>
    </button>
  );
};

export default TopicBtn;
