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
      <div className="grid gap-2.5 text-[#FFF8EB] ">
        <h1 className="uppercase font-bold text-2xl md:text-4xl">
          Why It Matters
        </h1>
        <p className="">
          Lack of access to educational resources is a major barrier to success
          in higher education. Students are forced to rely on outdated or
          incomplete materials, limiting their potential.
        </p>
      </div>
      <span className="relative w-full aspect-[1/0.7] mx-auto">
        <Image
          src={"/website-ui/thrive-library.svg"}
          fill
          sizes="1024px"
          alt="Icon"
        />
      </span>
    </motion.div>
  );
}
