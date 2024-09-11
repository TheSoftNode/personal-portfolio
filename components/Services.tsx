"use client";

import { Blocks, GanttChartSquare, Gem } from "lucide-react";
import React from "react";
import
  {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "./ui/card";

type Props = {};

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      "I combine excellent codes to give you astonishing UI that's user friendly and well optimized",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "I combine excellent codes to give you astonishing UI that's user friendly and well optimized",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      "I combine excellent codes to give you astonishing UI that's user friendly and well optimized",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "I combine excellent codes to give you astonishing UI that's user friendly and well optimized",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      "I combine excellent codes to give you astonishing UI that's user friendly and well optimized",
  },
];

const Services = (props: Props) =>
{
  return (
    <section className="mb-24 mt-4 xl:mb-36">
      <div className="container mx-auto">
        <div className="section-title mb-24 xl:mb-24 text-center mx-auto">
          My Services
        </div>
        {/* grid items */}
        {/* <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8"> */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] place-items-center gap-x-4 gap-y-14">
          {servicesData.map((item: any, index: number) =>
          {
            return (
              <Card
                className="w-full max-w-[400px] h-[280px] flex flex-col bg-transparent pt-16 pb-8 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-[#FE705A] absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-black-100 flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
