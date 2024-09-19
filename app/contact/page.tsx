import React from "react";
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
import Form from "@/components/contact/ContactForm";
import Image from "next/image";

type Props = {};

const Contact = (props: Props) =>
{
  return (
    <section className="md:px-16">
      <div className="container auto">

        {/* text & illustration */}
        <div className="grid md:grid-cols-2 pt-24 xl:h-[480px] mb-6 md:mb-16 items-center justify-center">
          {/* text */}
          <div className="flex flex-col">
            <div className="flex items-center gap-x-4 mb-4 text-[#FE705A] text-lg">
              <span className="w-[30px] h-[2px] bg-[#FE705A]"></span>
              Say Hello !
            </div>
            <div>
              <h1 className="text-4xl xl:text-[72px]  xl:leading-[80px] tracking-[-2px] font-bold max-w-md mb-8">Let&apos;s Wok Together.</h1>
              <p className="subtitle  max-w-[400px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>

          </div>
          {/* illustration */}
          <Image
            src={"/contact/contactMe.png"}
            alt="Contact me"
            width={450}
            height={400}
            className="hidden md:flex bg-no-repeat bg-top"
          />

          {/* <div className="hidden md:flex  w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div> */}
        </div>

        {/* info text & form */}
        <div className="grid md:grid-cols-2  mb-24 md:mb-32">
          {/* info text */}
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-[#FE705A]" />
              <div>theo.uche2023@gmail.com</div>
            </div>
            {/* Address */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-[#FE705A]" />
              <div>Lagos, Nigeria</div>
            </div>
            {/* phone */}
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-[#FE705A]" />
              <div>+234 7036 563 954</div>
            </div>
          </div>
          {/* form */}
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
