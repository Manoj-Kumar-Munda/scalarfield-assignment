import React from "react";
import Sidebar from "./Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import BlogHeader from "./BlogHeader";
import Modal from "./Modal";
import useApp from "../context/context";
import { cn } from "../utils/cn";

const Layout = () => {
  const { pathname } = useLocation();
  const { isOpenModal, isSmSidebarOpen } = useApp();

  console.log(isOpenModal);
  

  return (
    <div className="flex min-h-screen gap-1 bg-creame ">
      {isOpenModal && <Modal />}
      <div
        className={cn(
          " w-0 md:max-w-[220px] md:w-full transition-300",
          isSmSidebarOpen && "w-0 md:max-w-[90px]"
        )}
      >
        <Sidebar />
      </div>

      <div className="relative bg-white mt-2 mr-2 flex-1 rounded-xl ">
        {pathname?.includes("blog") && <BlogHeader />}
        <div className="w-full px-4">
          <div className="max-w-screen-lg mx-auto w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
