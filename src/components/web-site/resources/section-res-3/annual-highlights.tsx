"use client";
import React from "react";
import { motion } from "framer-motion";
export default function AnnualHighlights() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="grid gap-7 md:gap-12 text-[#FFF8EB]"
    >
      <div className="text-center">
        <h1 className="uppercase font-bold text-center text-4xl lg:text-6xl">
          Annual Highlights
        </h1>
      </div>

      {/* Content */}
      <div className="font-bold grid md:grid-flow-col gap-3 [&_span]:text-[80px] sm:[&_span]:text-8xl [&_span]:text-[#ffffff54] [&_p]:text-3xl md:[&_p]:text-4xl">
        <div>
          <span>01</span>
          <p>2025 End of Year Impact Report</p>
        </div>
        <div>
          <span>02</span>
          <p>2025 ThriveRise Library Report</p>
        </div>
        <div>
          <span>03</span>
          <p>Volunteer & Donor Engagement Summary</p>
        </div>
      </div>
    </motion.div>
  );
}
