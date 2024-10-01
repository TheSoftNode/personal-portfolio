"use client";

import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { IoCopyOutline } from "react-icons/io5";
import ButtonMagic from "../ui/ButtonMagic";
import Link from "next/link";
import { motion } from "framer-motion";

// Define the Petal type
interface Petal
{
  id: number;
  xOffset: number;
  yOffset: number;
  color: string;
}

const GetInTouch = () =>
{
  const [copied, setCopied] = useState(false);
  const [petals, setPetals] = useState<Petal[]>([]); // Set state with Petal type

  const handleCopy = () =>
  {
    const text = "theo.uche2023@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
    createPetalSplash(); // Create petal splash when copied
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  const createPetalSplash = () =>
  {
    const newPetals: Petal[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      xOffset: getRandomPosition(),
      yOffset: getRandomPosition(),
      color: getRandomColor(),
    }));
    setPetals(newPetals);
    setTimeout(() => setPetals([]), 2000); // Clear petals after 2 seconds
  };

  const getRandomPosition = () => Math.random() * 600 - 300; // Random offset for petals
  const getRandomColor = () =>
  {
    const colors = [
      "#FF5733", // Red
      "#33FF57", // Green
      "#3357FF", // Blue
      "#FF33A6", // Pink
      "#FFD733", // Yellow
      "#33FFD7", // Cyan
      "#D733FF", // Purple
      "#FF8C33", // Orange
      "#FF33B5", // Magenta
      "#FFED33", // Lime
      "#FF3366", // Rose
      "#33FF8C", // Mint
      "#337BFF", // Sky Blue
      "#FF33A6", // Hot Pink
      "#A733FF", // Violet
      "#FF5E33", // Coral
      "#FFDB33", // Golden Yellow
      "#33D4FF", // Light Blue
      "#FF3370", // Cherry
      "#D7FF33", // Light Green
      "#FF3380", // Flamingo Pink
      "#FFAA33", // Amber
      "#FFBBFF", // Lavender
      "#6B33FF", // Indigo
      "#FF6433", // Tangerine
      "#33FF4F", // Neon Green
      "#FF334F", // Cerise
      "#B3FF33", // Neon Lime
      "#33FFD2", // Seafoam
      "#FF4B33", // Persimmon
      "#E2FF33", // Neon Yellow
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <section className="w-full px-4 pt-14 dark:pt-12 pb-20 h-[100%] bg-tertiary dark:bg-transparent" id="contact">
      <div className="w-full absolute left-0 bottom-96 h-80]">
        <img
          src="footer/footer-grid.svg"
          alt="grid"
          className="w-full h-[100vh] opacity-50"
        />
      </div>

      <div className="flex flex-col items-center relative"> {/* Added relative for absolute positioning */}
        <h1 className="heading lg:max-w-[60vw]">
          Ready to take <span className="dark:text-purple text-[#FE705A]">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-[#FE705A] md:text-base text-sm dark:text-purple my-10 md:mt-10 md:my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <Link href="/contact">
          <ButtonMagic
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
        <div className="my-6">Or</div>
        <div className="relative inline-block">
          <ButtonMagic
            title={copied ? "Email is Copied!" : "Copy my email address"}
            icon={<IoCopyOutline />}
            position="left"
            handleClick={handleCopy}
            otherClasses="!bg-[#161A31] !mt-0"
          />

          {/* Render petals */}
          {petals.map((petal) => (
            <motion.div
              key={petal.id}
              className="petal"
              initial={{ opacity: 1, x: 0, y: 0 }}
              animate={{
                opacity: 0,
                x: petal.xOffset,
                y: petal.yOffset,
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{
                backgroundColor: petal.color,
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                position: 'absolute',
                top: '50%', // Center vertically
                left: '50%', // Center horizontally
                transform: 'translate(-50%, -50%)', // Center the petals
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
