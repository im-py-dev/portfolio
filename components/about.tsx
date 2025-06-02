"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-14 md:mb-28 max-w-[45rem] text-center leading-8 sm:mb-35 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
	<SectionHeading>About Me</SectionHeading>
	<p className="mb-3">
	  I'm Syrian, currently living in Egypt. My journey into the world of programming began with the creation of the game Tic Tac Toy, where I discovered my passion for crafting innovative solutions through code. Delving into the intricacies of back-end programming, I've honed my skills with a focus on {" "}
	  <span className="font-medium">Python, Django, Flask, and Celery</span>. On the frontend, I excel in creating dynamic and responsive interfaces using {" "}
	  <span className="font-medium">React and Next.js</span>.
	  Over the years, I've accumulated valuable experience in developing robust applications and have successfully provided a multitude of SAAS services.
	</p>
	<p className="mb-3">
	  In Python Django development, I've addressed varied challenges, crafting scalable solutions and utilizing Django's features. I've built RESTful APIs, optimized database performance, and navigated the entire development lifecycle. My proficiency lies in translating business requirements into efficient code, ensuring seamless user experiences.
	</p>

    </motion.section>
  );
}
