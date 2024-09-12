import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

type Props = {
  project: any;
};

const ProjectCard = ({ project }: Props) =>
{
  return (
    <Card className="group overflow-hidden relative dark:bg-[#010125]">
      <CardHeader className="p-0 ">
        {/* image */}
        <div className="relative h-[200px] lg:h-[250px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:bg-[110%] xl:dark:bg-work_project_bg_dark xl:bg-no-repeat overflow-hidden">
        {/* <div className="relative h-[250px] flex items-center justify-center"> */}
          <div
            className="absolute w-full h-full overflow-hidden lg:rounded-ss-3xl dark:bg-[#13162D]"
            // style={{ backgroundColor: "#13162D" }}
          >
            <img src="/bg.png" alt="bgimg" />
          </div>

          <img
            src={project.image}
            alt="cover"
            className="absolute bottom-0 w-[80%] h-[90%] lg:w-[75%] lg:h-[85%]"
          />
          {/* btns links*/}
          <div className="flex gap-x-4">
            <Link
              href={project.link}
              className="bg-black-100 w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Link2Icon className="text-white" />
            </Link>
            <Link
              href={project.github}
              className="bg-black-100  w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <GitHubLogoIcon className="text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full flex flex-col gap-y-4 px-8 py-8">

        {/* <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge> */}
        <h4 className="h4 mb-1 capitalize">{project.name}</h4>
        <p className="text-muted-foreground text-base lg:text-lg text-justify">{project.description}</p>

        <div className="flex items-center justify-center mt-2 mb-1">
          <div className="flex items-center">
            {project.iconLists.map((icon: any, index: number) => (
              <div
                key={index}
                className="border border-white/[.2] rounded-full bg-black-100 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{
                  transform: `translateX(-${5 * index + 2}px)`,
                }}
              >
                <img src={icon} alt="icon5" className="p-2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
