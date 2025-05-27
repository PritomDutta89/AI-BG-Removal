import React from "react";
import { assets } from "../assets/assets";

const Result = () => {
  return (
    <div className="mt-[2rem] mx-[1rem] md:mx-[4rem] lg:mx-[7rem] min-h-[75vh] bg-white rounded-lg p-[2rem]">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="">
          <p className="text-[#42405A] font-medium">Original</p>
          <img
            src={assets.image_w_bg}
            alt=""
            className="rounded-lg mt-[1rem]"
          />
        </div>

        <div className="">
          <p className="text-[#42405A] font-medium">Background Removed</p>

          <div className="rounded-md border border-gray-300 h-[88%] bg-layer mt-[1rem]">
            <img
              src={assets.image_wo_bg}
              alt=""
              // className="rounded-lg mt-[1rem]"
            />
            {/* spin */}
            {/* <div className="flex justify-center items-center h-full">
              <div className="border-4 border-violet-600 rounded-full h-12 w-12 border-t-transparent animate-spin "></div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-3 mt-4">
        <p className="text-[#8448FD] cursor-pointer w-fit border border-[#7D48FE] hover:scale-105 transition-all duration-700  mt-6 font-medium rounded-full text-[0.6rem] md:text-sm px-3 md:px-5 py-1.5 md:py-2.5">
          Try another image
        </p>
        <p className="text-white cursor-pointer w-fit bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:scale-105 transition-all duration-700  mt-6 font-medium rounded-full text-[0.6rem] md:text-sm px-3 md:px-5 py-1.5 md:py-2.5">
          Download image
        </p>
      </div>
    </div>
  );
};

export default Result;
