"use client";

import React from "react";
import { CircleArrowLeft, Star } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import useGetReview from "@/hooks/useFetchData";
import { useParams } from 'next/navigation';
import Footer from "@/components/footer/Footer";
import Link from "next/link";

export interface IUserLink
{
    title: string;
    link: string;
}

export interface IReview
{
    userFullname: string;
    userTitle: string;
    reviewText: string;
    reviewRating?: number;
    userPhoto?: string;
    userLinks?: IUserLink[];
    createdAt: Date;
    updatedAt: Date;
}

const ReviewDetail = () =>
{
    const params = useParams();
    const id = params.id;

    const { data: review, error } = useGetReview<IReview>(`${process.env.NEXT_PUBLIC_BASE_URL}/users/get-review/${id}`, null, false)

    return (
        <>
            <div className="md:mt-16 mt-28 ml-10">
                <Link href="/#testimonials" className="">
                    <CircleArrowLeft className="!text-[#FE7054]" />
                </Link>
            </div>
            <div className="p-4 mt-6 md:mt-8 min-h-[68vh]">
                <Card className="bg-tertiary dark:bg-secondary/40 p-6">
                    <CardHeader className="p-0 mb-4">
                        <div className="flex items-center gap-4">
                            <img src={review?.userPhoto ?? "/default-avatar.png"} alt="User Avatar" className="w-16 h-16 rounded-full" />
                            <div className="flex flex-col">
                                <CardTitle className="text-[18px] dark:!text-purple font-semibold">{review?.userFullname}</CardTitle>
                                <p className="mt-1 text-gray-600 dark:text-gray-300">{review?.userTitle}</p>
                            </div>
                        </div>
                    </CardHeader>
                    <div className="flex gap-1 mb-3 items-center">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                fill={`${i < Number(review?.reviewRating) ? '#FE705A' : 'none'}`}
                                key={i}
                                size={20}
                                className={`text-lg ${i < Number(review?.reviewRating) ? 'text-[#FE705A]' : '!text-gray-300'}`}
                            />
                        ))}
                    </div>
                    <CardDescription className="text-md text-muted-foreground text-justify">
                        {review?.reviewText}
                    </CardDescription>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        Reviewed on {new Date(review?.createdAt ?? new Date()).toLocaleDateString()}
                    </p>

                </Card>
            </div>
        </>
    );
};

export default ReviewDetail;
