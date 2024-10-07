import React from "react";
import { FaShare } from "react-icons/fa6";
import { FiLink } from "react-icons/fi";
import { GoBookmark } from "react-icons/go";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const BlogHeader = () => {
  return (
    <>
      <div className="sticky top-0 left-4 right-4 h-12 bg-white px-4">
        <div className="py-2 flex justify-end">
          <div className="inline-flex items-center gap-1.5">
            <button className="border-none aspect-square w-8 rounded-md transition-300 flex justify-center items-center hover:bg-gray-200">
              <HiOutlineDotsHorizontal />
            </button>
            <button className="border aspect-square w-8 rounded-md transition-300 flex justify-center items-center hover:bg-gray-200">
              <GoBookmark />
            </button>

            <button className="border-none aspect-square w-8 rounded-md transition-300 flex justify-center items-center bg-teal-600 hover:bg-torquoise/80">
              <FiLink color="#fff" />
            </button>

            <button className="bg-teal-600 hover:bg-torquoise/80 text-sm h-8 px-4 rounded-md flex gap-1 items-center transition-300">
              <FaShare color="#fff" />
              <span className="font-medium text-white ">Share</span>
            </button>
          </div>
        </div>
      </div>
      <div className="sticky bg-gray-200 h-[1px] top-12 left-0 right-0"></div>
    </>
  );
};

export default BlogHeader;
