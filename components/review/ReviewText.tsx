"use client";

import Link from "next/link";
import { useState } from "react";
import { CardDescription } from "../ui/card";
import { ChevronRight, X, Star, User, Calendar, ExternalLink } from "lucide-react";

interface ReviewProps {
    reviewText: string;
    reviewId: any;
    userFullname?: string;
    userTitle?: string;
    reviewRating?: number;
    userPhoto?: string;
    createdAt?: Date;
    userLinks?: Array<{title: string; link: string}>;
    gender?: string;
}

const ReviewText = ({ 
    reviewText, 
    reviewId, 
    userFullname, 
    userTitle, 
    reviewRating, 
    userPhoto, 
    createdAt,
    userLinks,
    gender 
}: ReviewProps) => {
    const [wordLimit] = useState(150); // Reasonable character limit
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // Fix: Split by characters (since you want character limit, not word limit)
    const characters = reviewText.split("");
    
    // If the review text is longer than the character limit
    const isTruncated = characters.length > wordLimit;
    const truncatedText = characters.slice(0, wordLimit).join("");

    console.log('Review text length:', characters.length, 'Is truncated:', isTruncated, 'Modal open:', isModalOpen);

    const formatDate = (date: Date) => {
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(new Date(date));
    };

    // Get appropriate avatar
    const getAvatarSrc = () => {
        if (userPhoto) return userPhoto;
        if (gender === "Male") return "/avatars/avatar-1.png";
        if (gender === "Female") return "/avatars/avatar-girl.png";
        return "/avatars/avatar-neutral-2.png";
    };

    return (
        <>
            <CardDescription className="text-sm lg:text-base text-muted-foreground leading-relaxed text-justify hyphens-auto tracking-wide">
                {isTruncated ? (
                    <span className="space-y-1">
                        <span className="block">{truncatedText}...</span>
                        <button 
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                console.log('Button clicked, opening modal');
                                setIsModalOpen(true);
                            }}
                            className="inline-flex items-center gap-1 ml-1 px-3 py-1.5 text-xs font-medium text-[#FE705A] hover:bg-[#FE705A]/10 rounded-lg transition-all duration-300 group border border-[#FE705A]/20 hover:border-[#FE705A]/40 relative z-20 cursor-pointer"
                        >
                            Continue Reading
                            <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300" />
                        </button>
                    </span>
                ) : (
                    <span className="block leading-relaxed">{reviewText}</span>
                )}
            </CardDescription>

            {/* Simple Professional Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity duration-300">
                    <div className="relative w-full max-w-3xl max-h-[90vh] overflow-hidden bg-background border border-border/50 rounded-2xl shadow-2xl transition-transform duration-300 transform scale-100">
                        {/* Refined Header */}
                        <div className="relative bg-[#FE705A]/5 p-6 border-b border-border/30">
                            <div className="flex items-start justify-between">
                                <div className="flex items-center space-x-4">
                                    <div className="relative">
                                        <img 
                                            src={getAvatarSrc()} 
                                            alt={userFullname || 'Client'} 
                                            className="w-14 h-14 rounded-full object-cover ring-2 ring-[#FE705A]/20 shadow-md"
                                        />
                                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background"></div>
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-semibold text-foreground">
                                            {userFullname || 'Valued Client'}
                                        </h3>
                                        {userTitle && (
                                            <p className="text-sm text-muted-foreground font-medium">{userTitle}</p>
                                        )}
                                        {reviewRating && (
                                            <div className="flex items-center gap-1">
                                                <div className="flex">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star 
                                                            key={i} 
                                                            className={`w-4 h-4 ${i < reviewRating ? 'fill-[#FE705A] text-[#FE705A]' : 'text-gray-300'}`}
                                                        />
                                                    ))}
                                                </div>
                                                <span className="text-xs text-muted-foreground ml-1">
                                                    ({reviewRating}/5)
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="p-2 hover:bg-muted/50 rounded-full transition-colors duration-200 group"
                                >
                                    <X className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
                                </button>
                            </div>
                        </div>

                        {/* Professional Content */}
                        <div className="p-6 overflow-y-auto max-h-[60vh]">
                            <div className="prose prose-sm max-w-none">
                                <div className="text-base leading-7 text-foreground text-justify hyphens-auto whitespace-pre-wrap tracking-wide">
                                    {reviewText}
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Footer */}
                        <div className="bg-muted/10 p-5 border-t border-border/30">
                            <div className="flex items-center justify-between flex-wrap gap-3">
                                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                    {createdAt && (
                                        <div className="flex items-center gap-1 bg-muted/30 px-2 py-1 rounded-md">
                                            <Calendar className="w-3 h-3" />
                                            <span className="font-medium">{formatDate(createdAt)}</span>
                                        </div>
                                    )}
                                    <div className="flex items-center gap-1 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-md">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="font-medium text-green-700 dark:text-green-400">Verified Client</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    {userLinks && userLinks.length > 0 && (
                                        <div className="flex items-center gap-2">
                                            {userLinks.map((link, index) => (
                                                <Link
                                                    key={index}
                                                    href={link.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium text-[#FE705A] hover:bg-[#FE705A]/10 rounded-md transition-all duration-200 border border-[#FE705A]/20 hover:border-[#FE705A]/40"
                                                >
                                                    {link.title}
                                                    <ExternalLink className="w-3 h-3" />
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                    <Link 
                                        href={`/review/${reviewId}`} 
                                        className="inline-flex items-center gap-1 px-4 py-2 text-xs font-medium bg-[#FE705A] text-white rounded-md hover:bg-[#fe5635] transition-all duration-200 shadow-sm hover:shadow-md"
                                    >
                                        View Full Details
                                        <ExternalLink className="w-3 h-3" />
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

export default ReviewText;

// import Link from "next/link";
// import { useState } from "react";
// import { CardDescription } from "../ui/card";

// interface ReviewProps
// {
//     reviewText: string;
//     reviewId: any;
// }

// const ReviewText = ({ reviewText, reviewId }: ReviewProps) =>
// {
//     const [wordLimit] = useState(300);
//     const words = reviewText.split("");

//     // If the review text is longer than the word limit
//     const isTruncated = words.length > wordLimit;
//     const truncatedText = words.slice(0, wordLimit).join("");

//     return (
//         <CardDescription className="text-md xlg:text-lg text-muted-foreground prose hyphens-auto text-justify leading-relaxed tracking-tight word-spacing">
//             {isTruncated ? (
//                 <>
//                     {truncatedText}...{" "}
//                     <Link href={`/review/${reviewId}`} className="text-xs font-semibold dark:text-[#FE705A] text-slate-950">
//                         More
//                     </Link>
//                 </>
//             ) : (
//                 reviewText
//             )}
//         </CardDescription>
//     );
// };

// export default ReviewText;
