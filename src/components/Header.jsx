import { useState } from "react";
import globeIcon from "../assets/discover.svg";
import { FaSliders } from "react-icons/fa6";
import { topics } from "../utils/constants";
import TopicBtn from "./TopicBtn";
import { nanoid } from "nanoid";
import { RxCross2 } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";
const Header = () => {
  const [showTopics, setShowTopics] = useState(false);
  return (
    <div className="flex justify-between">
      <div className="inline-flex gap-2 items-center py-3 sm:py-3.5">
        <div className="aspect-square w-6 md:w-8 overflow-hidden">
          <img src={globeIcon} alt="" className="w-full h-full" />
        </div>
        <h1 className="text-2xl md:text-3xl font-sans text-gray-600">
          Discover
        </h1>
      </div>

      <button
        onClick={() => setShowTopics(true)}
        className="sm:hidden w-10 h-10 rounded-full bg-gray-200 self-center grid place-content-center"
      >
        <FaSliders />
      </button>

      <AnimatePresence>
        {showTopics && (
          <motion.div className="fixed inset-0 bg-white/40 backdrop-blur-md z-40">
            <div className="absolute bottom-0 bg-white py-2 px-4 rounded-xl">
              <div className="border-b mb-2 flex justify-between items-center">
                <h2 className="text-gray-600 text-xl font-semibold leading-loose">
                  Make it yours
                </h2>

                <button onClick={() => setShowTopics(false)}>
                  <RxCross2 />
                </button>
              </div>
              <p className="text-sm text-gray-600 font-semibold pr-4">
                Select topics and interests to customize your Discover
                experience
              </p>

              <div className="my-4 flex flex-wrap gap-2 pr-8">
                {topics?.slice(1).map((topic) => (
                  <TopicBtn key={nanoid()} topic={topic} />
                ))}
              </div>

              <div className="h-[1px] bg-gray-300 w-full "></div>

              <button className="font-medium mt-4 mb-2 w-full bg-torquoise text-center text-white py-2 rounded-full">
                Save Interests
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
