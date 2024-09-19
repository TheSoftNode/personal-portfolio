"use client";

import React from "react";
import { ArrowRightIcon, MailIcon, MessageSquare, User } from "lucide-react";
import { Button } from "../ui/button";

type Props = {};

const Form = (props: Props) =>
{
    return (
        <form className="flex flex-col gap-y-4">
            {/* input */}
            <div className="relative flex items-center">
                <input
                    type="name"
                    id="name"
                    placeholder="Name"
                    className="flex p-3 w-full text-base bg-transparent border border-[#ff9d8e] dark:border-border rounded-full focus:border-green outline-none focus:outine-none focus:border-[#FE705A] disabled:cursor-not-allowed disabled:opacity-50 dark:text-white"
                />
                <User className="absolute right-6" size={20} />
            </div>
            {/* input */}
            <div className="relative flex items-center">
                <input
                    type=""
                    id="email"
                    placeholder="Email"
                    className="flex p-3 w-full text-base bg-gray-50 bg-transparent border border-[#ff9d8e] dark:border-border rounded-full focus:border-green outline-none focus:outine-none focus:border-[#FE705A] disabled:cursor-not-allowed disabled:opacity-50 dark:text-white"
                />
                <MailIcon className="absolute right-6" size={20} />
            </div>
            {/* textarea */}
            <div className="relative flex items-center">
                <textarea
                    id="message"
                    rows={6}
                    className="flex p-3 w-full text-base border-[#ff9d8e] dark:border-border  text-gray-900 bg-gray-50 rounded-lg border  focus:ring-input focus:border-[#FE705A]  dark:bg-transparent  placeholder-text-muted-foreground  disabled:cursor-not-allowed disabled:opacity-50 dark:text-white dark:focus:ring-none"
                    placeholder="Tell me more about it..."
                ></textarea>
                <MessageSquare className="absolute top-4 right-6" size={20} />
            </div>
            <Button className="flex items-center gap-x-1 max-w-[166px]">
                Let&apos;s Talk
                <ArrowRightIcon />
            </Button>
        </form>
    );
};

export default Form;
