import React from "react";
import { Star, MailIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const PleaseReviewMe: React.FC<Props> = () => {
    return (
        <section id="reviewme" className="py-8 lg:py-10 bg-gradient-to-br from-gray-50/80 to-white dark:from-slate-800/50 dark:to-slate-900/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 items-center gap-6 lg:gap-12">
                    <div className="text-center lg:text-left space-y-4 relative">
                        <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#FE705A]/10 rounded-full blur-xl -z-10"></div>
                        <div className="absolute top-1/2 -right-8 w-16 h-16 bg-purple/8 rounded-full blur-lg -z-10"></div>
                        
                        <div className="space-y-3">
                            <div className="relative">
                                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight text-[#FE705A]">
                                    Your Feedback Matters!
                                </h2>
                                <div className="absolute -bottom-1 left-0 lg:left-0 w-12 h-1 bg-[#FE705A] rounded-full mx-auto lg:mx-0"></div>
                            </div>
                            
                            <div className="relative">
                                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0 relative z-10">
                                    <span className="font-medium text-foreground">I value your thoughts</span> and experiences working with me.
                                    <br />
                                    <span className="inline-flex items-center gap-1 font-semibold text-[#FE705A] bg-[#FE705A]/5 px-2 py-0.5 rounded-md">
                                        <Star className="w-3 h-3 fill-current" />
                                        Please leave a review
                                    </span> and let me know how I can continue to improve and deliver exceptional results.
                                </p>
                            </div>
                        </div>

                        <div className="pt-3 flex justify-center lg:justify-start">
                            <Link href="/review">
                                <span className="group relative inline-flex items-center gap-2 bg-[#FE705A] hover:bg-[#fe5635] text-white py-3 px-6 rounded-xl font-semibold text-base transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden">
                                    <div className="absolute inset-0 bg-white/20 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                                    <Star className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
                                    <span className="relative z-10">Leave a Review</span>
                                </span>
                            </Link>
                        </div>

                        <div className="pt-4 lg:pt-4">
                            <div className="flex items-center justify-center lg:justify-start gap-6 text-xs">
                                <div className="flex items-center gap-2 bg-[#FE705A]/5 px-3 py-2 rounded-lg border border-[#FE705A]/10">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-3 h-3 fill-[#FE705A] text-[#FE705A]" />
                                        ))}
                                    </div>
                                    <span className="font-semibold text-[#FE705A]">5.0 Rating</span>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="font-medium">Quick & Easy Process</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex justify-center items-center">
                        <div className="flex lg:hidden justify-center">
                            <div className="flex items-center gap-4 text-[#FE705A]">
                                <Star size={36} className="animate-pulse" />
                                <MailIcon size={36} />
                                <Star size={36} className="animate-pulse delay-500" />
                            </div>
                        </div>

                        <div className="hidden lg:flex relative justify-center items-center">
                            <div className="relative">
                                <Image
                                    src="/reviews/illustration-2.png"
                                    alt="Review me"
                                    width={280}
                                    height={140}
                                    className="rounded-lg dark:shadow-lg hover:scale-105 transition-transform duration-300"
                                />
                                
                                <div className="absolute -top-3 -right-3 bg-gradient-to-br from-[#FE705A] to-[#fe5635] p-2 rounded-full shadow-lg animate-bounce">
                                    <Star className="w-4 h-4 text-white fill-white" />
                                </div>
                                <div className="absolute -bottom-3 -left-3 bg-gradient-to-br from-purple-500 to-purple-600 p-2 rounded-full shadow-lg animate-bounce delay-700">
                                    <MailIcon className="w-4 h-4 text-black dark:text-white" />
                                </div>
                                
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#FE705A]/5 to-purple/5 -z-10 blur-xl scale-110"></div>
                            </div>
                            
                            <div className="absolute -z-20 w-32 h-32 bg-[#FE705A]/10 rounded-full blur-2xl top-0 right-0 animate-pulse"></div>
                            <div className="absolute -z-20 w-24 h-24 bg-purple/10 rounded-full blur-2xl bottom-0 left-0 animate-pulse delay-1000"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PleaseReviewMe;