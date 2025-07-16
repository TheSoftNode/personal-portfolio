"use client";

import React, { useState } from "react";
import { workExperience } from "@/data/data";
import { Button } from "../ui/MovingBorders";
import { Eye, X } from "lucide-react";

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (experience: any) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedExperience(null);
  };

  return (
    <div className="w-full">
      {/* Hover Hint */}
      <div className="text-center mb-6">
        <p className="text-sm text-muted-foreground">
          💡 Hover over each card to view detailed information
        </p>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-4">
        {workExperience.map((card) => (
          <div key={card.id} className="relative group h-[380px] w-full">
            <Button
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.5rem"
              containerClassName="h-full w-full"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.5rem * 0.96)`,
              }}
              className="flex-1 text-white dark:text-white border-neutral-200 dark:border-slate-800 h-full w-full !bg-transparent"
            >
              <div className="flex flex-col items-center p-4 lg:p-6 gap-3 h-full justify-between">
                {/* Company Logo */}
                <div className="flex-shrink-0">
                  <img
                    src={card.thumbnail}
                    alt={card.thumbnail}
                    className="w-12 h-12 lg:w-16 lg:h-16 object-contain rounded-lg"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 text-center flex flex-col justify-center">
                  <h1 className="text-base lg:text-lg font-bold leading-tight dark:text-purple mb-2">
                    {card.title}
                  </h1>
                  <p className="text-white-100 text-xs lg:text-sm leading-relaxed line-clamp-3 opacity-80">
                    {card.desc}
                  </p>
                </div>

                {/* View More Button */}
                <button
                  onClick={() => openModal(card)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#FE705A] hover:bg-[#FE705A]/90 text-white text-xs lg:text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group-hover:translate-y-0 translate-y-2 opacity-0 group-hover:opacity-100"
                >
                  <Eye className="w-3 h-3 lg:w-4 lg:h-4" />
                  View Details
                </button>
              </div>
            </Button>
          </div>
        ))}
      </div>


      {/* Spectacular Modal */}
      {isModalOpen && selectedExperience && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 dark:bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-3xl max-h-[85vh] overflow-hidden animate-in fade-in zoom-in-95 duration-300">
            {/* Modal Content */}
            <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-xl shadow-2xl border border-gray-200/50 dark:border-slate-700/50 overflow-hidden flex flex-col h-full max-h-[85vh] backdrop-blur-xl">
              
              {/* Header - Fixed */}
              <div className="relative p-4 bg-gradient-to-r from-[#FE705A]/5 via-purple/5 to-[#FE705A]/5 dark:from-[#FE705A]/10 dark:to-purple/10 border-b border-gray-200/50 dark:border-slate-700/50 flex-shrink-0">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white/80 dark:bg-white/10 rounded-lg p-2 shadow-sm border border-gray-200/50 dark:border-white/10">
                      <img
                        src={selectedExperience.thumbnail}
                        alt={selectedExperience.thumbnail}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                      {selectedExperience.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FE705A]/10 text-[#FE705A] rounded-full text-xs font-medium border border-[#FE705A]/20">
                        <div className="w-1.5 h-1.5 bg-[#FE705A] rounded-full animate-pulse"></div>
                        Professional Experience
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple/10 text-purple rounded-full text-xs font-medium border border-purple/20">
                        <div className="w-1.5 h-1.5 bg-purple rounded-full"></div>
                        Career Growth
                      </div>
                    </div>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-3 p-1.5 bg-white/90 dark:bg-slate-800/90 hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-600 dark:text-white rounded-lg transition-all duration-300 group shadow-lg hover:shadow-xl border border-gray-200/50 dark:border-slate-600/50 z-10"
                >
                  <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-4">
                <div className="space-y-6">
                  
                  {/* Main Description */}
                  <div className="space-y-3">
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                      <div className="w-1 h-4 bg-gradient-to-b from-[#FE705A] to-purple rounded-full"></div>
                      Experience Overview
                    </h3>
                    <div className="bg-gradient-to-br from-white to-gray-50/50 dark:from-slate-800/50 dark:to-slate-700/30 rounded-lg p-4 border border-gray-200/50 dark:border-slate-600/30 shadow-sm">
                      <p className="text-gray-700 dark:text-slate-300 leading-relaxed whitespace-pre-line text-sm">
                        {selectedExperience.desc}
                      </p>
                    </div>
                  </div>

                  {/* Key Achievements Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    
                    {/* Professional Highlights */}
                    <div className="space-y-3">
                      <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                        <div className="w-1 h-4 bg-gradient-to-b from-purple to-[#FE705A] rounded-full"></div>
                        Key Highlights
                      </h3>
                      <div className="space-y-2">
                        {[
                          "Led innovative technical solutions",
                          "Collaborated with cross-functional teams", 
                          "Delivered high-impact projects",
                          "Mentored junior team members"
                        ].map((highlight, index) => (
                          <div key={index} className="flex items-start gap-2 p-3 bg-gradient-to-r from-white to-gray-50/50 dark:from-slate-800/30 dark:to-slate-700/20 rounded-lg border border-gray-200/30 dark:border-slate-600/20 hover:shadow-md transition-all duration-300 group">
                            <div className="w-1.5 h-1.5 bg-[#FE705A] rounded-full mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                            <span className="text-xs text-gray-700 dark:text-slate-300 font-medium">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skills & Impact */}
                    <div className="space-y-3">
                      <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                        <div className="w-1 h-4 bg-gradient-to-b from-[#FE705A] to-purple rounded-full"></div>
                        Skills & Impact
                      </h3>
                      <div className="bg-gradient-to-br from-[#FE705A]/5 via-purple/5 to-[#FE705A]/5 dark:from-[#FE705A]/10 dark:via-purple/10 dark:to-[#FE705A]/10 rounded-lg p-4 border border-[#FE705A]/20 dark:border-[#FE705A]/20">
                        <p className="text-gray-700 dark:text-slate-300 leading-relaxed mb-3 text-xs">
                          This experience significantly contributed to my professional growth, enhancing my technical expertise and leadership capabilities in modern software development.
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {["Leadership", "Innovation", "Technical Excellence", "Team Building"].map((skill, index) => (
                            <span key={index} className="px-2 py-1 bg-white/80 dark:bg-slate-700/50 border border-gray-200/50 dark:border-slate-600/30 rounded-full text-xs font-medium text-gray-700 dark:text-slate-300 hover:bg-[#FE705A]/10 dark:hover:bg-[#FE705A]/20 transition-colors duration-300">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Professional Journey Stats */}
                  <div className="bg-gradient-to-r from-gray-50 to-white dark:from-slate-800/50 dark:to-slate-700/30 rounded-lg p-4 border border-gray-200/50 dark:border-slate-600/30 shadow-sm">
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <div className="w-1 h-4 bg-gradient-to-b from-purple to-[#FE705A] rounded-full"></div>
                      Professional Impact
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="text-center p-3 bg-white dark:bg-slate-700/50 rounded-lg border border-gray-200/30 dark:border-slate-600/20 hover:shadow-lg transition-all duration-300 group">
                        <div className="text-2xl font-bold text-[#FE705A] mb-1 group-hover:scale-110 transition-transform duration-300">20+</div>
                        <div className="text-xs text-gray-600 dark:text-slate-400 font-medium">Projects Completed</div>
                      </div>
                      <div className="text-center p-3 bg-white dark:bg-slate-700/50 rounded-lg border border-gray-200/30 dark:border-slate-600/20 hover:shadow-lg transition-all duration-300 group">
                        <div className="text-2xl font-bold text-purple mb-1 group-hover:scale-110 transition-transform duration-300">5+</div>
                        <div className="text-xs text-gray-600 dark:text-slate-400 font-medium">Years Experience</div>
                      </div>
                      <div className="text-center p-3 bg-white dark:bg-slate-700/50 rounded-lg border border-gray-200/30 dark:border-slate-600/20 hover:shadow-lg transition-all duration-300 group">
                        <div className="text-2xl font-bold text-[#FE705A] mb-1 group-hover:scale-110 transition-transform duration-300">10+</div>
                        <div className="text-xs text-gray-600 dark:text-slate-400 font-medium">Team Collaborations</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer - Fixed */}
              <div className="border-t border-gray-200/50 dark:border-slate-700/50 p-4 bg-gradient-to-r from-gray-50/50 to-white/50 dark:from-slate-800/50 dark:to-slate-700/30 flex-shrink-0">
                <div className="flex justify-center">
                  <button
                    onClick={closeModal}
                    className="px-6 py-2 bg-gradient-to-r from-[#FE705A] to-purple hover:from-[#FE705A]/90 hover:to-purple/90 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-[#FE705A]/20 text-sm"
                  >
                    Close Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;