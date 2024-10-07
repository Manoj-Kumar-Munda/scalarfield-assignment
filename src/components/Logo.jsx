import React from "react";
import logo from "../assets/logo.svg";
import icon from "../assets/Black.svg";
export const Logo = () => {
  return (
    <div className="w-[146px]">
      <img className="w-full" src={logo} alt="logo" />
    </div>
  );
};

export const SmLogo = () => {
  return (
    <div className="px-4">
      <img src={icon} alt="logo" />
    </div>
  );
};
