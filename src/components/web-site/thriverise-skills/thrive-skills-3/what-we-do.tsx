"use client";
import React from "react";
import { motion } from "framer-motion";
export default function WhatWeDo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="grid gap-8 md:gap-14 text-[#183668]"
    >
      <div className="max-w-lg grid gap-2.5 place-items-center mx-auto text-center">
        <h1 className="uppercase font-bold text-center text-4xl lg:text-6xl">
          What We Do
        </h1>
        <p>The Thrive Skills program provides:</p>
      </div>

      {/* Content */}
      <div className="font-bold grid md:grid-cols-2 gap-11 [&>div]:grid md:[&>div]:place-items-center md:[&>div]:mx-auto [&_span]:font-bold [&_span]:text-[80px] sm:[&_span]:text-8xl [&_span]:text-[#183668]/30 [&_p]:text-3xl md:[&_p]:text-4xl md:[&_p]:text-center ">
        <div>
          <span>01</span>
          <p>Vocational and Digital Training in high-demand fields.</p>
        </div>
        <div>
          <span>02</span>
          <p>Entrepreneurship Support, mentorship, and startup guidance.</p>
        </div>
        <div>
          <span>03</span>
          <p>
            Job Readiness Programs including CV reviews, LinkedIn optimization,
            and interview preparation.
          </p>
        </div>
        <div>
          <span>04</span>
          <p>
            Partnerships with Organizations and Businesses to connect youth with
            real opportunities.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
