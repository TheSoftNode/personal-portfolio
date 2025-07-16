"use client";

import { BarChart, Cloud, Code, GraduationCap, Layers, Palette, Server, Coins } from "lucide-react";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

type Props = {};

const servicesData = [
  {
    icon: <Palette size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      "I craft visually stunning and user-centric designs that combine aesthetics with functionality, creating websites that are not only beautiful but also optimized for a smooth user experience.",
  },
  {
    icon: <Code size={72} strokeWidth={0.8} />,
    title: "Frontend Engineering",
    description:
      "I develop responsive, scalable, and interactive user interfaces using modern technologies, ensuring an intuitive and seamless user experience across devices.",
  },
  {
    icon: <Server size={72} strokeWidth={0.8} />,
    title: "Backend Engineering",
    description:
      "I architect and implement robust, scalable backend systems, leveraging APIs, databases, and efficient server-side logic to ensure seamless data flow, security, and performance optimization.",
  },
  {
    icon: <Coins size={72} strokeWidth={0.8} />,
    title: "Web3 & Blockchain Development",
    description:
      "I build cutting-edge decentralized applications across multiple blockchains including Stacks, Hedera, Ethereum, MetaMask, and NEAR. With a proven track record in hackathons and active development in the Web3 space, I deliver innovative blockchain solutions.",
  },
  {
    icon: <Layers size={72} strokeWidth={0.8} />,
    title: "DevOps",
    description:
      "I streamline development and operations through automation, continuous integration, and deployment pipelines, ensuring rapid, reliable software delivery and maintaining scalable, efficient infrastructure.",
  },
  {
    icon: <Cloud size={72} strokeWidth={0.8} />,
    title: "Cloud Engineering",
    description:
      "I design, implement, and optimize cloud solutions tailored to your business needs, ensuring scalability, security, and cost-efficiency across cloud environments.",
  },
  {
    icon: <BarChart size={72} strokeWidth={0.8} />,
    title: "Data Science & Engineering",
    description:
      "I harness the power of data through advanced analytics, machine learning, and statistical modeling, while building robust data pipelines and engineering solutions that transform raw data into actionable insights driving business decisions and innovation.",
  },
  {
    icon: <GraduationCap size={72} strokeWidth={0.8} />,
    title: "Tutoring and Mentoring",
    description:
      "I provide personalized tutoring and mentoring, guiding learners through complex technical concepts and helping them build practical skills to excel in their studies and careers.",
  }
];

const Services = (props: Props) => {
  return (
    <>
      <section className="mb-20 sm:w-[85%] mx-auto mt-10 xl:mb-36 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="section-title !text-3xl mb-16 xl:mb-20 text-center mx-auto">
            My Services
          </div>
          
          {/* Compact Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 place-items-center">
            {servicesData.map((item: any, index: number) => {
              return (
                <Card
                  className="w-full max-w-[320px] h-[280px] flex flex-col bg-transparent pt-12 pb-4 justify-center items-center relative hover:shadow-lg transition-all duration-300 group border hover:border-[#FE705A]/30"
                  key={index}
                >
                  {/* Stylish Icon - Original Positioning */}
                  <CardHeader className="text-[#FE705A] absolute -top-[50px] left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-[120px] h-[70px] bg-background dark:bg-black-100 flex justify-center items-center rounded-lg dark:shadow-md dark:group-hover:shadow-lg dark:transition-shadow dark:duration-300 border-2 border-transparent">
                      {item.icon}
                    </div>
                  </CardHeader>

                  {/* Content */}
                  <CardContent className="text-center pt-4 px-4">
                    <CardTitle className="mb-3 text-lg lg:text-xl font-semibold group-hover:text-[#FE705A] transition-colors duration-300">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-[18px] text-muted-foreground line-clamp-6">
                      {item.description}
                    </CardDescription>
                  </CardContent>

                  {/* Subtle Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FE705A]/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      <div className="dark:border-2 dark:border-[#0c0e2c]" />
    </>
  );
};

export default Services;