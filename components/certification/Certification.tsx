"use client";

import React from "react";

import Link from "next/link";


import { MdUnfoldMore } from "react-icons/md";
import CertCard from "./CertCard";
import ButtonMagic from "../ui/ButtonMagic";

// Components

const certData = [
  {
    image: "/certificates/Google_IT_Support.png",
    name: "Google IT Support Specialist",
    description: `A 6-month professional certification course on IT Support offered by Google via Coursera
        `,
    link: "/",
    level: "100%",
    website: "https://www.coursera.org"
  },

  {
    image: "certificates/AICE.png",
    category: "",
    name: " AI Career Essentials",
    description: `Work Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit. Quidem, at eveniet distinctio consequuntur placeat 
        `,
    link: "/",
    level: "45%",
    website: "www.coursera.org"
  },
  {
    image: "/work/2.png",
    category: "next js",
    name: "Nova Website",
    description: `Work Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit. Quidem, at eveniet distinctio consequuntur placeat `,
    link: "/",
    level: "60%",
    website: "www.coursera.org"
  },
  {
    image: "/work/1.png",
    name: "crypto Website",
    description: `Work Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit. Quidem, at eveniet distinctio consequuntur placeat 
        `,
    link: "/",
    level: "100%",
    website: "www.coursera.org"
  },
  {
    image: "/work/3.png",
    category: "react js",
    name: "Nexa Website",
    description: `Work Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit. Quidem, at eveniet distinctio consequuntur placeat 
        .`,
    link: "/",
    level: "80%",
    website: "www.coursera.org"
  },
  {
    image: "/work/4.png",
    category: "react js",
    name: "Nexa Website",
    description: `Work Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit. Quidem, at eveniet distinctio consequuntur placeat 
        .`,
    link: "/",
    level: "30%",
    website: "www.coursera.org"
  },
  {
    image: "/work/3.png",
    category: "react js",
    name: "Nexa Website",
    description: `Work Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit. Quidem, at eveniet distinctio consequuntur placeat 
        .`,
    link: "/",
    level: "100%",
    website: "www.coursera.org"
  },

  {
    image: "/work/1.png",
    category: "react js",
    name: "Nexa Website",
    description: `Work Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit. Quidem, at eveniet distinctio consequuntur placeat 
       .`,
    link: "/",
    level: "90%",
    website: "www.coursera.org"
  },
  {
    image: "/work/2.png",
    category: "react js",
    name: "Nexa Website",
    description: `Work Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit. Quidem, at eveniet distinctio consequuntur placeat 
        .`,
    link: "/",
    level: "10%",
    website: "www.coursera.org"
  },
];

type Props = {};

const Certifications = (props: Props) =>
{
  return (
    <section className="">
      {/* <section className="relative  xm:w-[88%] sm:w-[75%] md:w-[85%] mx-auto mb-12 xl:mb-48 mt-12"> */}
      <div className="container mx-auto">

        <div className=" max-w-[100%] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start ">
          <h1 className="section-title flex flex-wrap !gap-x-0  mb-8 md:mb-2">
            <span className="mx-1">A small selection of {" "}</span>
            <span className="dark:text-purple text-[purple]">recent projects</span>
          </h1>
          <Link href="/projects">
            <ButtonMagic
              title="View All Projects"
              icon={<MdUnfoldMore />}
              position="right"
              otherClasses="!rounded-full !w-[12rem] !px-0"
            />
          </Link>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] justify-center items-center gap-x-8 gap-y-10">
          {/* <div className="flex flex-wrap gap-10"> */}
          {certData.slice(0, 6).map((cert: any, index: number) =>
          {
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
