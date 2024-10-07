import React from "react";
import logo from "../assets/logo.svg";
import { LuArrowLeftToLine } from "react-icons/lu";
import { cn } from "../utils/cn";
import { GoArrowUpRight } from "react-icons/go";
import thumbnail from "../assets/thumbnail.avif";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { CiMobile1 } from "react-icons/ci";
import { BsDiscord } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import NavItems from "./NavItems";
import { NavLinks } from "../utils/constants";
import { nanoid } from "nanoid";
import useApp from "../context/context";

const Sidebar = () => {
  const { setIsOpenModal } = useApp();

  return (
    <div className="fixed top-0 bottom-0 hidden sm:inline-block bg-creame py-4">
      <div className="flex flex-col justify-between h-full max-w-[220px] w-full">
        <div>
          <div className="inline-flex gap-6 items-center mx-2 ">
            <div className="w-[146px]">
              <img className="w-full" src={logo} alt="logo" />
            </div>
            <button className="relative w-8 h-8 rounded-full flex justify-center items-center transition group hover:bg-gray-200">
              <span
                className={cn(
                  "absolute invisible top-full inline-block px-2 text-xs font-semibold py-1 box-border rounded-md bg-black opacity-0 transition-300  text-white group-hover:visible  group-hover:top-[calc(100%+8px)] group-hover:opacity-100"
                )}
              >
                Collapse
              </span>

              <LuArrowLeftToLine size={14} />
            </button>
          </div>

          <button
            onClick={() => setIsOpenModal(true)}
            className={cn(
              " my-5 border-2 border-transparent flex pl-3 pr-2 mx-auto items-center justify-between gap-5 bg-white py-1.5 rounded-full transition-300 hover:border-torquoise"
            )}
          >
            <span className="text-gray-600 font-semibold text-sm">
              New Thread
            </span>
            <div className="flex items-center gap-1">
              <span className="inline-block border px-1 text-sm font-mono">
                Ctrl
              </span>
              <span className="inline-block border px-1 text-sm font-mono">
                I
              </span>
            </div>
          </button>

          <div className="px-1 w-full space-y-1 ">
            {NavLinks.map((item) => (
              <NavItems key={nanoid()} link={item} />
            ))}
          </div>
        </div>

        <div className="">
          <div className="flex flex-col mb-6">
            <div className="mx-4">
              <h2 className="font-semibold text-gray-600">Try Pro</h2>
              <p className="text-sm text-gray-500 font-medium">
                Upgrade for image upload, smarter AI, and more Pro Search.
              </p>
              <button className="flex items-center gap-2 mt-2 px-2.5 bg-black/5 rounded-md py-0.5">
                <GoArrowUpRight />
                <span className="font-semibold text-gray-600 leading-loose">
                  Learn More
                </span>
              </button>
            </div>
          </div>

          <div className="border-y py-2">
            <div className="mx-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img
                    className="w-full h-auto object-cover"
                    src={thumbnail}
                    alt="profile"
                  />
                </div>

                <div className="flex gap-1 items-center">
                  <span className="text-gray-600 font-semibold text-sm">
                    Manoj999
                  </span>
                  <MdKeyboardArrowDown />
                </div>
              </div>

              <IoSettingsOutline />
            </div>
          </div>

          <div className="mx-4 flex justify-between items-center py-3">
            <div className="flex gap-1 items-center">
              <CiMobile1 color="#4b5563" />
              <span className="text-gray-600 text-sm font-semibold">
                Download
              </span>
            </div>
            <div className="flex gap-3 items-center">
              <FaXTwitter size={14} color="#4b5563" />
              <BsDiscord size={14} color="#4b5563" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
