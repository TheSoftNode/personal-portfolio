"use client";

import React, { useState, useEffect } from "react";
import {
  Tabs,
  TabsList,
  TabsContent,
  TabsTrigger,
} from "../../components/ui/tabs";
import ProjectCard from "@/components/project/ProjectCard";
import { projectData } from "@/data/data";

// Extract all categories from projects and remove duplicates
const getAllCategories = () => {
  let allCategories = ["all projects"];

  projectData.forEach((project) => {
    // Check if category is an array
    if (Array.isArray(project.category)) {
      project.category.forEach((cat) => {
        if (!allCategories.includes(cat)) {
          allCategories.push(cat);
        }
      });
    } else {
      // For backward compatibility with string categories
      if (!allCategories.includes(project.category)) {
        allCategories.push(project.category);
      }
    }
  });

  return allCategories;
};

type Props = {};

const Projects = (props: Props) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [category, setCategory] = useState("all projects");
  const [filteredProjects, setFilteredProjects] = useState(projectData);

  // Initialize categories
  useEffect(() => {
    setCategories(getAllCategories());
  }, []);

  // Filter projects when category changes
  useEffect(() => {
    if (category === "all projects") {
      setFilteredProjects(projectData);
    } else {
      const filtered = projectData.filter((project) => {
        // Check if project.category is an array
        if (Array.isArray(project.category)) {
          return project.category.includes(category);
        } else {
          // For backward compatibility with string categories
          return project.category === category;
        }
      });
      setFilteredProjects(filtered);
    }
  }, [category]);

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 mt-14 xl:mb-48">
          <div className="mb-4 sm:mb-6 lg:mb-8">
            <TabsList className="w-full max-w-sm sm:max-w-2xl lg:max-w-none mx-auto flex flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-1 sm:gap-1.5 lg:gap-2 h-auto p-0 sm:p-0 lg:p-0 bg-muted/50 border border-border/30 rounded-lg sm:rounded-xl backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow duration-300">
              {categories.map((cat: string, index: number) => {
                return (
                  <TabsTrigger
                    onClick={() => setCategory(cat)}
                    value={cat}
                    key={index}
                    className="px-2 sm:px-3 lg:px-4 xl:px-6 py-0 sm:py-0 lg:py-0 text-xs sm:text-sm lg:text-base xl:text-lg font-medium whitespace-nowrap capitalize data-[state=active]:bg-[#FE705A] data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-accent hover:text-foreground transition-all duration-300 rounded-md sm:rounded-lg data-[state=active]:scale-[1.02] hover:scale-[1.01] border-0 data-[state=active]:border data-[state=active]:border-[#FE705A]/20 flex-1 lg:flex-auto lg:min-w-0 text-center"
                  >
                    <span className="truncate lg:whitespace-nowrap">
                      {cat.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project: any, index: number) => {
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
