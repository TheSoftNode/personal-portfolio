import React from "react";
import Socials from "./Socials";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-black-101 py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          {/* socials */}
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconStyles="text-primary dark:text-white/70  text-[20px] hover:text-white dark:hover:text-primary transition-all"
          />
          {/* copyright */}
          <div className="text-muted-foreground">
            Copyright &copy; Theophilus Uche. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
