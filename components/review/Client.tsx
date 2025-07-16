"use client";

import React, { useState } from "react";
import { companies } from "@/data/data";
import { InfiniteMovingCards } from "../ui/InfiniteCards";
import useGetReviews from "../../hooks/useFetchData";
import { BASE_URL } from "@/utils/config";
import Link from "next/link";
import Error from "../Error/Error";
import Loader from "../Loader/Loading";
import { X, Star, Calendar, ExternalLink } from "lucide-react";
import ElegantCompaniesSection from "../company/CompaniesSection";

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

const Clients = () => {
  const { data: reviews, error, loading } = useGetReviews<IReview[]>(`${BASE_URL}/users/get-all-reviews`, null, false);
  
  // Modal state at the top level
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
      <section id="testimonials" className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Compact Header */}
          <div className="text-center mb-8 lg:mb-12">
            <h1 className="text-2xl lg:text-3xl font-bold mb-2 leading-tight">
              <span className="text-foreground">Kind words from </span>
              <span className="dark:text-purple text-[#FE705A]">satisfied clients</span>
            </h1>
            <p className="text-muted-foreground text-sm lg:text-base max-w-xl mx-auto mb-6 leading-relaxed">
              Real feedback from clients who've experienced the quality of my work
            </p>
            <Link 
              href="/all-reviews"
              className="inline-flex items-center gap-2 px-4 py-2 bg-background border border-border hover:border-[#FE705A] text-foreground hover:text-[#FE705A] rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
            >
              View All Reviews
            </Link>
          </div>

          {/* Content States */}
          {!error && loading && (
            <div className="flex justify-center items-center py-12">
              <Loader />
            </div>
          )}
          
          {!loading && error && (
            <div className="py-12">
              <Error msg="Please check your network and try again" />
            </div>
          )}
          
         {!loading && !error && (
            <div className="space-y-8 lg:space-y-12">
              {/* Compact Reviews Carousel */}
              <InfiniteMovingCards
                items={reviews || []}
                direction="right"
                speed="fast"
                onReadMore={openModal}
              />
            </div>
          )}

          {/* Companies Section - Always Visible */}
          <div className="mt-8 lg:mt-12">
            <ElegantCompaniesSection />
          </div>
        </div>
      </section>

      {/* Professional Modal - Top Level, Above Everything */}
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

export default Clients;
