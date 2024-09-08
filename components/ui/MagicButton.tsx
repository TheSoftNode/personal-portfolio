import React, { FC } from 'react'

type Props = {
    title: string;
    icon: React.ReactNode;
    position: string;
    handleClick?: () => void;
    otherClasses?: string
}

const MagicButton: FC<Props> = ({
    title,
    icon,
    position,
    handleClick,
    otherClasses
}) =>
{
    return (
        <button className="relative inline-flex sm:h-[2.9rem] h-[2.7rem] w-[8.8rem] overflow-hidden 
        rounded-full  focus:outline-none sm:w-[14rem]  xm:w-[9rem]  md:mt-10">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full
             sm:text-md text-[13px] leading-[20px] font-medium text-white backdrop-blur-3xl gap-3 sm:gap-3 px-2
                ${otherClasses}`}
            >
                {position === "left" && icon}
                {title}
                {position === "right" && icon}
            </span>
        </button>
    )
}

export default MagicButton