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

type Props = {};

const Work = (props: Props) => {
  return (
    <section className="relative w-full max-w-7xl mx-auto mb-12 xl:mb-48 mt-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Header Section - Improved layout for larger screens */}
        <div className="max-w-full mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:mb-16">
          <div className="xl:max-w-[500px] flex flex-col justify-center items-center xl:items-start">
            <h1 className="section-title flex flex-wrap !gap-x-0 mb-8 md:mb-6">
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
        </div>

        {/* Slider Section - Better responsive layout */}
        <div className="w-full xl:max-w-none">
          <Swiper
            className="h-[800px] xs:h-[610px] xm:h-[560px] sm:h-[530px] md:h-[580px] lg:h-[600px] xl:h-[650px] 2xl:h-[700px] pb-12"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              1536: {
                slidesPerView: 3,
                spaceBetween: 60,
              },
            }}
            spaceBetween={20}
            modules={[Pagination]}
            pagination={{
              clickable: true,
              el: '.swiper-custom-pagination'
            }}
          >
            {/* Show only the first 4 projects for the slides */}
            {projectData.slice(0, 4).map((project: any, index: number) => {
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
