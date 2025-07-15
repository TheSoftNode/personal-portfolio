"use client";

import { BarChart, Cloud, Code, GraduationCap, Layers, LifeBuoy, Palette, Plug, Server } from "lucide-react";
import React from "react";
import
{
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
    icon: <GraduationCap size={72} strokeWidth={0.8} />,
    title: "Tutoring and Mentoring",
    description:
      "I provide personalized tutoring and mentoring, guiding learners through complex technical concepts and helping them build practical skills to excel in their studies and careers.",
  },
  {
    icon: <Layers size={72} strokeWidth={0.8} />,
    title: "DevOps",
    description:
      "I streamline development and operations through automation, continuous integration, and deployment pipelines, ensuring rapid, reliable software delivery and maintaining scalable, efficient infrastructure.",
  },
  {
    icon: <LifeBuoy size={72} strokeWidth={0.8} />,
    title: "IT Support and Consultation",
    description:
      "I provide reliable IT support and consultation, resolving issues, optimizing systems, and ensuring efficient IT operations for your business.",
  },
  {
    icon: <Cloud size={72} strokeWidth={0.8} />,
    title: "Cloud Engineering",
    description:
      "I design, implement, and optimize cloud solutions tailored to your business needs, ensuring scalability, security, and cost-efficiency across cloud environments.",
  },
  {
    icon: <BarChart size={72} strokeWidth={0.8} />,
    title: "Data Science",
    description:
      "I harness the power of data through advanced analytics, machine learning, and statistical modeling, transforming raw data into actionable insights that drive business decisions and innovation.",
  },
  {
    icon: <Plug size={72} strokeWidth={0.8} />,
    title: "Electrical and Computer Networking",
    description:
      "I design and maintain electrical systems and computer networks, ensuring efficient, reliable, and secure infrastructure.",
  }

];

const Services = (props: Props) =>
{
  return (
    <>
      <section className="mb-20 sm:w-[80%] mx-auto mt-10 xl:mb-36">
        <div className="container mx-auto">
          <div className="section-title !text-3xl mb-20 xl:mb-24 text-center mx-auto">
            My Services
          </div>
          
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] place-items-center gap-x-4 gap-y-14">
            {servicesData.map((item: any, index: number) =>
            {
              return (
                <Card
                  className="w-full max-w-[400px] h-[280px] flex flex-col bg-transparent pt-16 pb-6 justify-center items-center relative"
                  key={index}
                >
                  <CardHeader className="text-[#FE705A] absolute -top-[60px]">
                    <div className="w-[140px] h-[80px] bg-white dark:bg-black-100 flex justify-center items-center">
                      {item.icon}
                    </div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardTitle className="mb-4 text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-[16px] leading-[22px]">
                      {item.description}
                    </CardDescription>
                  </CardContent>
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