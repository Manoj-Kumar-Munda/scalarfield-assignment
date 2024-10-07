import React from "react";
import { cn } from "../utils/cn";
import useApp from "../context/context";
import LgSidebar from "./LgSidebar";
import SmSidebar from "./SmSidebar";

const Sidebar = () => {
  const { isSmSidebarOpen, setIsSmSidebarOpen } = useApp();

  return (
    <div className="fixed z-50 top-0 bottom-0 hidden sm:inline-block bg-creame py-4">
      <div
        className={cn(
          " flex flex-col justify-between h-full max-w-[220px] w-full transition-300",
          isSmSidebarOpen && "max-w-[90px] w-full"
        )}
      >
        {isSmSidebarOpen ? <SmSidebar /> : <LgSidebar />}
      </div>
    </div>
  );
};

export default Sidebar;
