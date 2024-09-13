"use client";
import React from "react";
import { IconCapProjecting, IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FloatingNav } from "./ui/floating-navbar";
import { GrProjects } from "react-icons/gr";
import { usePathname } from "next/navigation";

export function Header() {

  const pathname = usePathname();

  const navItems = [
    {
      name: "Home",
      link: "/",
      // icon: <IconHome className="h-4 w-4 text-black-100  dark:text-white" />,
      icon: <IconHome />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage />
      ),
    },
    {
      name: "My Projects",
      link: "/projects",
      icon: (
        <GrProjects />
      ),
    },
  ];
  return (
    <div className={ `relative  w-full `}>
      <FloatingNav  navItems={navItems} />
    </div>
  );
}
