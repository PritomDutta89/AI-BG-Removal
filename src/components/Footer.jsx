import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="mt-[2rem] md:mt-[5rem] mx-[1rem] md:mx-[4rem] lg:mx-[7rem] flex flex-col gap-4 md:flex-row justify-between items-center pb-[1rem]">
      <div className="flex items-center gap-4">
        <img className="w-[10rem]" src={assets.logo} alt="" />
        <p className="hidden md:block flex-1 border-l-2 border-gray-400 pl-4 text-sm text-gray-500">All right reserved. Copyright @bg removal</p>
      </div>

      <div className="flex items-center gap-2">
        <img width={40} src={assets.facebook_icon} alt="" />
        <img width={40} src={assets.twitter_icon} alt="" />
        <img width={40} src={assets.google_plus_icon} alt="" />
      </div>
    </div>
  );
};

export default Footer;
