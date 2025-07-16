"use client";

import React, { useState } from "react";
import { Star, X, Calendar, ExternalLink, ChevronRight, CircleArrowLeft } from "lucide-react";
import { FaSquareUpwork } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { RiFacebookFill, RiGithubFill, RiInstagramFill, RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { BASE_URL } from "@/utils/config";
import useGetReviews from "../../hooks/useFetchData";
import { IReview } from "@/components/review/Client";
import Link from "next/link";
import Error from "@/components/Error/Error";
import Loader from "@/components/Loader/Loading";

const icons = {
    GITHUB: <RiGithubFill />,
    LINKEDIN: <FaLinkedin />,
    UPWORK: <FaSquareUpwork />,
    LEETCODE: <SiLeetcode />,
    TWITTER: <RiTwitterXFill />,
    FACEBOOK: <RiFacebookFill />,
    INSTAGRAM: <RiInstagramFill />
};

const AllReviews = () => {
    const { data: items, error, loading } = useGetReviews<IReview[]>(`${BASE_URL}/users/get-all-reviews`, null, false);
    
    // Modal state
    const [selectedReview, setSelectedReview] = useState<IReview | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (review: IReview) => {
        setSelectedReview(review);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedReview(null);
    };

    const formatDate = (date: Date) => {
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(new Date(date));
    };

    const getAvatarSrc = (review: IReview) => {
        if (review.userPhoto) return review.userPhoto;
        if (review.gender === "Male") return "/avatars/avatar-1.png";
        if (review.gender === "Female") return "/avatars/avatar-girl.png";
        return "/avatars/avatar-neutral-2.png";
    };

    return (
        <>
            {/* Header with Navigation */}
            <div className="md:mt-24 lg:mt-16 mt-28 ml-10 flex gap-x-16 mb-8">
                <Link href="/#testimonials" className="">
                    <CircleArrowLeft className="!text-[#FE7054] hover:!text-[#fe5635] transition-colors duration-200" />
                </Link>
                <Link href="/review">
                    <span className="bg-[#FE705A] text-black-100 dark:text-white py-1 px-2 rounded-md text-xs font-bold hover:bg-[#fe5635] transition-colors">
                        Review Me!
                    </span>
                </Link>
            </div>

            {/* Content */}
            <div className="flex flex-wrap gap-8 mt-8 justify-center items-center min-h-screen w-[95%] mx-auto pb-10">
                {!error && loading && <Loader />}
                {!loading && error && <Error msg={"Please check your network and try again!"} />}
                {!loading && !error && (
                    <>
                        {items?.map((item, idx) => (
                            <div
                                className="w-[90vw] max-w-full relative flex-shrink-0 md:w-[80vw] lg:w-[40vw]"
                                key={idx}
                            >
                                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px] xlg:h-[420px] xl:h-[400px] hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border border-border/30 hover:border-[#FE705A]/20">
                                    <CardHeader className="p-0 mb-5">
                                        <div className="flex w-full items-center gap-x-4">
                                            {/* Professional Avatar */}
                                            <div className="relative flex-shrink-0">
                                                <img 
                                                    src={getAvatarSrc(item)}
                                                    alt="Client Avatar" 
                                                    className="w-20 h-20 rounded-full object-cover ring-2 ring-[#FE705A]/20 shadow-md" 
                                                />
                                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background"></div>
                                            </div>

                                            {/* Client Info */}
                                            <div className="flex flex-col w-full">
                                                <div className="flex justify-between w-full flex-wrap items-start gap-3">
                                                    <div className="space-y-1 flex-1 min-w-0">
                                                        <CardTitle className="text-[16px] dark:!text-purple font-semibold truncate">
                                                            {item.userFullname}
                                                        </CardTitle>
                                                        <p className="text-sm text-muted-foreground font-medium truncate">
                                                            {item.userTitle}
                                                        </p>
                                                    </div>
                                                    
                                                    {/* Social Links */}
                                                    {item?.userLinks && item.userLinks.length > 0 && (
                                                        <div className="flex items-center gap-2 flex-shrink-0">
                                                            {item.userLinks.slice(0, 3).map((link, index) => {
                                                                const iconKey = link.title.toUpperCase() as keyof typeof icons;
                                                                const IconComponent = icons[iconKey];
                                                                return (
                                                                    <a 
                                                                        href={link.link} 
                                                                        key={index} 
                                                                        target="_blank" 
                                                                        rel="noopener noreferrer" 
                                                                        className="text-muted-foreground hover:text-[#FE705A] transition-colors duration-200 text-lg"
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
                                                size={16}
                                                className={`${i < Number(item.reviewRating) ? 'text-[#FE705A]' : '!text-gray-300'}`}
                                            />
                                        ))}
                                        <span className="ml-2 text-xs text-muted-foreground font-medium">
                                            ({item.reviewRating}/5)
                                        </span>
                                    </div>
                                    
                                    {/* Review Text with Continue Reading */}
                                    <div className="relative">
                                        <div className="text-sm text-muted-foreground leading-relaxed text-justify hyphens-auto tracking-wide">
                                            {item.reviewText.length > 400 ? (
                                                <span className="space-y-3">
                                                    <span className="block">{item.reviewText.slice(0, 400)}...</span>
                                                    <button 
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                            openModal(item);
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
                    </>
                )}
            </div>

            {/* Professional Modal */}
            {isModalOpen && selectedReview && (
                <div 
                    className="fixed inset-0 z-[99999] flex items-center justify-center p-3 bg-black/85 backdrop-blur-md"
                    onClick={closeModal}
                >
                    <div 
                        className="relative w-full max-w-3xl max-h-[92vh] overflow-hidden bg-background border border-border/40 rounded-xl shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Refined Compact Header */}
                        <div className="relative bg-[#FE705A]/3 px-5 py-4 border-b border-border/25">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="relative flex-shrink-0">
                                        <img 
                                            src={getAvatarSrc(selectedReview)} 
                                            alt={selectedReview.userFullname || 'Client'} 
                                            className="w-12 h-12 rounded-full object-cover ring-2 ring-[#FE705A]/15 shadow-sm"
                                        />
                                        <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-background"></div>
                                    </div>
                                    <div className="space-y-1 min-w-0 flex-1">
                                        <h3 className="text-lg font-semibold text-foreground truncate">
                                            {selectedReview.userFullname || 'Valued Client'}
                                        </h3>
                                        {selectedReview.userTitle && (
                                            <p className="text-sm text-muted-foreground font-medium truncate">{selectedReview.userTitle}</p>
                                        )}
                                        {selectedReview.reviewRating && (
                                            <div className="flex items-center gap-1.5">
                                                <div className="flex">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star 
                                                            key={i} 
                                                            className={`w-4 h-4 ${i < selectedReview.reviewRating! ? 'fill-[#FE705A] text-[#FE705A]' : 'text-gray-300'}`}
                                                        />
                                                    ))}
                                                </div>
                                                <span className="text-xs text-muted-foreground font-medium">
                                                    {selectedReview.reviewRating}/5 Excellence Rating
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <button
                                    onClick={closeModal}
                                    className="p-1.5 hover:bg-muted/40 rounded-full transition-colors duration-200 group flex-shrink-0"
                                >
                                    <X className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
                                </button>
                            </div>
                        </div>

                        {/* Professional Content Section */}
                        <div className="px-6 py-5 overflow-y-auto max-h-[55vh]">
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground font-medium">
                                    <div className="w-1 h-4 bg-[#FE705A] rounded-full"></div>
                                    Client Testimonial
                                </div>
                                <div className="prose prose-base max-w-none">
                                    <p className="text-base leading-7 text-foreground/90 text-justify hyphens-auto whitespace-pre-wrap tracking-normal font-normal">
                                        {selectedReview.reviewText}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Compact Enhanced Footer */}
                        <div className="bg-muted/8 px-6 py-4 border-t border-border/25">
                            <div className="flex items-center justify-between flex-wrap gap-3">
                                <div className="flex items-center gap-3 text-xs">
                                    {selectedReview.createdAt && (
                                        <div className="flex items-center gap-1.5 bg-muted/25 px-2.5 py-1.5 rounded-md">
                                            <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                                            <span className="font-medium text-muted-foreground">{formatDate(selectedReview.createdAt)}</span>
                                        </div>
                                    )}
                                    <div className="flex items-center gap-1.5 bg-green-50/80 dark:bg-green-900/15 px-2.5 py-1.5 rounded-md">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                        <span className="font-medium text-green-700 dark:text-green-400">Verified Review</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    {selectedReview.userLinks && selectedReview.userLinks.length > 0 && (
                                        <div className="flex items-center gap-1.5">
                                            {selectedReview.userLinks.slice(0, 2).map((link, index) => (
                                                <Link
                                                    key={index}
                                                    href={link.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-[#FE705A] hover:bg-[#FE705A]/8 rounded-md transition-all duration-200 border border-[#FE705A]/15 hover:border-[#FE705A]/30"
                                                >
                                                    {link.title}
                                                    <ExternalLink className="w-3 h-3" />
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                    <Link 
                                        href={`/review/${selectedReview._id}`} 
                                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-[#FE705A] text-white rounded-md hover:bg-[#fe5635] transition-all duration-200 shadow-sm hover:shadow-md"
                                    >
                                        View Complete Review
                                        <ExternalLink className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AllReviews;