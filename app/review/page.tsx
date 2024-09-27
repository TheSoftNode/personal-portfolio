"use client"

import React, { useState } from "react";
import { Star } from "lucide-react";

type ReviewFormProps = {
    onSubmit: (data: ReviewFormData) => void;
};

type ReviewFormData = {
    userFullname: string;
    userTitle: string;
    reviewText: string;
    reviewRating: number;
    userPhoto?: string;
    userLinks: { title: string; link: string }[];
};

const Review: React.FC<ReviewFormProps> = ({ onSubmit }) =>
{
    const [reviewRating, setReviewRating] = useState<number>(0);
    const [formData, setFormData] = useState<ReviewFormData>({
        userFullname: "",
        userTitle: "",
        reviewText: "",
        reviewRating: 0,
        userPhoto: "",
        userLinks: [{ title: "", link: "" }]
    });

    const handleStarClick = (rating: number) =>
    {
        setReviewRating(rating);
        setFormData({ ...formData, reviewRating: rating });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) =>
    {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <section className="lg:px-16 w-full py-12 mt-12">
            <div className="container lg:!w-[80%]">
                <h2 className="text-3xl md:text-4xl text-center font-bold mb-8 text-[#FE705A]">
                    Leave a Review
                </h2>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                    {/* Full Name */}
                    <div className="flex flex-col">
                        <label className="block mb-2 text-lg font-medium dark:text-white text-gray-700">Full Name</label>
                        <input
                            type="text"
                            name="userFullname"
                            value={formData.userFullname}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className="flex p-3 w-full text-base focus:ring-0 bg-transparent border border-[#ff9d8e] dark:border-border rounded-lg  outline-none focus:outine-none focus:border-[#FE705A] disabled:cursor-not-allowed disabled:opacity-50 dark:text-white"
                            required
                        />
                    </div>

                    {/* Title */}
                    <div className="flex flex-col">
                        <label className="block mb-2 text-lg font-medium dark:text-white text-gray-700">Title</label>
                        <input
                            type="text"
                            name="userTitle"
                            value={formData.userTitle}
                            onChange={handleChange}
                            placeholder="Enter your title"
                            className="flex p-3 w-full text-base focus:ring-0 bg-gray-50 bg-transparent border border-[#ff9d8e] dark:border-border rounded-lg  outline-none focus:outine-none focus:border-[#FE705A] disabled:cursor-not-allowed disabled:opacity-50 dark:text-white"
                            required
                        />
                    </div>

                    {/* Review Text */}
                    <div className="flex flex-col">
                        <label className="block mb-2 text-lg font-medium dark:text-white text-gray-700">Review</label>
                        <textarea
                            name="reviewText"
                            value={formData.reviewText}
                            onChange={handleChange}
                            placeholder="Write your review"
                            className="flex p-3 w-full text-base focus:ring-0 border-[#ff9d8e] dark:border-border  text-gray-900 bg-gray-50 rounded-lg border  focus:ring-input focus:border-[#FE705A]  dark:bg-transparent  placeholder-text-muted-foreground  disabled:cursor-not-allowed disabled:opacity-50 dark:text-white dark:focus:ring-none"
                            rows={4}
                            required
                        />
                    </div>

                    {/* Star Rating */}
                    <div className="flex flex-col">
                        <label className="block mb-2 text-lg font-medium dark:text-white text-gray-700">Rating</label>
                        <div className="flex items-center gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    size={28}
                                    className={`cursor-pointer ${reviewRating >= star ? "text-[#FE705A]" : "text-gray-300"}`}
                                    onClick={() => handleStarClick(star)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col">
                        <label className="block mb-2 text-lg font-medium dark:text-white text-gray-700">Link Title</label>
                        <input
                            type="text"
                            name="userLinks[0].title"
                            value={formData.userLinks[0].title}
                            onChange={(e) => setFormData({
                                ...formData,
                                userLinks: [{ ...formData.userLinks[0], title: e.target.value }]
                            })}
                            placeholder="Enter link title"
                            className="flex p-3 w-full text-base focus:ring-0 bg-gray-50 bg-transparent border border-[#ff9d8e] dark:border-border rounded-lg  outline-none focus:outine-none focus:border-[#FE705A] disabled:cursor-not-allowed disabled:opacity-50 dark:text-white"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="block mb-2 text-lg font-medium dark:text-white text-gray-700">Link URL</label>
                        <input
                            type="text"
                            name="userLinks[0].link"
                            value={formData.userLinks[0].link}
                            onChange={(e) => setFormData({
                                ...formData,
                                userLinks: [{ ...formData.userLinks[0], link: e.target.value }]
                            })}
                            placeholder="Enter link URL"
                            className="flex p-3 w-full text-base focus:ring-0 bg-gray-50 bg-transparent border border-[#ff9d8e] dark:border-border rounded-lg  outline-none focus:outine-none focus:border-[#FE705A] disabled:cursor-not-allowed disabled:opacity-50 dark:text-white"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full lg:w-[30%] bg-[#FE705A] text-white py-3 px-6 rounded-md font-semibold text-lg hover:bg-[#fe5635] transition-colors"
                    >
                        Submit Review
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Review;
