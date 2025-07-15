import React, { useState } from "react";
import Link from "next/link";
import { Card, CardHeader } from "../ui/card";
import { Link2Icon, XIcon } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

type Props = {
  project: any;
};

const ProjectCard = ({ project }: Props) =>
{
  const [showPopup, setShowPopup] = useState(false);

  // Function to handle GitHub link click for private repositories
  const handleGitHubClick = (e: React.MouseEvent) =>
  {
    if (!project.github)
    {
      e.preventDefault();
      setShowPopup(true);
    }
  };

  // Function to close the popup
  const closePopup = () =>
  {
    setShowPopup(false);
  };

  return (
    <Card className="group overflow-hidden relative dark:bg-[#010125] flex flex-col h-full">
      <CardHeader className="p-0 ">
        {/* image */}
        <div className="relative h-[200px] lg:h-[250px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:bg-[110%] xl:dark:bg-work_project_bg_dark xl:bg-no-repeat overflow-hidden">
          {/* <div className="relative h-[250px] flex items-center justify-center"> */}
          <div
            className="absolute w-full h-full overflow-hidden lg:rounded-ss-3xl dark:bg-[#13162D]"
          >
            <img src="/bg.png" alt="bgimg" />
          </div>

          <img
            src={project.image}
            alt="cover"
            className="absolute bottom-0 w-[90%] h-[90%] lg:w-[90%] lg:h-[85%]"
          />
          {/* btns links*/}
          <div className="flex gap-x-8">
            {project.link ? (
              <Link
                href={project.link}
                target="_blank"
                className="bg-black-100 w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
              >
                <Link2Icon className="text-white" />
              </Link>
            ) : (
              <div className="bg-amber-600 w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
            )}
            <Link
              href={project.github || "#"}
              onClick={handleGitHubClick}
              target="_blank"
              className="bg-black-100 w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <GitHubLogoIcon className="text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="flex-1 flex flex-col h-full px-8 py-8">
        <div className="flex justify-between items-center mb-1">
          <h4 className="h4 capitalize">{project.name}</h4>
          {project.status && (
            <span className={`px-3 py-1 text-sm rounded-full ${project.status === "Completed" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" :
              project.status === "In Progress" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" :
                project.status === "Planning" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" :
                  "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
              }`}>
              {project.status}
            </span>
          )}
        </div>

        <div className="flex flex-col flex-grow">
          <p className="text-muted-foreground text-base lg:text-lg text-justify mb-4">{project.description}</p>

          {!project.link && (
            <div className="mb-4">
              <span className="inline-flex items-center gap-1 px-3 py-1 text-sm bg-amber-100 text-amber-800 dark:bg-amber-900/70 dark:text-amber-200 rounded-full border border-amber-200 dark:border-amber-800 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-clock">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Not deployed yet
              </span>
            </div>
          )}
        </div>

        {/* Technologies section - now positioned at the bottom with mt-auto */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.iconLists && project.iconLists.map((tech: string, index: number) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Popup for private repositories */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md relative">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <XIcon size={20} />
            </button>
            <h3 className="text-xl font-bold mb-2">Private Repository</h3>
            <p className="text-gray-700 dark:text-gray-300">
              This repository is confidential and private. The client has requested that the source code not be shared publicly.
            </p>
            <button
              onClick={closePopup}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </Card>
  );
};

export default ProjectCard;