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
import ProjectCard from "./ProjectCard";
import ButtonMagic from "./ui/ButtonMagic";
import { MdUnfoldMore } from "react-icons/md";

// Components

const projectData = [
  {
    image: "/p1.svg",
    category: "react js",
    name: "Nexa Website",
    description: `Work Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit. Quidem, at eveniet distinctio consequuntur placeat 
        `,
    link: "/",
    github: "/",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"]
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
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
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
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
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
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
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
    <section className="relative w-[85%] mx-auto mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className=" max-w-[100%] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start ">
          {/* <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. ducimus !
          </p> */}
          <h1 className="heading mb-6">
            A small selection of{" "}
            <span className="text-purple">recent projects</span>
          </h1>
          <Link href="/projects">
            <ButtonMagic
              title="View All Projects"
              icon={<MdUnfoldMore />}
              position="right"
              otherClasses="!rounded-full !w-[12rem] !px-0"
            />
            {/* <ButtonMagic className="bg-[#FE705A]">All Projects</ButtonMagic> */}
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
              className="h-[800px] xs:h-[610px] xm:h-[560px] sm:h-[530px] md:h-[580px] lg:h-[600px]"
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={50}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slides */}
            {projectData.slice(0, 4).map((project: any, index: number) =>
            {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
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
