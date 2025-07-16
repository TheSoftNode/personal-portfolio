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
    <section className="relative w-full max-w-7xl mx-auto mb-8 sm:mb-12 lg:mb-16 xl:mb-20 mt-8 sm:mt-12 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Mobile-First Header Section */}
        <div className="max-w-full mx-auto text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16">
          <div className="flex flex-col justify-center items-center">
            <h1 className="section-title flex flex-wrap !gap-x-0 mb-6 sm:mb-8 md:mb-6 text-center">
              <span className="mx-1 text-lg sm:text-xl md:text-2xl lg:text-3xl">A small selection of {" "}</span>
              <span className="dark:text-purple text-[purple] text-lg sm:text-xl md:text-2xl lg:text-3xl">recent projects</span>
            </h1>
            <Link href="/projects">
              <ButtonMagic
                title="View All Projects"
                icon={<MdUnfoldMore />}
                position="right"
                otherClasses="!rounded-full !w-[10rem] sm:!w-[11rem] md:!w-[12rem] !px-0 !text-sm sm:!text-base"
              />
            </Link>
          </div>
        </div>

        {/* Mobile-Responsive Slider Section */}
        <div className="w-full xl:max-w-none">
          <Swiper
            className="h-auto pb-8 sm:pb-10 md:pb-12"
            slidesPerView={1}
            breakpoints={{
              // Mobile small (320px+)
              320: {
                slidesPerView: 1,
                spaceBetween: 12,
              },
              // Mobile medium (375px+)
              375: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              // Mobile large (425px+)
              425: {
                slidesPerView: 1,
                spaceBetween: 18,
              },
              // Tablet small (640px+)
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // Tablet medium (768px+)
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // Tablet large (900px+)
              900: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              // Desktop small (1024px+)
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              // Desktop medium (1280px+)
              1280: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              // Desktop large (1536px+)
              1536: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            spaceBetween={12}
            speed={600}
            loop={true}
            modules={[Pagination]}
            pagination={{
              clickable: true,
              el: '.swiper-custom-pagination',
              renderBullet: function (index, className) {
                return '<span class="' + className + ' swiper-pagination-bullet-custom"></span>';
              },
            }}
          >
            {/* Show only the first 3 projects */}
            {projectData.slice(0, 6).map((project: any, index: number) => {
              return (
                <SwiperSlide key={index} className="!h-auto">
                  <div className="h-full">
                    <ProjectCard project={project} />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="swiper-custom-pagination flex justify-center mt-4 sm:mt-5 md:mt-6"></div>
        </div>
      </div>

      {/* Mobile-Responsive Custom Pagination Styles */}
      <style jsx global>{`
        .swiper-pagination-bullet-custom {
          width: 8px !important;
          height: 8px !important;
          background: rgb(148 163 184 / 0.4) !important;
          border-radius: 50% !important;
          transition: all 0.3s ease !important;
          cursor: pointer !important;
          margin: 0 4px !important;
          opacity: 1 !important;
        }

        @media (min-width: 640px) {
          .swiper-pagination-bullet-custom {
            width: 10px !important;
            height: 10px !important;
            margin: 0 5px !important;
          }
        }

        @media (min-width: 768px) {
          .swiper-pagination-bullet-custom {
            margin: 0 6px !important;
          }
        }

        .swiper-pagination-bullet-custom:hover {
          background: rgb(148 163 184 / 0.7) !important;
          transform: scale(1.1) !important;
        }

        .swiper-pagination-bullet-custom.swiper-pagination-bullet-active {
          background: #FE705A !important;
          transform: scale(1.2) !important;
          box-shadow: 0 2px 8px rgba(254, 112, 90, 0.3) !important;
        }

        @media (min-width: 640px) {
          .swiper-pagination-bullet-custom.swiper-pagination-bullet-active {
            transform: scale(1.3) !important;
          }
        }

        /* Dark mode adjustments */
        @media (prefers-color-scheme: dark) {
          .swiper-pagination-bullet-custom {
            background: rgb(71 85 105 / 0.5) !important;
          }
          
          .swiper-pagination-bullet-custom:hover {
            background: rgb(71 85 105 / 0.8) !important;
          }
        }

        /* Swiper slide height consistency */
        .swiper-slide {
          height: auto !important;
          display: flex !important;
        }

        .swiper-slide > div {
          width: 100% !important;
          display: flex !important;
          flex-direction: column !important;
        }
      `}</style>
    </section>
  );
};

export default Work;