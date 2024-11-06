"use client";
import React, { useState } from "react";
import NavBar from "../Components/Dashboard/NavBar";
import AppSideBar from "../Components/Dashboard/SideBar";
import PagesSideBar from "../Components/Dashboard/PagesSideBar";
import Breadcrumbs from "../Components/Breadcrumbs";
import AppSideBarInMobile from "../Components/AppSideBarInMobile";

const Layout = ({ children }) => {
  const [DisplayPageSideBar, setDisplayPageSideBar] = useState(true);
  const [AppPages, setAppPages] = useState(null);
  function HandlerDisplayPageSideBar() {
    setDisplayPageSideBar(!DisplayPageSideBar);
  }
  function HandlerSelectAppsPages(data) {
    setAppPages(data);
  }
  return (
    <div className="flex bg-dashboardBackground">
      <div className=" md:hidden block">
        <AppSideBarInMobile
          setDisplayPageSideBar={setDisplayPageSideBar}
          DisplayPageSideBar={DisplayPageSideBar}
        />
      </div>
      <div className="hidden md:block">
        <AppSideBar
          setDisplayPageSideBar={setDisplayPageSideBar}
          HandlerSelectAppsPages={HandlerSelectAppsPages}
        />
      </div>
      <div
        className={`min-h-screen hidden md:block   shadow-PageSideBarShadow   transition-all duration-300 ease-in-out overflow-hidden z-10
          ${
            DisplayPageSideBar
              ? "max-w-xs opacity-100 bg-white px-7 py-6 w-[27%]"
              : "max-w-0 opacity-0 px-0 py-0 w-[0%]"
          }`}
      >
        <PagesSideBar AppPages={AppPages} />
      </div>
      <div className="flex-grow">
        <NavBar
          HandlerDisplayPageSideBar={HandlerDisplayPageSideBar}
          DisplayPageSideBar={DisplayPageSideBar}
        />
        <Breadcrumbs />
        <div className="py-4 px-6">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
