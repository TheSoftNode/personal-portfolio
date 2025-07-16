"use client";

import React from "react";
import { CircleArrowLeft, Star, Calendar, MapPin, ExternalLink } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import useGetReview from "@/hooks/useFetchData";
import { useParams } from 'next/navigation';
import Link from "next/link";
import { BASE_URL } from "@/utils/config";
import Error from "@/components/Error/Error";
import Loader from "@/components/Loader/Loading"

export interface IUserLink {
    title: string;
    link: string;
}

export interface IReview {
    _id: any;
    userFullname: string;
    userTitle: string;
    reviewText: string;
    reviewRating?: number;
    userPhoto?: string;
    gender?: string;
    userLinks?: IUserLink[];
    createdAt: Date;
    updatedAt: Date;
}

const ReviewDetail = () => {
    const params = useParams();
    const id = params.id;

    const { data: review, error, loading } = useGetReview<IReview>(`${BASE_URL}/users/get-review/${id}`, null, false);

    const getAvatarSrc = () => {
        if (review?.userPhoto) return review.userPhoto;
        if (review?.gender === "Male") return "/avatars/avatar-1.png";
        if (review?.gender === "Female") return "/avatars/avatar-girl.png";
        return "/avatars/avatar-neutral-2.png";
    };

    const formatDate = (date: Date) => {
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(new Date(date));
    };

    return (
        <>
            {/* Mobile-First Navigation */}
            <div className="mt-20 sm:mt-24 md:mt-16 px-3 sm:px-4 md:px-6 lg:px-10">
                <div className="flex items-center justify-between mb-4 sm:mb-6 md:mb-8">
                    <Link 
                        href="/#testimonials" 
                        className="inline-flex items-center gap-1 sm:gap-2 text-muted-foreground hover:text-[#FE705A] transition-colors duration-200 group"
                    >
                        <CircleArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-[-2px] transition-transform duration-200" />
                        <span className="text-xs sm:text-sm font-medium hidden sm:block">Back to Testimonials</span>
                        <span className="text-xs font-medium sm:hidden">Back</span>
                    </Link>
                    <Link href="/review">
                        <span className="inline-flex items-center gap-1 sm:gap-2 bg-[#FE705A] hover:bg-[#fe5635] text-white py-1.5 px-2 sm:py-2 sm:px-4 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md">
                            <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span className="hidden sm:inline">Leave Your Review</span>
                            <span className="sm:hidden">Review</span>
                        </span>
                    </Link>
                </div>
            </div>

            <div className="px-3 sm:px-4 md:px-6 lg:px-10 pb-6 sm:pb-8 md:pb-10 min-h-[68vh]">
                {!error && loading && (
                    <div className="flex justify-center items-center py-12 sm:py-16 md:py-20">
                        <Loader />
                    </div>
                )}
                
                {!loading && error && (
                    <div className="py-12 sm:py-16 md:py-20">
                        <Error msg="Unable to load this review. Please check your connection and try again." />
                    </div>
                )}
                
                {!loading && !error && review && (
                    <>
                        {/* Mobile-Responsive Review Card */}
                        <Card className="bg-background border border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                            {/* Mobile-Optimized Header */}
                            <div className="bg-[#FE705A]/5 px-3 py-2.5 sm:px-4 sm:py-3 border-b border-border/30">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="relative flex-shrink-0">
                                        <img 
                                            src={getAvatarSrc()} 
                                            alt="Client Avatar" 
                                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-1 sm:ring-2 ring-[#FE705A]/20 shadow-sm" 
                                        />
                                        <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full border border-background"></div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between gap-2">
                                            <div className="min-w-0 flex-1">
                                                <h3 className="text-sm sm:text-base font-semibold text-foreground truncate">
                                                    {review.userFullname}
                                                </h3>
                                                {review.userTitle && (
                                                    <p className="text-xs text-muted-foreground font-medium truncate">
                                                        {review.userTitle}
                                                    </p>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-0.5 flex-shrink-0">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${i < Number(review.reviewRating) ? 'fill-[#FE705A] text-[#FE705A]' : 'text-gray-300'}`}
                                                    />
                                                ))}
                                                <span className="text-xs text-muted-foreground font-medium ml-1">
                                                    {review.reviewRating}/5
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile-Responsive Content */}
                            <div className="p-4 sm:p-5 md:p-6 space-y-4 sm:space-y-5 md:space-y-6">
                                {/* Review Text */}
                                <div className="space-y-2 sm:space-y-3">
                                    <h3 className="text-base sm:text-lg font-semibold text-foreground">Client Feedback</h3>
                                    <CardDescription className="text-sm sm:text-base text-foreground leading-6 sm:leading-7 text-justify hyphens-auto tracking-wide">
                                        {review.reviewText}
                                    </CardDescription>
                                </div>

                                {/* User Links */}
                                {review.userLinks && review.userLinks.length > 0 && (
                                    <div className="space-y-2 sm:space-y-3">
                                        <h4 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                                            Client Links
                                        </h4>
                                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                            {review.userLinks.map((link, index) => (
                                                <Link
                                                    key={index}
                                                    href={link.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1 sm:gap-2 px-2 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm font-medium text-[#FE705A] hover:bg-[#FE705A]/10 rounded-lg transition-all duration-200 border border-[#FE705A]/20 hover:border-[#FE705A]/40 group"
                                                >
                                                    {link.title}
                                                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Mobile-Responsive Footer */}
                            <div className="bg-muted/10 p-3 sm:p-4 border-t border-border/30">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1.5 sm:gap-2 bg-muted/30 px-2 py-1 sm:px-3 sm:py-1 rounded-md">
                                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                                            <span className="font-medium">
                                                Reviewed on {formatDate(review.createdAt)}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1.5 sm:gap-2 bg-green-50 dark:bg-green-900/20 px-2 py-1 sm:px-3 sm:py-1 rounded-md">
                                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
                                            <span className="font-medium text-green-700 dark:text-green-400">
                                                Verified Client
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-xs text-muted-foreground self-start sm:self-auto">
                                        Review ID: {review._id.toString().slice(-8).toUpperCase()}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </>
                )}
            </div>
        </>
    );
};

export default ReviewDetail;