"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-10 sm:py-20 layout-spacing"
    >
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-0 items-center">
        <div className="grid gap-2.5 text-[#183668]">
          <h1 className="uppercase font-bold text-6xl leading-[74px] lg:leading-[84px]">
            <span className="bg-[url(/website-ui/hero-improving-bg.svg)] bg-no-repeat bg-cover">
              Improving
            </span>{" "}
            Lives, One{" "}
            <span className="bg-[url(/website-ui/hero-impact-bg.svg)] bg-no-repeat bg-cover px-1 text-white">
              Impact
            </span>{" "}
            at a Time
          </h1>
          <p className="lg:max-w-sm 2xl:max-w-xl">
            Empowering out-of-school children, underserved youth, and students
            across Africa with free education, skills, and lifelong
            opportunities.
          </p>
        </div>

        <span>
          <Image
            src={"/website-ui/hero-image.png"}
            width={500}
            height={500}
            className="w-full"
            alt="Hero Image"
          />
        </span>
      </div>
    </motion.section>
  );
}
