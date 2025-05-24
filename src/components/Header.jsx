import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row justify-center sm:justify-between items-center mx-[1rem] md:mx-[4rem] lg:mx-[7rem] py-[1rem]">
      {/* -------Left side----------- */}
      <div>
        <p className="text-[#353535] font-semibold text-[2rem] min-[900px]:text-[3rem] leading-tight">
          Remove the <br className="max-md:hidden" />{" "}
          <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
            background
          </span>{" "}
          from <br className="max-md:hidden" /> images for free.
        </p>
        <p className="text-[#515151] leading-tight mt-6 text-[0.7rem] min-[900px]:text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br className="max-sm:hidden" /> Lorem Ipsum has been the industry's standard dummy
          text ever.
        </p>
        {/* trick */}
        <div className="text-white cursor-pointer w-fit bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:scale-105 transition-all duration-700  mt-6 font-medium rounded-full text-[0.6rem] md:text-sm px-3 md:px-5 py-1.5 md:py-2.5">
          <input type="file" id="upload1" hidden />
          <label
            htmlFor="upload1"
            className="flex justify-center items-center gap-3 cursor-pointer "
          >
            <img src={assets.upload_btn_icon} alt="" className="w-[1rem]" />
            <p>Upload your image</p>
          </label>
        </div>
      </div>

      {/* --------Right side---------- */}
      <div className="">
        <img src={assets.header_img} alt="" className="w-[27rem]"/>
      </div>
    </div>
  );
};

export default Header;
