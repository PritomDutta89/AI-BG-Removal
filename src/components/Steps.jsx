import React from "react";
import { assets } from "../assets/assets";

const Steps = () => {
  const stepsItem = [
    {
      img: assets.upload_icon,
      heading: "Upload image",
      text: "This is a demo text, will replace it later. This is a demo..",
    },
    {
      img: assets.remove_bg_icon,
      heading: "Remove background",
      text: "This is a demo text, will replace it later. This is a demo..",
    },
    {
      img: assets.download_icon,
      heading: "Download image",
      text: "This is a demo text, will replace it later. This is a demo..",
    },
  ];

  return (
    <div className="mt-[2rem] md:mt-[5rem] mx-[1rem] md:mx-[4rem] lg:mx-[7rem]">
      <p className="text-[1.2rem] md:text-[1.8rem] text-center font-bold bg-gradient-to-r from-[#242424] to-[#9B9B9B] bg-clip-text text-transparent">
        Steps to remove background <br /> image in seconds
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[3rem]">
        {stepsItem.map((item, index) => (
          <div key={index} className="border border-[#E1E1E1] shadow-md p-[1.5rem] rounded-md bg-white">
            <div className="flex items-center gap-[0.7rem]">
              <img src={item.img} alt="" className="w-[1.8rem]" />
              <p className="font-medium">{item.heading}</p>
            </div>
            <p className="text-[#7C7C7C] text-[0.8rem] font-medium ml-[2.5rem] mt-[0.2rem]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
