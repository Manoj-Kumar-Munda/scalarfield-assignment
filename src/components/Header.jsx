import React, { useEffect, useRef, useState } from "react";
import { topics } from "../utils/constants";
import { nanoid } from "nanoid";
import Tab from "./Tab";

const Header = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [activeTabProps, setActiveTabProps] = useState({ left: 0, width: 0 });
  const tabRefs = useRef([]);
  useEffect(() => {
    const tab = tabRefs.current[activeTabIndex];
    console.log("offsetLeft", tab.offsetLeft);
    console.log("offsetWidth", tab.offsetWidth);
    if (tab) {
      setActiveTabProps({ left: tab.offsetLeft, width: tab.offsetWidth });
    }
  }, [activeTabIndex]);

  return (
    <div id="header" className="my-2 col-span-12 md:col-span-8 overflow-hidden">
      <div className="flex relative">
        {topics?.map((topic, index) => (
          <Tab
            key={nanoid()}
            topic={topic}
            isActive={activeTabIndex === index}
            setActiveTabIndex={() => setActiveTabIndex(index)}
            ref={(el) => (tabRefs.current[index] = el)}
          />
        ))}

        <button
          style={{ left: activeTabProps?.left, width: activeTabProps.width }}
          className="absolute transition-all duration-300 bottom-0 left-0 top-0 bg-torquoise/10 rounded-md z-20"
        ></button>
      </div>
    </div>
  );
};

export default Header;
