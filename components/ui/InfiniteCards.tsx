"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { Card, CardHeader, CardTitle } from "./card";
import { Star, ChevronRight } from "lucide-react";
import { FaSquareUpwork } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { RiFacebookFill, RiGithubFill, RiInstagramFill, RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

export const icons = {
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
    onReadMore,
}: {
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
    onReadMore?: (item: any) => void;
}) => {

    // Animation duration based on speed - Made faster
    const getAnimationDuration = () => {
        switch (speed) {
            case "fast": return "15s";
            case "normal": return "25s";
            case "slow": return "40s";
            default: return "15s";
        }
    };

    // Animation direction
    const animationDirection = direction === "left" ? "scroll-left" : "scroll-right";

    // Duplicate items multiple times for seamless loop
    const duplicatedItems = [...items, ...items, ...items];

    return (
        <>
            {/* Fixed CSS Keyframes */}
            <style jsx>{`
                @keyframes scroll-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.333%); }
                }
                @keyframes scroll-right {
                    0% { transform: translateX(-33.333%); }
                    100% { transform: translateX(0); }
                }
                .animate-scroll-left {
                    animation: scroll-left ${getAnimationDuration()} linear infinite;
                }
                .animate-scroll-right {
                    animation: scroll-right ${getAnimationDuration()} linear infinite;
                }
                .animate-scroll-left:hover,
                .animate-scroll-right:hover {
                    animation-play-state: ${pauseOnHover ? 'paused' : 'running'};
                }
            `}</style>

            <div className={cn("relative overflow-hidden w-full", className)}>
                <div 
                    className={cn(
                        "flex gap-4 w-max",
                        direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
                    )}
                >
                    {duplicatedItems.map((item, idx) => (
                        <div
                            key={`${item._id}-${idx}`}
                            className="w-[85vw] max-w-full flex-shrink-0 md:w-[45vw] lg:w-[35vw]"
                        >
                            <Card className="bg-tertiary dark:bg-secondary/40 p-5 min-h-[260px] mx-1">
                                <CardHeader className="p-0 mb-4">
                                    <div className="flex w-full items-center gap-x-4">
                                        {/* Professional Avatar */}
                                        <div className="relative flex-shrink-0">
                                            <img 
                                                src={
                                                    item.userPhoto ? item.userPhoto :
                                                    item.gender === "Male" ? "/avatars/avatar-1.png" :
                                                    item.gender === "Female" ? "/avatars/avatar-girl.png" :
                                                    "/avatars/avatar-neutral-2.png"
                                                } 
                                                alt="Client Avatar" 
                                                className="w-16 h-16 rounded-full object-cover ring-2 ring-[#FE705A]/20 shadow-md" 
                                            />
                                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background"></div>
                                        </div>

                                        {/* Client Info */}
                                        <div className="flex flex-col flex-1 min-w-0">
                                            <div className="flex justify-between w-full items-start gap-3">
                                                <div className="space-y-1 flex-1 min-w-0">
                                                    <CardTitle className="text-sm font-semibold dark:!text-purple truncate">
                                                        {item.userFullname}
                                                    </CardTitle>
                                                    <p className="text-xs text-muted-foreground font-medium truncate">
                                                        {item.userTitle}
                                                    </p>
                                                </div>
                                                
                                                {/* Social Links */}
                                                {item?.userLinks && item.userLinks.length > 0 && (
                                                    <div className="flex items-center gap-1 flex-shrink-0">
                                                        {item.userLinks.slice(0, 3).map((link, index) => {
                                                            const iconKey = link.title.toUpperCase() as keyof typeof icons;
                                                            const IconComponent = icons[iconKey];
                                                            return (
                                                                <a 
                                                                    href={link.link} 
                                                                    key={index} 
                                                                    target="_blank" 
                                                                    rel="noopener noreferrer" 
                                                                    className="text-muted-foreground hover:text-[#FE705A] transition-colors duration-200 text-sm"
                                                                    title={link.title}
                                                                    onClick={(e) => e.stopPropagation()}
                                                                >
                                                                    {IconComponent}
                                                                </a>
                                                            );
                                                        })}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </CardHeader>
                                
                                {/* Rating */}
                                <div className="flex gap-1 mb-3 items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            fill={`${i < Number(item.reviewRating) ? '#FE705A' : 'none'}`}
                                            key={i}
                                            size={14}
                                            className={`${i < Number(item.reviewRating) ? 'text-[#FE705A]' : '!text-gray-300'}`}
                                        />
                                    ))}
                                    <span className="ml-1 text-xs text-muted-foreground font-medium">
                                        ({item.reviewRating}/5)
                                    </span>
                                </div>
                                
                                {/* Review Text with Continue Reading */}
                                <div className="relative">
                                    <div className="text-sm text-muted-foreground leading-relaxed text-justify hyphens-auto tracking-wide">
                                        {item.reviewText.length > 250 ? (
                                            <span className="space-y-2">
                                                <span className="block">{item.reviewText.slice(0, 250)}...</span>
                                                <button 
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        onReadMore?.(item);
                                                    }}
                                                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-[#FE705A] hover:bg-[#FE705A]/10 rounded-lg transition-all duration-300 group border border-[#FE705A]/20 hover:border-[#FE705A]/40"
                                                >
                                                    Continue Reading
                                                    <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300" />
                                                </button>
                                            </span>
                                        ) : (
                                            <span className="block leading-relaxed">{item.reviewText}</span>
                                        )}
                                    </div>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

