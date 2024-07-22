"use client";
import React, { useState, useMemo } from "react";
import { Tabs } from "./ui/Tabs";
import ProjectCards from "./ui/Project-Cards";
import { projects, videoProject } from "@/data/data";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { fadeAnimation, fadeUp } from "@/lib/animation";

const VideoProject = dynamic(() => import("./ui/VideoProject"), { ssr: false });

const Projects = () => {
  const tabs = useMemo(
    () => [
      {
        title: "Website",
        value: "website",
        content: (
          <div className="gap-y-30 gap-10 lg:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 justify-center bg-transparent backdrop-blur-xl">
            {projects
              .filter((proj) => proj.type === "web")
              .map((proj, index) => {
                return (
                  <ProjectCards
                    key={index}
                    title={proj.title}
                    desc={proj.desc}
                    image={proj.image}
                    linkWeb={proj.linkWeb}
                    linkGithub={proj.linkGithub}
                    stack={proj.stack}
                  />
                );
              })}
          </div>
        ),
      },
      {
        title: "Mobile",
        value: "mobile",
        content: (
          <div className="gap-y-30 gap-10 lg:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 justify-center bg-transparent backdrop-blur-xl">
            {projects
              .filter((proj) => proj.type === "mobile")
              .map((proj, index) => {
                return (
                  <ProjectCards
                    key={index}
                    title={proj.title}
                    desc={proj.desc}
                    image={proj.image}
                    linkWeb={proj.linkWeb}
                    linkGithub={proj.linkGithub}
                    stack={proj.stack}
                  />
                );
              })}
          </div>
        ),
      },
      {
        title: "Videography",
        value: "videography",
        content: (
          <div className="relative grid grid-cols mt-8 gap-8 justify-center">
            {videoProject.map((video, index) => {
              return (
                <VideoProject
                  key={index}
                  title={video.title}
                  company={video.company}
                  link={video.link}
                  desc={video.desc}
                  stack={video.stack}
                  index={index}
                />
              );
            })}
          </div>
        ),
      },
    ],
    []
  );

  return (
    <div id="project" className="py-10 md:py-20 pb-24 w-full">
      <h1 className="text-white font-bold text-3xl md:text-5xl lg:text-5xl text-center">
        Featured <span className="text-blue-500">Projects</span>
      </h1>
      <motion.div
        {...fadeAnimation}
        variants={fadeUp}
        className="h-fit relative z-10 flex flex-col max-w-7xl mx-auto w-full items-start justify-start my-12"
      >
        <Tabs tabs={tabs} />
      </motion.div>
    </div>
  );
};

export default Projects;
