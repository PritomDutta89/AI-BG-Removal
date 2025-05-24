import React, { useState } from "react";
import { assets } from "../assets/assets";

const BgSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div className="mt-[2rem] md:mt-[5rem] mx-[1rem] md:mx-[4rem] lg:mx-[7rem]">
      <p className="text-[1.2rem] md:text-[1.8rem] text-center font-bold bg-gradient-to-r from-[#242424] to-[#9B9B9B] bg-clip-text text-transparent">
        Remove Background With High <br /> Quality and Accuracy
      </p>

      <div className="relative w-full max-w-3xl overflow-hidden m-auto rounded-xl mt-[2rem]">
        <img
          src={assets.image_w_bg}
          style={{ clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)` }}
          alt=""
        />

        <img
          src={assets.image_wo_bg}
          className="absolute top-0 left-0 w-full h-full"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
          alt=""
        />

        {/* slider */}
        <input
          type="range"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider"
          min={0}
          max={100}
          value={sliderPosition}
          onChange={handleSliderChange}
        />
      </div>
    </div>
  );
};

export default BgSlider;
