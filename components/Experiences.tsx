"use client";
import React, { useEffect, useRef, useState, useId } from "react";
import { Button } from "./ui/MovingBorders";
import { experience } from "../data/data";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { getAnimationProps } from "@/lib/animation";

type ExperienceCard = {
  id: number;
  title: string;
  company: string;
  timeline: string;
  image: string;
  description?: string[];
};

const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: (event: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};

const Experiences: React.FC = () => {
  const [active, setActive] = useState<ExperienceCard | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();
  const isMobile = useMediaQuery("(max-width: 1024px)");

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(null);
      }
    };

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div id="experience" className="py-10 md:py-20 w-full">
      <h1 className="text-white font-bold text-3xl md:text-5xl lg:text-5xl text-center">
        Some of <span className="text-blue-500">Work Experience</span>
      </h1>
      <div className="antialiased text-gray-100 py-20">
        <div className="container relative flex flex-col px-6 mx-auto space-y-2">
          <div className="absolute inset-0 z-0 w-1 h-full bg-white shadow-md lg:mx-auto lg:right-0 lg:left-0" />
          {experience.map((card, index) => (
            <motion.div
              key={card.id}
              {...getAnimationProps(index + 1, isMobile)}
              className={`relative ${
                !isMobile && index % 2 === 0
                  ? "lg:timeline-container lg:ml-auto lg:w-[calc(50%-20px)]"
                  : "timeline-container-left lg:mr-auto lg:w-[calc(50%-20px)]"
              }`}
              onClick={() => setActive(card)}
            >
              <div
                className={`absolute w-4 h-4 bg-white rounded-full z-20 ${
                  isMobile || index % 2 === 0 ? "left-[-27px]" : "right-[-27px]"
                }`}
                style={{
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              />
              <Button
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius="1.5rem"
                className="w-full"
                style={{
                  background: "rgb(4,7,29)",
                  backgroundColor:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%) ",
                  zIndex: 1,
                }}
              >
                <div className="flex flex-row items-center lg:items-center p-3 py-6 md:p-5 lg:p-6 gap-4 ">
                  <img
                    src={card.image}
                    className={`${
                      !isMobile && index % 2 === 0 ? "block" : "block lg:hidden"
                    } w-14 h-14 items-center md:w-20 md:h-20`}
                  />
                  <div className="flex flex-col">
                    <h1
                      className={`${
                        !isMobile && index % 2 === 1
                          ? "text-start lg:text-end"
                          : "text-start"
                      } text-md md:text-lg font-semibold`}
                    >
                      {card.title}
                    </h1>
                    <p
                      className={`${
                        !isMobile && index % 2 === 1
                          ? "text-start lg:text-end"
                          : "text-start"
                      } text-sm md:text-md font-medium`}
                    >
                      {card.company}
                    </p>
                    <p
                      className={`${
                        !isMobile && index % 2 === 1
                          ? "text-start lg:text-end"
                          : "text-start"
                      } text-xs md:text-sm font-regular text-gray-300`}
                    >
                      {card.timeline}
                    </p>
                  </div>
                  <img
                    src={card.image}
                    className={`${
                      !isMobile && index % 2 === 1
                        ? "hidden lg:block"
                        : "hidden"
                    } w-20`}
                  />
                </div>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 h-full w-full items-center z-10"
            />
            <div className="fixed inset-0 grid place-items-center z-[100]">
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.05,
                  },
                }}
                className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                onClick={() => setActive(null)}
              >
                &times;
              </motion.button>
              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.3 }}
                className="max-w-[70%] max-h-[60%] md:w-full lg:max-w-[500px] h-full md:h-fit md:max-h-[70%] flex flex-col rounded-3xl overflow-hidden"
                style={{
                  background: "rgb(4,7,29)",
                  backgroundColor:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%) ",
                  zIndex: 1,
                }}
              >
                <motion.div layoutId={`image-${active.title}-${id}`}>
                  <Image
                    priority
                    width={24}
                    height={24}
                    src={active.image}
                    alt={active.title}
                    unoptimized
                    className="w-full h-24 lg:h-48 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-center"
                  />
                </motion.div>

                <div className="flex flex-col flex-grow overflow-auto">
                  <div className="flex justify-between items-start p-4">
                    <div className="">
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="font-bold text-neutral-700 dark:text-neutral-200"
                      >
                        {active.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`company-${active.company}-${id}`}
                        className="text-neutral-600 dark:text-neutral-400"
                      >
                        {active.company}
                      </motion.p>
                      <motion.p
                        layoutId={`timeline-${active.timeline}-${id}`}
                        className="text-neutral-600 dark:text-neutral-400"
                      >
                        {active.timeline}
                      </motion.p>
                    </div>
                  </div>
                  <div className="pt-4 px-4 flex-grow">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-neutral-600 text-xs md:text-sm lg:text-base pb-10 flex flex-col items-start gap-4 dark:text-neutral-400"
                    >
                      <ol className="list-disc pl-5">
                        {active.description?.map((desc, index) => {
                          return <li key={index}>{desc}</li>;
                        })}
                      </ol>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Experiences;
