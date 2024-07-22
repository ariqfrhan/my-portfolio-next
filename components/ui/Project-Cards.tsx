"use client";
import React from "react";
import { HoverBorderGradient } from "./HoverBorderGradient";
import { FaGithub, FaGlobe } from "react-icons/fa";

const ProjectCards = ({
  title,
  desc,
  image,
  linkWeb,
  linkGithub,
  stack,
}: {
  title: string;
  desc: string;
  image: string;
  linkWeb?: string;
  linkGithub?: string;
  stack: string[];
}) => (
  <HoverBorderGradient
    as={"div"}
    containerClassName="rounded-3xl"
    className="bg-slate-900 border border-slate-800 backdrop-blur-xl p-4 overflow-hidden flex flex-col w-full md:w-[360px] md:h-[480px] max-w-sm"
    style={{
      background: "rgb(4,7,29)",
      backgroundColor:
        "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
    }}
  >
    <div className="relative h-52 w-full overflow-hidden shadow-lg shadow-slate-800 bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
      <img
        src={image}
        alt="card-image"
        className="object-cover w-full h-full"
      />
    </div>
    <div className="py-5">
      <h5 className="block mb-2 font-sans text-lg text-white antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        {title}
      </h5>
      <p className="block font-sans text-sm w-full antialiased text-justify text-slate-300 font-light leading-relaxed text-inherit">
        {desc}
      </p>
      <div className="flex flex-row pt-2 items-center gap-1">
        {stack.map((stacks) => {
          return (
            <p
              key={stacks}
              className="text-xs px-2 py-2 bg-transparent backdrop-blur-lg border border-slate-800 rounded-lg"
            >
              {stacks}
            </p>
          );
        })}
      </div>
    </div>
    <div className="py-4 pt-0 flex flex-col gap-2 items-center">
      <button
        className="align-middle flex flex-row items-center justify-center gap-2 w-full select-none font-sans font-semibold text-center transition-all text-sm py-3 px-6 rounded-lg bg-blue-500 text-white shadow-md shadow-blue-900/10 hover:shadow-lg hover:shadow-blue-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
        type="button"
        onClick={() => window.open(linkWeb)}
        disabled={!linkWeb}
      >
        <FaGlobe />
        Website
      </button>
      <button
        className="align-middle flex flex-row items-center justify-center gap-2 w-full select-none font-sans font-semibold text-center transition-all text-sm py-3 px-6 rounded-lg bg-[#24292e] text-white shadow-md shadow-blue-900/10 hover:shadow-lg hover:shadow-blue-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
        type="button"
        onClick={() => window.open(linkGithub)}
        disabled={!linkGithub}
      >
        <FaGithub size={20} />
        Github
      </button>
    </div>
  </HoverBorderGradient>
);

export default ProjectCards;
