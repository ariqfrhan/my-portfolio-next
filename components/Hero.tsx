"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Typewriter } from "nextjs-simple-typewriter";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const spotlightVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const Hero = () => {
  return (
    <div id="home" className="pb-20 pt-36">
      <AnimatePresence>
        <motion.div>
          <motion.div variants={spotlightVariants}>
            <Spotlight
              className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
              fill="white"
            />
            <Spotlight
              className="h-[80vh] w-[50vw] top-10 left-full"
              fill="purple"
            />
            <Spotlight
              className="left-80 top-28 h-[80vh] w-[50vw]"
              fill="blue"
            />
          </motion.div>

          <motion.div
            className="h-[120px] lg:h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div
              className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
            />
          </motion.div>

          <motion.div
            className="flex justify-center relative my-20 z-10"
            variants={heroVariants}
            transition={{ duration: 1 }}
          >
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
              <motion.p
                className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.3, delay: 1.5 }}
              >
                My Personal Portfolio
              </motion.p>

              <TextGenerateEffect
                words="Transforming Ideas into Innovative Solutions"
                className="text-center text-[40px] md:text-5xl lg:text-7xl font-bold"
              />

              <motion.p
                className="text-center md:tracking-wider mb-4 mt-4 text-sm md:text-lg lg:text-2xl font-medium"
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 10 }}
                transition={{ duration: 1.3, delay: 1.5 }}
              >
                Hi! I&apos;m Ariq, a{" "}
                <span>
                  <Typewriter
                    words={[
                      "Web Developer",
                      "Mobile Developer",
                      "RPA Developer",
                      "Colorist",
                    ]}
                    loop={Infinity}
                    cursor
                    cursorStyle="|"
                  />
                </span>
              </motion.p>

              <motion.a
                href="/Muhammad Ariq Farhan-resume.pdf"
                download={"Muhammad Ariq Farhan-resume"}
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 10 }}
                transition={{ duration: 1.3, delay: 1.5 }}
              >
                <MagicButton
                  title="Download My Resume"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
