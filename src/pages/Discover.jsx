import React from "react";
import globeIcon from "../assets/discover.svg";
import blog1 from "../assets/images/blog-1.jpg";
import { topics } from "../utils/constants";
import { nanoid } from "nanoid";
import TopicBtn from "../components/TopicBtn";


const Discover = () => {
  return (
    <div className="w-full px-4">
      <div className="max-w-screen-lg mx-auto w-full border">
        <div className="inline-flex gap-2 items-center py-1">
          <div className="w-8 h-8 overflow-hidden">
            <img src={globeIcon} alt="" className="w-full h-full" />
          </div>
          <h1 className="text-3xl font-sans text-gray-600 leading-loose">
            Discover
          </h1>
        </div>

        <div className="absolute left-0 right-0 h-[1px] bg-black/5"></div>
        <div className="grid grid-cols-12 md:gap-x-12 my-4">

          

          <div className="col-span-12 md:col-span-8">
            <div className="">
              <div className="aspect-[4/3] md:aspect-[3/1] w-full rounded-lg md:max-h-96 overflow-hidden">
                <img
                  src={blog1}
                  alt=""
                  className="w-full h-full object-cover object-[40%_20%]"
                />
              </div>
            </div>
          </div>

          <div className="hidden md:block col-span-4 relative w-full">
            <div className=" bg-creame py-2 px-4 rounded-xl">
              <h2 className="text-gray-600 font-semibold leading-loose">
                Make it yours
              </h2>
              <p className="text-sm text-gray-600 font-semibold pr-4">
                Select topics and interests to customize your Discover
                experience
              </p>

              <div className="my-4 flex flex-wrap gap-2">
                {topics?.map((topic) => (
                  <TopicBtn key={nanoid()} topic={topic} />
                ))}
              </div>

              <div className="h-[1px] bg-gray-300 w-full"></div>

              <button className="mt-4 mb-2 w-full bg-torquoise text-center text-white py-2 rounded-full">
                Save Interests
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Discover;
