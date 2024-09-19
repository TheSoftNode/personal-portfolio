"use client";

import React from "react";
import { Input } from "../ui/input";
import { ArrowRightIcon, MailIcon, MessageSquare, User } from "lucide-react";
import { Textarea } from "../ui/textarea";
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
                    className="flex p-2.5 w-full text-base bg-transparent border rounded-full focus:border-green outline-none focus:outine-none focus:border-[#FE705A] border-border disabled:cursor-not-allowed disabled:opacity-50 dark:text-white  dark:focus:border-[#FE705A]"
                />
                <User className="absolute right-6" size={20} />
            </div>
            {/* input */}
            <div className="relative flex items-center">
                <input
                    type=""
                    id="email"
                    placeholder="Email"
                    className="flex p-2.5 w-full text-base bg-gray-50 bg-transparent border rounded-full focus:border-green outline-none focus:outine-none focus:border-[#FE705A] border-border disabled:cursor-not-allowed disabled:opacity-50 dark:text-white  dark:focus:border-[#FE705A]"
                />
                <MailIcon className="absolute right-6" size={20} />
            </div>
            {/* textarea */}
            <div className="relative flex items-center">
                <textarea
                    id="message"
                    rows={6}
                    className="flex p-2.5 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-input focus:ring-input focus:border-[#FE705A] dark:bg-transparent dark:border-border placeholder-text-muted-foreground  disabled:cursor-not-allowed disabled:opacity-50 dark:text-white dark:focus:ring-none dark:focus:border-[#FE705A]"
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
