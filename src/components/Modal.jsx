import React, { useEffect, useRef } from "react";
import { MdOutlineSort } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import ToggleBtn from "./ToggleBtn";
import useApp from "../context/context";
import { AnimatePresence, motion } from "framer-motion";
const Modal = () => {
  const modalRef = useRef();
  const { setIsOpenModal } = useApp();
  
  useEffect(() => {
    const handler = (event) => {
      if (!modalRef.current || modalRef.current.contains(event.target)) {
        return;
      }

      if (!modalRef.current.contains(event.target)) {
        setIsOpenModal(false);
      }
    };
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);
  return (
    <div className="z-50 fixed inset-0 bg-creame/50 backdrop-blur-sm">
      <div className="flex justify-center items-center w-full h-full">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            ref={modalRef}
            className="max-w-screen-md w-full bg-creame p-4 shadow-sm rounded-md"
          >
            <div className="flex flex-col bg-white p-2 rounded-md border-2 border-gray-300">
              <div>
                <textarea
                  className="caret-torquoise border-none outline-none bg-transparent w-full resize-none"
                  placeholder="Ask anything..."
                />
              </div>

              <div className="flex justify-between items-center">
                <div className="flex gap-1 items-center">
                  <button className="inline-flex items-center gap-1 hover:bg-gray-300 px-2 py-1 rounded-full transition-300">
                    <MdOutlineSort />
                    <span className="text-sm text-gray-600 font-medium">
                      Focus
                    </span>
                  </button>
                  <button className="inline-flex items-center gap-1 hover:bg-gray-300 px-2 py-1 rounded-full transition-300">
                    <FiPlusCircle />
                    <span className="text-sm text-gray-600 font-medium">
                      Attach
                    </span>
                  </button>
                </div>

                <div>
                  <ToggleBtn />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Modal;
