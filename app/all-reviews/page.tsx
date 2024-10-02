"use client";

import React, { useEffect, useState } from "react";
import { CircleArrowLeft, Star } from "lucide-react";
import { FaSquareUpwork } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { RiFacebookFill, RiGithubFill, RiInstagramFill, RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import ReviewText from "@/components/review/ReviewText";
import { BASE_URL } from "@/utils/config";
import useGetReviews from "../../hooks/useFetchData";
import { IReview } from "@/components/review/Client";
import Link from "next/link";


const icons =
{
    GITHUB: <RiGithubFill />,
    LINKEDIN: <FaLinkedin />,
    UPWORK: <FaSquareUpwork />,
    LEETCODE: <SiLeetcode />,
    TWITTER: <RiTwitterXFill />,
    FACEBOOK: <RiFacebookFill />,
    INSTAGRAM: <RiInstagramFill />
}

const AllReviews = () =>
{
    const { data: items, error } = useGetReviews<IReview[]>(`${BASE_URL}/users/get-all-reviews`, null, false)
    return (
        <>
            <div className="md:mt-16 mt-28 ml-10">
                <Link href="/#testimonials" className="">
                    <CircleArrowLeft className="!text-[#FE7054]" />
                </Link>
            </div>

            <div className="flex flex-wrap gap-8 xlg:!gap-y-0 mt-32 justify-center items-center min-h-screen w-[95%]  mx-auto pb-10" >

                {items?.map((item, idx) => (
                    <div
                        className="w-[90vw] max-w-full relative flex-shrink-0 md:w-[80vw]  lg:w-[40vw]"
                        key={idx}
                    >
                        <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px] xlg:h-[420px] xl:h-[400px]">
                            <CardHeader className="p-0 mb-5">
                                <div className="flex w-full items-center gap-x-4">
                                    {/* image */}
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
                    </div>
                ))}
            </div >
        </>
    );
};

export default AllReviews;
