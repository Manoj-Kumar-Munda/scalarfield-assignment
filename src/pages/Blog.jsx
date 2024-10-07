import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../utils/contents";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Blog = ({ setActiveSubHeading, setSubHeadings }) => {
  const { id } = useParams();
  const subHeadingRef = useRef([]);

  const blog = useMemo(() => blogs.find((blog) => blog.id == id), []);

  const addRef = useCallback((el) => {
    if (el && !subHeadingRef.current.includes(el)) {
      subHeadingRef.current.push(el);
    }
  }, []);

  const scrollHandler = () => {
    if (window.scrollY <= 10) {
      setActiveSubHeading(0);
    }

    subHeadingRef.current.forEach((elem, index) => {
      const rect = elem.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom > 0) {
        console.log(elem?.innerText, index);
        setActiveSubHeading(index + 1);
      }
    });
  };

  useEffect(() => {
    const subHeads = subHeadingRef.current.map((el) => el.innerText);
    subHeads.unshift("Introduction");
    setSubHeadings(subHeads);
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <div className="col-span-8">
      <h1 className="text-4xl mb-6">{blog?.title}</h1>
      <ReactMarkdown
        components={{
          h1: ({ node, ...props }) => <h1 ref={addRef} {...props} />,
        }}
        rehypePlugins={[rehypeRaw]}
      >
        {blog?.description}
      </ReactMarkdown>
    </div>
  );
};

export default React.memo(Blog);
