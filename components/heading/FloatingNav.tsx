import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { TiTimes } from "react-icons/ti";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Draggable from 'react-draggable';

import { usePathname } from "next/navigation";
import ThemeToggler from "../ThemeToggler";
import { Button } from "../ui/button";

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
}) =>
{
    const [visible, setVisible] = useState(true);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState<number | null>(null);
    const [startY, setStartY] = useState<number | null>(null);
    const [dragged, setDragged] = useState(false); // New state to track dragging

    const path = usePathname();

    const handleTouchStart = (event: React.TouchEvent) =>
    {
        const touch = event.touches[0];
        setStartX(touch.clientX);
        setStartY(touch.clientY);
    };

    const handleTouchEnd = (event: React.TouchEvent) =>
    {
        const touch = event.changedTouches[0];
        const endX = touch.clientX;
        const endY = touch.clientY;

        if (startX !== null && startY !== null)
        {
            const distance = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);
            if (distance < 5)
            {
                // Trigger action only if it's a tap, not a drag
                setVisible(true);
            }
        }
    };

    const handleDragStart = () =>
    {
        setIsDragging(true);
        setDragged(true);
    };

    const handleDragStop = () =>
    {
        setIsDragging(false);
        setDragged(false);
    };

    const handleClick = () =>
    {
        if (!dragged)
        {
            setVisible(true);
        }
        setDragged(false); // Reset dragged state after click
    };


    return (
        <AnimatePresence mode="wait">
            {visible ? (
                <motion.div
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className={cn(
                        "fixed top-7 inset-x-0 mx-auto flex max-w-fit border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black-100 bg-[#fef9f5] shadow z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
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
                                className={`${navItem.link === path && "!text-[#FE6E58]"
                                    } dark:text-white block sm:hidden text-black-100`}
                            >
                                {navItem.icon}
                            </span>

                            <span
                                className={`${navItem.link === path && "!text-[#FE6E58]"
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
                <Draggable
                    onStart={handleDragStart}
                    onStop={handleDragStop}
                >
                    <div
                        className={cn(
                            "flex z-[9000] fixed top-7 right-10 max-w-fit border border-transparent dark:border-white/[0.2] rounded-full shadow"
                        )}
                    >
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={handleClick}
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                        >
                            <FaPlus className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <FaPlus className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100" />
                        </Button>
                    </div>
                </Draggable>
            )}
        </AnimatePresence>
    );
};
