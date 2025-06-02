"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import UpworkIcon from "@/components/UpworkIcon";
import type { StaticImageData } from "next/image";


type ProjectProps = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: StaticImageData;
  githubUrl?: string;
  previewUrl?: string;
  UpworkUrl?: string;
};


export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  previewUrl,
  UpworkUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[55rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:min-h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5
        md:pl-[1.5rem] md:pr-[1.5rem] group-even:pl-[1.5rem] group-even:pr-[1.5rem]
        sm:pl-10 sm:pr-[1.9rem] group-even:sm:pr-[0rem]
        sm:pt-5 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[27rem]"
        >
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-[0.5rem] py-1 text-[0.6rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          
          <div className="flex space-x-4 mb-[1rem] mt-auto">
            {githubUrl && (
              <a
                href={githubUrl}
                type="submit"
                target="_blank"
                className="mt-4 group flex items-center justify-center gap-2 h-[2.8rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
              >
                Github{" "}
                <FaGithub className="text-xl opacity-70 transition-all group-hover:scale-[1.05]" />
              </a>
            )}
            
            {previewUrl && (
              <a
                href={previewUrl}
                type="submit"
                target="_blank"
                className="ml-[1rem] mt-4 group flex items-center justify-center gap-2 h-[2.8rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
              >
                Preview{" "}
                <FaExternalLinkAlt className="text-xl opacity-70 transition-all group-hover:scale-[1.05]" />
              </a>
            )}
            
            {UpworkUrl && (
              <a
                href={UpworkUrl}
                type="submit"
                target="_blank"
                className="ml-[1rem] mt-4 group flex items-center justify-center gap-2 h-[2.8rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
              >
                Upwork{" "}
                <div className="text-xl opacity-70 transition-all group-hover:scale-[1.05]">
                  <UpworkIcon />
                </div>
              </a>
            )}
          </div>
        </div>

        <Image
          src={imageUrl}
          alt={description}
          quality={95}
          className="absolute hidden sm:block bottom-[0rem] -right-[1rem] w-[29rem] rounded-t-lg shadow-2xl
          transition 
          group-hover:scale-[1.04]
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-hover:-rotate-2

          group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3
          group-even:group-hover:rotate-2

          group-even:right-[initial] group-even:-left-[1rem]"
        />
      </section>
    </motion.div>
  );
}
