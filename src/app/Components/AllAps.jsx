// pages/index.js
import { allApps } from "@/Data";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <img src="/assets/icons/logo.png" alt="Logo" className="h-16 w-16" />
      <div className="flex items-center space-x-4">
        <img
          src="/assets/icons/bell.svg"
          alt="Notifications"
          className="h-6 cursor-pointer"
        />
        <p className="mb-0">Hello Admin!</p>
        <img
          src="/assets/icons/adminUser.jpg"
          alt="User"
          className="h-9 w-9 rounded-lg cursor-pointer object-cover shadow-sm"
        />
      </div>
    </header>
  );
};

export default function AppAps() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: "url('/assets/icons/bgImage.svg')", // Replace with your image path
        backgroundSize: "cover", // Options: cover, contain, etc.
        backgroundPosition: "center", // Adjust position as needed
      }}
    >
      <Header />
      <div className="flex items-center justify-center">
        <div className="max-w-4xl w-full p-6">
          <div className="flex flex-wrap justify-center gap-3">
            {allApps.map((app, index) => (
              <Link href={"/dashboard/admission"} key={index}>
                <div
                  className="p-5 border border-transparent hover:border-customDarkBlue hover:bg-customBlue hover:cursor-pointer rounded-lg transition duration-300 ease-in-out"
                  title={app.name}
                >
                  <div className="flex items-center bg-white p-4 w-24 h-24 rounded-lg shadow-md">
                    <img
                      src={app.icon}
                      alt={app.name}
                      className={`${app.height} ${app.width} mx-auto`}
                    />
                  </div>
                  <p className="text-center truncate text-gray-700 font-semibold text-custom-em mt-2 w-24">
                    {app.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
