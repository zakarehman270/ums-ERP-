"use client";
import { allApps } from "@/Data";
import { useState } from "react";
import { LiaAngleRightSolid } from "react-icons/lia";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
export default function AppSideBarInMobile({
  DisplayPageSideBar,
  setDisplayPageSideBar,
}) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeSubIndex, setActiveSubIndex] = useState({});

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleSubDropdown = (appIndex, subIndex) => {
    setActiveSubIndex({
      ...activeSubIndex,
      [appIndex]: activeSubIndex[appIndex] === subIndex ? null : subIndex,
    });
  };

  return (
    <div className="relative">
      <div
        className={`fixed top-0 left-0 h-full z-10 w-80 bg-white shadow-lg transition-transform transform duration-500 ${
          DisplayPageSideBar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 overflow-y-auto h-full">
          <div className="flex gap-2 items-center mb-[30px] justify-between">
            <img src="/assets/icons/logo.png" alt="logo" className="w-[60px]" />
            <IoMdClose className="w-[30px] text-2xl"   onClick={() => {
            setDisplayPageSideBar(false);
          }}/>   
          </div>

          <div className="space-y-3">
            {allApps.map((app, appIndex) => (
              <div key={appIndex}>
                <div
                  className="flex items-center justify-between cursor-pointer hover:bg-gray-100 p-2 rounded transition-colors"
                  onClick={() => toggleDropdown(appIndex)}
                >
                  <div className="flex items-center">
                    <img
                      src={app.icon}
                      alt={app.name}
                      width={24}
                      height={24}
                      className="mr-2"
                    />
                    <span className="font-medium">{app.name}</span>
                  </div>
                  <LiaAngleRightSolid
                    className={`transition-transform duration-500 ${
                      activeIndex === appIndex ? "rotate-90" : ""
                    }`}
                  />
                </div>

                <div
                  className={`pl-6 mt-2 overflow-hidden transition-all duration-500 ${
                    activeIndex === appIndex ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <ul className="space-y-2">
                    {app.SubApp.map((subApp, subIndex) => (
                      <li key={subIndex}>
                        <div
                          className="flex items-center justify-between cursor-pointer hover:bg-gray-100 p-2 rounded transition-colors"
                          onClick={() =>
                            subApp.hasDropdown &&
                            toggleSubDropdown(appIndex, subIndex)
                          }
                        >
                          <div className="flex items-center space-x-2">
                            <MdOutlineHorizontalRule />
                            <span>{subApp.label}</span>
                          </div>
                          {subApp.hasDropdown && (
                            <LiaAngleRightSolid
                              className={`transition-transform duration-500 ${
                                activeSubIndex[appIndex] === subIndex
                                  ? "rotate-90"
                                  : ""
                              }`}
                            />
                          )}
                        </div>

                        <div
                          className={`pl-4 mt-1 overflow-hidden transition-all duration-500 ${
                            subApp.hasDropdown &&
                            activeSubIndex[appIndex] === subIndex
                              ? "max-h-screen"
                              : "max-h-0"
                          }`}
                        >
                          <ul className="space-y-1">
                            {subApp.subItems?.map((subItem,SubItemsIndex) => (
                              <li
                                key={SubItemsIndex}
                                className="relative gap-2 text-sm ml-4 text-gray-600 hover:text-gray-800 transition-colors flex items-center space-x-2"
                              >
                                <span className="inline-block  w-2 h-2 border border-gray-600 rounded-full hover:bg-gray-600 transition-colors"></span>
                                {subItem}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {DisplayPageSideBar && (
        <div
          className="fixed inset-0 bg-black opacity-50 transition-opacity duration-500 hover:opacity-60"
          onClick={() => {
            setDisplayPageSideBar(false);
          }}
        ></div>
      )}
    </div>
  );
}
