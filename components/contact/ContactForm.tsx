"use client";

import React, { useState } from "react";
import
{
    ArrowRightIcon,
    MailIcon,
    MessageSquare,
    User,
    Edit3,
    Paperclip,
} from "lucide-react";
import { Button } from "../ui/button";
import { BASE_URL } from "@/utils/config";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";

type Props = {};

const Form = (props: Props) =>
{
    // Manage multiple file attachments
    const [attachments, setAttachments] = useState<File[]>([]);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    // Handle multiple file selection
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    {
        if (event.target.files)
        {
            // Convert FileList to an array and update the attachments state
            const filesArray = Array.from(event.target.files);
            setAttachments((prev) => [...prev, ...filesArray]);
        }
    };

    const handleFileRemove = (fileToRemove: File) =>
    {
        setAttachments((prev) => prev.filter((file) => file !== fileToRemove));
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent) =>
    {
        event.preventDefault();
        const data = new FormData();

        // Append all form fields
        for (const key in formData)
        {
            data.append(key, formData[key as keyof typeof formData]);
        }

        // Append all files
        attachments.forEach((file) =>
        {
            data.append("attachments", file);
        });

        setLoading(true);

        try
        {
            const res = await fetch(`${BASE_URL}/user-contact/contact`, {
                method: 'POST',
                body: data,
            });

            if (res.ok)
            {
                setLoading(false);

                toast.success("Thank you for reaching out 🎉. We'd get back to you shortly", { className: "toast-message" })
                // Reset the form data and attachments
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
                setAttachments([]);
            } else
            {
                setLoading(false)
                toast.error("Something went wrong. Please try again!", { className: "toast-message" });
            }
        } catch (error)
        {
            console.error("An error occurred:", error);
            toast.error("Something went wrong. Please try again!", { className: "toast-message" });
        }
    };


    return (
        <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
            {/* Name input */}
            <div className="relative flex items-center">
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                    id="name"
                    placeholder="Name"
                    required
                    className="flex p-3 focus:ring-[#fd9c8d] w-full text-base bg-transparent border border-[#ff9d8e] dark:border-border rounded-full outline-none focus:outline-none focus:border-[#FE705A] disabled:cursor-not-allowed disabled:opacity-50 dark:text-white"
                />
                <User className="absolute right-6" size={20} />
            </div>

            {/* Email input */}
            <div className="relative flex items-center">
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    id="email"
                    placeholder="Email"
                    required
                    className="flex p-3 w-full text-base focus:ring-[#fd9c8d] bg-transparent border border-[#ff9d8e] dark:border-border rounded-full outline-none focus:outline-none focus:border-[#FE705A] disabled:cursor-not-allowed disabled:opacity-50 dark:text-white"
                />
                <MailIcon className="absolute right-6" size={20} />
            </div>

            {/* Subject input */}
            <div className="relative flex items-center">
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    onChange={handleChange}
                    value={formData.subject}
                    required
                    placeholder="Subject"
                    className="flex p-3 w-full text-base bg-transparent border border-[#ff9d8e] dark:border-border rounded-full focus:ring-[#fd9c8d] outline-none focus:border-[#FE705A] disabled:cursor-not-allowed disabled:opacity-50 dark:text-white"
                />
                <Edit3 className="absolute right-6" size={20} />
            </div>

            {/* Document Prompt */}
            <div className="flex flex-wrap justify-around gap-y-3 items-center mb-3">
                <div className="flex items-center mt-1">
                    <span className="text-gray-700 dark:text-gray-300">Want to include documents?</span>
                </div>

                {/* Custom Attachment Button */}
                <div className="relative flex items-center">
                    <input
                        type="file"
                        id="attachments"
                        onChange={handleFileChange}
                        className="hidden"
                        multiple
                    />
                    <label
                        htmlFor="attachments"
                        className="flex items-center justify-center gap-x-2 px-4 py-2 dark:bg-border dark:hover:bg-[#372548] bg-black-200 text-white rounded-full cursor-pointer hover:bg-gray-800 transition-all duration-300"
                    >
                        <Paperclip size={20} />
                        Attach files
                    </label>
                </div>
            </div>

            {/* Display selected files */}
            {attachments.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                    {attachments.map((file, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full shadow-md transition-all duration-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                        >
                            <span className="truncate">{file.name}</span>
                            <button
                                type="button"
                                className="flex items-center justify-center w-3.5 h-3.5 border border-gray-300 dark:border-border text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all duration-200 ml-2"
                                onClick={() => handleFileRemove(file)}
                            >
                                <span className="text-sm font-bold">x</span>
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* Message textarea */}
            <div className="relative flex items-center">
                <textarea
                    id="message"
                    name="message"
                    onChange={handleChange}
                    value={formData.message} 
                    rows={6}
                    className="flex p-3 w-full text-base border-[#ff9d8e] dark:border-border text-gray-900 bg-gray-50 rounded-lg border focus:border-[#FE705A] dark:bg-transparent placeholder-text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 dark:text-white focus:ring-[#fd9c8d]"
                    placeholder="Tell me more about it..."
                ></textarea>
                <MessageSquare className="absolute top-4 right-6" size={20} />
            </div>

            {/* Submit button */}
            <Button className="flex items-center gap-x-1 max-w-[166px]">
                {loading ?
                    <HashLoader size={25} color="#ffffff" />
                    : ("Let's Talk"
                    )}
                {<ArrowRightIcon />}
            </Button>
        </form>
    );
};

export default Form;
