import React from "react";
import globeIcon from "../assets/discover.svg";
import { topics } from "../utils/constants";
import { nanoid } from "nanoid";
import TopicBtn from "../components/TopicBtn";
import Header from "../components/Header";
import { blogs } from "../utils/contents";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router-dom";

const Discover = () => {
  return (
    <>
      <div className="inline-flex gap-2 items-center py-4">
        <div className="aspect-square w-6 md:w-8 overflow-hidden">
          <img src={globeIcon} alt="" className="w-full h-full" />
        </div>
        <h1 className="text-2xl md:text-3xl font-sans text-gray-600 leading-loose">
          Discover
        </h1>
      </div>

      <div className="grid grid-cols-12 md:gap-x-12 ">
        <Header />
        <div className="col-span-12 md:col-span-8 space-y-4 mb-4">
          {blogs.map((blog) => (
            <Link key={nanoid()} className="block" to={`/blog/${blog.id}`}>
              <BlogCard key={nanoid()} blog={blog} />
            </Link>
          ))}
        </div>

        <div className="hidden md:block col-span-4 relative w-full">
          <div className=" bg-creame py-2 px-4 rounded-xl">
            <h2 className="text-gray-600 font-semibold leading-loose">
              Make it yours
            </h2>
            <p className="text-sm text-gray-600 font-semibold pr-4">
              Select topics and interests to customize your Discover experience
            </p>

            <div className="my-4 flex flex-wrap gap-2">
              {topics?.slice(1).map((topic) => (
                <TopicBtn key={nanoid()} topic={topic} />
              ))}
            </div>

            <div className="h-[1px] bg-gray-300 w-full"></div>

            <button className="font-medium mt-4 mb-2 w-full bg-torquoise text-center text-white py-2 rounded-full">
              Save Interests
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discover;
