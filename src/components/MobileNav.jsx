import React from "react";
import { NavLinks } from "../utils/constants";
import { nanoid } from "nanoid";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../utils/cn";

const MobileNav = () => {
  const { pathname } = useLocation();
  return (
    <div className="block sm:hidden fixed bottom-0 left-0 right-0 bg-creame">
      <div className="flex gap-1  justify-between h-16 items-stretch">
        {NavLinks?.map((link) => (
          <Link
            to={link?.path}
            key={nanoid()}
            className="relative flex flex-col justify-center items-center flex-1"
          >
            <div className="flex justify-center">
              <div className="w-5">
                <img src={link?.icon} className="w-full " />
              </div>
            </div>
            <span className="font-semibold text-sm text-gray-600">
              {link?.title}
            </span>

            <div
              className={cn(
                "absolute top-0 right-0 left-0 bg-black opacity-0 h-1 transition-300 ",
                pathname == link?.path && "opacity-100"
              )}
            ></div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
