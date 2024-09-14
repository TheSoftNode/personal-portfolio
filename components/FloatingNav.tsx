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
  const [position, setPosition] = useState({ x: window.innerWidth - 80, y: 10 }); // Initial position
  const [dragConstraints, setDragConstraints] = useState({
    left: 0,
    top: 0,
    right: window.innerWidth - 80,
    bottom: window.innerHeight - 80,
  });
  const motionRef = useRef<HTMLDivElement>(null);
  const path = usePathname();

  // Update the drag constraints when the window is resized or scrolled
  useEffect(() => {
    const updateDragConstraints = () => {
      const scrollY = window.scrollY;
      setDragConstraints({
        left: 0,
        top: scrollY, // Constrain top by current scroll position
        right: window.innerWidth - 80,
        bottom: scrollY + window.innerHeight - 80, // Constrain bottom by scrollY + viewport height
      });
    };

    updateDragConstraints(); // Call the function once on mount
    window.addEventListener("resize", updateDragConstraints);
    window.addEventListener("scroll", updateDragConstraints);

    return () => {
      window.removeEventListener("resize", updateDragConstraints);
      window.removeEventListener("scroll", updateDragConstraints);
    };
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
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            y: -20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
            y: -20,
          }}
          transition={{
            duration: 0.5, // Slowed down for a smoother effect
            ease: "easeInOut",
          }}
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
                  navItem.link === path && "!text-[#FE6E58]"}
                hidden hover:text-[#FE6E58] dark:hover:text-[#FE6E58] sm:block font-medium text-md text-black-100 dark:text-white`}
              >
                {navItem.name}
              </span>
            </Link>
          ))}

          <ThemeToggler />
          <Button
            variant="outline"
            size="icon"
            onClick={() => setVisible(false)}
          >
            <TiTimes className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <TiTimes className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100" />
          </Button>
        </motion.div>
      ) : (
        <motion.div
          drag
          dragConstraints={dragConstraints} // Constrain drag within viewport and scroll position
          dragMomentum={false}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
          initial={{ x: position.x, y: position.y, opacity: 0, scale: 0.8 }}
          animate={{ x: position.x, y: position.y, opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{
            duration: 0.5, // Smoother and slower transition
            ease: "easeInOut",
          }}
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
