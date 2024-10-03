"use client";

import React, { useState } from "react";

import { companies, testimonials } from "@/data/data";
import { InfiniteMovingCards } from "../ui/InfiniteCards";
import useGetReviews from "../../hooks/useFetchData";
import { BASE_URL } from "@/utils/config";
import Link from "next/link";
import Error from "../Error/Error";
import Loader from "../Loader/Loading"

export interface IUserLink
{
  title: string;
  link: string;
}

export interface IReview
{
  _id: any;
  userFullname: string;
  userTitle: string;
  reviewText: string;
  reviewRating?: number;
  userPhoto?: string;
  gender?: string;
  userLinks?: IUserLink[];
  createdAt: Date;
  updatedAt: Date;
}



const Clients = () =>
{

  const { data: reviews, error, loading } = useGetReviews<IReview[]>(`${BASE_URL}/users/get-all-reviews`, null, false)
  return (
    <>

      <section id="testimonials" className="pt-12">
        <h1 className="section-title !gap-x-1 text-center mx-auto mb-4 flex flex-col xs:flex-row">
          <span className="ml-2">Kind words from</span>
          <span className="dark:text-purple text-[#FE705A]">satisfied clients</span>
        </h1>
        <Link className="flex justify-center items-center mb-10" href="/all-reviews">
          <span className="bg-transparent border border-border text-black-100 dark:text-purple py-2 px-2.5 rounded-md text-xs font-bold hover:bg-[#fe5635] transition-colors">
            View All!
          </span>
        </Link>

        {!error && loading && <Loader />}
        {!loading && error && <Error msg="Please check your network and try again" />}
        {!loading && !error && (
          <div className="flex flex-col">
            <div
              // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
              className="rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
            >
              <InfiniteMovingCards
                items={reviews || []}
                direction="right"
                speed="fast"
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
        )}

      </section>
    </>

  );
};

export default Clients;