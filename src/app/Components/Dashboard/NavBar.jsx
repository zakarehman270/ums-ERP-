"use client"
import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { GoBell } from "react-icons/go";
const NavBar = ({ HandlerDisplayPageSideBar, DisplayPageSideBar }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This will ensure the component is only rendered on the client side
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or you can return a loading spinner or placeholder
  }
  return (
    <div className="bg-white flex items-center justify-between w-full p-6  border-b-[1px] border-solid border-b-[#e9ebec]">
      <div className="flex items-center gap-2">
        <img
          src={
            DisplayPageSideBar
              ? "/assets/icons/menu.svg"
              : "/assets/icons/arrow-right.svg"
          }
          alt="menu1"
          className="cursor-pointer w-10 h-10 hidden md:block"
          onClick={() => {
            HandlerDisplayPageSideBar();
          }}
        />
        <img
          src={"/assets/icons/arrow-right.svg"}
          alt="menu2"
          className="cursor-pointer w-10 h-10 md:hidden block"
          onClick={() => {
            HandlerDisplayPageSideBar();
          }}
        />
        <div className="relative hidden sm-425:block">
          <input
            type="text"
            className="[padding:11px_10px_12px_40px] bg-[#F3F3F9] rounded-lg focus:outline-none"
            placeholder="Search..."
          />
          <div className="absolute top-[12px] left-[9px] text-[23px]">
            <IoIosSearch className="text-[#91919C]" />
          </div>
        </div>
      </div>
      <div className="flex items-center relative gap-10">
        <GoBell className="w-8 h-8 text-[#878A99]" />
        <div className="absolute  top-[0px] left-[14px]">
          <span
            className="rounded-full text-xs  w-5 h-5 bg-red-400 justify-center p-2 flex items-center text-white text-small
           absolute top-0"
          >
            2
          </span>
        </div>
        <div className="w-12 he-12">
          <img
            src="/assets/icons/avatar.jpg"
            alt="avatar"
            className="w-full rounded-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
