"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
export default function WhyItMatters() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center"
    >
      <div className="grid gap-2.5 text-[#183668] ">
        <h1 className="uppercase font-bold text-2xl md:text-4xl">
          Why It Matters
        </h1>
        <p className="">
          Youth unemployment is one of the biggest challenges in Africa.
          Millions of young people graduate every year without the practical
          skills required to enter the workforce. Thrive Skills bridges the gap
          between education and employment.
        </p>
      </div>
      <span className="relative w-full aspect-[1/0.7] mx-auto">
        <Image
          src={"/website-ui/thriverise-skills-3.svg"}
          fill
          sizes="1024px"
          alt="Icon"
        />
      </span>
    </motion.div>
  );
}
