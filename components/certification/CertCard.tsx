import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Card, CardHeader } from "../ui/card";
import { Download, Eye, X, ExternalLink } from "lucide-react";

type Props = {
    cert: any;
};

const CertCard = ({ cert }: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement | null>(null);

    const openModal = () => {
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    // Close modal when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                closeModal();
            }
        };

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };

        if (isModalOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("keydown", handleEscape);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = 'auto';
        };
    }, [isModalOpen]);

    return (
        <Card className="group overflow-hidden border border-border/50 hover:border-[#FE705A]/30 dark:bg-[#010125] bg-white transition-all duration-500 hover:shadow-xl hover:shadow-[#FE705A]/5 w-full flex flex-col h-full">
            <CardHeader className="p-0">
                {/* Enhanced Image Section */}
                <div className="relative h-[180px] sm:h-[200px] lg:h-[220px] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-900 overflow-hidden rounded-t-lg">
                    {/* Certificate Image - Fully Visible and Relaxed */}
                    <div className="w-full h-full flex items-center justify-center p-3">
                        <img
                            src={cert.image}
                            alt={cert.name}
                            className="w-[95%] h-[90%] object-fit transition-transform duration-700 group-hover:scale-[1.02] rounded-lg shadow-md"
                        />
                    </div>
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Action Buttons */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <a
                            href={cert.link}
                            download
                            className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm w-12 h-12 rounded-full flex justify-center items-center scale-0 group-hover:scale-100 transition-all duration-300 hover:bg-[#FE705A] hover:text-white shadow-lg border border-white/20"
                        >
                            <Download className="w-5 h-5" />
                        </a>
                        <button
                            onClick={openModal}
                            className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm w-12 h-12 rounded-full flex justify-center items-center scale-0 group-hover:scale-100 transition-all duration-300 hover:bg-purple hover:text-white shadow-lg border border-white/20"
                        >
                            <Eye className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Completion Badge */}
                    <div className="absolute top-3 right-3">
                        <span className="px-2 py-1 text-xs font-semibold bg-emerald-500/90 text-white rounded-full backdrop-blur-sm border border-emerald-400/50 shadow-lg">
                            {cert.level}
                        </span>
                    </div>
                </div>
            </CardHeader>

            {/* Enhanced Content Section */}
            <div className="flex-1 flex flex-col p-4 sm:p-5 lg:p-6 space-y-4">
                {/* Certificate Title */}
                <div>
                    <h4 className="text-base sm:text-lg font-semibold text-foreground capitalize leading-tight group-hover:text-[#FE705A] transition-colors duration-500 line-clamp-2">
                        {cert.name}
                    </h4>
                </div>

                {/* Progress Bar - Original Colors */}
                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-muted-foreground">Completion</span>
                        <span className="text-xs font-semibold text-blue-600 dark:text-purple">{cert.level}</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div
                            className="bg-blue-600 dark:bg-purple h-full rounded-full transition-all duration-1000 ease-out"
                            style={{ width: cert.level }}
                        />
                    </div>
                </div>

                {/* Description */}
                <div className="flex-1">
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-3">
                        {cert.description}
                    </p>
                </div>

                {/* Website Link - Enhanced */}
                <div className="mt-auto pt-2 border-t border-border/30">
                    <Link
                        href={cert.website}
                        target="_blank"
                        className="inline-flex items-center gap-2 text-xs hover:text-[#FE705A] transition-colors duration-300 group/link"
                    >
                        <span className="text-muted-foreground">Issued by:</span>
                        <span className="text-purple dark:text-purple font-medium group-hover/link:text-[#FE705A] truncate">
                            {cert.website.replace(/^https?:\/\//, '').replace(/^www\./, '')}
                        </span>
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                    </Link>
                </div>
            </div>

            {/* Professional Modal */}
            {/* {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
                    <div
                        ref={modalRef}
                        className="relative w-full max-w-5xl h-[90vh] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-border/20 overflow-hidden animate-in fade-in zoom-in-95 duration-300 flex flex-col"
                    >
                        <div className="flex items-center justify-between p-4 border-b border-border/30 bg-gradient-to-r from-[#FE705A]/5 to-purple/5 flex-shrink-0">
                            <div>
                                <h3 className="text-base sm:text-lg font-semibold text-foreground">
                                    {cert.name}
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                    Certificate Preview
                                </p>
                            </div>
                            <button
                                onClick={closeModal}
                                className="p-1.5 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition-colors duration-200"
                            >
                                <X className="w-4 h-4 text-muted-foreground" />
                            </button>
                        </div>

                        <div className="flex-1 p-4 sm:p-6 overflow-auto">
                            <div className="flex justify-center ">
                                <img
                                    src={cert.image}
                                    alt={cert.name}
                                   className="w-full h-auto object-contain rounded-lg shadow-lg border border-border/20"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-4 sm:p-6 border-t border-border/30 bg-gray-50 dark:bg-slate-800/50 flex-shrink-0">
                            <div className="flex items-center gap-4">
                                <span className="text-sm text-muted-foreground">Completion:</span>
                                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-medium border border-emerald-500/20">
                                    {cert.level}
                                </span>
                            </div>
                            <div className="flex gap-3">
                                <a
                                    href={cert.link}
                                    download
                                    className="px-4 py-2 bg-[#FE705A] hover:bg-[#FE705A]/90 text-white text-sm font-medium rounded-lg transition-colors duration-300 inline-flex items-center gap-2"
                                >
                                    <Download className="w-4 h-4" />
                                    Download
                                </a>
                                <button
                                    onClick={closeModal}
                                    className="px-4 py-2 bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-slate-600 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg transition-colors duration-300"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )} */}
{isModalOpen && (
   <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md">
       <div
           ref={modalRef}
           className="relative w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl max-h-[95vh] sm:h-[90vh] bg-white dark:bg-slate-900 rounded-lg sm:rounded-xl lg:rounded-2xl shadow-2xl border border-border/20 overflow-hidden animate-in fade-in zoom-in-95 duration-300 flex flex-col"
       >
           {/* Responsive Modal Header */}
           <div className="flex items-center justify-between p-3 sm:p-4 border-b border-border/30 bg-gradient-to-r from-[#FE705A]/5 to-purple/5 flex-shrink-0">
               <div className="flex-1 min-w-0">
                   <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-foreground truncate">
                       {cert.name}
                   </h3>
                   <p className="text-xs text-muted-foreground">
                       Certificate Preview
                   </p>
               </div>
               <button
                   onClick={closeModal}
                   className="p-1.5 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition-colors duration-200 flex-shrink-0"
               >
                   <X className="w-4 h-4 text-muted-foreground" />
               </button>
           </div>

           {/* Responsive Modal Content */}
           <div className="flex-1 p-2 sm:p-4 lg:p-6 overflow-auto flex items-center justify-center">
               <img
                   src={cert.image}
                   alt={cert.name}
                   className="w-full h-auto object-contain rounded-lg shadow-lg border border-border/20"
               />
           </div>

           {/* Responsive Modal Footer */}
           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 p-3 sm:p-4 lg:p-6 border-t border-border/30 bg-gray-50 dark:bg-slate-800/50 flex-shrink-0">
               <div className="flex items-center gap-2 sm:gap-4 justify-center sm:justify-start">
                   <span className="text-xs sm:text-sm text-muted-foreground">Completion:</span>
                   <span className="px-2 sm:px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full text-xs sm:text-sm font-medium border border-emerald-500/20">
                       {cert.level}
                   </span>
               </div>
               <div className="flex gap-2 sm:gap-3 justify-center sm:justify-end">
                   <a
                       href={cert.link}
                       download
                       className="flex-1 sm:flex-none px-3 sm:px-4 py-2 bg-[#FE705A] hover:bg-[#FE705A]/90 text-white text-xs sm:text-sm font-medium rounded-lg transition-colors duration-300 inline-flex items-center justify-center gap-2"
                   >
                       <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                       Download
                   </a>
                   <button
                       onClick={closeModal}
                       className="flex-1 sm:flex-none px-3 sm:px-4 py-2 bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-slate-600 text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-medium rounded-lg transition-colors duration-300"
                   >
                       Close
                   </button>
               </div>
           </div>
       </div>
   </div>
)}
        </Card>
    );
};

export default CertCard;