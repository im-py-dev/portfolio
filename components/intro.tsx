"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import {
  FaPython,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiDjango,
  SiFlask,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiTypescript,
  SiNextdotjs,
  SiTrpc,
  SiTailwindcss,
  SiPrisma,
  SiExpress,
  SiFramer,
  SiVercel,
  SiOpenai,
} from "react-icons/si";

import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

const funnyItems = [
  <FaPython key="python" color="#F7E018" size={40} />,
  <SiDjango key="django" color="#092E20" size={40} />,
  <SiFlask key="flask" color="#000000" size={40} />,
  <SiMysql key="mysql" color="#4479A1" size={40} />,
  <SiPostgresql key="postgresql" color="#336791" size={40} />,
  <SiMongodb key="mongodb" color="#47A248" size={40} />,
  <FaGitAlt key="git" color="#F05032" size={40} />,
  <FaHtml5 key="html" color="#E34F26" size={40} />,
  <FaCss3Alt key="css" color="#1572B6" size={40} />,
  <FaJs key="js" color="#F7DF1E" size={40} />,
  <SiTypescript key="ts" color="#3178C6" size={40} />,
  <FaReact key="react" color="#61DAFB" size={40} />,
  <SiNextdotjs key="next" color="black" size={40} />,
  <FaNodeJs key="node" color="#339933" size={40} />,
  <SiTrpc key="trpc" color="#2596be" size={40} />,
  <SiTailwindcss key="tailwind" color="#06B6D4" size={40} />,
  <SiPrisma key="prisma" color="black" size={40} />,
  <SiExpress key="express" color="#000000" size={40} />,
  <SiFramer key="framer" color="#0055FF" size={40} />,
  <SiVercel key="vercel" color="black" size={40} />,
  <SiOpenai key="chatgpt" color="#10A37F" size={40} />,
  <FaDocker key="docker" color="#2496ED" size={40} />,
  <span className="text-xs font-mono text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded" key="text_1" id="text">git commit -m "final final FINAL version"</span>,
  <span className="text-xs font-mono text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded" key="text_2" id="text">background-color: transparent !important !important</span>,
  <span className="text-xs font-mono text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded" key="text_3" id="text">{"// TODO: make it look good"}</span>,
  <span className="text-xs font-mono text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded" key="text_4" id="text">if (bug) fix(); else createBug();</span>,
  <span className="text-xs font-mono text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded" key="text_5" id="text">console.log("it works... I think 🤔")</span>,
];

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [showElement, setShowElement] = useState(false);
  const [drops, setDrops] = useState<
    {
      id: number;
      item: React.ReactElement<{ id?: string }>;
      offsetX: number;
      originX: number;
      originY: number;
    }[]
  >([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowElement(true);
    }, 1500);
    return () => clearTimeout(timeoutId);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const clickX = e.nativeEvent.offsetX;
    const clickY = e.nativeEvent.offsetY;

    let randomItem: React.ReactElement<{ id?: string }>;
    do {
      randomItem = funnyItems[Math.floor(Math.random() * funnyItems.length)];
    } while (
      drops.length > 0 &&
      randomItem.key === drops[drops.length - 1].item.key
    );

    const id = Date.now();

    const screenWidth = window.innerWidth;
    const maxOffset = Math.min(40, screenWidth - clickX - 40);
    const minOffset = Math.max(-40, -clickX + 40);
    const safeOffset =
      Math.floor(Math.random() * (maxOffset - minOffset + 1)) + minOffset;

    setDrops((prev) => [
      ...prev,
      {
        id,
        item: randomItem,
        offsetX: safeOffset,
        originX: clickX,
        originY: clickY,
      },
    ]);

    setTimeout(() => {
      setDrops((prev) => prev.filter((d) => d.id !== id));
    }, 3000);
  };

  return (
    <section
      ref={ref}
      id="home"
      className="relative overflow-hidden mb-14 md:mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-28"
    >

      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.5 }}
            onClick={handleClick}
            className="cursor-pointer relative"
          >
            <Image
              src="/AliMughrabi.png"
              alt="Ali Mughrabi"
              width="200"
              height="200"
              quality={100}
              priority={true}
              className="rounded-full object-cover shadow-xl"
            />
            {showElement && (
              <motion.span
                className="absolute bottom-[1rem] right-[1rem] text-[1.5rem] hover:text-[1.75rem]"
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 1, rotate: [0, 10, -15] }}
                transition={{ type: "keyframes", delay: 1.5, duration: 2, repeat: Infinity, repeatType: "reverse" }}
              >
                🐍
              </motion.span>
            )}
            {drops.map((drop) => {
              const isText = drop.item.props?.id === "text";

              return (
                <motion.div
                  key={drop.id}
                  className="absolute pointer-events-none whitespace-nowrap z-50"
                  style={{
                    left: isText ? drop.originX - 180 : drop.originX,
                    top: isText ? drop.originY - 75 : drop.originY,
                    width: isText ? "auto" : "fit-content",
                    maxWidth: "100vw",
                  }}
                  initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                  animate={{
                    x: drop.offsetX,
                    y: 200,
                    opacity: 0.05,
                    scale: 0.9,
                    rotate: Math.random() > 0.5 ? 15 : -15,
                  }}
                  transition={{
                    duration: 4,
                    ease: [0.17, 0.67, 0.83, 0.67],
                  }}
                >
                  <div
                    className="text-black dark:text-white md:text-xs lg:text-s"
                    >
                    {drop.item}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hi, I'm Ali</span> — a{" "}
        <span className="font-bold">Full-Stack Developer</span> Who Turns Ideas into Fast, Scalable Apps{" "}
        <span className="font-bold block">({new Date().getFullYear() - 2020}+ Years of Making Magic Happen)</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me{" "}
          <BsArrowRight className="text-[1.5rem] opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/Ali Mughrabi - Python Developer.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="text-[1.5rem] opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <div className="flex gap-2 flex-row">
          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/impydev/"
            target="_blank"
          >
            <BsLinkedin className="text-[1.75rem]" />
          </a>

          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/im-py-dev"
            target="_blank"
          >
            <FaGithubSquare className="text-[1.75rem]" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
