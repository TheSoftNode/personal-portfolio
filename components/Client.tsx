"use client";

import React from "react";

import { companies, testimonials } from "@/data/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () =>
{
    return (
        <section id="testimonials" className="pt-12 border-2">
            <h1 className="section-title text-center mx-auto  flex flex-col md:flex-row">
                <span>Kind words from</span>
                <span className="text-purple"> satisfied clients</span>
            </h1>

            <div className="flex flex-col">
                <div
                    // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
                    className="h-[50vh] md:h-[35rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
                >
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>

                {/* <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 w-5"
                />
                <img
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="md:w-24 w-20"
                />
              </div>
            </React.Fragment>
          ))}
        </div> */}
            </div>
        </section>
    );
};

export default Clients;