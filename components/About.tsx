"use client";
import React from "react";
import Card from "./ui/Card";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { CanvasRevealEffect } from "./ui/Canvas-reveal-effect";
import { AnimatedTooltip } from "./ui/Animated-tooltip";
import { social, techStack } from "@/data/data";
import { motion } from "framer-motion";
import { fadeAnimation, fadeRight, techStackAnimation } from "@/lib/animation";

function About() {
  return (
    <section
      id="about"
      className="w-full py-10 lg:py-20 flex flex-col lg:flex-row justify-between"
    >
      <div className="w-full lg:w-1/3">
        <Card
          title="Lets connect!"
          icon={
            <img src="/ariq.JPEG" className="object-cover overflow-hidden" />
          }
          socialIcons={social}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
      <div className="flex flex-col w-full lg:w-2/3 px-8">
        <motion.div {...fadeAnimation} variants={fadeRight}>
          <TextGenerateEffect
            words="MUHAMMAD ARIQ FARHAN"
            className="text-center lg:text-start text-[24px] md:text-3xl lg:text-5xl font-bold"
          />
        </motion.div>
        <motion.div {...fadeAnimation} variants={fadeRight}>
          <p className="text-gray-300 text-center lg:text-start text-sm md:text-md">
            Software Engineer | Colorist | Final-year Information Systems
            Student at University of Brawijaya
          </p>
        </motion.div>
        <motion.div {...fadeAnimation} variants={fadeRight}>
          <p className="text-gray-400 mt-4 text-xs lg:text-sm text-justify">
            Hello! I'm Muhammad Ariq Farhan. I'm an enthusiastic and highly
            motivated individual who loves a good challenge. I have strong
            leadership skills, a knack for taking initiative, and a passion for
            continuous learning. I adapt quickly and perform well under
            pressure, and my keen eye for detail and problem-solving skills make
            me a valuable asset in the IT field. I actively seek out
            opportunities to learn and grow, tackling every challenge with a
            solutions-oriented mindset. I also have skills and experience in
            color grading with DaVinci Resolve and have worked on several film
            and videography projects.
            <br />
            <br /> Currently, I'm expanding my knowledge in Robotic Process
            Automation (RPA), which is a growing field. I am not afraid to learn
            new things related to technology and am determined to face every
            challenge. I am committed to continuously enhancing my skills to
            seize every opportunity in the tech world.
          </p>
        </motion.div>
        <motion.div>
          <div className="mt-4 font-medium">
            <p className="text-gray-200">Tech stack :</p>
            <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-start w-full lg:w-4/5 gap-x-4">
              {techStack.map((tech, index) => {
                return (
                  <motion.div
                    key={index}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    variants={techStackAnimation}
                    className="px-4 py-2 rounded-xl mt-2 flex flex-row items-center justify-center gap-2 border border-slate-700 cursor-pointer hover:border-blue-600 transition-all duration-200"
                    style={{
                      background: "rgb(4,7,29)",
                      backgroundColor:
                        "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                    }}
                  >
                    <img className="w-5" src={tech.image} />
                    <p className="text-xs md:text-sm">{tech.name}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
