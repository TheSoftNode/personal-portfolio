import { FaDownload, FaLocationArrow } from 'react-icons/fa6';
import MagicButton from '../ui/MagicButton';
import { Spotlight } from '../ui/Spotlight'
import { TextGenerateEffect } from '../ui/text-generate-effect';
import Socials from '../contact/Socials';
import DevImg from './DevImg';
import Link from 'next/link';

type Props = {}

const words = `I bring a strong passion for technology, versatility in my skills, and consistent performance with over 6 years of experience in backend engineering and up to 4 years in frontend development. I specialize in transforming complex ideas into efficient and scalable solutions.`;

const Hero = (props: Props) =>
{
    return (
        <>
            <div className='py-20 dark:lg:h-[700px] lg:h-[740px] xlg:h-[750px] dark:xlg:h-[680px] lgm:h-[700px] dark:lgm:h-[650px] xl:h-[930px] dark:xl:h-[850px] md:h-[750px] dark:md:h-[670px] dark:xm:h-[700px] xm:h-[750px] sm:h-[720px] dark:sm:h-[680px] h-[780px] dark:h-[730px] lg:px-10 w-full bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
                <div>
                    <Spotlight className="-top-40 -left-10
                md:-left-32 md:-top-20 h-screen" fill="white" />
                    <Spotlight className="top-10 left-full h-[80vh]
                v-[50vw]" fill="purple" />
                    <Spotlight className="top-28 left-80 h-[80vh] 
                w-[50vw]" fill="blue" />
                </div>


                <div className="flex justify-center lg:justify-between gap-x-20  relative md:px-14 my-20 z-10">
                    <div className="max-w-[88vw] md:max-w-[95vw] lg:max-w-[55vw]
                flex flex-col items-center justify-center">
                        <h2 className="uppercase tracking-widest
                    text-md xl:text-2xl font-semibold mb-8 text-center max-w-[22rem] text-[#FE6E58]">
                            FullStack Software Engineer
                        </h2>

                        <p className="h1 text-center md:tracking-wider mb-6 dark:text-white">
                            {/* <p className="text-center md:tracking-wider mb-4 
                    text-sm md:text-lg lg:text-2xl"> */}
                            Hi, I&apos;m Theophilus, a Fullstack Software Engineer
                        </p>

                        <TextGenerateEffect
                            className="prose tracking-tighter text-justify leading-relaxed sm:tracking-tight word-spacing xm:text-[110%] sm:text-[120%]  md:text-[150%] lg:text-xl xl:text-[180%]  subtitle  mb-7 md:mb-0"
                            words={words}
                        />

                        {/* <p className="text-center md:tracking-wider mb-4 
                    text-sm md:text-lg lg:text-2xl">
                        Hi, I&apos;m Theophilus, a Fullstack Software Engineer
                    </p> */}

                        <div className="flex gap-5 mb-10 lg:w-full">
                            <Link href={"/contact"}>
                                <MagicButton
                                    title="Contact Me"
                                    icon={<FaLocationArrow />}
                                    position="right"
                                    otherClasses="bg-[#FE6E58] hover:bg-[#D04F4A]"
                                />
                            </Link>
                            <a href="/CVs/Theophilus_Uchechukwu_Fullstack_Engineer.pdf" download>
                                <MagicButton
                                    title="Download CV"
                                    icon={<FaDownload />}
                                    position="right"
                                    otherClasses="bg-black-100 border border-white hover:bg-[#03062B]"
                                />
                            </a>
                        </div>

                        {/* Socials */}
                        <Socials
                            containerStyles="flex w-full justify-center gap-x-6 mx-auto xl:mx-0 mt-5 md:mb-2"
                            iconStyles="text-foreground text-[22px] hover:text-[#FE6E58] transition-all"
                        />
                    </div>

                    <div className="hidden lg:flex relative">

                        <DevImg
                            containerStyles=" w-[300px] h-[350px] xlg:w-[450px] xlg:h-[500px] xl:w-[500px] xl:h-[600px] relative pt-0 "
                            imgSrc="/hero/theo2-removebg.png"
                            imgStyles="border-b relative w-[370px] h-[400px]  border-transparent ml-4 dark:border-white/[0.2] rounded-full dark:bg-black-100 bg-[#fef9f5] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center"
                        />

                    </div>

                </div>
            </div>
            <div className='dark:border-border dark:border'></div>
        </>
    )
}

export default Hero