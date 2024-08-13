"use client";

import CountUp from "react-countup";
import React, { FC } from "react";

type Props = {
  containerStyles: any;
  icon: any;
  endCountNum: any;
  endCountText?: any;
  badgeText: any;
};

const Badge: FC<Props> = ({
  containerStyles,
  icon,
  endCountNum,
  endCountText,
  badgeText,
}) => {
  return (
    <div className={`badge ${containerStyles}`}>
      <div className="text-md text-[#FE6E58]">{icon}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-md leading-none font-bold text-[#FE6E58]">
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}
        </div>
        <div className="max-w-[70px] leading-none text-[12px] font-medium text-black">
          {badgeText}
        </div>
      </div>
    </div>
  );
};

export default Badge;
