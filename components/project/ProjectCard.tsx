import React, { useState } from "react";
import Link from "next/link";
import { Card, CardHeader } from "../ui/card";
import { Link2Icon, XIcon, Github, Clock, Shield, Play } from "lucide-react";

type Props = {
  project: any;
};

const ProjectCard = ({ project }: Props) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showTechModal, setShowTechModal] = useState(false);


  // Function to handle GitHub link click for private repositories
  const handleGitHubClick = (e: React.MouseEvent) => {
    if (!project.github) {
      e.preventDefault();
      setShowPopup(true);
    }
    else {
      window.open(project.github, '_blank');
    }
  };

  // Function to close the popup
  const closePopup = () => {
    setShowPopup(false);
  };

  // Function to close tech modal
  const closeTechModal = () => {
    setShowTechModal(false);
  };

  // Limit tech tags display
  const maxTechTags = 4;
  const visibleTechTags = project.iconLists?.slice(0, maxTechTags) || [];
  const remainingTechCount = (project.iconLists?.length || 0) - maxTechTags;

  return (
    <Card className="group overflow-visible rounded-t-lg relative dark:bg-[#010125] bg-white border border-border/50 hover:border-[#FE705A]/30 transition-all duration-500 hover:shadow-xl flex flex-col h-full">
      <CardHeader className="p-0">
        {/* Enhanced Image Section - Mobile Optimized */}
        <div className="relative h-[160px] sm:h-[180px] md:h-[220px] lg:h-[240px] xl:h-[260px] bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:bg-[110%] xl:dark:bg-work_project_bg_dark xl:bg-no-repeat overflow-hidden rounded-t-lg">
          
          {/* Background Layer */}
          <div className="absolute w-full h-full overflow-hidden dark:bg-[#13162D] rounded-t-lg">
            <img src="/bg.png" alt="bgimg" className="w-full h-full object-cover opacity-30" />
          </div>

          {/* Project Image - Mobile Optimized */}
          <div className="relative w-full h-full flex items-center justify-center p-1 sm:p-2">
            <img
              src={project.image}
              alt={project.name}
              className="w-[99%] sm:w-[98%] md:w-[96%] lg:w-[96%] xl:w-[94%] h-[96%] sm:h-[95%] md:h-[92%] lg:h-[92%] xl:h-[90%] object-fit rounded-lg shadow-lg group-hover:scale-[1.02] transition-transform duration-700"
            />
          </div>

          {/* Action Buttons - Mobile Responsive */}
          <div className="absolute inset-0 flex items-center justify-center gap-1.5 sm:gap-10 md:gap-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
            {project.link ? (
              <Link
                href={project.link}
                target="_blank"
                className="bg-black/80 backdrop-blur-sm w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex justify-center items-center scale-0 group-hover:scale-100 transition-all duration-300 hover:bg-[#FE705A] border border-white/10"
              >
                <Link2Icon className="text-white w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </Link>
            ) : (
              <div className="bg-amber-600/90 backdrop-blur-sm w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex justify-center items-center scale-0 group-hover:scale-100 transition-all duration-300 border border-white/10">
                <Clock className="text-white w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </div>
            )}
            
            <button
              onClick={handleGitHubClick}
              className="bg-black/80 backdrop-blur-sm w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex justify-center items-center scale-0 group-hover:scale-100 transition-all duration-300 hover:bg-slate-700 border border-white/10"
            >
              {project.github ? (
                <Github className="text-white w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              ) : (
                <Shield className="text-white w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              )}
            </button>
          </div>
        </div>
      </CardHeader>

      {/* Mobile-First Content Section - Fixed Height */}
      <div className="flex flex-col p-3 sm:p-4 md:p-5 lg:p-6 flex-1">
        {/* Project Title with Status Badge - Mobile Optimized */}
        <div className="mb-2 sm:mb-3 md:mb-4 flex items-start justify-between gap-2 sm:gap-3">
          <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-foreground capitalize leading-tight group-hover:text-[#FE705A] transition-colors duration-500 flex-1 min-w-0">
            {project.name}
          </h4>
          
          {/* Status Badge - Mobile Responsive */}
          {project.status && (
            <span className={`px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 md:py-1.5 text-[9px] sm:text-[10px] md:text-xs font-medium rounded sm:rounded-md backdrop-blur-sm border shadow-sm flex-shrink-0 ${
              project.status === "Completed" 
                ? "bg-emerald-500/15 text-emerald-600 border-emerald-500/25 dark:text-emerald-400 dark:border-emerald-400/25" :
              project.status === "In Progress" 
                ? "bg-[#FE705A]/15 text-[#FE705A] border-[#FE705A]/25" :
              project.status === "Planning" 
                ? "bg-blue-500/15 text-blue-600 border-blue-500/25 dark:text-blue-400 dark:border-blue-400/25" :
                "bg-slate-500/15 text-slate-600 border-slate-500/25 dark:text-slate-400 dark:border-slate-400/25"
            }`}>
              {project.status}
            </span>
          )}
        </div>

        {/* Description - Mobile Optimized with Fixed Height */}
        <div className="mb-3 sm:mb-4 md:mb-5 flex-1">
          <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed text-justify line-clamp-3 sm:line-clamp-4">
            {project.description}
          </p>
        </div>

        {/* Video Demo Button - Mobile Responsive */}
        {project.videoDemo && (
          <div className="mb-3 sm:mb-4 md:mb-5">
            <Link
              href={project.videoDemo}
              target="_blank"
              className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 md:px-3 py-[2px]  sm:py-[5px] bg-gradient-to-r from-[#FE705A]/10 to-amber-500/10 dark:from-[#FE705A]/15 dark:to-amber-400/15 border border-[#FE705A]/30 dark:border-[#FE705A]/40 rounded-md sm:rounded-lg hover:from-[#FE705A]/20 hover:to-amber-500/20 dark:hover:from-[#FE705A]/25 dark:hover:to-amber-400/25 hover:border-[#FE705A]/50 dark:hover:border-[#FE705A]/60 transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-lg backdrop-blur-sm"
            >
              <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 text-[#FE705A] dark:text-[#FE705A] fill-current" />
              <span className="text-[9px] sm:text-[10px] md:text-xs font-semibold text-[#FE705A] dark:text-[#FE705A] tracking-wide">
                Watch Demo
              </span>
            </Link>
          </div>
        )}

        {/* Not Deployed Indicator - Mobile Responsive */}
        {!project.link && (
          <div className="mb-3 sm:mb-4 md:mb-5">
            <div className="inline-flex items-center gap-1 sm:gap-1.5 md:gap-2 px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 bg-amber-50/80 dark:bg-amber-900/20 border border-amber-200/60 dark:border-amber-700/40 rounded sm:rounded-lg">
              <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 text-amber-600 dark:text-amber-400" />
              <span className="text-[9px] sm:text-[10px] md:text-xs font-medium text-amber-700 dark:text-amber-300">
                Not deployed yet
              </span>
            </div>
          </div>
        )}

        {/* Technologies - Fixed at Bottom */}
        <div className="mt-auto">
          <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2">
            {visibleTechTags.map((tech: string, index: number) => (
              <span
                key={index}
                className="px-1.5 sm:px-2 md:px-2.5 lg:px-3 py-0.5 sm:py-1 md:py-1.5 text-[9px] sm:text-[10px] md:text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded sm:rounded-md md:rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 hover:border-[#FE705A]/30 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
            
            {/* More indicator */}
            {remainingTechCount > 0 && (
              <button
                onClick={() => setShowTechModal(true)}
                className="px-1.5 sm:px-2 md:px-2.5 lg:px-3 py-0.5 sm:py-1 md:py-1.5 text-[9px] sm:text-[10px] md:text-xs font-medium bg-slate-600/10 dark:bg-slate-400/10 text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-600 rounded sm:rounded-md md:rounded-lg hover:bg-slate-600/20 dark:hover:bg-slate-400/20 hover:border-slate-400 dark:hover:border-slate-500 transition-all duration-300"
              >
                +{remainingTechCount} more
              </button>
            )}
          </div>
        </div>
      </div>

      

      {showPopup && (
      <div className="absolute inset-x-0 top-0 rounded-t-lg rounded-b-[30px] bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-2 min-h-full">
        <div className="bg-white dark:bg-[#010125] rounded-xl w-full max-w-[280px] sm:max-w-xs relative shadow-2xl border border-slate-200/50 dark:border-slate-700/30 overflow-hidden mx-auto">
          
          {/* Compact Header */}
          <div className="px-3 py-2 border-b border-slate-200/50 dark:border-slate-700/30 bg-amber-50/30 dark:bg-[#13162D]/50">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center border border-amber-200/50 dark:border-amber-700/30">
                <Shield className="w-3 h-3 text-amber-600 dark:text-amber-400" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-xs font-semibold text-slate-900 dark:text-white">
                  Private Repository
                </h3>
                <p className="text-[10px] text-amber-600 dark:text-amber-400">
                  Confidential Project
                </p>
              </div>
              <button
                onClick={closePopup}
                className="p-1 hover:bg-slate-100/80 dark:hover:bg-slate-700/50 rounded-lg transition-all duration-200"
              >
                <XIcon className="w-3 h-3 text-slate-500 dark:text-slate-400 hover:text-[#FE705A] transition-colors" />
              </button>
            </div>
          </div>

          {/* Compact Content */}
          <div className="px-3 py-2 relative">
            <div className="absolute inset-0 opacity-20 dark:opacity-30">
              <img src="/bg.png" alt="bgimg" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-2 relative">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-[10px]">
                This repository contains proprietary code and confidential client information that cannot be shared publicly due to non-disclosure agreements.
              </p>
              
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-2 border border-slate-200 dark:border-slate-700">
                <p className="text-[10px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  For inquiries about this project or to discuss similar work, please feel free to contact me directly. I can provide additional details about the technologies used and project outcomes within confidentiality constraints.
                </p>
              </div>
            </div>
          </div>

          {/* Compact Footer */}
          <div className="px-3 py-2 bg-slate-50/80 dark:bg-slate-800/50 border-t border-slate-200/50 dark:border-slate-700/30">
            <button
              onClick={closePopup}
              className="w-full px-3 py-1.5 bg-[#FE705A] hover:bg-[#FE705A]/90 text-white font-medium rounded-lg transition-all duration-300 text-xs hover:scale-[1.02] shadow-lg"
            >
              Understood
            </button>
          </div>
        </div>
      </div>
      )}




      {showTechModal && (
      <div className="absolute rounded-t-lg rounded-b-[30px] inset-x-0 top-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-2 min-h-full">
        <div className="bg-white dark:bg-[#010125] rounded-xl w-full max-w-[280px] sm:max-w-xs relative shadow-2xl border border-slate-200/50 dark:border-slate-700/30 overflow-hidden mx-auto">
          
          {/* Compact Header */}
          <div className="px-3 py-2 border-b border-slate-200/50 dark:border-slate-700/30 bg-slate-50 dark:bg-[#13162D]/50">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-semibold text-[#FE705A]">
                All Technologies
              </h3>
              <button
                onClick={closeTechModal}
                className="p-1 hover:bg-white dark:hover:bg-slate-700/50 rounded-lg transition-all duration-200 hover:scale-105"
              >
                <XIcon className="w-3 h-3 text-slate-500 dark:text-slate-400 hover:text-[#FE705A] transition-colors" />
              </button>
            </div>
          </div>

          {/* Compact Content with background pattern */}
          <div className="px-3 py-2 max-h-40 overflow-y-auto relative">
            <div className="absolute inset-0 opacity-20 dark:opacity-30">
              <img src="/bg.png" alt="bgimg" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-wrap gap-1 relative">
              {project.iconLists?.map((tech: string, index: number) => (
                <span
                  key={index}
                  className="px-2 py-1 text-[10px] font-medium bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-600/40 rounded-md hover:bg-[#FE705A]/10 hover:border-[#FE705A]/40 hover:text-[#FE705A] dark:hover:text-[#FE705A] transition-all duration-300 hover:scale-105 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      )}
    </Card>
  );
};

export default ProjectCard;
