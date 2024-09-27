

import React from "react";
import { Star, MailIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const PleaseReviewMe: React.FC<Props> = () =>
{
    return (
        <section className="lg:pl-16 lg:pr-2 lg:px-16 px-6 w-full py-14 bg-tertiary/20 dark:bg-secondary/20">
            <div className="mx-auto w-[100%] md:px-8 text-center md:text-left">
                <div className="grid md:grid-cols-2 items-center justify-center gap-12 lg:gap-48">
                    {/* Text Content */}
                    <div className="flex flex-col items-center md:items-start">
                        <h2 className="text-3xl md:text-4xl text-[#FE705A] font-bold mb-4">
                            Your Feedback Matters!
                        </h2>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
                            I value your thoughts and experiences working with me.
                            <br />
                            <span className="text-[#FE705A]">Please leave a review</span> and let me know how I can continue to improve and deliver exceptional results.
                        </p>

                        <Link href="/review">
                            <span className="bg-[#FE705A] text-white py-3 px-6 rounded-md font-semibold text-lg hover:bg-[#fe5635] transition-colors">
                                Leave a Review
                            </span>
                        </Link>
                    </div>

                    {/* Illustration / Icon */}
                    <div className="flex md:hidden justify-center">
                        <div className="flex gap-4 items-center text-[#FE705A]">
                            <Star size={48} />
                            <MailIcon size={48} />
                            <Star size={48} />
                        </div>
                    </div>

                    {/* illustration */}
                    <Image
                        src={"/reviews/illustration-2.png"}
                        alt="Review me"
                        width={300}
                        height={200}
                        className="hidden md:flex bg-no-repeat bg-top"
                    />
                </div>
            </div>
        </section>
    );
};

export default PleaseReviewMe;
