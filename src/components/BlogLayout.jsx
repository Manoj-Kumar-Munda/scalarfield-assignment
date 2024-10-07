import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../utils/contents";
import Blog from "../pages/Blog";
import { cn } from "../utils/cn";
import { nanoid } from "nanoid";
import useApp from "../context/context";
import { PiGitBranchLight } from "react-icons/pi";
import ToggleBtn from "./ToggleBtn";

const BlogLayout = () => {
  const [subHeadings, setSubHeadings] = useState([]);
  const { setBlogTitle } = useApp();
  const [activeSubHeading, setActiveSubHeading] = useState(0);
  const { id } = useParams();
  const blog = useMemo(() => blogs.find((blog) => blog.id == id), []);

  useEffect(() => {
    if (activeSubHeading > 0) {
      setBlogTitle(blog?.title);
    } else {
      setBlogTitle(null);
    }
  }, [activeSubHeading]);

  return (
    <div className="relative">
      <div className="w-full aspect-[3/1] rounded-md overflow-hidden shadow-lg">
        <img
          src={blog?.image}
          className="w-full h-full object-cover object-[40%_20%]"
          alt={blog?.title}
        />
      </div>

      <div className="flex flex-col mt-6 md:grid grid-cols-12 gap-x-6">
        <Blog
          setSubHeadings={setSubHeadings}
          setActiveSubHeading={setActiveSubHeading}
        />
        <div className="col-span-4 hidden md:block">
          <div className="sticky top-20">
            <div className="relative space-y-1 font-medium text-sm">
              {subHeadings?.map((heading, index) => (
                <div
                  key={nanoid()}
                  className={cn(
                    "border-l-[3px] border-gray-300 rounded-sm text-gray-400 pl-4 transition-300",
                    activeSubHeading === index && "border-black text-black"
                  )}
                >
                  {heading}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-8 left-[220px] right-0  ">
        <div className="max-w-screen-lg mx-auto w-full  grid grid-cols-12  pr-6">
          <div className=" col-span-8 bg-creame p-2 rounded-full  w-full flex justify-center items-center">
            <div className="relative bg-white w-full h-full rounded-full border-2 py-3 flex gap-2 justify-between items-center ">
              <div className=" bg-inherit flex flex-col w-full justify-center ml-4 ">
                <input
                  type="text"
                  placeholder="Ask follow-up"
                  className="w-full outline-none bg-transparent placeholder:text-gray-500 caret-torquoise"
                />
              </div>
              <div className="inline-flex items-center gap-4 mr-4">
                <ToggleBtn />
                <button className="rounded-full aspect-square grid place-content-center w-8 bg-gray-200">
                  <PiGitBranchLight color="#4b5563" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
