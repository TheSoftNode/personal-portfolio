import {
  Briefcase,
  Calendar,
  CalendarDays,
  GraduationCap,
  HomeIcon,
  MailIcon,
  PhoneCall,
  School,
  ShieldCheck,
  User2,
  BriefcaseBusiness,
  Factory,
  CircleArrowLeft
} from "lucide-react";
import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Experience from "@/components/about/Experience";
import Certifications from "@/components/certification/Certification";
import Link from "next/link";
import { qualificationData, skillData } from "@/data/data";

type Props = {};

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Theophilus Uche",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "09038726950",
  },
  {
    icon: <MailIcon size={20} />,
    text: "Theo.uche2023@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 22 June",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelor in Engineering (B.eng)",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Lagos, Nigeria",
  },
];



const About = (props: Props) => {
  const getData = (arr: any, title: string) => {
    return arr.find((item: any) => item.title === title);
  };
  return (
    <>
      <section className="xl:h-[860px] mt-16 pt-10 pb-10 xl:py-24 md:px-10 px-3">
        <div className="container xl:w-full">
          <Link href="/#about" className="">
            <CircleArrowLeft className="!text-[#FE7054]" />
          </Link>
          {/* <h2 className="section-title !text-3xl mb-10 xl:mb-16 text-center mx-auto">
            About me
          </h2> */}
          <div className="flex flex-col xl:flex-row lg:mt-4">
            {/* tabs */}
            <div className="flex-1">
              <Tabs defaultValue="personal">
                <TabsList className="w-full sm:flex flex-col md:flex-row xl:gap-7  md:border dark:border-none ">
                  <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                    Personal Info
                  </TabsTrigger>
                  <TabsTrigger
                    className="w-[162px] xl:w-auto"
                    value="qualifications"
                  >
                    Qualifications
                  </TabsTrigger>
                  <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                    Skills
                  </TabsTrigger>
                  {/* <TabsTrigger className="w-[162px] xl:w-auto" value="certifications">
                  Certifications
                </TabsTrigger> */}
                  <TabsTrigger className="w-[162px] xl:w-auto" value="pitch">
                    My Pitch
                  </TabsTrigger>
                </TabsList>
                {/* tabs content */}
                <div className="text-lg mt-12 xl:mt-8">
                  {/* personal */}
                  <TabsContent value="personal">
                    <div className="text-center">
                      <h3 className="text-xs xs:text-sm sm:text-xl font-semibold mb-4">
                        Delivering Excellence in Software Engineering for Over 5 Years
                      </h3>
                      <p className="subtitle text-[90%] mb-8 lgm:max-w-[70%] mx-auto prose hyphens-auto text-justify leading-relaxed tracking-tight word-spacing ">
                        I specialize in building powerful backend systems with cutting-edge technology
                        while efficiently handling frontend development, delivering seamless and
                        high-performance digital solutions.
                        Over the last five years, I&apos;ve honed my skills across various platforms
                        and technologies, consistently delivering secure, scalable, and efficient systems that meet
                        the evolving needs of clients and users.
                      </p>
                      {/* icons */}
                      <div className="grid md:grid-cols-2 max-w-2xl mx-auto gap-4 mb-12">
                        {infoData.map((item: any, index: number) => {
                          return (
                            <div
                              className="flex items-center gap-x-4 mx-auto xl:mx-0"
                              key={index}
                            >
                              <div className="text-[#FE705A]">{item.icon}</div>
                              <div>{item.text}</div>
                            </div>
                          );
                        })}
                      </div>
                      {/* languages */}
                      <div className="flex flex-col gap-y-6">
                        <div className="text-[#FE705A] mt-10">Language Skill</div>
                        <div className="border-b border-border">
                          <div className="pb-1">English</div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  {/* qualification */}
                  <TabsContent value="qualifications">
                    <div>
                      <h3 className="h3 mb-8 text-center xl:text-left">
                        My Awesome Journey
                      </h3>
                      <Tabs defaultValue="experience">

                        <TabsList className="dark:md:bg-transparent flex  gap-2 sm:gap-x-20 justify-start">
                          <TabsTrigger
                            className="w-[162px] xl:w-auto data-[state=active]:bg-transparent data-[state=active]:text-[#FE705A] data-[state=active]:shadow-none"
                            value="experience">
                            <div className="flex gap-x-3 items-center sm:text-[28px] text-[100%]">
                              <Briefcase />
                              <h4 className="capitalize font-medium">
                                {getData(qualificationData, "experience").title}
                              </h4>
                            </div>
                          </TabsTrigger>

                          <TabsTrigger className="w-[162px] xl:w-auto data-[state=active]:bg-transparent data-[state=active]:text-[#FE705A] data-[state=active]:shadow-none"
                            value="education">
                            <div className="flex gap-x-3 items-center sm:text-[28px] text-[100%]">
                              <GraduationCap size={28} />
                              <h4 className="capitalize font-medium">
                                {getData(qualificationData, "education").title}
                              </h4>
                            </div>
                          </TabsTrigger>
                        </TabsList>

                        <TabsContent value="experience">
                          {/* experience */}
                          {/* <h1 className="h4 md:text-center my-6">
                          My <span className="text-purple">work experiences</span>
                        </h1> */}
                          <div className="flex flex-col gap-y-6">
                            <Tabs defaultValue="experiences">

                              <TabsList className="dark:md:bg-transparent flex  gap-2 sm:gap-x-20 justify-start sm:justify-center sm:items-center">
                                <TabsTrigger
                                  className="w-[160px] xl:w-auto data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-b-[#FE705A] data-[state=active]:text-[#621462] dark:data-[state=active]:text-purple data-[state=active]:shadow-none"
                                  value="experiences">
                                  <div className="flex gap-x-4 items-center sm:text-[22px] text-[100%]">
                                    <h4 className="capitalize font-medium">
                                      experiences
                                    </h4>
                                  </div>
                                </TabsTrigger>

                                <TabsTrigger
                                  className="w-[180px] px-4 xl:w-auto data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-b-[#FE705A] data-[state=active]:text-[#621462] dark:data-[state=active]:text-purple data-[state=active]:shadow-none"
                                  value="Responsibilities">
                                  <div className="flex gap-x-4 items-center sm:text-[22px] text-[100%]">
                                    <h4 className="capitalize font-medium">
                                      Responsibilities
                                    </h4>
                                  </div>
                                </TabsTrigger>
                              </TabsList>

                              <TabsContent value="experiences">
                                {/* list */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                                  {getData(qualificationData, "experience").data.map(
                                    (item: any, index: number) => {
                                      const { company, role, years } = item;
                                      return (
                                        <div className="flex gap-x-5 group" key={index}>
                                          <div className="h-full w-[1px] bg-border relative ml-2">
                                            <div className="w-[11px] h-[11px] rounded-full bg-[#FE705A] absolute -left-[5px] group-hover:translate-y-[100px] transition-all duration-500"></div>
                                          </div>
                                          <div className="flex-1">
                                            <div className="font-semibold text-base sm:text-lg leading-tight mb-4 flex items-center gap-2">
                                              <Factory className="flex-shrink-0" />
                                              <span className="break-words">{company}</span>
                                            </div>
                                            <div className="text-base sm:text-lg leading-tight text-muted-foreground mb-4 flex items-center gap-2">
                                              <BriefcaseBusiness className="flex-shrink-0" />
                                              <span className="break-words">{role}</span>
                                            </div>
                                            <div className="text-sm sm:text-base font-medium text-[#621462] dark:text-purple flex items-center gap-2">
                                              <CalendarDays className="flex-shrink-0" />
                                              <span className="break-words">{years}</span>
                                            </div>
                                          </div>
                                        </div>
                                      );
                                    }
                                  )}
                                </div>
                              </TabsContent>

                              <TabsContent value="Responsibilities">
                                <Experience />
                              </TabsContent>

                            </Tabs>
                          </div>
                        </TabsContent>
                        <TabsContent value="education">
                          {/* education */}
                          <div className="flex flex-col gap-y-6">
                            <Tabs defaultValue="education">

                              <TabsList className="dark:md:bg-transparent flex mt-2  gap-2 sm:gap-x-20 justify-start">
                                <TabsTrigger
                                  className="w-[160px] xl:w-auto data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-b-[#FE705A] data-[state=active]:text-[#621462] dark:data-[state=active]:text-purple data-[state=active]:shadow-none"
                                  value="education">
                                  <div className="flex gap-x-4 items-center text-[22px] text-[#621462] dark:text-purple">
                                    {/* <GraduationCap size={28} /> */}
                                    <h4 className="capitalize font-medium">
                                      Education
                                    </h4>
                                  </div>
                                </TabsTrigger>

                              </TabsList>

                              <TabsContent value="education">
                                {/* list */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                                  {getData(qualificationData, "education").data.map(
                                    (item: any, index: number) => {
                                      const { university, qualification, years } = item;
                                      return (
                                        <div className="flex gap-x-5 group" key={index}>
                                          <div className="h-full w-[1px] bg-border relative ml-2">
                                            <div className="w-[11px] h-[11px] rounded-full bg-[#FE705A] absolute -left-[5px] group-hover:translate-y-[100px] transition-all duration-500"></div>
                                          </div>
                                          <div className="flex-1">
                                            <div className="font-semibold text-base sm:text-lg leading-tight mb-4 flex items-center gap-2">
                                              <School className="flex-shrink-0" />
                                              <span className="break-words">{university}</span>
                                            </div>
                                            <div className="text-base sm:text-lg leading-tight text-muted-foreground mb-4 flex items-center gap-2">
                                              <ShieldCheck className="flex-shrink-0" />
                                              <span className="break-words">{qualification}</span>
                                            </div>
                                            <div className="text-sm sm:text-base font-medium text-[#621462] dark:text-purple flex items-center gap-2">
                                              <CalendarDays className="flex-shrink-0" />
                                              <span className="break-words">{years}</span>
                                            </div>
                                          </div>
                                        </div>
                                      );
                                    }
                                  )}
                                </div>
                              </TabsContent>
                            </Tabs>
                          </div>
                        </TabsContent>

                      </Tabs>
                    </div>
                  </TabsContent>
                  {/* skills */}
                  <TabsContent value="skills">
                    <div className="text-center xl:text-left">
                      <h3 className="h3 mb-8 ">What I Use Everyday</h3>
                      {/* skills  */}
                      <div className="mb-16">
                        <h4 className="text-xl dark:text-[#FE705A] text-[purple] font-semibold mb-2">Skills</h4>
                        <div className="border-b border-border mb-6"></div>
                        {/* skill list */}
                        <div className="flex gap-3 flex-wrap">
                          {getData(skillData, "skills").data.map(
                            (item: any, index: number) => {
                              // const { name } = item;
                              return (
                                <div
                                  className="xl:text-left mx-auto border border-[purple] dark:border-[#3d0b3d] rounded-full p-3"
                                  key={index}
                                >
                                  <div className="text-xs sm:text-sm font-medium">{item}</div>
                                  {/* <div className="font-medium">{name}</div> */}
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* tools */}
                      <div>
                        <h4 className="text-xl text-[purple] dark:text-[#FE705A] font-semibold mb-2 xl:text-left">
                          Tools
                        </h4>
                        <div className="border-b border-border mb-4"></div>
                        {/* tool list  */}
                        <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center xl:justify-start">
                          {getData(skillData, "tools").data.map(
                            (item: any, index: any) => {
                              const { imgPath } = item;
                              return (
                                // <div key={index} className="border border-[purple] p-3 rounded-full">
                                <div key={index}>
                                  <Image
                                    src={imgPath}
                                    width={48}
                                    height={48}
                                    alt=""
                                    priority
                                  />
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  {/* Certifications */}
                  {/* <TabsContent value="certifications">
                  <div className="text-center xl:text-left">
                    <div className="mb-16">
                      <Certifications />
                    </div>
                  </div>
                </TabsContent> */}
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
