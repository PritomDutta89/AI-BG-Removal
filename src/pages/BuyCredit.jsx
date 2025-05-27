import React from "react";
import { assets, plans } from "../assets/assets";

const BuyCredit = () => {
  return (
    <div className="mt-[2rem] mx-[1rem] md:mx-[4rem] lg:mx-[7rem] min-h-[75vh] flex flex-col items-center gap-4">
      <button
        type="button"
        class="py-2.5 px-8 text-sm font-medium text-[#515151] bg-white rounded-full border border-gray-500 hover:border-gray-800"
      >
        Our Plans
      </button>

      <p className="text-[1.2rem] md:text-[1.8rem] text-center font-medium bg-gradient-to-r from-[#242424] to-[#9B9B9B] bg-clip-text text-transparent">
        Choose the plan that’s right for you
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-[1rem] w-full">
        {plans.map((item, index) => (
          <div key={index} className="border border-[#EDEDED] bg-[#FFFFFF] px-[2rem] py-[3rem] rounded-3xl ">
            <img src={assets.logo_icon} alt="" className="w-[2rem]" />
            <p className="text-[#515151] mt-[1rem] text-[1.3rem] font-medium">
              {item.id}
            </p>
            <p className="text-[#515151] text-sm">{item.desc}</p>
            <p className="mt-[0.8rem] ">
              <span className="text-[#515151] text-[2.2rem] font-semibold">
                {item.price}
              </span>{" "}
              <span className="text-[#515151]">/ {item.credits} credits</span>{" "}
            </p>
            <button
              type="button"
              class="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 w-full mt-[1.5rem]"
            >
              Get started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyCredit;
