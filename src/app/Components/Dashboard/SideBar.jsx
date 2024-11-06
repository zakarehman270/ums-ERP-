"use client";
import { allApps } from "@/Data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const AppSideBar = ({ setDisplayPageSideBar, HandlerSelectAppsPages }) => {
  const pathname = usePathname();
  const segments = pathname.split("/");

  const formatText = (text, terms = []) =>
    text
      .toLowerCase()
      .replace(new RegExp(`\\b(${terms.join("|")})\\b`, "g"), (match) =>
        match.replace(/\s+/g, "-")
      )
      .replace(/\s+/g, "-")
      .replace(/\//g, "-");

  // Run client-only logic in useEffect to avoid SSR mismatches
  useEffect(() => {
    if (allApps) {
      for (let i = 0; i < allApps.length; i++) {
        if (
          allApps[i].name?.toLowerCase().replace(/[^a-z0-9]/gi, "") ===
          segments[2]?.toLowerCase().replace(/[^a-z0-9]/gi, "")
        ) {
          HandlerSelectAppsPages(allApps[i]);
        }
      }
    }
  }, [segments, allApps]);

  return (
    <div className="min-h-screen px-4 py-6 bg-white flex flex-col items-center shadow-DashboardShadow z-10">
      <img src="/assets/icons/logo.png" alt="dashboard" className="w-8 h-8" />
      <div className="mt-8">
        {allApps &&
          allApps.map((items, index) => (
            <div key={index}>
              <Link href={"/dashboard" + "/" + formatText(items.name)}>
                <div
                  className={`${
                    items.name?.toLowerCase().replace(/[^a-z0-9]/gi, "") ===
                    segments[2]?.toLowerCase().replace(/[^a-z0-9]/gi, "")
                      ? "bg-dashboardCustomBlue rounded-lg "
                      : ""
                  } mt-3 p-3 cursor-pointer hover:bg-dashboardCustomBlue hover:rounded-lg transition-all duration-200`}
                  onClick={() => {
                    setDisplayPageSideBar(true);
                    HandlerSelectAppsPages(items);
                  }}
                >
                  <img src={items.icon} alt={items.name} className="h-6 w-6" />
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AppSideBar;
