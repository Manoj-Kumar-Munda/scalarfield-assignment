import React, { useEffect, useRef, useState } from "react";
import { topics } from "../utils/constants";
import { nanoid } from "nanoid";
import Tab from "./Tab";
import { HiArrowRight } from "react-icons/hi2";

const TabsContainer = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [backBtnVisible, setBackBtnVisible] = useState(false);
  const [forwardBtnVisible, setForwardBtnVisible] = useState(false);
  const [activeTabProps, setActiveTabProps] = useState({ left: 0, width: 0 });
  const tabRefs = useRef([]);

  const handleScrollBtns = (scrollVal) => {
    const tabBox = document.querySelector("#slider");
    const maxScrollableWidth = tabBox.scrollWidth - tabBox.clientWidth;
    scrollVal <= 0 ? setBackBtnVisible(false) : setBackBtnVisible(true);
    maxScrollableWidth - scrollVal <= 1
      ? setForwardBtnVisible(false)
      : setForwardBtnVisible(true);
  };

  const handleResize = () => {
    const tabBox = document.getElementById("slider");

    const clientWidth = tabBox.clientWidth;
    const scrollWidth = tabBox.scrollWidth;

    if (tabBox.scrollLeft > 0) {
      setBackBtnVisible(true);
    } else {
      setBackBtnVisible(false);
    }

    if (clientWidth < scrollWidth) {
      setForwardBtnVisible(true);
    } else {
      setForwardBtnVisible(false);
    }
  };
  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const tab = tabRefs.current[activeTabIndex];
    if (tab) {
      setActiveTabProps({ left: tab.offsetLeft, width: tab.offsetWidth });
    }
  }, [activeTabIndex]);

  const scrollForward = () => {
    const tabBox = document.querySelector("#slider");
    const scrollVal = (tabBox.scrollLeft += 120);
    handleScrollBtns(scrollVal);
  };

  const scrollBackward = () => {
    const tabBox = document.querySelector("#slider");
    const scrollVal = (tabBox.scrollLeft -= 120);
    handleScrollBtns(scrollVal);
  };

  return (
    <div
      id="header"
      className="sticky top-0 my-3 col-span-12 md:col-span-8 bg-white/80 backdrop-blur-xl"
    >
      {forwardBtnVisible && (
        <button
          onClick={scrollForward}
          className="absolute z-10 right-0 top-1/2 -translate-y-1/2 w-8 h-8 text-center flex justify-center items-center rounded-full bg-white border text-gray-600"
        >
          <HiArrowRight color="#4b5563" />
        </button>
      )}

      {backBtnVisible && (
        <button
          onClick={scrollBackward}
          className="absolute rotate-180 z-50 left-0 top-1/2 -translate-y-1/2 w-8 h-8 text-center flex justify-center items-center rounded-full bg-white border text-gray-600"
        >
          <HiArrowRight color="#4b5563" />
        </button>
      )}

      <div
        id="slider"
        className="flex justify-between relative overflow-hidden scroll-smooth transition-300"
      >
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

export default TabsContainer