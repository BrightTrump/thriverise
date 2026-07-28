"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
export default function WhoWeAre() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center"
    >
      <div className="grid gap-2.5 text-[#FFF8EB] order-2 lg:order-none">
        <h1 className="uppercase font-bold text-2xl md:text-4xl">Who We Are</h1>
        <p className="">
          ThriveRise Foundation for Educational Development is a youth-led,
          nonprofit organization committed to advancing SDG 4 (Quality
          Education) and SDG 8 (Decent Work and Economic Growth) from the
          grassroots. We work with communities, schools, and institutions to
          reach out-of-school children, underserved university students, and
          unemployed youth, delivering programs that restore hope and build
          futures.
        </p>
        <p className="mt-3">
          Our core initiatives include:
        </p>
        <ul className="mt-2 space-y-1.5 list-none">
          <li className="grid grid-cols-[8px_1fr] gap-2 items-start">
            <span className="w-2 h-2 mt-1.5 rounded-full bg-[#FFF8EB] shrink-0"></span>
            <span><strong>Community Learning Centers</strong> — providing structured, free education for out-of-school children in underserved communities.</span>
          </li>
          <li className="grid grid-cols-[8px_1fr] gap-2 items-start">
            <span className="w-2 h-2 mt-1.5 rounded-full bg-[#FFF8EB] shrink-0"></span>
            <span><strong>ThriveRise Library</strong> — giving university students free access to research materials, textbooks, and academic resources.</span>
          </li>
          <li className="grid grid-cols-[8px_1fr] gap-2 items-start">
            <span className="w-2 h-2 mt-1.5 rounded-full bg-[#FFF8EB] shrink-0"></span>
            <span><strong>ThriveRise Skills</strong> — equipping unemployed and underserved youth with digital skills, vocational training, and career development tools.</span>
          </li>
        </ul>
      </div>
      <span className="relative w-full aspect-[1/0.7] mx-auto order-1 lg:order-none">
        <Image src={"/website-ui/abt-img.svg"} fill sizes="1024px" alt="Icon" />
      </span>
    </motion.div>
  );
}
