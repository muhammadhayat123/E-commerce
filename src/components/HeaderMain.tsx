import React from "react";
import { FiHeart } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";

const HeaderMain = () => {
  return (
    <header className="border-b border-gray-200 py-6">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="font-bold text-4xl text-center text-black">Logo</h1>
        <div className="relative w-full sm:w-[300px] md:w-[70%]">
          <input
            className="w-full p-2 px-4 border border-gray-200 rounded-lg"
            type="text"
            placeholder="Enter any product name..."
          />
          <BsSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className="hidden lg:flex items-center gap-4 text-gray-500 text-2xl">
          <BiUser />
          <div className="relative">
            <FiHeart />
            <span className="absolute top-0 right-0 w-[10px] h-[18px] bg-red-600 text-white text-xs rounded-full flex justify-center items-center translate-x-1 translate-y-1">
              0
            </span>
          </div>
          <div className="relative">
            <HiOutlineShoppingBag />
            <span className="absolute top-0 right-0 w-[10px] h-[18px] bg-red-600 text-white text-xs rounded-full flex justify-center items-center translate-x-1 translate-y-1">
              0
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMain;
