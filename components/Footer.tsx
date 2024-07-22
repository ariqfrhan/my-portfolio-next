import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaVoicemail,
} from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { FaUpwork } from "react-icons/fa6";
import { social } from "@/data/data";

const Footer = () => {
  return (
    <footer id="contact" className="w-full pt-10 pb-10">
      <div className="w-full absolute left-0 bottom-0 md:-bottom-10 min-h-32">
        <img src="/footer-grid.svg" className="w-full h-full opacity-50" />
      </div>
      <div className="flex relative flex-col items-center">
        <h1 className="text-center text-3xl lg:text-5xl font-bold lg:max-[45vw]">
          Let's Make Things <span className="text-blue-500">Happen</span>{" "}
          Together!
        </h1>
        <p className="mt-8 text-sm md:text-base text-slate-300 text-center">
          Get in touch now to find out how I can help you reach your goals. I
          welcome new ideas and opportunities for engaging and significant
          projects.
        </p>
        <div className="flex flex-row gap-3 mt-8 md:mt-0">
          <a
            href="https://www.upwork.com/freelancers/~01236fb1439ad7748e"
            target="_blank"
          >
            <MagicButton
              title="Find me on Upwork"
              icon={<FaUpwork />}
              position="left"
            />
          </a>
          <a href="mailto:muhammadariq3@gmail.com">
            <MagicButton
              title="Reach me on email"
              icon={<FaMailBulk />}
              position="left"
            />
          </a>
        </div>
      </div>
      <div className="flex relative mt-16 md:flex-row flex-col justify-between items-center gap-y-4">
        <p className="md:text-base text-sm md:font-normal font-light">
          © Muhammad Ariq Farhan - 2024
        </p>
        <div className="flex flex-row items-center gap-3">
          {social.map((soc, index) => {
            return (
              <a
                key={index}
                href={soc.link}
                target="_blank"
                className="px-2 py-2 cursor-pointer bg-black-200 rounded-lg border border-slate-800 hover:bg-blue-700 transition-all duration-200"
              >
                {soc.icon}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
