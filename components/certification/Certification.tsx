"use client";

import React from "react";
import Link from "next/link";
import { MdUnfoldMore } from "react-icons/md";
import CertCard from "./CertCard";
import ButtonMagic from "../ui/ButtonMagic";

// Components

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
    image: "certificates/AICE.png",
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
    <section className="w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            <span className="mr-2">My Versatile</span>
            <span className="dark:text-purple text-[purple]">Certifications</span>
          </h1>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 place-items-center">
          {certData.map((cert: any, index: number) => {
            return (
              <div 
                key={index} 
                className="w-full max-w-[320px] h-full flex justify-center"
              >
                <CertCard cert={cert} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
