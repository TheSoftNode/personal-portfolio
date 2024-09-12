"use client";

import React from "react";

import Link from "next/link";
import { Button } from "./ui/button";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// Components
import ProjectCard from "./ProjectCard";
import ProjectBox from "./ProjectBox";
import { projects } from "@/data/data";

const projectData = [
  {
    image: "/work/3.png",
    category: "react js",
    name: "Nexa Website",
    description: `Work Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit. Quidem, at eveniet distinctio consequuntur placeat 
        `,
    link: "/",
    github: "/",
  },

  {
    image: "/work/4.png",
    category: "next js",
    name: " solotas Website",
    description: `Work Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit. Quidem, at eveniet distinctio consequuntur placeat 
        `,
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "next js",
    name: "Nova Website",
    description: `Work Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit. Quidem, at eveniet distinctio consequuntur placeat 
        .`,
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "react js",
    name: "crypto Website",
    description: `Work Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit. Quidem, at eveniet distinctio consequuntur placeat 
        .`,
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "react js",
    name: "Nexa Website",
    description: `Work Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit. Quidem, at eveniet distinctio consequuntur placeat 
        .`,
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "react js",
    name: "Nexa Website",
    description: `Work Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit. Quidem, at eveniet distinctio consequuntur placeat 
        .`,
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "react js",
    name: "Nexa Website",
    description: `Work Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit. Quidem, at eveniet distinctio consequuntur placeat 
        .`,
    link: "/",
    github: "/",
  },

  {
    image: "/work/1.png",
    category: "react js",
    name: "Nexa Website",
    description: `Work Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit. Quidem, at eveniet distinctio consequuntur placeat 
       .`,
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "react js",
    name: "Nexa Website",
    description: `Work Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit. Quidem, at eveniet distinctio consequuntur placeat 
        .`,
    link: "/",
    github: "/",
  },
];

type Props = {};

const Work = (props: Props) =>
{
  return (
    // <section className="relative mb-12 xl:mb-48 border-2">
    <section className="relative mb-12 xl:mb-48 pt-12 mx-auto">
      <div className="container  mx-auto">
        <div className=" mx-auto xl:mx-0 text-center mb-12 gap-6 xl:text-left flex flex-col justify-center items-center xl:items-start ">

          <h1 className="heading  w-full">
            A small selection of{" "}
            <span className="text-purple">recent projects</span>
          </h1>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] w-[100%]  xl:absolute xl:right-0 xl:top-0">
          <Swiper
            className="h-[650px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={40}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slides */}
            {projects.slice(0, 4).map((project: any, index: number) =>
            {
              return (
                <SwiperSlide key={index}>
                  <div className="flex flex-wrap items-center justify-center p-4 mb-10">

                    <ProjectBox project={project} />
                  </div>

                  {/* <ProjectCard project={project} /> */}
                </SwiperSlide>
              );
            })}

          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
