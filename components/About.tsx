import
{
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Experience from "./Experience";

type Props = {};

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Theophilus Uche",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "07036563954",
  },
  {
    icon: <MailIcon size={20} />,
    text: "Theo.uche2023@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 22 June, 1994",
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

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "ALX",
        qualification: "Software Engineering",
        years: "2023 - 2024",
      },
      {
        university: "ALX",
        qualification: "AiCe",
        years: "2023 - 2024",
      },
      {
        university: "ALX - ExploreAi",
        qualification: "Data Scientist",
        years: "2023 - 2024",
      },
      {
        university: "Federal University of Technology, Owerri",
        qualification: "Bachelor of Engineering (2nd class upper)",
        years: "2012 - 2018",
      },
      {
        university: "Coursera - coursera.org",
        qualification: "Google IT support certification",
        years: "2022 - 2024",
      },
      {
        university: "Coursera - coursera.org",
        qualification: "Google IT Automation with python",
        years: "2023 - 2024",
      },
      {
        university: "NIIT - Cisco",
        qualification: "Cisco Certified Network Associate",
        years: "2022 - 2024",
      },
    ],
  },

  {
    title: "experience",
    data: [
      {
        company: "Benid Industries LTD",
        role: "Web Developer",
        years: "2018 - 2019",
      },
      {
        company: "Integrated Power Technology",
        role: "Fullstack Developer",
        years: "2021 - 2023",
      },
      {
        company: "Upwork",
        role: "Freelancer - software Developer",
        years: "2020 - 2024",
      },
      {
        company: "ALX",
        role: "Software Engineering intern",
        years: "2023 - Present",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      "HTML", "CSS", "JAVASCRIPT",
      "TYPESCRIPT", "TAILWIND.CSS", "WEBPACK...",
      "REACT", "NEXTJS", "REDUX", "DATA STRUCTURES",
      "ALGORITHMS", "DATA SCIENCE", "CCNA", "IT SUPPORT",
      "AI", "PROMPT ENGINEERING",
      "NODEJS", "DOTNETCORE", "C#", "PYTHON",
      "SQL", "MYSQL", "REDIS", "MONGODB", "FIREBASE", "SQLITE",
      "DOCKER", "KUBERNETES", "MICROSERVICES", "REDIS", "NESTJS",
      "BASH/PYTHON SCRIPTING", "AWS", "AUTOMATION", "C LANGUAGE",
      "and even more"
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vstudio.svg",
      },
      {
        imgPath: "/about/aws.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/docker.svg",
      },
      {
        imgPath: "/about/trello.svg",
      },
      {
        imgPath: "/about/jira.svg",
      },
      {
        imgPath: "/about/kubernetes.svg",
      },
      {
        imgPath: "/about/postman.svg",
      },
      {
        imgPath: "/about/github.svg",
      },
      {
        imgPath: "/about/prometheus.svg",
      },
      {
        imgPath: "/about/grafana.svg",
      },
      {
        imgPath: "/about/confluence.svg",
      },
      {
        imgPath: "/about/firebase.svg",
      },
      {
        imgPath: "/about/mongodb.svg",
      },
      {
        imgPath: "/about/postgres.svg",
      },
      {
        imgPath: "/about/leetcode.svg",
      },
      {
        imgPath: "/about/more.svg",
      },
    ],
  },
];

const About = (props: Props) =>
{
  const getData = (arr: any, title: string) =>
  {
    return arr.find((item: any) => item.title === title);
  };
  return (
    <section className="xl:h-[860px]  dark:pt-10 pb-10 xl:py-24 md:px-10 px-3">
      <div className="container xl:w-full">
        <h2 className="section-title mb-10 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
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
                <TabsTrigger className="w-[162px] xl:w-auto" value="certifications">
                  Certifications
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center">
                    <h3 className="h4 mb-4">
                      Delivering Excellence in Software Engineering for Over 5 Years
                    </h3>
                    <p className="subtitle text-[90%] mb-8 lgm:max-w-[70%] mx-auto  text-justify ">
                      I specialize in building powerful backend systems with cutting-edge technology
                      while efficiently handling frontend development, delivering seamless and
                      high-performance digital solutions. <br />
                      Over the last five years, I’ve honed my skills across various platforms
                      and technologies, consistently delivering secure, scalable, and efficient systems that meet
                      the evolving needs of clients and users.
                    </p>
                    {/* icons */}
                    <div className="grid md:grid-cols-2 max-w-2xl mx-auto gap-4 mb-12">
                      {infoData.map((item: any, index: number) =>
                      {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-[#FE6E58]">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages */}
                    <div className="flex flex-col gap-y-4">
                      <div className="text-[#FE6E58]">Language Skill</div>
                      <div className="border-b border-border">
                        <div>English</div>
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
                              <div className="flex flex-row gap-x-10 flex-wrap gap-y-14 mt-10">
                                {getData(qualificationData, "experience").data.map(
                                  (item: any, index: number) =>
                                  {
                                    const { company, role, years } = item;
                                    return (
                                      <div className="flex gap-x-8 group" key={index}>
                                        <div className="h-full w-[1px] bg-border relative ml-2">
                                          <div className="w-[11px] h-[11px] rounded-full bg-[#FE705A] absolute -left-[5px] group-hover:translate-y-[100px] transition-all duration-500"></div>
                                        </div>
                                        <div>
                                          <div className="font-semibold text-xl leading-[26px] mb-4 flex gap-2">
                                            <Factory />
                                            {company}
                                          </div>
                                          <div className="text-lg leading-[26px] text-muted-foreground mb-4 flex gap-2">
                                            <BriefcaseBusiness />
                                            {role}
                                          </div>
                                          <div className="text-base font-medium text-[#621462] dark:text-purple flex gap-2">
                                            <CalendarDays />
                                            {years}
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
                              <div className="flex  flex-row flex-wrap gap-y-16 mt-10 gap-x-10 md:gap-x-4 md:justify-between">
                                {getData(qualificationData, "education").data.map(
                                  (item: any, index: number) =>
                                  {
                                    const { university, qualification, years } = item;
                                    return (
                                      <div className="flex gap-x-8 group" key={index}>
                                        <div className="h-full w-[1px] bg-border relative ml-2">
                                          <div className="w-[11px] h-[11px] rounded-full bg-[#FE705A] absolute -left-[5px] group-hover:translate-y-[100px] transition-all duration-500"></div>
                                        </div>
                                        <div>
                                          <div className="font-semibold text-xl leading-[26px] mb-4 flex gap-2">
                                            <School />
                                            {university}
                                          </div>
                                          <div className="text-lg leading-[26px] text-muted-foreground mb-4 flex gap-2">
                                            <ShieldCheck />
                                            {qualification}
                                          </div>
                                          <div className="text-base text-[#621462] dark:text-purple font-medium flex gap-2">
                                            <CalendarDays />
                                            {years}
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
                          (item: any, index: number) =>
                          {
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
                          (item: any, index: any) =>
                          {
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
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
