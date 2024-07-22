import React from "react";

const VideoProject = ({
  title,
  company,
  link,
  desc,
  stack,
  index,
}: {
  title: string;
  company: string;
  link: string;
  desc: string;
  stack: string[];
  index?: number;
}) => {
  return (
    <div
      className="flex flex-col lg:flex-row py-4 px-4 md:px-8 w-full overflow-hidden justify-center items-center rounded-3xl gap-8 bg-slate-900 border border-slate-800 backdrop-blur-xl"
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div
        className={`rounded-3xl overflow-hidden w-full lg:w-1/2 ${
          index! % 2 === 1 ? "block" : "lg:hidden"
        }`}
      >
        <iframe
          src={link}
          allow="autoplay"
          className="w-full h-[200px] md:w-full md:h-[280px]"
        ></iframe>
      </div>
      <div className="flex flex-col w-full lg:w-1/2">
        <h2 className="text-start text-md md:text-xl font-semibold">{title}</h2>
        <h3 className="py-2 text-sm md:text-md font-medium ">{company}</h3>
        <p className="text-slate-300 text-[8px] md:text-xs text-justify">
          {desc}{" "}
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
      <div
        className={`rounded-3xl overflow-hidden w-full lg:w-1/2 ${
          index! % 2 === 0 ? "hidden lg:block" : "hidden"
        }`}
      >
        <iframe
          src={link}
          allow="autoplay"
          className="w-[400px] h-[200px] md:w-full md:h-[260px]"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoProject;
