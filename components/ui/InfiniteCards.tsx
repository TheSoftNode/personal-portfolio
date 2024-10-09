"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./card";
import { Star } from "lucide-react";
import { FaSquareUpwork } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { RiFacebookFill, RiGithubFill, RiInstagramFill, RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import ReviewText from "../review/ReviewText";


export const icons =
{
    GITHUB: <RiGithubFill />,
    LINKEDIN: <FaLinkedin />,
    UPWORK: <FaSquareUpwork />,
    LEETCODE: <SiLeetcode />,
    TWITTER: <RiTwitterXFill />,
    FACEBOOK: <RiFacebookFill />,
    INSTAGRAM: <RiInstagramFill />
}

export const InfiniteMovingCards = ({
    items = [],
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    // items: IReview
    items: {
        _id: any;
        userFullname: string;
        userTitle: string;
        reviewText: string;
        reviewRating?: number;
        userPhoto?: string;
        gender?: string;
        userLinks?: {
            title: string;
            link: string;
        }[];
        createdAt: Date;
        updatedAt: Date;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) =>
{

    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() =>
    {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation()
    {
        if (containerRef.current && scrollerRef.current)
        {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) =>
            {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current)
                {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () =>
    {
        if (containerRef.current)
        {
            if (direction === "left")
            {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else
            {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };
    const getSpeed = () =>
    {
        if (containerRef.current)
        {
            if (speed === "fast")
            {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal")
            {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else
            {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };
    return (
        <div
            ref={containerRef}
            className={cn(
                // max-w-7xl to w-screen
                // "scroller relative z-20 w-screen overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                "scroller relative z-20 w-screen overflow-hidden",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    // change gap-16
                    " flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
                    start && "animate-scroll ",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, idx) => (
                    <li
                        //   change md:w-[450px] to md:w-[60vw] , px-8 py-6 to p-16, border-slate-700 to border-slate-800
                        className="w-[90vw] max-w-full relative flex-shrink-0 md:w-[50vw]  lgm:w-[40vw]"
                        key={idx}
                    >
                       
                        <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                            <CardHeader className="p-0 mb-5">
                                <div className="flex w-full items-center gap-x-4">
                                    {/* image */}
                                    {/* <img src={item.userPhoto ?? "/avatars/avatar-1.png"} alt="Uploaded Preview" className="w-20 h-20 rounded-full" /> */}
                                    <img src={
                                        item.userPhoto ? item.userPhoto :
                                            item.gender === "Male" ? "/avatars/avatar-1.png" :
                                                item.gender === "Female" ? "/avatars/avatar-girl.png" :
                                                    "/avatars/avatar-neutral-2.png"

                                    } alt="Uploaded Preview" className="w-24 h-20 rounded-[50%]" />

                                    {/* name */}
                                    <div className="flex flex-col w-full">
                                        <div className="flex justify-between w-full flex-wrap">
                                            <CardTitle className="text-[16px] dark:!text-purple">{item.userFullname}</CardTitle>
                                            {
                                                item?.userLinks?.map((link, index) =>
                                                {
                                                    const iconKey = link.title.toUpperCase() as keyof typeof icons; // Cast to a valid key
                                                    const IconComponent = icons[iconKey];
                                                    return (
                                                        <a href={link.link} key={index} target="_blank" rel="noopener noreferrer" className="mr-3">
                                                            {IconComponent ? <span className="text-xl">{IconComponent}</span> : null}
                                                        </a>
                                                    );
                                                })}
                                        </div>
                                        <p className="mt-2">{item.userTitle}</p>
                                    </div>
                                </div>
                            </CardHeader>
                            <div className="flex gap-1 mb-3 items-center">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        fill={`${i < Number(item.reviewRating) ? '#FE705A' : 'none'}`}
                                        key={i}
                                        size={13}
                                        className={` text-lg ${i < Number(item.reviewRating) ? 'text-[#FE705A]' : '!text-gray-300'}`}
                                    />

                                ))}

                            </div>
                            <ReviewText reviewText={item.reviewText} reviewId={item._id} />
                        </Card>
                    </li>
                ))}
            </ul>
        </div>
    );
};
