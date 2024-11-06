"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaAngleRight } from "react-icons/fa6";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean); // Get path segments and remove empty entries

  const filteredSegments = segments.filter(segment => segment !== "dashboard");

  const transformText = (text) => {
    return text
      .split("-") 
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) 
      .join(" "); 
  };

  const breadcrumbsList = filteredSegments.map((segment, index) => {
    // Create href for each segment
    const href = `/${filteredSegments.slice(0, index + 1).join("/")}`;

    return {
      href,
      label: transformText(segment),
    };
  });

  return (
    <nav
      className="flex justify-between items-center p-4 bg-white px-6 py-[17px] shadow-sm"
      aria-label="Breadcrumb"
    >
      <p className="text-[19px] font-medium">
        {transformText(filteredSegments[0])}
      </p>
      <ol className="inline-flex items-center gap-5 space-x-1">
        {breadcrumbsList.map((item, index) => (
          <li key={index} className="flex gap-5 items-center">
            {index > 0 && <FaAngleRight className="text-[#9A8A99]" />}
            <Link
              href={item.href}
              className={`text-[#878a99] hover:text-blue-600`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
