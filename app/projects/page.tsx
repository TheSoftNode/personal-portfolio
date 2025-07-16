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
          <TabsList
            className="w-full flex flex-wrap justify-center gap-2 mb-12 mx-auto"
          >
            {categories.map((cat: string, index: number) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(cat)}
                  value={cat}
                  key={index}
                  className="capitalize px-4 py-2 text-sm sm:text-base whitespace-nowrap"
                >
                  {cat}
                </TabsTrigger>
              );
            })}
          </TabsList>
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
