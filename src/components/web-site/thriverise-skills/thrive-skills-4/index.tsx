"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ThriveSkills4() {
  return (
    <section className="py-10 sm:py-20 md:py-24 layout-spacing">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto grid gap-14 lg:gap-28 items-center place-items-center"
      >
        <div className="max-w-lg grid gap-2.5 place-items-center mx-auto text-center text-[#183668]">
          <h1 className="uppercase font-bold text-center text-4xl md:text-6xl">
            Impact
          </h1>
          <p>By empowering young people with market-ready skills, we are:</p>
        </div>

        {/* Content */}
        <div className="font-bold grid md:grid-flow-col gap-3 [&_span]:font-bold [&_span]:text-[80px] sm:[&_span]:text-8xl [&_span]:text-[#183668]/20 [&_p]:text-3xl md:[&_p]:text-4xl">
          <div>
            <span>01</span>
            <p>Reducing youth unemployment.</p>
          </div>
          <div>
            <span>02</span>
            <p>Creating opportunities for self-sustaining businesses.</p>
          </div>
          <div>
            <span>03</span>
            <p>Building stronger communities and economies.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
