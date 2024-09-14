import React, { useState } from "react";
import Link from "next/link";
import { Card, CardHeader } from "../ui/card";
import { Eye, Link2Icon } from "lucide-react";

type Props = {
    cert: any;
};

const CertCard = ({ cert }: Props) =>
{

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () =>
    {
        setIsModalOpen(true);
    };

    const closeModal = () =>
    {
        setIsModalOpen(false);
    };


    return (
        <Card className="group overflow-hidden border  dark:bg-[#010125]">
            <CardHeader className="p-0 ">
                {/* image */}
                {/* <div className="relative h-[200px] lg:h-[250px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:bg-[110%] xl:dark:bg-work_project_bg_dark xl:bg-no-repeat overflow-hidden">           */}
                <div className="relative h-[200px] lg:h-[250px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:bg-[110%] xl:dark:bg-work_project_bg_dark xl:bg-no-repeat overflow-hidden">
                    <img
                        src={cert.image}
                        alt="cover"
                        className="absolute bottom-0 h-[100%] w-[100%]"
                    />
                    {/* btns links*/}
                    <div className="flex gap-x-8">
                        <Link
                            href={cert.link}
                            className="bg-black-100 w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
                        >
                            <Link2Icon className="text-white" />
                        </Link>
                        <button
                            onClick={openModal}
                            className="bg-black-100  w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
                        >
                            <Eye className="text-white" />
                        </button>
                    </div>
                </div>
            </CardHeader>

            <div className=" flex flex-col gap-y-4 px-6 py-4">
                <h4 className="text-[100%] font-semibold mb-1 text-[purple] dark:text-purple text-left capitalize">{cert.name}</h4>
                <span className="w-full bg-gray-200 rounded-full dark:bg-gray-700">

                    <div
                        className={`bg-blue-600 dark:bg-[purple] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full`}
                        style={{ width: `${cert.level}` }}
                    >
                        {cert.level}
                    </div>
                </span>


                <p className="text-muted-foreground text-xs text-justify lg:text-lg">{cert.description}</p>
                <Link
                    href={cert.website}
                >
                    <span className="text-black-100 dark:text-white mr-2 text-sm">Website :</span>
                    <span className="dark:text-purple text-[purple] text-sm">{cert.website}</span>
                </Link>
            </div>

            <>
                {isModalOpen && (
                    <div
                        className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center overflow-y-auto overflow-x-hidden"
                    >
                        <div className="relative p-4 w-full h-full">
                            {/* <div className="relative p-4 w-full max-w-md max-h-full"> */}
                            <div className="relative bg-white rounded-lg shadow w-[90%] mx-auto  dark:bg-gray-700">
                                <img src={cert.image} alt="" className="lg:h-[550px] lg:w-[2010px] w-full" />

                                <button
                                    onClick={closeModal}
                                    className="absolute top-3 end-2.5 text-white bg-[purple] hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>

                            </div>
                        </div>
                    </div>
                )}
            </>
        </Card>
    );
};

export default CertCard;
