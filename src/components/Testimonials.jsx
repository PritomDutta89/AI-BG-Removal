import React from "react";
import { testimonialsData } from "../assets/assets";

const Testimonials = () => {
  return (
    <div className="mt-[2rem] md:mt-[5rem] mx-[1rem] md:mx-[4rem] lg:mx-[7rem]">
      <p className="text-[1.2rem] md:text-[1.8rem] text-center font-bold bg-gradient-to-r from-[#242424] to-[#9B9B9B] bg-clip-text text-transparent">
        Customer Testimonials
      </p>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto mt-[3rem]">
        {testimonialsData.map((item) => (
          <div
            key={item.id}
            className="border border-[#E1E1E1] shadow-md p-[1.5rem] hover:scale-105 transition-all duration-700 cursor-default rounded-md bg-white"
          >
            <p className="text-[1.4rem]">”</p>
            <p className="text-[#7C7C7C] text-[0.8rem] font-medium">
              {item.text}
            </p>
            <div className="flex items-center gap-[0.7rem] mt-[0.8rem]">
              <img
                src={item.image}
                alt=""
                className="w-[2.2rem] rounded-full"
              />
              <div className="">
                <p className="font-medium text-[#4B445A]">{item.author}</p>
                <p className="font-medium text-[#62577B] text-[0.8rem]">
                  {item.jobTitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
