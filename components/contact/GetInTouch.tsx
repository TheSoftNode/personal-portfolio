import { FaLocationArrow } from "react-icons/fa6";

import ButtonMagic from "../ui/ButtonMagic";

const GetInTouch = () =>
{
  return (
    <section className="w-full px-4 pt-14 dark:pt-12 pb-20 h-[100%] bg-tertiary dark:bg-transparent" id="contact">
      <div className="w-full absolute left-0 bottom-96 h-80]">
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
        <p className="text-[#FE705A] md:text-base text-sm dark:text-purple  my-10 md:mt-10 md:my-5 text-center">
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
    </section>
  );
};

export default GetInTouch;