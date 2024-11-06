"use client";
import { usePathname } from "next/navigation";
import React from "react";

const page = () => {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const id = segments[2]; // Extracts the [id] part
  return <div className=""> hello = {id}</div>;
};

export default page;
