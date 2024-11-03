"use client";
import React from "react";
import { FloatingDock } from "../ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import '../Navbar/navbar.css';

export function Navbar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
      ),
      href: "/",
    },
    {
      title: "About",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#about",
    },
    {
      title: "Experience",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#experience",
    },
    {
      title: "Skills",
      href: "#skills",
    },
    {
      title: "Projects",
      href: "#project",
    },
    {
      title: "Contact",
      href: "#contact",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ];

  return (
    <div className="flex items-center justify-between w-full mt-10 fixed z-20 px-4">
      {/* Logo section, positioned on the left */}
      <div className="logo flex-shrink-0">
        <img src="/images/fLogo1.gif" alt="Logo" className="h-10 w-auto -mt-10" />
      </div>

      {/* Navbar links */}
      <FloatingDock
        // only for demo, remove for production
        mobileClassName="translate-y-20"
        items={links}
        className="bg-transparent"
      />
    </div>
  );
}
