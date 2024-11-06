"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { LiaAngleRightSolid } from "react-icons/lia";
import { MdOutlineHorizontalRule } from "react-icons/md";

const DropdownItem = ({
  item,
  isOpen,
  toggleDropdown,
  closing,
  handleAnimationEnd,
  index,
  appName,
}) => {
  const formatText = (text, terms = []) =>
    text
      .toLowerCase()
      .replace(new RegExp(`\\b(${terms.join("|")})\\b`, "g"), (match) =>
        match.replace(/\s+/g, "-")
      )
      .replace(/\s+/g, "-")
      .replace(/\//g, "-");

  const pathname = usePathname();
  const segments = pathname.split("/");
  return (
    <div className="flex flex-col mb-3" key={index}>
      <Link
        href={
          "/dashboard" +
          "/" +
          formatText(appName) +
          "/" +
          formatText(item?.label)
        }
      >
        <button
          as={"div"}
          className={` w-full ${
            item?.label.toLowerCase().replace(/[^a-z0-9]/gi, "") ===
            segments[3]?.toLowerCase().replace(/[^a-z0-9]/gi, "")
              ? "bg-gray-100 rounded-md"
              : ""
          } group flex items-center justify-between py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-md`}
          onClick={() => item.hasDropdown && toggleDropdown(item?.label)} // Ensure this triggers a state change
          aria-expanded={isOpen}
          aria-controls={`${item?.label}-dropdown`}
        >
          <div className="flex items-center gap-2">
            <MdOutlineHorizontalRule
              className={` ${
                item?.label.toLowerCase().replace(/[^a-z0-9]/gi, "") ===
                segments[3]?.toLowerCase().replace(/[^a-z0-9]/gi, "")
                  ? "text-blue-500"
                  : ""
              } group-hover:text-blue-500`}
            />
            <span
              className={`  ${
                item?.label.toLowerCase().replace(/[^a-z0-9]/gi, "") ===
                segments[3]?.toLowerCase().replace(/[^a-z0-9]/gi, "")
                  ? "text-blue-500"
                  : ""
              } truncate text-start w-[168px]  group-hover:text-blue-500`}
              title={item?.label}
            >
              {item?.label}
            </span>
          </div>

          {item.hasDropdown && (
            <LiaAngleRightSolid
              className={`w-4 h-4 transform transition-transform ${
                isOpen ? "rotate-90" : ""
              }`}
              style={{ fill: "currentColor" }}
            />
          )}
        </button>
      </Link>

      {item.hasDropdown && (
        <div
          id={`${item?.label}-dropdown`}
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-40" : "max-h-0"
          }`}
          onAnimationEnd={handleAnimationEnd}
        >
          <ul
            className={`ml-9 mt-3 text-gray-600 ${
              closing ? "opacity-0" : "opacity-100"
            } transition-opacity duration-300`}
          >
            {item.subItems?.map((subItem, index) => (
              <Link
                key={index}
                href={
                  "/dashboard" +
                  "/" +
                  formatText(appName) +
                  "/" +
                  formatText(item?.label) +
                  "/" +
                  formatText(subItem)
                }
              >
                <li className="py-1 mb-2 flex items-center group transition-colors cursor-pointer">
                  <span
                    className={` ${
                      subItem.toLowerCase().replace(/[^a-z0-9]/gi, "") ===
                      segments[4]?.toLowerCase().replace(/[^a-z0-9]/gi, "")
                        ? "bg-blue-500"
                        : ""
                    } w-[.6rem] h-[.6rem] mr-2 rounded-full border border-gray-400 group-hover:bg-blue-500 transition-colors`}
                  ></span>
                  <span
                    className={`${
                      subItem.toLowerCase().replace(/[^a-z0-9]/gi, "") ===
                      segments[4]?.toLowerCase().replace(/[^a-z0-9]/gi, "")
                        ? "text-blue-500"
                        : ""
                    } group-hover:text-blue-500 transition-colors`}
                  >
                    {subItem}
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const PagesSideBar = ({ AppPages }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [closingDropdown, setClosingDropdown] = useState(null);

  const toggleDropdown = (label) => {
    if (openDropdown === label) {
      setOpenDropdown(null);
    } else {
      setClosingDropdown(openDropdown);
      setOpenDropdown(label);
    }
  };

  const handleAnimationEnd = () => {
    if (closingDropdown) {
      setClosingDropdown(null);
    }
  };

  return (
    <>
      <h1 className="text-2xl truncate" title={AppPages && AppPages?.name}>
        {AppPages && AppPages?.name}
      </h1>
      <div className="mt-8">
        <div className="flex flex-col">
          {AppPages && AppPages?.SubApp?.map((item, index) => (
            <div key={index}>
              <DropdownItem
                item={item}
                isOpen={openDropdown === item.label}
                toggleDropdown={toggleDropdown}
                closing={closingDropdown === item.label}
                onAnimationEnd={handleAnimationEnd}
                index={index}
                appName={AppPages?.name}
              />
            </div>
          ))}
          {AppPages===null && <div>Loading...</div> }
        </div>
      </div>
    </>
  );
};

export default PagesSideBar;
