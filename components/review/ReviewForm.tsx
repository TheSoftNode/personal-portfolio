"use client";

import React, { useState } from "react";
import { Star } from "lucide-react";
import { AiOutlineDelete } from "react-icons/ai";

type ReviewFormProps = {
    //   onSubmit: (data: ReviewFormData) => void;
};

type ReviewFormData = {
    userFullname: string;
    userTitle: string;
    reviewText: string;
    reviewRating: number;
    userPhoto?: string | File;
    userLinks: { title: string; link: string }[];
};

const ReviewForm: React.FC<ReviewFormProps> = () =>
{
    const [reviewRating, setReviewRating] = useState<number>(0);
    const [fileName, setFileName] = useState<string>("");
    const [photoPreview, setPhotoPreview] = useState<string | null>(null);
    const [formData, setFormData] = useState<ReviewFormData>({
        userFullname: "",
        userTitle: "",
        reviewText: "",
        reviewRating: 0,
        userPhoto: "",
        userLinks: [{ title: "", link: "" }],
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

    const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        const file = e.target.files?.[0];
        if (file)
        {
            setFormData({ ...formData, userPhoto: file });

            setFileName(file.name);

            // Create a preview of the uploaded image
            const reader = new FileReader();
            reader.onloadend = () =>
            {
                setPhotoPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: React.FormEvent) =>
    {
        e.preventDefault();
        // onSubmit(formData);
    };

    // Reusable function for adding an item
    const addItem = (key: keyof ReviewFormData, item: any) =>
    {
        setFormData(prevFormData => ({
            ...prevFormData,
            [key]: [...(prevFormData[key] as any[]), item]
        }));
    };

    // Reusable input change function
    const handleReusableInputChangeFunc = (key: keyof ReviewFormData, index: number, e: React.ChangeEvent<HTMLInputElement>) =>
    {
        const { name, value } = e.target;

        setFormData(prevFormData =>
        {
            const updatedItems = [...(prevFormData[key] as any[])];
            updatedItems[index][name] = value;

            return {
                ...prevFormData,
                [key]: updatedItems
            };
        });
    };

    const addUserLink = (e: React.MouseEvent) =>
    {
        e.preventDefault();

        addItem("userLinks", {
            title: "",
            link: "",
        });
    };

    // Reusable function for deleting an item
    const deleteItem = (key: keyof ReviewFormData, index: number) =>
    {
        setFormData(prevFormData => ({
            ...prevFormData,
            [key]: (prevFormData[key] as any[]).filter((_, i) => i !== index)
        }));
    };

    const handleUserLinkChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) =>
    {
        handleReusableInputChangeFunc("userLinks", index, e);
    };

    const deleteUserLink = (e: React.MouseEvent, index: number) =>
    {
        e.preventDefault();
        deleteItem("userLinks", index);
    };



    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            {/* Upload Photo */}
            <div className="flex flex-col mt-3 w-full justify-center items-center">
                {/* <label className="block mb-2 text-lg font-medium text-gray-700 dark:text-white">
                        Upload Photo
                    </label> */}

                {/* Image Preview */}
                {photoPreview && (
                    <div className="mb-4">
                        <img src={photoPreview} alt="Uploaded Preview" className="w-24 h-24 rounded-full" />
                    </div>
                )}

                <div className="flex items-center gap-4">
                    {/* Hidden File Input */}
                    <input
                        id="file-upload"
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="hidden"
                    />

                    {/* Custom File Upload Button */}
                    <label
                        htmlFor="file-upload"
                        className="cursor-pointer bg-[#FE705A] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#fe5635] transition-colors"
                    >
                        Choose File
                    </label>

                    {/* Display chosen file name */}
                    {fileName && (
                        <span className="text-gray-700 dark:text-white">{fileName}</span>
                    )}
                </div>


            </div>
            {/* Full Name */}
            < div className="flex flex-col" >
                <label className="block mb-2 text-lg font-medium dark:text-white text-gray-700">
                    Full Name
                </label>
                <input
                    type="text"
                    name="userFullname"
                    value={formData.userFullname}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="flex p-3 w-full text-base focus:ring-0 bg-transparent border border-[#ff9d8e] dark:border-border rounded-lg  outline-none focus:outline-none focus:border-[#FE705A] disabled:cursor-not-allowed disabled:opacity-50 dark:text-white"
                    required
                />
            </div >

            {/* Title */}
            < div className="flex flex-col" >
                <label className="block mb-2 text-lg font-medium dark:text-white text-gray-700">
                    Title
                </label>
                <input
                    type="text"
                    name="userTitle"
                    value={formData.userTitle}
                    onChange={handleChange}
                    placeholder="Enter your title"
                    className="flex p-3 w-full text-base focus:ring-0 bg-transparent border border-[#ff9d8e] dark:border-border rounded-lg  outline-none focus:outline-none focus:border-[#FE705A] disabled:cursor-not-allowed disabled:opacity-50 dark:text-white"
                    required
                />
            </div >

            {/* Review Text */}
            < div className="flex flex-col" >
                <label className="block mb-2 text-lg font-medium dark:text-white text-gray-700">
                    Review
                </label>
                <textarea
                    name="reviewText"
                    value={formData.reviewText}
                    onChange={handleChange}
                    placeholder="Say something nice"
                    className="flex p-3 w-full text-base focus:ring-0 border-[#ff9d8e] dark:border-border  text-gray-900 bg-gray-50 rounded-lg border  focus:ring-input focus:border-[#FE705A]  dark:bg-transparent  placeholder-text-muted-foreground  disabled:cursor-not-allowed disabled:opacity-50 dark:text-white"
                    rows={8}
                    required
                />
            </div >

            {/* Star Rating & Upload Photo */}
            {/* <div className="flex justify-between gap-8 flex-wrap"> */}
            {/* Star Rating */}
            < div className="flex flex-col" >
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
            </div >


            {/* </div> */}


            {/* Links */}
            <div>
                {/* <label className="block mb-2 text-lg font-medium dark:text-white text-gray-700">Links</label> */}
                {
                    formData?.userLinks.map((item, index) => (
                        <div key={index}>
                            <div className="grid md:grid-cols-[35%_65%] gap-5">
                                < div className="flex flex-col" >
                                    <label className="block mb-2 text-lg font-medium dark:text-white text-gray-700">Link Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={item.title}
                                        onChange={e => handleUserLinkChange(e, index)}
                                        placeholder="LinkedIn"
                                        className="flex p-3 w-full text-base focus:ring-0 bg-transparent border border-[#ff9d8e] dark:border-border rounded-lg outline-none focus:outline-none focus:border-[#FE705A] disabled:cursor-not-allowed disabled:opacity-50 dark:text-white"
                                    />
                                </div >
                                <div className="flex flex-col">
                                    <label className="block mb-2 text-lg font-medium dark:text-white text-gray-700">Link URL</label>
                                    <input
                                        type="text"
                                        name="link"
                                        value={item.link}
                                        onChange={e => handleUserLinkChange(e, index)}
                                        placeholder="https://www.linkedin.com/in/theophilus-uchechukwu/"
                                        className="flex p-3 w-full text-base focus:ring-0 bg-transparent border border-[#ff9d8e] dark:border-border rounded-lg outline-none focus:outline-none focus:border-[#FE705A] disabled:cursor-not-allowed disabled:opacity-50 dark:text-white"
                                    />
                                </div>

                            </div>
                            <button
                                onClick={e => deleteUserLink(e, index)}
                                className='bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer'
                            >
                                <AiOutlineDelete />
                            </button>
                        </div>
                    ))
                }
                <button
                    onClick={addUserLink}
                    className="bg-slate-950 py-2 px-5 rounded text-white 
                    h-fit cursor-pointer"
                >
                    Add new link
                </button>
            </div>


            <button
                type="submit"
                className="w-full mx-auto lg:w-[25%] bg-[#fd5f47] text-white py-3 px-6 rounded-md font-semibold text-lg hover:bg-[#fe5635] transition-colors"
            >
                Submit Review
            </button>

        </form>

    );
};

export default ReviewForm;
