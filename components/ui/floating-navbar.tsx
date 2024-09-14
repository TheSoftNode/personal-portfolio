"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { TiTimes } from "react-icons/ti";
import
{
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ThemeToggler from "../ThemeToggler";
import { Button } from "./button";
import { usePathname } from "next/navigation";

export const FloatingNav = ({
    navItems,
    className,
    underlineStyles
}: {
    navItems: {
        name: string;
        link: string;
        icon?: JSX.Element;
    }[];
    className?: string;
    underlineStyles?: any;
}) =>
{

    const [visible, setVisible] = useState(true);
    

    const path = usePathname();

    return (

        <AnimatePresence mode="wait">
            {visible === true ? (
                <motion.div
                    initial={{
                        opacity: 1,
                        // y: -100,
                        y: 0,
                    }}
                    animate={{
                        // y: visible ? 0 : -100,
                        y: 0,
                        // opacity: visible ? 1 : 0,
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.3,
                    }}
                    className={cn(
                        "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black-100 bg-[#fef9f5] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
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
                            <span className={`${navItem.link === path && "!text-[#FE6E58]"} dark:text-white block sm:hidden text-black-100`}>{navItem.icon}</span>
                            
                            <span className={`${navItem.link === path && "!text-[#FE6E58]"} hidden hover:text-[#FE6E58] dark:hover:text-[#FE6E58] sm:block font-medium text-md text-black-100 dark:text-white`}>{navItem.name}</span>
                        </Link>
                    ))}

                    <ThemeToggler />
                    <div>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => setVisible(false)}
                        >
                            <TiTimes className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <TiTimes className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100" />
                        </Button>
                    </div>
                </motion.div>
            ) : (
                <div

                    className={cn(
                        "flex z-[9000] fixed top-9 right-20 max-w-fit  border border-transparent dark:border-white/[0.2] rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
                        className
                    )}

                >
                    <div >
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => setVisible(true)}
                        >
                            <FaPlus className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <FaPlus className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100" />
                        </Button>
                    </div>

                </div>
            )

            }
        </AnimatePresence>
    );
};
