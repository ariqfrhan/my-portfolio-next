"use client";

import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [hovering, setHovering] = useState(false);

  const moveSelectedTabToTop = useCallback(
    (idx: number) => {
      const newTabs = [...propTabs];
      const selectedTab = newTabs.splice(idx, 1);
      newTabs.unshift(selectedTab[0]);
      setActive(newTabs[0]);
    },
    [propTabs]
  );

  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center justify-center [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => moveSelectedTabToTop(idx)}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn("relative px-4 py-2 rounded-full", tabClassName)}
            style={{ transformStyle: "preserve-3d" }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-gray-200 dark:bg-blue-600 rounded-full ",
                  activeTabClassName
                )}
              />
            )}
            <span className="relative block text-black dark:text-white">
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-4", contentClassName)}
      />
    </>
  );
};

const FadeInDiv = ({
  className,
  active,
  hovering,
}: {
  className?: string;
  key?: string;
  active: Tab;
  hovering?: boolean;
}) => {
  return (
    <motion.div
      key={active.value}
      initial={{ opacity: 0, y: 20 }} // Memulai animasi dari y: 20 untuk efek bounce
      animate={{ opacity: 1, y: 0 }} // Mengakhiri animasi pada y: 0 untuk efek bounce ke atas
      exit={{ opacity: 0, y: 20 }} // Mengatur exit animasi pada y: 20
      transition={{ type: "spring", stiffness: 100, damping: 30 }}
      className={cn("w-full h-full", className)}
    >
      {active.content}
    </motion.div>
  );
};

export default React.memo(Tabs);
