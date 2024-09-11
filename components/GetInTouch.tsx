import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data/data";
import ButtonMagic from "./ui/ButtonMagic";

const GetInTouch = () => {
  return (
    <section className="w-full px-4 pt-10 dark:pt-0 pb-20 h-[100%] bg-tertiary dark:bg-transparent" id="contact">
      {/* background grid */}
      {/* <div className="w-full absolute left-0 top-[-10] h-[500px]"> */}
      {/* <div className="w-full absolute left-0 top-0 min-h-24"> */}
      <div className="w-full absolute left-0 bottom-80 h-80">
        <img
          src="footer/footer-grid.svg"
          alt="grid"
          className="w-full h-[100vh] opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[60vw]">
          Ready to take <span className="dark:text-purple text-[#FE705A]">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-[#FE705A] dark:text-purple md:mt-10 my-5 text-center">
        {/* <p className="text-purple dark:text-white-200 md:mt-10 my-5 text-center"> */}
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:theo.uche2023@gmail.com">
          <ButtonMagic
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      {/* <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Adrian Hajdin
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default GetInTouch;