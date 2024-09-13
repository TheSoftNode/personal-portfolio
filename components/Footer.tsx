import React from "react";
import Socials from "./Socials";

type Props = {};

const Footer = (props: Props) =>
{
  return (
    <footer className="bg-black-100 dark:bg-[#010125] pt-8 pb-6">
      {/* <footer className="bg-[#010125] pt-8 pb-6 z-[9999]"> */}
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row-reverse items-center md:justify-between">
          {/* socials */}
          <div>
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
              iconStyles="text-[#FE705A] dark:text-white/70  text-[20px] hover:text-white dark:hover:text-[#FE705A] transition-all"
            />
          </div>
          {/* copyright */}
          <div className="text-muted-foreground md:text-base text-xs">
            &copy; 2024 Theophilus Uche. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
