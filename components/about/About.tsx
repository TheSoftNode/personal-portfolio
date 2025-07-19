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
  Factory
} from "lucide-react";
import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Experience from "./Experience";
import Certifications from "../certification/Certification";
import Link from "next/link";
import { MdUnfoldMore } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { qualificationData, skillData } from "@/data/data";

type Props = {};

const infoData = [
  {
    icon: <User2 size={18} />,
    text: "Theophilus Uchechukwu",
  },
  {
    icon: <PhoneCall size={18} />,
    text: "+234 9135 175 220",
  },
  {
    icon: <FaWhatsapp size={18} />,
    text: "+234 9038 726 950"
  },
  {
    icon: <MailIcon size={18} />,
    text: "Thesoftnode@gmail.com",
  },
  {
    icon: <Calendar size={18} />,
    text: "Born on 22 June",
  },
  {
    icon: <GraduationCap size={18} />,
    text: "Bachelor in Engineering (B.eng)",
  },
  {
    icon: <HomeIcon size={18} />,
    text: "Lagos, Nigeria",
  },
];

const About = (props: Props) => {
  const getData = (arr: any, title: string) => {
    return arr.find((item: any) => item.title === title);
  };

  return (
    <section id="about" className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      <div className="container mx-auto max-w-6xl">
        {/* Compact Header */}
        <div className="text-center mb-8 lg:mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold mb-3">
            About me
          </h2>
          <Link 
            href="/about" 
            className="inline-flex items-center gap-1.5 text-purple hover:text-[#FE705A] transition-colors text-sm"
          >
            <span>Know me even more</span>
            <MdUnfoldMore className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Main Content */}
        <div className="w-full">
          <Tabs defaultValue="personal" className="w-full">
            {/* Compact Tab Navigation */}
            <TabsList className="w-full grid grid-cols-3 lg:grid-cols-5 gap-1 h-auto p-0 bg-muted/50 border-0 rounded-md mb-6 lg:mb-8">
              <TabsTrigger 
                className="px-2 py-1 text-xs lg:text-sm font-medium whitespace-nowrap data-[state=active]:bg-[#FE705A] data-[state=active]:text-white data-[state=active]:shadow-sm rounded-md"
                value="personal"
              >
                Personal
              </TabsTrigger>
              <TabsTrigger
                className="px-2 py-1 text-xs lg:text-sm font-medium whitespace-nowrap data-[state=active]:bg-[#FE705A] data-[state=active]:text-white data-[state=active]:shadow-sm rounded-md"
                value="qualifications"
              >
                Experience
              </TabsTrigger>
              <TabsTrigger 
                className="px-2 py-1 text-xs lg:text-sm font-medium whitespace-nowrap data-[state=active]:bg-[#FE705A] data-[state=active]:text-white data-[state=active]:shadow-sm rounded-md"
                value="skills"
              >
                Skills
              </TabsTrigger>
              <TabsTrigger 
                className="px-2 py-1 text-xs lg:text-sm font-medium whitespace-nowrap data-[state=active]:bg-[#FE705A] data-[state=active]:text-white data-[state=active]:shadow-sm rounded-md"
                value="certifications"
              >
                Certificates
              </TabsTrigger>
              <TabsTrigger 
                className="px-2 py-1 text-xs lg:text-sm font-medium whitespace-nowrap data-[state=active]:bg-[#FE705A] data-[state=active]:text-white data-[state=active]:shadow-sm rounded-md"
                value="pitch"
              >
                My Pitch
              </TabsTrigger>
            </TabsList>

            {/* Compact Tab Content */}
            <div className="mt-6 lg:mt-8">
              {/* Personal Info Tab */}
              <TabsContent value="personal" className="space-y-6">
                <div className="text-center max-w-4xl mx-auto">
                  <h3 className="text-base lg:text-xl font-semibold mb-4">
                    Delivering Excellence in Software Engineering for Over 5 Years
                  </h3>
                  <p className="text-sm lg:text-base mb-6 max-w-3xl mx-auto leading-relaxed text-muted-foreground">
                    I specialize in building powerful backend systems with cutting-edge technology
                    while efficiently handling frontend development, delivering seamless and
                    high-performance digital solutions.
                    Over the last five years, I&apos;ve honed my skills across various platforms
                    and technologies, consistently delivering secure, scalable, and efficient systems that meet
                    the evolving needs of clients and users.
                  </p>

                  {/* Compact Personal Info Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 max-w-4xl mx-auto mb-8">
                    {infoData.map((item: any, index: number) => {
                      return (
                        <div
                          className="flex items-center gap-2.5 p-3 rounded-lg border bg-card/50 hover:bg-card transition-colors"
                          key={index}
                        >
                          <div className="text-[#FE705A] flex-shrink-0">{item.icon}</div>
                          <div className="text-xs lg:text-sm text-left break-words">{item.text}</div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Compact Language Skills */}
                  <div className="max-w-sm mx-auto">
                    <h4 className="text-[#FE705A] font-semibold mb-3 text-sm">Language Skills</h4>
                    <div className="p-3 border rounded-lg bg-card/50">
                      <div className="text-sm">English (Fluent)</div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Qualifications Tab */}
              <TabsContent value="qualifications" className="space-y-6">
                <div className="max-w-6xl mx-auto">
                  <h3 className="text-xl lg:text-2xl font-bold text-center lg:text-left mb-6">
                    My Awesome Journey
                  </h3>
                  
                  <Tabs defaultValue="experience" className="w-full">
                    <TabsList className="grid grid-cols-2 w-full max-w-sm mx-auto lg:mx-0 mb-6 bg-muted/50 p-0.5 rounded-lg">
                      <TabsTrigger
                        className="flex items-center gap-1.5 text-xs lg:text-sm font-medium data-[state=active]:bg-[#FE705A] data-[state=active]:text-white rounded-md py-1.5"
                        value="experience"
                      >
                        <Briefcase className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">{getData(qualificationData, "experience").title}</span>
                        <span className="sm:hidden">Experience</span>
                      </TabsTrigger>
                      <TabsTrigger 
                        className="flex items-center gap-1.5 text-xs lg:text-sm font-medium data-[state=active]:bg-[#FE705A] data-[state=active]:text-white rounded-md py-1.5"
                        value="education"
                      >
                        <GraduationCap className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">{getData(qualificationData, "education").title}</span>
                        <span className="sm:hidden">Education</span>
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="experience" className="space-y-5">
                      <Tabs defaultValue="experiences" className="w-full">
                        <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-6 bg-muted/50 p-0.5 rounded-lg">
                          <TabsTrigger
                            className="text-xs lg:text-sm font-medium data-[state=active]:bg-[#FE705A] data-[state=active]:text-white rounded-md py-1.5"
                            value="experiences"
                          >
                            Timeline
                          </TabsTrigger>
                          <TabsTrigger
                            className="text-xs lg:text-sm font-medium data-[state=active]:bg-[#FE705A] data-[state=active]:text-white rounded-md py-1.5"
                            value="Responsibilities"
                          >
                            Details
                          </TabsTrigger>
                        </TabsList>

                        <TabsContent value="experiences">
                          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
                            {getData(qualificationData, "experience").data.map(
                              (item: any, index: number) => {
                                const { company, role, years } = item;
                                return (
                                  <div className="flex gap-3 group p-3 rounded-lg border bg-card/50 hover:bg-card hover:shadow-md transition-all" key={index}>
                                    <div className="h-full w-[2px] bg-[#FE705A] relative rounded-full">
                                      <div className="w-2.5 h-2.5 rounded-full bg-[#FE705A] absolute -left-[4px] top-2 group-hover:scale-125 transition-transform"></div>
                                    </div>
                                    <div className="flex-1 space-y-2">
                                      <div className="font-semibold text-sm lg:text-base flex items-center gap-2">
                                        <Factory className="w-3.5 h-3.5 flex-shrink-0 text-[#FE705A]" />
                                        <span className="break-words">{company}</span>
                                      </div>
                                      <div className="text-xs lg:text-sm text-muted-foreground flex items-center gap-2">
                                        <BriefcaseBusiness className="w-3.5 h-3.5 flex-shrink-0" />
                                        <span className="break-words">{role}</span>
                                      </div>
                                      <div className="text-xs font-medium text-[#621462] dark:text-purple flex items-center gap-2">
                                        <CalendarDays className="w-3.5 h-3.5 flex-shrink-0" />
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
                          <div className="relative overflow-hidden rounded-lg">
                            <Experience />
                          </div>
                        </TabsContent>
                      </Tabs>
                    </TabsContent>

                    <TabsContent value="education">
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
                        {getData(qualificationData, "education").data.map(
                          (item: any, index: number) => {
                            const { university, qualification, years } = item;
                            return (
                              <div className="flex gap-3 group p-3 rounded-lg border bg-card/50 hover:bg-card hover:shadow-md transition-all" key={index}>
                                <div className="h-full w-[2px] bg-[#FE705A] relative rounded-full">
                                  <div className="w-2.5 h-2.5 rounded-full bg-[#FE705A] absolute -left-[4px] top-2 group-hover:scale-125 transition-transform"></div>
                                </div>
                                <div className="flex-1 space-y-2">
                                  <div className="font-semibold text-sm lg:text-base flex items-center gap-2">
                                    <School className="w-3.5 h-3.5 flex-shrink-0 text-[#FE705A]" />
                                    <span className="break-words">{university}</span>
                                  </div>
                                  <div className="text-xs lg:text-sm text-muted-foreground flex items-center gap-2">
                                    <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" />
                                    <span className="break-words">{qualification}</span>
                                  </div>
                                  <div className="text-xs font-medium text-[#621462] dark:text-purple flex items-center gap-2">
                                    <CalendarDays className="w-3.5 h-3.5 flex-shrink-0" />
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

              {/* Skills Tab */}
              <TabsContent value="skills" className="space-y-6">
                <div className="max-w-6xl mx-auto">
                  <h3 className="text-xl lg:text-2xl font-bold text-center lg:text-left mb-6">
                    What I Use Everyday
                  </h3>
                  
                  {/* Compact Skills Section */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-3 text-center lg:text-left dark:text-[#FE705A] text-purple">
                      Skills
                    </h4>
                    <div className="border-b border-border mb-4"></div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 lg:gap-3">
                      {getData(skillData, "skills").data.map(
                        (item: any, index: number) => {
                          return (
                            <div
                              className="border border-purple/30 dark:border-[#3d0b3d] rounded-full px-2.5 py-1.5 text-center hover:bg-accent hover:border-[#FE705A]/50 transition-all duration-300"
                              key={index}
                            >
                              <div className="text-xs font-medium break-words">{item}</div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>

                  {/* Compact Tools Section */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-center lg:text-left text-purple dark:text-[#FE705A]">
                      Tools
                    </h4>
                    <div className="border-b border-border mb-4"></div>
                    <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 xl:grid-cols-16 gap-3 lg:gap-4 place-items-center">
                      {getData(skillData, "tools").data.map(
                        (item: any, index: any) => {
                          const { imgPath } = item;
                          return (
                            <div key={index} className="p-1.5 rounded-lg hover:bg-accent transition-colors group">
                              <Image
                                src={imgPath}
                                width={32}
                                height={32}
                                className="w-6 h-6 lg:w-8 lg:h-8 group-hover:scale-110 transition-transform duration-300"
                                alt="Tool"
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

              {/* Certifications Tab */}
              <TabsContent value="certifications" className="space-y-6">
                <div className="w-full">
                  <Certifications />
                </div>
              </TabsContent>

              {/* My Pitch Tab */}
              <TabsContent value="pitch" className="space-y-6">
                <div className="max-w-4xl mx-auto text-center">
                  <h3 className="text-xl lg:text-2xl font-bold mb-6">My Pitch</h3>
                  <div className="p-5 lg:p-6 rounded-xl border bg-gradient-to-br from-card/50 to-card border-border/50 hover:border-[#FE705A]/30 transition-all duration-300">
                    <p className="text-sm lg:text-base leading-relaxed text-muted-foreground">
                      Ready to transform your ideas into reality? With over 5 years of experience in full-stack development, 
                      I bring a unique blend of technical expertise and creative problem-solving to every project. 
                      From scalable backend architectures to intuitive user interfaces, I deliver solutions that not only 
                      meet your requirements but exceed your expectations. Let&apos;s build something amazing together.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default About;
