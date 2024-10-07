import React from "react";
import Sidebar from "./Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import BlogHeader from "./BlogHeader";

const Layout = () => {
  const { pathname } = useLocation();
  return (
    <div className="flex min-h-screen gap-1 bg-creame ">
      <div className=" w-0 md:max-w-[220px] md:w-full">
        <Sidebar />
      </div>

      <div className="relative bg-white mt-2 mr-2 flex-1 rounded-xl ">
        {pathname?.includes("blog") && <BlogHeader />}
        <div className="w-full px-4">
          <div className="max-w-screen-lg mx-auto w-full my-2">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
