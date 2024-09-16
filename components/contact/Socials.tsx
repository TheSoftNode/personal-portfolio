"use client";

import Link from "next/link";
import React, { FC } from "react";
import
{
  RiFacebookFill,
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterXFill,
} from "react-icons/ri";

import { SiLeetcode } from "react-icons/si";

type Props = {
  containerStyles?: any;
  iconStyles?: any;
};

const icons = [
  {
    path: "https://github.com/TheSoftNode",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.linkedin.com/in/theophilus-uchechukwu/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://leetcode.com/u/UcheTheo/",
    name: <SiLeetcode />,
  },
  {
    path: "https://x.com/TheSoft_Theo",
    name: <RiTwitterXFill />
  },
  {
    path: "https://web.facebook.com/profile.php?id=61550213788855",
    name: <RiFacebookFill />,
  },
  {
    path: "https://www.instagram.com/theuch.soft/",
    name: <RiInstagramFill />,
  },
];

const Socials: FC<Props> = ({ containerStyles, iconStyles }) =>
{
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) =>
      {
        return (
          // <Link href={icon.path} key={index}>
          //   <div className={`${iconStyles}`}>{icon.name}</div>
          // </Link>
          <Link href={icon.path} key={index} legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <div className={`${iconStyles}`}>{icon.name}</div>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
