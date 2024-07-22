"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type SocialIcon = {
  link: string;
  icon: React.ReactElement;
};

const Card = ({
  title,
  icon,
  children,
  socialIcons,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  socialIcons?: SocialIcon[];
}) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
        dark:border-white/[0.2] max-w-md w-full mx-auto relative h-[20rem] lg:h-[28rem] rounded-3xl overflow-hidden"
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <AnimatePresence>
        {hover && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10 h-full w-full ">
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
          group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <div className="w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
          <h2
            className="dark:text-white text-center text-lg lg:text-3xl opacity-0 group-hover/canvas-card:opacity-100
          relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white 
          group-hover/canvas-card:-translate-y-2 transition duration-200"
          >
            {title}
          </h2>
          {socialIcons && (
            <div
              className="flex justify-center text-sm opacity-0 group-hover/canvas-card:opacity-100 
          relative z-10 mt-4 group-hover/canvas-card:text-white text-center
          group-hover/canvas-card:-translate-y-2 transition duration-200"
            >
              {socialIcons.map((socialIcon, index) => (
                <a
                  key={index}
                  href={socialIcon.link}
                  target="_blank"
                  className=" text-3xl text-white w-12 hover:text-blue-500 transition duration-200"
                >
                  {socialIcon.icon}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
