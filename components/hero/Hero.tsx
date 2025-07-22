"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaLocationArrow } from 'react-icons/fa6';
import MagicButton from '../ui/MagicButton';
import { Spotlight } from '../ui/Spotlight';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import Socials from '../contact/Socials';
import Link from 'next/link';
import Image from 'next/image';

const words = `Passionate Software Engineer with 5+ years in backend engineering and 4 years in frontend development. As a Blockchain Hackathon Contributor & Builder, I've won 5+ hackathons across Stacks, NEAR, Stellar, and Hedera ecosystems. I specialize in transforming complex ideas into efficient, scalable solutions across Web2 and Web3 technologies.`;

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
            {/* Enhanced Background with Gradient Overlay */}
            <div className="absolute inset-0 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-background/60 dark:from-background/90 dark:via-background/60 dark:to-background/80" />
            </div>

            {/* Enhanced Spotlight Effects - Better for Light Mode */}
            <div className="absolute inset-0 pointer-events-none">
                <Spotlight
                    className="-top-20 sm:-top-40 -left-5 sm:-left-10 md:-left-32 md:-top-20 h-screen transform-gpu opacity-40 dark:opacity-100"
                    fill="white"
                />
                <Spotlight
                    className="top-5 sm:top-10 left-full h-[60vh] sm:h-[80vh] w-[40vw] sm:w-[50vw] transform-gpu opacity-20 dark:opacity-60"
                    fill="purple"
                />
                
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-30">
                <div className="absolute top-1/4 left-1/4 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-[#FE705A]/20 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-purple/20 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="mx-auto max-w-8xl relative z-10">
                <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 xl:gap-16 items-center">
                    
                    {/* Content Section - Left Side (3 columns) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 sm:space-y-6 order-2 lg:order-1 lg:col-span-3"
                    >
                        {/* Sophisticated Badge */}
                        <motion.div
                            {...fadeIn}
                            className="relative mt-4 sm:mt-6 md:mt-8"
                        >
                            <div className="relative inline-flex items-center gap-3 px-4 sm:px-5 py-2.5 sm:py-3 bg-gradient-to-r from-[#FE705A]/8 via-purple/5 to-blue-500/8 dark:from-[#FE705A]/15 dark:via-purple/10 dark:to-blue-500/15 border border-[#FE705A]/25 dark:border-[#FE705A]/40 rounded-2xl backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-500 group overflow-hidden">
                                
                                {/* Animated Background Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#FE705A]/5 via-purple/3 to-blue-500/5 dark:from-[#FE705A]/10 dark:via-purple/8 dark:to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                {/* Animated Pulse Dot */}
                                <div className="relative">
                                    <div className="w-2.5 h-2.5 bg-[#FE705A] rounded-full animate-pulse"></div>
                                    <div className="absolute inset-0 w-2.5 h-2.5 bg-[#FE705A] rounded-full animate-ping opacity-20"></div>
                                </div>
                                
                                {/* Badge Text */}
                                <span className="relative text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#FE705A] via-[#D04F4A] to-purple bg-clip-text text-transparent tracking-wide group-hover:tracking-wider transition-all duration-300">
                                    FULLSTACK SOFTWARE ENGINEER
                                </span>
                                
                                {/* Decorative Elements */}
                                <div className="absolute top-1 right-2 w-1 h-1 bg-[#FE705A]/30 rounded-full animate-pulse delay-300"></div>
                                <div className="absolute bottom-1 left-2 w-1 h-1 bg-purple/30 rounded-full animate-pulse delay-700"></div>
                            </div>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.div
                            {...fadeIn}
                            transition={{ delay: 0.2 }}
                            className="space-y-1 sm:space-y-2"
                        >
                            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                                <span className="block">Hi, I'm</span>
                                <span className="block bg-gradient-to-r from-[#FE705A] via-[#D04F4A] to-purple bg-clip-text text-transparent">
                                    Theophilus
                                </span>
                                <span className="block text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-normal text-muted-foreground mt-1">
                                    Experienced Fullstack Software Engineer
                                </span>
                            </h1>
                        </motion.div>

                        {/* Description */}
                        <motion.div
                            {...fadeIn}
                            transition={{ delay: 0.4 }}
                            className="max-w-xl lg:max-w-2xl"
                        >
                            <TextGenerateEffect
                                className="text-xs sm:text-sm md:text-base lg:text-[1rem] leading-relaxed text-muted-foreground"
                                words={words}
                            />
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            {...fadeIn}
                            transition={{ delay: 0.6 }}
                            className="flex gap-5 mb-6 lg:w-full"
                        >
                            <Link href="/contact">
                                <MagicButton
                                    title="Contact Me"
                                    icon={<FaLocationArrow className="group-hover:rotate-45 transition-transform duration-300" />}
                                    position="right"
                                    otherClasses="bg-[#FE6E58] hover:bg-[#D04F4A] transform hover:scale-105 transition-all duration-300"
                                />
                            </Link>
                            <a href="/CVs/Theophilus_Uchechukwu_Onyebuchi.pdf" download>
                                <MagicButton
                                    title="Download CV"
                                    icon={<FaDownload className="group-hover:translate-y-1 transition-transform duration-300" />}
                                    position="right"
                                    otherClasses="bg-black-100 border border-white hover:bg-[#03062B] transform hover:scale-105 transition-all duration-300"
                                />
                            </a>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            {...fadeIn}
                            transition={{ delay: 0.8 }}
                            className="pt-2 sm:pt-4 pb-8 sm:pb-12"
                        >
                            <Socials
                                containerStyles="flex justify-center lg:justify-start gap-4 sm:gap-6"
                                iconStyles="text-foreground/70 text-lg sm:text-xl hover:text-[#FE705A] transition-all hover:scale-125 duration-300 p-2 rounded-full hover:bg-[#FE705A]/10"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Professional Avatar Section - Right Side (2 columns) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative hidden md:flex justify-center lg:justify-center order-2 lg:order-2 lg:col-span-2"
                    >
                        {/* Relaxed Floating Code Elements */}
                        <div className="absolute inset-0 pointer-events-none text-xs sm:text-sm font-mono text-muted-foreground/10 dark:text-muted-foreground/15">
                            <div className="absolute top-8 left-4 animate-float">{'<div>'}</div>
                            <div className="absolute top-1/3 right-8 animate-float delay-300">{'{ }'}</div>
                            <div className="absolute bottom-1/4 left-12 animate-float delay-700">{'</>'}</div>
                            <div className="absolute top-1/2 left-2 animate-float delay-500">{'/*'}</div>
                            <div className="absolute bottom-1/3 right-6 animate-float delay-900">{'*/'}</div>
                            <div className="absolute top-1/6 right-4 animate-float delay-1200">{'=>'}</div>
                        </div>

                        {/* Relaxed Decorative Particles */}
                        <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-30">
                            <div className="absolute top-1/6 left-1/6 w-1 h-1 bg-[#FE705A] rounded-full animate-pulse"></div>
                            <div className="absolute top-2/3 right-1/6 w-1.5 h-1.5 bg-purple rounded-full animate-pulse delay-500"></div>
                            <div className="absolute bottom-1/6 left-2/3 w-1 h-1 bg-blue-500 rounded-full animate-pulse delay-1000"></div>
                        </div>

                        {/* Main Professional Avatar */}
                        <div className="relative group">
                            {/* Subtle Professional Glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#FE705A]/3 via-purple/3 to-blue-500/3 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-700 scale-105"></div>
                            
                            {/* Larger Professional Container */}
                            <div className="relative w-72 h-72 xs:w-80 xs:h-80 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] lg:w-[400px] lg:h-[400px] xl:w-[480px] xl:h-[480px]">
                                
                                {/* Outer Dark Ring */}
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/80 to-slate-900/80 dark:from-slate-700/80 dark:to-slate-800/80 backdrop-blur-lg rounded-full border border-border/20 shadow-xl group-hover:shadow-2xl transition-all duration-500 overflow-hidden">
                                    
                                    {/* Orbiting Dots on Outer Ring */}
                                    <div className="absolute inset-0 animate-spin-slow">
                                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 bg-yellow-500 rounded-full shadow-lg"></div>
                                        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full shadow-lg"></div>
                                        <div className="absolute bottom-1/3 left-6 transform w-3.5 h-3.5 sm:w-4 sm:h-4 bg-green-500 rounded-full shadow-lg"></div>
                                    </div>

                                    {/* Inner Image Circle */}
                                    <div className="absolute inset-12 sm:inset-16 md:inset-20 lg:inset-16 xl:inset-20 bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-lg rounded-full border border-border/30 shadow-xl overflow-hidden">
                                        
                                        {/* Subtle Grid Pattern */}
                                        <div className="absolute inset-0 opacity-3">
                                            <div className="w-full h-full" style={{
                                                backgroundImage: `
                                                    linear-gradient(rgba(254, 112, 90, 0.1) 1px, transparent 1px),
                                                    linear-gradient(90deg, rgba(254, 112, 90, 0.1) 1px, transparent 1px)
                                                `,
                                                backgroundSize: '16px 16px'
                                            }}></div>
                                        </div>

                                        {/* Image Container - Ready for Real Photo */}
                                        <div className="relative w-full h-full rounded-full overflow-hidden">
                                            {/* This is where your real image will go */}
                                            <Image
                                                src="/avatars/uchechukwu.png" // Put your image in public/images/
                                                alt="Theophilus Uchechukwu Onyebuchi - Software Engineer"
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 300px, (max-width: 1200px) 400px, 480px"
                                                priority // Since it's above the fold
                                                quality={90}
                                            />
                                            {/* <div className="w-full h-full bg-gradient-to-br from-[#FE705A] to-[#D04F4A] rounded-full flex items-center justify-center">
                                                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">T</span>
                                            </div> */}
                                        </div>
                                    </div>

                                    {/* Corner Tech Icons on Outer Ring */}
                                    <div className="absolute top-6 left-6 w-7 h-7 sm:w-8 sm:h-8 bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg flex items-center justify-center shadow-sm animate-float z-20">
                                        <span className="text-sm">⚛️</span>
                                    </div>
                                    <div className="absolute top-6 right-6 w-7 h-7 sm:w-8 sm:h-8 bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg flex items-center justify-center shadow-sm animate-float delay-300 z-20">
                                        <span className="text-sm">🔥</span>
                                    </div>
                                    <div className="absolute bottom-6 left-6 w-7 h-7 sm:w-8 sm:h-8 bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg flex items-center justify-center shadow-sm animate-float delay-700 z-20">
                                        <span className="text-sm">⚡</span>
                                    </div>
                                    <div className="absolute bottom-6 right-6 w-7 h-7 sm:w-8 sm:h-8 bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg flex items-center justify-center shadow-sm animate-float delay-500 z-20">
                                        <span className="text-sm">🚀</span>
                                    </div>
                                </div>
                            </div>

                            {/* Professional Floating Stats - Positioned Around Larger Circle */}
                            <div className="absolute -top-6 -right-8 sm:-top-0 sm:-right-0 text-center animate-float delay-1000">
                                <div className="px-3 py-2 bg-card/90 backdrop-blur-sm border border-border/50 rounded-xl shadow-lg">
                                    <div className="text-xl sm:text-2xl font-bold text-[#FE705A]">5+</div>
                                    <div className="text-xs text-muted-foreground whitespace-nowrap">Years Exp</div>
                                </div>
                            </div>
                            
                            <div className="absolute top-1/4 -left-10 sm:-left-16 text-center animate-float delay-1500">
                                <div className="px-3 py-2 bg-card/90 backdrop-blur-sm border border-border/50 rounded-xl shadow-lg">
                                    <div className="text-xl sm:text-2xl font-bold text-[#FE705A]">20+</div>
                                    <div className="text-xs text-muted-foreground whitespace-nowrap">Projects</div>
                                </div>
                            </div>
                            
                            <div className="absolute -bottom-6 left-1/3 sm:-bottom-8 text-center animate-float delay-2000">
                                <div className="px-3 py-2 bg-card/90 backdrop-blur-sm border border-border/50 rounded-xl shadow-lg">
                                    <div className="text-xl sm:text-2xl font-bold text-[#FE705A]">100%</div>
                                    <div className="text-xs text-muted-foreground whitespace-nowrap">Satisfaction</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Spectacular Curved Bottom Border */}
            <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
                {/* Main Curved SVG */}
                <svg 
                    className="relative block w-full h-16 sm:h-20 md:h-24 lg:h-32" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    {/* Gradient Definitions */}
                    <defs>
                        <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="15%" stopColor="#FE705A" stopOpacity="0.2" />
                            <stop offset="35%" stopColor="#A855F7" stopOpacity="0.3" />
                            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.4" />
                            <stop offset="65%" stopColor="#A855F7" stopOpacity="0.3" />
                            <stop offset="85%" stopColor="#FE705A" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                        
                        <linearGradient id="borderGradientDark" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="15%" stopColor="#FE705A" stopOpacity="0.4" />
                            <stop offset="35%" stopColor="#A855F7" stopOpacity="0.5" />
                            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.6" />
                            <stop offset="65%" stopColor="#A855F7" stopOpacity="0.5" />
                            <stop offset="85%" stopColor="#FE705A" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>

                        <filter id="glow">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                            <feMerge> 
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>

                        <radialGradient id="spotGradient" cx="50%" cy="0%" r="50%">
                            <stop offset="0%" stopColor="#FE705A" stopOpacity="0.6" />
                            <stop offset="50%" stopColor="#A855F7" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="transparent" />
                        </radialGradient>
                    </defs>
                    
                    {/* Background Curved Shape */}
                    <path 
                        d="M0,60 Q150,20 300,40 T600,30 Q750,35 900,20 T1200,40 L1200,120 L0,120 Z" 
                        className="fill-border/20 dark:fill-border/30"
                    />
                    
                    {/* Main Curved Border with Gradient */}
                    <path 
                        d="M0,60 Q150,20 300,40 T600,30 Q750,35 900,20 T1200,40" 
                        stroke="url(#borderGradient)"
                        strokeWidth="2"
                        fill="none"
                        filter="url(#glow)"
                        className="dark:stroke-[url(#borderGradientDark)]"
                    />
                    
                    {/* Secondary Flowing Line */}
                    <path 
                        d="M0,80 Q200,50 400,60 T800,50 Q1000,55 1200,60" 
                        stroke="url(#borderGradient)"
                        strokeWidth="1"
                        fill="none"
                        opacity="0.6"
                        className="dark:opacity-0.8"
                    />

                    {/* Glowing Spots */}
                    <circle cx="300" cy="40" r="15" fill="url(#spotGradient)" opacity="0.4" />
                    <circle cx="600" cy="30" r="20" fill="url(#spotGradient)" opacity="0.3" />
                    <circle cx="900" cy="20" r="12" fill="url(#spotGradient)" opacity="0.5" />
                </svg>

                {/* Flowing Technologies Animation */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {/* Single Row - Right to Left (Clean and Simple) */}
                    <div className="absolute top-1/2 transform -translate-y-1/2 w-full">
                        <div className="animate-scroll-right">
                            <div className="flex gap-12 sm:gap-16 md:gap-20 lg:gap-24 whitespace-nowrap">
                                <span className="text-[10px] sm:text-xs font-light text-muted-foreground/40 dark:text-muted-foreground/60 tracking-widest uppercase">React</span>
                                <span className="text-[10px] sm:text-xs font-light text-muted-foreground/40 dark:text-muted-foreground/60 tracking-widest uppercase">TypeScript</span>
                                <span className="text-[10px] sm:text-xs font-light text-muted-foreground/40 dark:text-muted-foreground/60 tracking-widest uppercase">Node.js</span>
                                <span className="text-[10px] sm:text-xs font-light text-muted-foreground/40 dark:text-muted-foreground/60 tracking-widest uppercase">Next.js</span>
                                <span className="text-[10px] sm:text-xs font-light text-muted-foreground/40 dark:text-muted-foreground/60 tracking-widest uppercase">Python</span>
                                <span className="text-[10px] sm:text-xs font-light text-muted-foreground/40 dark:text-muted-foreground/60 tracking-widest uppercase">Rust</span>
                                <span className="text-[10px] sm:text-xs font-light text-muted-foreground/40 dark:text-muted-foreground/60 tracking-widest uppercase">GraphQL</span>
                                <span className="text-[10px] sm:text-xs font-light text-muted-foreground/40 dark:text-muted-foreground/60 tracking-widest uppercase">Docker</span>
                                <span className="text-[10px] sm:text-xs font-light text-muted-foreground/40 dark:text-muted-foreground/60 tracking-widest uppercase">AWS</span>
                                <span className="text-[10px] sm:text-xs font-light text-muted-foreground/40 dark:text-muted-foreground/60 tracking-widest uppercase">PostgreSQL</span>
                                <span className="text-[10px] sm:text-xs font-light text-muted-foreground/40 dark:text-muted-foreground/60 tracking-widest uppercase">MongoDB</span>
                                <span className="text-[10px] sm:text-xs font-light text-muted-foreground/40 dark:text-muted-foreground/60 tracking-widest uppercase">Solidity</span>
                                <span className="text-[10px] sm:text-xs font-light text-muted-foreground/40 dark:text-muted-foreground/60 tracking-widest uppercase">Blockchain</span>
                                <span className="text-[10px] sm:text-xs font-light text-muted-foreground/40 dark:text-muted-foreground/60 tracking-widest uppercase">Web3</span>
                                <span className="text-[10px] sm:text-xs font-light text-muted-foreground/40 dark:text-muted-foreground/60 tracking-widest uppercase">DevOps</span>
                                <span className="text-[10px] sm:text-xs font-light text-muted-foreground/40 dark:text-muted-foreground/60 tracking-widest uppercase">Kubernetes</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Particles on Border */}
                <div className="absolute bottom-4 left-1/4 w-2 h-2 bg-[#FE705A]/40 rounded-full animate-pulse"></div>
                <div className="absolute bottom-8 left-1/2 w-1.5 h-1.5 bg-purple/50 rounded-full animate-pulse delay-500"></div>
                <div className="absolute bottom-6 right-1/3 w-2.5 h-2.5 bg-blue-500/30 rounded-full animate-pulse delay-1000"></div>
                
                {/* Animated Gradient Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FE705A]/5 via-purple/3 to-transparent dark:from-[#FE705A]/10 dark:via-purple/8 dark:to-transparent opacity-0 animate-pulse"></div>
            </div>

            {/* Custom Animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes scroll-right {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100vw); }
                }
                @keyframes scroll-left {
                    0% { transform: translateX(100vw); }
                    100% { transform: translateX(-100%); }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }
                .animate-scroll-right {
                    animation: scroll-right 25s linear infinite;
                }
                .animate-scroll-left {
                    animation: scroll-left 30s linear infinite;
                }
                .delay-300 {
                    animation-delay: 0.3s;
                }
                .delay-500 {
                    animation-delay: 0.5s;
                }
                .delay-700 {
                    animation-delay: 0.7s;
                }
                .delay-900 {
                    animation-delay: 0.9s;
                }
                .delay-1000 {
                    animation-delay: 1s;
                }
                .delay-1200 {
                    animation-delay: 1.2s;
                }
                .delay-1500 {
                    animation-delay: 1.5s;
                }
                .delay-2000 {
                    animation-delay: 2s;
                }
            `}</style>
        </section>
    );
};

export default Hero;
