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
    name: " Fullstack Software Engineering",
    description: `A 12-month intensive Fullstack Software Engineering Internship with ALX 
    in partnership with Holberton.inc.
        `,
    link: "/certificates/Software-Engineering.png",
    level: "100%",
    website: "https://www.alxafrica.com/"
  },

  {
    image: "/certificates/DS.png",
    category: "",
    name: " Data Science",
    description: `A 13-month intensive ALX Data Science with Professional Development Skills.
        for the Digital Age powered by ExploreAI Academy`,
    link: "/certificates/DS.png",
    level: "100%",
    website: "https://www.alxafrica.com/"
  },

  {
    image: "/certificates/Google-IT-Support.jpg",
    name: "Google IT Support Specialist",
    description: `A 6-month professional certification course on IT Support offered by Google via Coursera
        `,
    link: "/certificates/Google-IT-Support.jpg",
    level: "100%",
    website: "https://www.coursera.org"
  },
  {
    image: "/certificates/Automation.jpg",
    name: "Google IT Automation with Python",
    description: `A 6-month professional certification course on  IT Automation with Python by Google via Coursera
        `,
    link: "/certificates/Automation.jpg",
    level: "100%",
    website: "https://www.coursera.org"
  },
  {
    image: "certificates/AICE.png",
    category: "",
    name: " AI Career Essentials",
    description: `An 8-week intensive AI Augumented Professional Development in digital age
        `,
    link: "/certificates/AICE.png",
    level: "100%",
    website: "https://www.alxafrica.com/"
  },
  {
    image: "/certificates/Customer-Service.jpg",
    name: "Customer Service Fundamentals",
    description: `An online non-credit course offered by knowledge Accelerators 
    and offered via Coursera
        `,
    link: "/certificates/Customer-Service.jpg",
    level: "100%",
    website: "https://coursera.org"
  },
  {
    image: "/certificates/Maintenance.jpg",
    name: "Socomec Engineer Level-1 Maintenace Engineer",
    description: `A Level-1 Maintenace Engineer certificate for Socomec UPSs offered by Socomec
        .`,
    link: "/certificates/Maintenance.jpg",
    level: "100%",
    website: "https://www.socomec.com/"
  },
  {
    image: "/certificates/cert.jpg",
    category: "",
    name: " Electrical and Electronic Engineering",
    description: `A 5-year Bachelor in Engineering Degree Program in Electrical and Electronics Engineering
        `,
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
    <section className="">
      {/* <section className="relative  xm:w-[88%] sm:w-[75%] md:w-[85%] mx-auto mb-12 xl:mb-48 mt-12"> */}
      <div className="container mx-auto">

        <div className=" max-w-[100%] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start ">
          <h1 className="section-title flex flex-wrap !gap-x-0  mb-8 md:mb-2">
            <span className="mx-1">My Versatile {" "}</span>
            <span className="dark:text-purple text-[purple]">Certifications</span>
          </h1>
          {/* <Link href="/projects">
            <ButtonMagic
              title="View All Projects"
              icon={<MdUnfoldMore />}
              position="right"
              otherClasses="!rounded-full !w-[12rem] !px-0"
            />
          </Link> */}
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] justify-center items-center gap-x-8 gap-y-10">
          {/* <div className="flex flex-wrap gap-10"> */}
          {certData.slice(0, 10).map((cert: any, index: number) => {
            return (
              // <div className="w-[320px]">
              <div key={index}>
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
