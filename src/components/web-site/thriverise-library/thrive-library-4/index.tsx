"use client";

import React from "react";
import { motion } from "framer-motion";
import HowItWorks from "./how-it-works";

export default function ThriveLibrary4() {
  return (
    <section className="py-10 sm:py-20 md:py-24 layout-spacing">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto grid gap-12 lg:gap-16 items-center place-items-center"
      >
        <div className="">
          <div className="max-w-3xl text-[#183668] text-center">
            <h1 className="uppercase font-bold text-center text-4xl md:text-6xl">
              Our Partners
            </h1>
            <p>
              We work with organizations like DeSciNG to source and share
              high-quality educational resources. While we fulfill requests
              directly, students can also explore partner resource hubs for
              additional support.
            </p>
          </div>
          <div></div>
        </div>

        <HowItWorks />
      </motion.div>
    </section>
  );
}
