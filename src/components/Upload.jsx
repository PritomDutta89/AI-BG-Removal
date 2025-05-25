import React from "react";
import { assets } from "../assets/assets";

const Upload = () => {
  return (
    <div className="mt-[2rem] md:mt-[5rem] mx-[1rem] md:mx-[4rem] lg:mx-[7rem]">
      <p className="text-[1.2rem] md:text-[1.8rem] text-center font-bold bg-gradient-to-r from-[#242424] to-[#9B9B9B] bg-clip-text text-transparent">
        See the magic. Try now
      </p>

      <div className="text-white mx-auto cursor-pointer w-fit bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:scale-105 transition-all duration-700  mt-6 font-medium rounded-full text-[0.6rem] md:text-sm px-3 md:px-5 py-1.5 md:py-2.5">
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
  );
};

export default Upload;
