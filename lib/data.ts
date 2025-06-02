import React from "react";
import { FaReact } from "react-icons/fa";

import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import UpworkIcon from "@/components/UpworkIcon";

import SaaSAIPlatform from "@/public/SaaS AI Platform.png";
import DjangoRESTAPI from "@/public/Django REST API.png";
import FlaskTasksManager from "@/public/FlaskTasksManager.png";
import devHugs from "@/public/devHugs.png";
import TesterAI from "@/public/TesterAI.png";
import FluxVerse from "@/public/fluxverse.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "freeCodeCamp Certificate",
    location: "freeCodeCamp · Remote",
    description:
      "I earned a certificate in Python and Programming Algorithms, where I acquired valuable skills in building and optimizing algorithms. I delved into Python programming, honing my abilities in problem-solving and algorithmic thinking. The certification covered topics such as data structures, algorithm design, and efficient coding practices, providing a solid foundation for tackling complex programming challenges.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  /* {
    title: "Django Developer · Internship · SourceMogul",
    location: "England, United Kingdom · Remote",
    description:
      "I gained hands-on experience as a Django Developer, focusing on building robust data models, working with databases, and implementing advanced RESTful APIs using Django REST Framework. Additionally, I mastered various skills, including Django authentication, background tasks, and API design and deployment, showcasing proficiency in debugging and Python programming.",
    icon: React.createElement(LuGraduationCap),
    date: "Jan 2022 - Mar 2022 · 3 mos",
  }, */

 /*  {
    title: "Python/Django Developer",
    location: "SaveToNotion · Syria",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  }, */
  {
    title: "Full-Stack Developer",
    location: "UpWork · Remote",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes Python Django Docker React Next.js and more. I'm open to full-time opportunities.",
    icon: React.createElement(UpworkIcon),
    date: "2023 - present",
  },
  {
    title: "Full-Stack Developer (Django/Next.js)",
    location: "Josh Hall · Remote (United Arab Emirates)",
    description:
      "I developed FluxVerse, an advanced A/B testing platform that helps businesses optimize their web pages for maximum conversions. Built with React, Next.js, and Django, the platform features automated split testing, traffic simulation, and real-time analytics visualization using ApexCharts. I implemented secure JWT authentication, comprehensive API documentation using drf-spectacular, and containerized the application with Docker for reliable deployment. The project received a perfect 5.0 rating for delivering above and beyond the scope while maintaining excellent communication.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov, 2023 - 2025",
  },
  {
    title: "React Developer",
    location: "Ben Trab, SMA VFX Productions · Remote (Canada)",
    description:
      "I implemented advanced filtering and search capabilities for Task Actions, focusing on identifying and managing stale actions. I enhanced both backend and UI components, including adding a status_updated_at field, creating a centralized TaskActionService, implementing comprehensive filtering options (organization, project, assignee, dates), and improving the UI by adding an Assignee column while removing unnecessary columns. I also implemented robust permission logic to ensure proper access control based on user roles.",
    icon: React.createElement(CgWorkAlt),
    date: "2025 - present",
  },
] as const;

export const projectsData = [
  {
    title: "BreanerAI (SaaS Platform)",
    description:
      "A state-of-the-art AI SaaS Platform with five AI tools. Powered by the Next.js 13 App Router, our platform will not only be efficient but also user-centric.",
    tags: ["Tailwind", "React.js", "Next.js", "Prisma", "MySQL"],
    imageUrl: SaaSAIPlatform,
    githubUrl: "https://github.com/im-py-dev/BrainerAI",
    previewUrl: "https://brainerai.vercel.app",
  },

  {
    title: "TesterAI (AI-powered testing tool)",
    description:
      "See how I helped Josh H. to transform his innovative concept (IN NO TIME!) into a compelling Proof of Concept (POC).",
    tags: ["React.js", "Next.js", "Tailwind", "ChadcnUI", "Docker"],
    imageUrl: TesterAI,
    githubUrl: "",
    UpworkUrl: "https://www.upwork.com/freelancers/~01f0a1c0e901ecd347?p=1907688063799738368",
    previewUrl: "https://tester-ai.vercel.app",
  },

  {
    title: "FluxVerse (Interactive Demo Analytics Dashboard)",
    description:
      "Josh was thrilled with the fast POC delivery and asked me to build a fully responsive analytics dashboard to track user engagement on a gamified website — offering real-time insights and performance metrics.",
    tags: ["React.js", "Next.js", "Tailwind", "Docker", "APIs", "Python", "Django", "GRF", "PostgreSQL", "git", "linux", "JWT", "django templates customizations"],
    imageUrl: FluxVerse,
    githubUrl: "",
    UpworkUrl: "https://www.upwork.com/freelancers/~01f0a1c0e901ecd347?p=1907688063799738368",
    previewUrl: "",
  },

  {
    title: "DevHugs",
    description:
      "DevHugs provides a curated list of project tutorials in which learners build an application from scratch. These are divided into different categories, namely, web development, mobile development, game development, machine learning, deep learning and artificial intelligence.",
    tags: ["React.js", "Next.js", "fortawesome", "bootstrap"],
    imageUrl: devHugs,
    githubUrl: "https://gitlab.com/impydev/dev-hugs",
    previewUrl: "https://dev-hugs.vercel.app",
  },
  
  {
    title: "Django Store API",
    description:
      "Demonstrating proficiency in Python, Docker, Django, MySQL, DRF, signals, Celery, Locust, and Celery Beat, I showcase my ability to craft efficient and scalable RESTful APIs.",
    tags: [
      "python",
      "docker",
      "django",
      "mysql",
      "GRF",
      "signals",
      "celery",
      "locust",
      "celerybeat",
    ],
    imageUrl: DjangoRESTAPI,
    githubUrl: "https://github.com/im-py-dev/Django-Store-api",
    /* previewUrl: "http://23.128.64.21:8001/store/", */
  },

  {
    title: "Flask Tasks Manager",
    description:
      "A simple Flask application showcasing my skills in web development and full-stack technologies. This project includes user authentication, notes management, and follows high code structure practices.",
    tags: [
      "Python",
      "Flask",
      "Flask Blueprint",
      "Flask Login",
      "SQLAlchemy",
      "Bcrypt",
    ],
    imageUrl: FlaskTasksManager,
    githubUrl: "https://github.com/im-py-dev/flask-task-manager",
    /* previewUrl: "http://23.128.64.21:8000", */
  },
] as const;

export const skillsData = [
  "Python",
  "Django",
  "Flask",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Git",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "tRPC",
  "Tailwind",
  "Prisma",
  "Express",
  "Framer Motion",
  "V0",
  "Cursor",
  "ChatGPT",
] as const;
