"use client";

import React from "react";

import Link from "next/link";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { MdUnfoldMore } from "react-icons/md";
import ButtonMagic from "../ui/ButtonMagic";
import ProjectCard from "./ProjectCard";
import { projectData } from "@/data/data";

// Components



type Props = {};

const Work = (props: Props) =>
{
  return (
    <section className="relative  xm:w-[88%] sm:w-[75%] md:w-[85%] mx-auto mb-12 xl:mb-48 mt-12">
      <div className="container mx-auto">
        <div className=" max-w-[100%] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start ">
          {/* <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. ducimus !
          </p> */}
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
            {/* <ButtonMagic className="bg-[#FE705A]">All Projects</ButtonMagic> */}
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[800px] xs:h-[610px] xm:h-[560px] sm:h-[530px] md:h-[580px] lg:h-[600px] pb-12"
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={50}
            modules={[Pagination]}
            pagination={{
              clickable: true,
              el: '.swiper-custom-pagination'
            }}
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
          <div className="swiper-custom-pagination flex justify-center mt-6"></div>
        </div>
      </div>
    </section>
  );
};

export default Work;
