import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../utils/contents";
import Blog from "../pages/Blog";
import { cn } from "../utils/cn";
import { nanoid } from "nanoid";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { GoBookmark } from "react-icons/go";
import { FiLink } from "react-icons/fi";
import { FaShare } from "react-icons/fa6";

const BlogLayout = () => {
  const [subHeadings, setSubHeadings] = useState([]);
  const [activeSubHeading, setActiveSubHeading] = useState(0);
  const { id } = useParams();
  const blog = useMemo(() => blogs.find((blog) => blog.id == id), []);

  return (
    <div>
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
    </div>
  );
};

export default BlogLayout;
