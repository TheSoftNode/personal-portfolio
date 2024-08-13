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
} from "lucide-react";
import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

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
      {
        name: "HTML, CSS, JAVASCRIPT",
      },
      {
        name: "TYPESCRIPT, TAILWIND.CSS, WEBPACK...",
      },
      {
        name: "REACT, NEXTJS, REDUX",
      },
      {
        name: "NODEJS, DOTNET CORE, C#, PYTHON",
      },
      {
        name: "SQL, MYSQL, REDIS, MONGODB, FIREBASE, SQLITE",
      },
      {
        name: "DOCKER, KUBERNETES, MICROSERVICES",
      },
      {
        name: "BASH/PYTHON SCRIPTING, AWS, AUTOMATION, C LANGUAGE",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
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
    <section className="xl:h-[860px] py-16 xl:py-24 sm:px-10 dark:border-y dark:border-y-slate-800">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full sm:flex flex-col md:flex-row xl:gap-7  xl:border dark:border-none ">
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
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Unmatched Service Quality for Over 10 Years
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0 ">
                      I specialize in crafting intuitive websites with
                      cutting-edge technology, delivering dynamic and engaging
                      user experiences.
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
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
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary-second">Language Skill</div>
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
                          className="w-[162px] xl:w-auto data-[state=active]:bg-transparent data-[state=active]:text-[#FE6E58] data-[state=active]:shadow-none"
                          value="experience">
                          <div className="flex gap-x-3 items-center sm:text-[28px] text-[100%]">
                            <Briefcase />
                            <h4 className="capitalize font-medium">
                              {getData(qualificationData, "experience").title}
                            </h4>
                          </div>
                        </TabsTrigger>

                        <TabsTrigger className="w-[162px] xl:w-auto data-[state=active]:bg-transparent data-[state=active]:text-[#FE6E58] data-[state=active]:shadow-none"
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
                        <div className="flex flex-col gap-y-6">
                          <div className="flex gap-x-4 items-center text-[22px] text-purple">
                            {/* <Briefcase /> */}
                            <h4 className="capitalize font-medium">
                              experiences
                            </h4>
                          </div>
                          {/* list */}
                          <div className="flex flex-row gap-x-10 flex-wrap gap-y-14">
                            {getData(qualificationData, "experience").data.map(
                              (item: any, index: number) =>
                              {
                                const { company, role, years } = item;
                                return (
                                  <div className="flex gap-x-8 group" key={index}>
                                    <div className="h-full w-[1px] bg-border relative ml-2">
                                      <div className="w-[11px] h-[11px] rounded-full bg-[#FE6E58] absolute -left-[5px] group-hover:translate-y-[100px] transition-all duration-500"></div>
                                    </div>
                                    <div>
                                      <div className="font-semibold text-xl leading-[26px] mb-4">
                                        {company}
                                      </div>
                                      <div className="text-lg leading-[26px] text-muted-foreground mb-4">
                                        {role}
                                      </div>
                                      <div className="text-base font-medium">
                                        {years}
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="education">
                        {/* education */}
                        <div className="flex flex-col gap-y-6">
                          <div className="flex gap-x-4 items-center text-[22px] text-purple">
                            {/* <GraduationCap size={28} /> */}
                            <h4 className="capitalize font-medium">
                              Education
                            </h4>
                          </div>
                          {/* list */}
                          <div className="flex  flex-row flex-wrap gap-y-16 justify-between">
                            {getData(qualificationData, "education").data.map(
                              (item: any, index: number) =>
                              {
                                const { university, qualification, years } = item;
                                return (
                                  <div className="flex gap-x-8 group" key={index}>
                                    <div className="h-full w-[1px] bg-border relative ml-2">
                                      <div className="w-[11px] h-[11px] rounded-full bg-[#FE6E58] absolute -left-[5px] group-hover:translate-y-[100px] transition-all duration-500"></div>
                                    </div>
                                    <div>
                                      <div className="font-semibold  text-xl leading-[26px] mb-4 flex gap-2">
                                        <School />
                                        {university}
                                      </div>
                                      <div className="text-lg leading-[26px] text-muted-foreground mb-4 flex gap-2">
                                        <ShieldCheck />
                                        {qualification}
                                      </div>
                                      <div className="text-base text-purple font-medium flex gap-2">
                                        <CalendarDays />
                                        {years}
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </div>
                      </TabsContent>

                    </Tabs>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">What I Use Everyday</h3>
                    {/* skills  */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* skill list */}
                      <div>
                        {getData(skillData, "skills").data.map(
                          (item: any, index: number) =>
                          {
                            const { name } = item;
                            return (
                              <div
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                                key={index}
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* tool list  */}
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, "tools").data.map(
                          (item: any, index: any) =>
                          {
                            const { imgPath } = item;
                            return (
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
