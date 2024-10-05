"use client";

import React, { useState } from "react";
import
{
    ArrowRightIcon,
    MailIcon,
    MessageSquare,
    User,
    Edit3,
    PhoneIcon,
    Linkedin,
    Paperclip,

} from "lucide-react";
import { Button } from "../ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa6";

type Props = {};

const Form = (props: Props) =>
{
    const [contactMethod, setContactMethod] = useState<string>("");
    const [attachments, setAttachments] = useState<File[]>([]);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    {
        if (event.target.files)
        {
            const filesArray = Array.from(event.target.files);
            setAttachments(filesArray);
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
        // Append the file
        attachments.forEach((file) =>
        {
            data.append("attachments", file); // Use the same name to group files
        });

        try
        {
            const response = await fetch("/api/contact", {
                method: "POST",
                body: data,
            });
            // Handle response
            if (response.ok)
            {
                console.log("Form submitted successfully!");
            } else
            {
                console.error("Error submitting form");
            }
        } catch (error)
        {
            console.error("An error occurred:", error);
        }
    };

    return (
        <form className="flex flex-col gap-y-4">
            {/* Name input */}
            <div className="relative flex items-center">
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    id="name"
                    placeholder="Name"
                    className="flex p-3  focus:ring-[#fd9c8d] w-full text-base bg-transparent border border-[#ff9d8e] dark:border-border rounded-full  outline-none focus:outline-none focus:border-[#FE705A] disabled:cursor-not-allowed disabled:opacity-50 dark:text-white"
                />
                <User className="absolute right-6" size={20} />
            </div>

            {/* Email input */}
            <div className="relative flex items-center">
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    id="email"
                    placeholder="Email"
                    className="flex p-3 w-full text-base focus:ring-[#fd9c8d]  bg-transparent border border-[#ff9d8e] dark:border-border rounded-full  outline-none focus:outline-none focus:border-[#FE705A] disabled:cursor-not-allowed disabled:opacity-50 dark:text-white"
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
                    placeholder="Subject"
                    className="flex p-3 w-full text-base bg-gray-50 bg-transparent border border-[#ff9d8e] dark:border-border rounded-full focus:ring-[#fd9c8d]  outline-none focus:border-[#FE705A] disabled:cursor-not-allowed disabled:opacity-50 dark:text-white"
                />
                <Edit3 className="absolute right-6" size={20} />
            </div>

            {/* Document Prompt */}
            <div className="flex flex-wrap justify-around gap-y-3 items-center mb-3">
                <div className="flex items-center mt-1">
                    <span className="text-gray-700 dark:text-gray-300">Want to include a document?</span>
                </div>


                {/* Custom Attachment Button */}
                <div className="relative flex items-center">
                    <input
                        type="file"
                        id="attachment"
                        onChange={handleFileChange}
                        className="hidden"
                        multiple
                    />
                    <label
                        htmlFor="attachment"
                        className="flex items-center justify-center gap-x-2 px-4 py-2 dark:bg-border dark:hover:bg-[#372548] bg-black-200 text-white rounded-full cursor-pointer hover:bg-gray-800 transition-all duration-300"
                    >
                        <Paperclip size={20} />
                        {attachments.length > 0 ? "Files attached" : "Attach files"}
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
                                className="flex items-center justify-center w-3.5 h-3.5 border border-gray-300 dark:border-border text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all duration-200 ml-2" // Updated for border and size
                                onClick={() => handleFileRemove(file)}
                            >
                                <span className="text-sm font-bold">x</span> {/* Adjusted size for the close icon */}
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
                    rows={6}
                    className="flex p-3 w-full text-base border-[#ff9d8e] dark:border-border  text-gray-900 bg-gray-50 rounded-lg border  focus:ring-input focus:border-[#FE705A]  dark:bg-transparent  placeholder-text-muted-foreground  disabled:cursor-not-allowed disabled:opacity-50 dark:text-white focus:ring-[#fd9c8d] "
                    placeholder="Tell me more about it..."
                ></textarea>
                <MessageSquare className="absolute top-4 right-6" size={20} />
            </div>



            {/* Submit button */}
            <Button className="flex items-center gap-x-1 max-w-[166px]">
                Let&apos;s Talk
                <ArrowRightIcon />
            </Button>
        </form>
    );
};

export default Form