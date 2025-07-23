"use client";

import React from "react";
import Link from "next/link";
import { MdUnfoldMore } from "react-icons/md";
import CertCard from "./CertCard";

const certData = [
  {
    image: "/certificates/Software-Engineering.png",
    category: "",
    name: "Fullstack Software Engineering",
    description: `A 12-month intensive Fullstack Software Engineering Internship with ALX 
    in partnership with Holberton.inc.`,
    link: "/certificates/Software-Engineering.png",
    level: "100%",
    website: "https://www.alxafrica.com/"
  },
  {
    image: "/certificates/DS.png",
    category: "",
    name: "Data Science",
    description: `A 13-month intensive ALX Data Science with Professional Development Skills.
        for the Digital Age powered by ExploreAI Academy`,
    link: "/certificates/DS.png",
    level: "100%",
    website: "https://www.alxafrica.com/"
  },
  {
    image: "/certificates/Google-IT-Support.jpg",
    name: "Google IT Support Specialist",
    description: `A 6-month professional certification course on IT Support offered by Google via Coursera`,
    link: "/certificates/Google-IT-Support.jpg",
    level: "100%",
    website: "https://www.coursera.org"
  },
  {
    image: "/certificates/Automation.jpg",
    name: "Google IT Automation with Python",
    description: `A 6-month professional certification course on IT Automation with Python by Google via Coursera`,
    link: "/certificates/Automation.jpg",
    level: "100%",
    website: "https://www.coursera.org"
  },
  {
    image: "/certificates/AICE.png",
    category: "",
    name: "AI Career Essentials",
    description: `An 8-week intensive AI Augumented Professional Development in digital age`,
    link: "/certificates/AICE.png",
    level: "100%",
    website: "https://www.alxafrica.com/"
  },
  {
    image: "/certificates/Customer-Service.jpg",
    name: "Customer Service Fundamentals",
    description: `An online non-credit course offered by knowledge Accelerators 
    and offered via Coursera`,
    link: "/certificates/Customer-Service.jpg",
    level: "100%",
    website: "https://coursera.org"
  },
  {
    image: "/certificates/Maintenance.jpg",
    name: "Socomec Engineer Level-1 Maintenace Engineer",
    description: `A Level-1 Maintenace Engineer certificate for Socomec UPSs offered by Socomec.`,
    link: "/certificates/Maintenance.jpg",
    level: "100%",
    website: "https://www.socomec.com/"
  },
  {
    image: "/certificates/cert.jpg",
    category: "",
    name: "Electrical and Electronic Engineering",
    description: `A 5-year Bachelor in Engineering Degree Program in Electrical and Electronics Engineering`,
    link: "/certificates/cert.jpg",
    level: "100%",
    website: "https://futo.edu.ng/"
  },
  {
    image: "/certificates/Digital_marketing.jpg",
    name: "Fundamentals of Digital Marketing",
    description: `Fundamentals of Digital Marketing offered by Google Digital Garage`,
    link: "/certificates/Digital_marketing.jpg",
    level: "100%",
    website: "https://learndigital.withgoogle.com"
  },
];

type Props = {};

const Certifications = (props: Props) => {
  return (
    <section className="w-full py-12 lg:py-16">
      <div className="container mx-auto px-1.5 sm:px-4 lg:px-8 max-w-7xl">
        {/* Enhanced Header Section */}
        <div className="text-center mb-10 lg:mb-16">
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              <span className="text-foreground">My Versatile </span>
              <span className="dark:text-purple text-purple bg-gradient-to-r from-purple to-[#FE705A] bg-clip-text text-transparent">
                Certifications
              </span>
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              Professional certifications and achievements across various technologies and domains
            </p>
          </div>
        </div>

        {/* Fully Responsive Certifications Grid */}
        {/* <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6"> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {certData.map((cert: any, index: number) => {
            return (
              <div 
                key={index} 
                className="w-full flex justify-center"
              >
                <div className="w-full">
                  <CertCard cert={cert} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact Statistics Section */}
        <div className="mt-12 lg:mt-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6 text-center">
            <div className="space-y-1">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple">
                {certData.length}+
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                Certifications
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#FE705A]">
                100%
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                Completion Rate
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple">
                5+
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                Years Learning
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#FE705A]">
                24/7
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                Growth Mindset
              </div>
            </div>
          </div>
        </div>

        {/* Compact Call to Action Section */}
        <div className="mt-12 lg:mt-16 text-center">
          <div className="bg-muted/30 rounded-xl p-5 lg:p-6 border border-border/50 max-w-4xl mx-auto">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-3">
              Continuous Learning Journey
            </h3>
            <p className="text-muted-foreground text-sm lg:text-base mb-5 max-w-2xl mx-auto leading-relaxed">
              These certifications represent my commitment to staying current with industry trends and continuously expanding my expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-medium border border-emerald-500/20">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                Currently pursuing new certifications
              </div>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 text-white font-medium rounded-lg transition-colors duration-300 text-sm"
              >
                Let's Connect
                <MdUnfoldMore className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;