import React, { useRef, useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { TiTimes } from "react-icons/ti";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

import { usePathname } from "next/navigation";
import ThemeToggler from "./ThemeToggler";
import { Button } from "./ui/button";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const [visible, setVisible] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 }); // Initialize position state
  const [dragConstraints, setDragConstraints] = useState({
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  });
  const path = usePathname();

  useEffect(() => {
    // Access window only when the component is mounted on the client side
    if (typeof window !== "undefined") {
      setPosition({ x: window.innerWidth - 80, y: 10 }); // Set initial position after mounting
      setDragConstraints({
        left: 0,
        top: 0,
        right: window.innerWidth - 80,
        bottom: window.innerHeight - 80,
      });
    }
  }, []);

  const handleDragEnd = (_: any, info: any) => {
    // Update position state with the final drag position
    setPosition({
      x: info.point.x,
      y: info.point.y,
    });
    setIsDragging(false);
  };

  return (
    <AnimatePresence mode="wait">
      {visible ? (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "fixed top-10 inset-x-0 mx-auto flex max-w-fit border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black-100 bg-[#fef9f5] shadow z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
            className
          )}
        >
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 capitalize items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span
                className={`${
                  navItem.link === path && "!text-[#FE6E58]"
                } dark:text-white block sm:hidden text-black-100`}
              >
                {navItem.icon}
              </span>

              <span
                className={`${
                  navItem.link === path && "!text-[#FE6E58]"
                } hidden hover:text-[#FE6E58] dark:hover:text-[#FE6E58] sm:block font-medium text-md text-black-100 dark:text-white`}
              >
                {navItem.name}
              </span>
            </Link>
          ))}

          <ThemeToggler />
          <Button variant="outline" size="icon" onClick={() => setVisible(false)}>
            <TiTimes className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <TiTimes className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100" />
          </Button>
        </motion.div>
      ) : (
        <motion.div
          drag
          dragConstraints={dragConstraints} // Apply constraints to drag within viewport
          dragMomentum={false}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
          initial={{ x: position.x, y: position.y }}
          animate={{ x: position.x, y: position.y }}
          className={cn(
            "flex z-[9000] fixed max-w-fit border border-transparent dark:border-white/[0.2] rounded-full shadow"
          )}
        >
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              if (!isDragging) {
                setVisible(true);
              }
            }}
          >
            <FaPlus className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <FaPlus className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
