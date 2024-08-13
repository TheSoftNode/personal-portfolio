import { FaDownload, FaLocationArrow } from 'react-icons/fa6';
import MagicButton from './ui/MagicButton';
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect';
import Socials from './Socials';
import { RiBriefcase4Fill, RiTeamFill, RiTodoFill } from 'react-icons/ri';
import Badge from './Badge';
import DevImg from './DevImg';

type Props = {}

const words = `I bring a strong passion for technology, versatility in my skills, and consistent performance with over 6 years of experience in backend engineering and up to 4 years in frontend development. I specialize in transforming complex ideas into efficient and scalable solutions.`;

const Hero = (props: Props) =>
{
    return (
        <div className='py-24  dark:lg:h-[820px] lg:h-[890px] xl:h-[930px] dark:xl:h-[930px] md:h-[850px] dark:md:h-[760px] dark:xm:h-[900px] xm:h-[970px] sm:h-[920px] dark:sm:h-[810px] h-[1030px] dark:h-[970px] lg:px-10 w-full bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
            <div>
                <Spotlight className="-top-40 -left-10
                md:-left-32 md:-top-20 h-screen" fill="white" />
                <Spotlight className="top-10 left-full h-[80vh]
                v-[50vw]" fill="purple" />
                <Spotlight className="top-28 left-80 h-[80vh] 
                w-[50vw]" fill="blue" />
            </div>

            {/* <div className="h-[84vh] pb-16 w-full dark:bg-black-100 bg-[#fef9f5]
            dark:bg-grid-white/[0.3] bg-grid-black/[0.2] 
            flex items-center justify-center absolute top-0 left-0 "> */}
            {/* Radial gradient for the container to give a faded look */}
            {/* <div className="absolute pointer-events-none 
                inset-0 flex items-center justify-center
                dark:bg-black-100 bg-[#fef9f5]
                [mask-image:radial-gradient(ellipse_at_center,
                transparent_20%,black)]" /> */}
            {/* </div> */}

            <div className="flex justify-center lg:justify-between gap-x-20  relative sm:px-14 my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[55vw]
                flex flex-col items-center justify-center">
                    <h2 className="uppercase tracking-widest
                    text-md font-semibold mb-8 text-center max-w-80 text-[#FE6E58]">
                        FullStack Software Engineer
                    </h2>

                    <p className="h1 text-center md:tracking-wider mb-6 dark:text-white">
                        {/* <p className="text-center md:tracking-wider mb-4 
                    text-sm md:text-lg lg:text-2xl"> */}
                        Hi, I&apos;m Theophilus, a Data Scientist
                    </p>

                    <TextGenerateEffect
                        className="text-justify text-[12px] md:text-[16px] lg:text-xl leading-[20px] subtitle  mb-7 md:mb-0"
                        words={words}
                    />

                    {/* <p className="text-center md:tracking-wider mb-4 
                    text-sm md:text-lg lg:text-2xl">
                        Hi, I&apos;m Theophilus, a Fullstack Software Engineer
                    </p> */}

                    <div className="flex gap-5 mb-10">
                        <a href="#about">
                            <MagicButton
                                title="Contact Me"
                                icon={<FaLocationArrow />}
                                position="right"
                                otherClasses="bg-[#FE6E58]"
                            />
                        </a>
                        <a href="#about">
                            <MagicButton
                                title="Download CV"
                                icon={<FaDownload />}
                                position="right"
                                otherClasses="bg-black-100 border border-white"
                            />
                        </a>
                    </div>

                    {/* Socials */}
                    <Socials
                        containerStyles="flex gap-x-6 mx-auto xl:mx-0 "
                        iconStyles="text-foreground text-[22px] hover:text-[#FE6E58] transition-all"
                    />
                </div>

                <div className="hidden lg:flex relative">
                    {/* Badge */}
                    {/* <Badge
                        containerStyles="absolute top-[20%] -left-[5rem]"
                        icon={<RiBriefcase4Fill />}
                        endCountNum={3}
                        badgeText="Years of experience"
                    /> */}

                    {/* Badge2 */}
                    {/* <Badge
                        containerStyles="absolute top-[70%] -left-[1rem]"
                        icon={<RiTeamFill />}
                        endCountNum={6}
                        badgeText="Happy Clients"
                        endCountText="k"
                    /> */}

                    {/* Badge3 */}
                    {/* <Badge
                        containerStyles="absolute top-[63%] -right-8"
                        icon={<RiTodoFill />}
                        endCountNum={6}
                        badgeText="Finished Projects"
                        endCountText="k"
                    /> */}
                    {/* <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[400px] bg-no-repeat absolute -top-1 -right-2"></div> */}
                    <DevImg
                        containerStyles=" w-[370px] h-[450px] xl:w-[500px] xl:h-[600px] relative pt-20 "
                        imgSrc="/hero/theo2-removebg.png"
                        imgStyles="border-b relative w-[370px] h-[400px]  border-transparent ml-4 dark:border-white/[0.2] rounded-full dark:bg-black-100 bg-[#fef9f5] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center"
                    />
                    {/* <Image
                        src="/hero/theo2-removebg.png"
                        width={350}
                        height={380}
                        alt="Picture of the author"
                        // objectFit="cover"
                        className="border-b rounded-full"
                        // className="border-b relative w-[350px] h-[380px] border-transparent ml-5 dark:border-white/[0.2] rounded-full dark:bg-black-100 bg-[#fef9f5] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] items-center justify-center"
                    /> */}
                </div>

            </div>
        </div>
    )
}

export default Hero