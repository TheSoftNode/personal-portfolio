"use client";

import React from "react";

import { companies, testimonials } from "@/data/data";
import { InfiniteMovingCards } from "../ui/InfiniteCards";

const Clients = () =>
{
  return (
    <section id="testimonials" className="pt-12">
      <h1 className="section-title !gap-x-1 text-center mx-auto mb-12 flex flex-col xs:flex-row">
        <span className="ml-2">Kind words from</span>
        <span className="dark:text-purple text-[#FE705A]">satisfied clients</span>
      </h1>

      <div className="flex flex-col">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center px-2  xm:w-[100%] mx-auto bg-black-100 justify-center py-9 gap-x-4 gap-y-8 mt-10 dark:mt-6 lg:gap-16 max-lg:mt-10">
          {/* <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10"> */}
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 xm:max-w-32 xs:max-w-28 gap-2">
                <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 xm:w-5 xs:w-4"
                />
                <img
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="md:w-24 xm:w-20 xs:w-16 text-black-100"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;