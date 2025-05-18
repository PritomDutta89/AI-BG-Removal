import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center mx-[1rem] md:mx-[4rem] lg:mx-[7rem] py-[1rem]">
      <img
        src={assets.logo}
        alt="icon"
        className="w-[7rem] md:w-[10rem] lg:w-[12rem] cursor-pointer"
        onClick={() => navigate("/")}
      />
      <button
        type="button"
        className="text-white flex justify-center items-center gap-3 bg-[#313131] hover:bg-gray-900 focus:outline-none font-medium rounded-full text-[0.6rem] md:text-sm px-3 md:px-5 py-1.5 md:py-2.5"
      >
        Get started
        <img
          src={assets.arrow_icon}
          alt="icon"
          className="w-[0.5rem] md:w-[0.8rem]"
        />
      </button>
    </div>
  );
};

export default Navbar;
