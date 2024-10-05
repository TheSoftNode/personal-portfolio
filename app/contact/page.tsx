import React from "react";
import { MailIcon, HomeIcon, PhoneCall, CircleArrowLeft } from "lucide-react";
import Form from "@/components/contact/ContactForm";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

type Props = {};

const Contact = (props: Props) =>
{
  return (
    <section className="lg:px-16 w-full">
      <div className="container">
        <div className="md:mt-16 mt-28">
          <Link href="/#contact" className="">
            <CircleArrowLeft className="!text-[#FE7054]" />
          </Link>
        </div>
        {/* text & illustration */}
        <div className="grid md:grid-cols-2 md:pt-16 pt-10 xl:h-[480px] mb-8 md:mb-16 items-center justify-center">
          {/* text */}
          <div className="flex flex-col">
            <div className="flex items-center gap-x-4 mb-4 text-[#FE705A] text-2xl">
              <span className="w-[30px] h-[2px] bg-[#FE705A]"></span>
              Say Hello !
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl xl:text-[72px] text-center md:text-start xl:leading-[80px] tracking-[-2px] font-bold max-w-md mb-8">Let&apos;s Wok Together.</h1>
              <p className="subtitle text-lg  md:max-w-[400px]">
                <span className="dark:text-purple text-[#FE705A]">I&apos;m excited to collaborate</span> on innovative projects. Whether you need a
                software engineer or developer to bring your ideas to life or support an ongoing project,
                feel free to reach out—<span className="dark:text-purple text-[#FE705A]">let&apos;s create something exceptional together</span>.
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
        <div className="grid md:grid-cols-2  gap-x-10 mb-24 md:mb-32">
          {/* info text */}
          <div className="flex flex-col gap-y-4 text-center xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
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
              <div>+234 9135 175 220</div>
            </div>
            {/* whatsapp */}
            <div className="flex items-center gap-x-8">
              <FaWhatsapp size={18} className="text-[#FE705A]" />
              <div>+234 9038 726 950</div>
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
