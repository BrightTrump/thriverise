"use client";
import React from "react";
import { motion } from "framer-motion";

export default function SectionAbout7() {
  return (
    <section className="py-10 sm:py-20 layout-spacing">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto grid lg:grid-flow-col gap-7 md:gap-12 text-[#183668]"
      >
        <div>
          <h1 className="uppercase font-bold text-4xl lg:text-5xl 2xl:text-6xl pb-4">
            Financial Statements
          </h1>
          <div className="max-w-xl md:text-lg">
            <p>We believe in transparency and stewardship.</p>
            <p>
              Our financial statements and activity reports will be published
              annually and made available for public access, beginning from our
              first audited cycle. This includes:
            </p>
            <p>First statement to be released by Jan 2026</p>
          </div>
        </div>

        {/* Content */}
        <div className="grid gap-4 font-bold [&>div]:pt-12 [&>div]:px-2 [&>div]:pb-4 [&>div]:rounded-lg [&_h2]:text-[80px] sm:[&_h2]:text-8xl [&_h2]:text-[#ffffff54] [&_p]:text-3xl 2xl:[&_p]:text-4xl [&_p]:text-white">
          <div className="bg-[#901738]">
            <h2>01</h2>
            <p>Income & expenditure reports</p>
          </div>
          <div className="bg-[#183668]">
            <h2>02</h2>
            <p>Donor funding use</p>
          </div>
          <div className="bg-[#F69B33]">
            <h2>03</h2>
            <p>Program-specific spending</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
