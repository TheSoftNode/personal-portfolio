"use client";

import React, { useState } from "react";
import
{
  Tabs,
  TabsList,
  TabsContent,
  TabsTrigger,
} from "../../components/ui/tabs";
import ProjectCard from "@/components/project/ProjectCard";

const projectData = [
  {
    image: "/p1.svg",
    category: "react js",
    name: "Nexa Website",
    description: `Work Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit. Quidem, at eveniet distinctio consequuntur placeat 
        `,
    link: "/",
    github: "/",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"]
  },

  {
    image: "/work/4.png",
    category: "next js",
    name: " solotas Website",
    description: `Work Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit. Quidem, at eveniet distinctio consequuntur placeat 
        `,
    link: "/",
    github: "/",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
  },
  {
    image: "/work/2.png",
    category: "next js",
    name: "Nova Website",
    description: `Work Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit. Quidem, at eveniet distinctio consequuntur placeat 
        .`,
    link: "/",
    github: "/",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  },
  {
    image: "/work/1.png",
    category: "react js",
    name: "crypto Website",
    description: `Work Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit. Quidem, at eveniet distinctio consequuntur placeat 
        .`,
    link: "/",
    github: "/",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
  },
  {
    image: "/work/3.png",
    category: "react js",
    name: "Nexa Website",
    description: `Work Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit. Quidem, at eveniet distinctio consequuntur placeat 
        .`,
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "react js",
    name: "Nexa Website",
    description: `Work Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit. Quidem, at eveniet distinctio consequuntur placeat 
        .`,
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "react js",
    name: "Nexa Website",
    description: `Work Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit. Quidem, at eveniet distinctio consequuntur placeat 
        .`,
    link: "/",
    github: "/",
  },

  {
    image: "/work/1.png",
    category: "react js",
    name: "Nexa Website",
    description: `Work Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit. Quidem, at eveniet distinctio consequuntur placeat 
       .`,
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "react js",
    name: "Nexa Website",
    description: `Work Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit. Quidem, at eveniet distinctio consequuntur placeat 
        .`,
    link: "/",
    github: "/",
  },
];


// remove category duplicates
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const uniqueNum = uniqueCategories.length;

type Props = {};

const Projects = (props: Props) =>
{
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) =>
  {
    // if category is `all projects` return all projects, else filter by category
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        {/* <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2> */}
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 mt-14 xl:mb-48">
          <TabsList
            className={`w-full grid h-full md:grid-cols-${uniqueNum}  lg:max-w-[780px] mb-12 mx-auto md:border dark:border-none`}
          >
            {categories.map((category: any, index: number) =>
            {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project: any, index: number) =>
            {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
