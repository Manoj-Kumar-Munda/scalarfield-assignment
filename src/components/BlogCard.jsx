import React from "react";
import { CiBookmark } from "react-icons/ci";
import avatar from "../assets/thumbnail.avif";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const BlogCard = ({ blog }) => {
  return (
    <div className="rounded-xl overflow-hidden">
      <div className="aspect-[4/3] md:aspect-[3/1] w-full md:max-h-96 overflow-hidden">
        <img
          src={blog.image}
          alt=""
          className="w-full h-full object-cover object-[40%_20%]"
        />
      </div>
      <div className="bg-creame py-4 px-4">
        <h1 className="text-lg font-semibold">{blog?.title}</h1>

        <p className="mt-2 text-gray-500 line-clamp-2">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {blog?.description}
          </ReactMarkdown>
        </p>
        <div className="flex justify-between items-center my-3">
          <div className="inline-flex items-center gap-1">
            <div className="w-4 h-4 rounded-full overflow-hidden">
              <img className="w-full h-full" src={avatar} alt="avatar" />
            </div>
            <span className="text-xs font-bold text-gray-500">manoj999</span>
          </div>

          <button>
            <CiBookmark />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
