import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex min-h-screen gap-1 bg-creame ">
      <div className="max-w-[220px] w-full">
        <Sidebar />
      </div>

      <div className="relative bg-white mt-2 mr-2 flex-1 rounded-xl ">
        <div className=" max-w-screen-md w-full mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
