"use client";

import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { AiOutlineDelete } from "react-icons/ai";
import uploadImageToCloudinary from "../../utils/uploadCloudinary";
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation'
import HashLoader from "react-spinners/HashLoader"
import { Alert, AlertDescription } from "../ui/alert";
import { BASE_URL } from "@/utils/config";

interface UserLink
{
    title: string;
    link: string;
}

interface UserLinkErrors
{
    title?: string;
    link?: string;
}

interface ReviewFormData
{
    userFullname: string;
    userTitle: string;
    reviewText: string;
    reviewRating: number;
    userPhoto: string;
    gender?: string;
    userLinks: UserLink[];
}

interface ReviewFormErrors
{
    userFullname?: string;
    userTitle?: string;
    reviewText?: string;
    reviewRating?: string;
    userPhoto?: string;
    userLinks?: UserLinkErrors[];
    otherErrors?: string[];
}

// const wordCount = (str: string) => str.trim().split(/\s+/).length;
const MINIMUM_CHARS = 100;

const ReviewForm: React.FC = () =>
{
    const router = useRouter()
    const [loading, setLoading] = useState(false);
    const [reviewRating, setReviewRating] = useState<number>(0);
    const [photoPreview, setPhotoPreview] = useState<string | null>(("/avatars/avatar-1.png"));
    const [selectedFile, setSelectedFile] = useState<string | null>(null)
    const [formData, setFormData] = useState<ReviewFormData>({
        userFullname: "",
        userTitle: "",
        reviewText: "",
        reviewRating: 0,
        userPhoto: "",
        gender: "",
        userLinks: [{ title: "", link: "" }],
    });

    const [errors, setErrors] = useState<ReviewFormErrors>({});
    const [touched, setTouched] = useState<Partial<Record<keyof ReviewFormData, boolean>>>({});
    const [add, setAdd] = useState<boolean>(true)
    const [del, setDel] = useState<boolean>(true)

    const validateForm = () =>
    {
        const newErrors: ReviewFormErrors = {};
        if (formData.reviewText.length > 0 && formData.reviewText.length < MINIMUM_CHARS)
        {
            newErrors.reviewText = `Review must be at least ${MINIMUM_CHARS} characters`;
        }
        if (formData.reviewText.length <= 0)
        {
            newErrors.otherErrors = [...(newErrors.otherErrors || []), "reviewText can't be empty"];
        }
        if (formData.reviewRating === 0)
        {
            newErrors.reviewRating = 'Please select a rating';
        }

        if (!formData.gender && !formData.userPhoto)
        {
            newErrors.userPhoto = "Either select your gender or upload your photo"
        }

        // Validate userLinks
        const linkErrors: UserLinkErrors[] = [];
        formData.userLinks.forEach((userLink, index) =>
        {
            if ((userLink.title && !userLink.link) || (!userLink.title && userLink.link))
            {
                linkErrors[index] = {
                    title: userLink.title ? undefined : 'Title is required when URL is provided',
                    link: userLink.link ? undefined : 'URL is required when Title is provided'
                };
            }

            if (formData.userLinks.length <= 1 && (!userLink.title && !userLink.link))
            {
                setDel(false);
                setAdd(false)
            }

            else if (formData.userLinks.length <= 1 && (userLink.title && userLink.link))
            {
                setAdd(true);
                setDel(false);
            }
            if (formData.userLinks.length > 1 && (!userLink.title && !userLink.link))
            {
                setAdd(false);
                setDel(true);
            }
            if (formData.userLinks.length > 1 && (userLink.title && userLink.link))
            {
                setAdd(true);
                setDel(true);
            }


        });
        if (linkErrors.length > 0)
        {
            newErrors.userLinks = linkErrors;
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    useEffect(() =>
    {
        validateForm();
    }, [formData]);



    const handleStarClick = (e: React.FormEvent, rating: number) =>
    {
        e.preventDefault();

        setReviewRating(rating);
        // setFormData({ ...formData, reviewRating: rating });
        setFormData(prev => ({ ...prev, reviewRating: rating }));
        setTouched(prev => ({ ...prev, reviewRating: true }));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setTouched(prev => ({ ...prev, [name]: true }));
        // setFormData({ ...formData, [e.target.name]: e.target.value });

        // Immediately validate reviewText when it changes
        if (name === 'reviewText')
        {
            if (value.length < MINIMUM_CHARS)
            {
                setErrors(prev => ({ ...prev, reviewText: `Review must be at least ${MINIMUM_CHARS} characters` }));
            } else
            {
                setErrors(prev => ({ ...prev, reviewText: undefined }));
            }
        }
    };

    const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        const file = e.target.files?.[0];
        if (file)
        {

            const data = await uploadImageToCloudinary(file);

            setPhotoPreview(data.url);
            setSelectedFile(data.url)
            setFormData({ ...formData, userPhoto: data.url })

        }
    };

    const handleSubmit = async (e: React.FormEvent) =>
    {
        e.preventDefault()
        const isValid = validateForm();
        if (isValid)
        {
            try
            {
                setLoading(true);

                // const res = await fetch(`${BASE_URL}/doctors/${doctorData._id}`, {
                const res = await fetch(`${BASE_URL}/users/create-review`, {
                    method: 'post',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData)
                })

                const result = await res.json();

                if (res.ok)
                {
                    setLoading(false);
                    toast.success("Thank you for your kind review", { className: "toast-message" })
                    router.push("/");
                }
                else
                {
                    setLoading(false)
                    toast.error(result.message, { className: "toast-message" });
                }
            }
            catch (err: any)
            {

                setLoading(false);
                toast.error(err.message, { className: "toast-message" });
            }
        }

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
        setTouched(prev => ({ ...prev, userLinks: true }));
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

    const currentCharCount = formData.reviewText.length;
    const remainingChars = Math.max(0, MINIMUM_CHARS - currentCharCount);

    return (
        <form onSubmit={handleSubmit} className="flex flex-col mb-5 gap-8">
            {/* Upload Photo */}
            <div className="flex flex-col mt-3 w-full justify-center items-center">
                {/* <label className="block mb-2 text-lg font-medium text-gray-700 dark:text-white">
                        Upload Photo
                    </label> */}

                {/* Image Preview */}
                {/* {selectedFile && photoPreview && ( */}
                <div className="mb-4">
                    <img src={photoPreview || "/avatars/avatar-1.png"} alt="Uploaded Preview" className="w-24 h-24 rounded-full" />
                </div>
                {/* )} */}

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

                    {/* Display chosen file name
                    {fileName && (
                        <span className="text-gray-700 dark:text-white">{fileName}</span>
                    )} */}
                </div>


            </div>
            {/* Full Name */}
            < div className="flex flex-col" >
                <label className="block mb-2 text-lg font-medium dark:text-white-200 text-gray-700">
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
                <label className="block mb-2 text-lg font-medium dark:text-white-200 text-gray-700">
                    Title
                </label>
                <input
                    type="text"
                    name="userTitle"
                    value={formData.userTitle}
                    onChange={handleChange}
                    placeholder="Backend Engineer"
                    className="flex p-3 w-full text-base focus:ring-0 bg-transparent border border-[#ff9d8e] dark:border-border rounded-lg  outline-none focus:outline-none focus:border-[#FE705A] disabled:cursor-not-allowed disabled:opacity-50 dark:text-white"
                    required
                />
            </div >

            {/* Review Text */}
            < div className="flex flex-col" >
                <label className="block mb-2 text-lg font-medium dark:text-white-200 text-gray-700">
                    Review (minimum {MINIMUM_CHARS} characters)
                </label>
                <textarea
                    name="reviewText"
                    value={formData.reviewText}
                    onChange={handleChange}
                    placeholder="Say something nice"
                    className={`flex p-3 w-full text-base focus:ring-0 border-[#ff9d8e] dark:border-border 
                         text-gray-900 bg-gray-50 rounded-lg border focus:border-[#FE705A] 
                          dark:bg-transparent  placeholder-text-muted-foreground  disabled:cursor-not-allowed 
                          disabled:opacity-50 dark:text-white
                          ${touched.reviewText && errors.reviewText ? '!border-red-500' : ''
                        }`}
                    rows={8}
                    required
                />
                {touched.reviewText && (
                    <p className={`mt-2 text-sm ${remainingChars === 450 && 'hidden'} ${remainingChars > 0 ? 'text-red-500' : 'text-green-500'}`}>
                        {remainingChars > 0
                            ? `${remainingChars} more characters required`
                            : `Current character count: ${currentCharCount}`}
                    </p>
                )}
                {/* {touched.reviewText && errors.reviewText && (
                    <Alert variant="destructive" className="mt-2">
                        <AlertDescription>{errors.reviewText}</AlertDescription>
                    </Alert>
                )} */}
            </div >


            <div className="flex justify-between flex-wrap gap-8">
                {/* Star Rating */}
                < div className="flex flex-col" >
                    <label className="block mb-2 text-lg font-medium dark:text-white-200 text-gray-700">Rating</label>
                    <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                                key={star}
                                size={28}
                                className={`cursor-pointer ${reviewRating >= star ? "text-[#FE705A]" : "text-gray-300"}`}
                                onClick={(e) => handleStarClick(e, star)}
                            />
                        ))}
                    </div>
                </div >

                {/* Gender */}
                <label
                    htmlFor="gender"
                    className=" dark:text-white-200 text-gray-700 font-bold text-[16px] leading-7"
                >
                    Gender:
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className=" dark:text-white font-semibold text-[15px] leading-7 px-2 ml-2 bg-transparent
                                        py-2 focus:outline-none dark:border dark:border-border rounded-lg focus:ring-0
                                        "

                    >
                        <option className="dark:text-white-200 dark:bg-black-100 " value="">Select</option>
                        <option className="dark:text-white-200 dark:bg-black-100 " value="male">Male</option>
                        <option className="dark:text-white-200 dark:bg-black-100 " value="female">Female</option>
                        <option className="dark:text-white-200 dark:bg-black-100 " value="other">Other</option>

                    </select>
                </label>
            </div>

            {/* Links */}
            <div>
                {/* <label className="block mb-2 text-lg font-medium dark:text-white text-gray-700">Links</label> */}
                {
                    formData?.userLinks.map((item, index) => (
                        <div key={index}>
                            <div className="grid md:grid-cols-[35%_65%] gap-5">
                                < div className="flex flex-col" >
                                    <label className="block mb-2 text-lg font-medium dark:text-white-200 text-gray-700">Link Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={item.title}
                                        onChange={e => handleUserLinkChange(e, index)}
                                        placeholder="LinkedIn"
                                        className={`flex p-3 w-full text-base focus:ring-0 bg-transparent border
                                             border-[#ff9d8e] dark:border-border rounded-lg outline-none 
                                             focus:outline-none focus:border-[#FE705A] disabled:cursor-not-allowed 
                                             disabled:opacity-50 dark:text-white
                                             ${errors.userLinks && errors.userLinks[index]?.title ? 'border-red-500' : ''
                                            }`}
                                    />
                                </div >
                                <div className="flex flex-col">
                                    <label className="block mb-2 text-lg font-medium dark:text-white-200 text-gray-700">Link URL</label>
                                    <input
                                        type="text"
                                        name="link"
                                        value={item.link}
                                        onChange={e => handleUserLinkChange(e, index)}
                                        placeholder="https://www.linkedin.com/in/theophilus-uchechukwu/"
                                        className={`flex p-3 w-full text-base focus:ring-0 bg-transparent border 
                                            border-[#ff9d8e] dark:border-border rounded-lg outline-none focus:outline-none 
                                            focus:border-[#FE705A] disabled:cursor-not-allowed disabled:opacity-50 
                                            dark:text-white
                                            ${errors.userLinks && errors.userLinks[index]?.link ? 'border-red-500' : ''
                                            }`}
                                    />
                                </div>

                            </div>
                            <button
                                onClick={e => deleteUserLink(e, index)}
                                className={`${!del && "hidden"} bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer`}
                            >
                                <AiOutlineDelete />
                            </button>
                        </div>
                    ))
                }
                <button
                    onClick={addUserLink}
                    className="bg-slate-950 dark:bg-border dark:hover:bg-slate-950 py-2 px-5 rounded mt-3 text-white 
                    h-fit cursor-pointer disabled:hidden"
                    disabled={errors.userLinks !== undefined || !add}
                >
                    Add new link
                </button>
                {errors.userLinks && (
                    <Alert variant="destructive" className="mt-1 !border-none">
                        <AlertDescription className="!font-semibold dark:!text-[#FE705A]">
                            Please ensure both title and URL are provided for each link.
                        </AlertDescription>
                    </Alert>
                )}
            </div>


            <button
                type="submit"
                className="w-full flex justify-center disabled:cursor-not-allowed disabled:bg-slate-400 items-center mx-auto lg:w-[25%] bg-[#fd5f47] text-white py-3 px-6  mt-3 rounded-md font-semibold text-lg hover:bg-[#fe5635] transition-colors"
                disabled={Object.keys(errors).length > 0}
            >
                {loading ?
                    <HashLoader size={25} color="#ffffff" />
                    : " Submit Review"}

            </button>

        </form>

    );
};

export default ReviewForm;
